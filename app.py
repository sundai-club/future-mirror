from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import json
from src.openai_api import OpenAIAPI
from src.prompts import image_gen_prompt, summary_gen_prompt, new_img_prompts
import logging
from src.utils import parse_reponse
from src.replicate_api import generate_image

logging.basicConfig(level=logging.INFO)

openai_api = OpenAIAPI()
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_image_prompt(request: dict):
    survey = request["survey"]
    logging.info("Generating summary")
    summary = parse_reponse(openai_api.generate_response(summary_gen_prompt.format(survey=survey)))['summary']
    logging.info("Generating image prompt")
    image_prompt = parse_reponse(openai_api.generate_response(image_gen_prompt.format(survey=survey, summary=summary)))['image_prompt']

    return {"image_prompt": image_prompt}


def get_pos_neg_image_prompts(image_prompt: str):
    image_prompts = parse_reponse(openai_api.generate_response(new_img_prompts.format(image_prompt=image_prompt)))

    return image_prompts

@app.post("/get_images")
def get_images(request: dict):
    survey = request["survey"]
    current_image = request["current_image"]
    original_image_prompt = get_image_prompt(survey)["image_prompt"]
    image_prompts = get_pos_neg_image_prompts(original_image_prompt)
    image_prompts['original_image_prompt'] = original_image_prompt
    image_paths = []
    for k, v in image_prompts.items():
        image_path = generate_image(k, v, current_image)
        image_paths.append(image_path)





