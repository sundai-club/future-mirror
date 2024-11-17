from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import json
from openai_api import OpenAIAPI
from prompts import image_gen_prompt, summary_gen_prompt
import logging

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

@app.post("/get_images")
def get_images(request: dict):
    survey = request["survey"]
    logging.info("Generating summary")

    summary = openai_api.generate_response(summary_gen_prompt.format(survey=survey))

    logging.info("Generating image prompt")
    image_prompt = openai_api.generate_response(image_gen_prompt.format(survey=survey, summary=summary))

    return {"image_prompt": image_prompt, "summary": summary}
