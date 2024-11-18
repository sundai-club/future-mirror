import replicate
import time
import requests
import shutil
import os

neg_prompt = """cartoonish, abstract, unrealistic, exaggerated features, overemotional, 
                anime, comic, 3D render, low quality, pixelated"""


def get_image(prompt, current_image):
    input = {
        "width": 768,
        "height": 768,
        "prompt": prompt,
        "image": current_image,
        "refine": "expert_ensemble_refiner",
        "scheduler": "K_EULER",
        "num_outputs": 1,
        "guidance_scale": 40,
        "apply_watermark": False,
        "high_noise_frac": 0.8,
        "negative_prompt": neg_prompt,
        "prompt_strength": 0.2,
        "num_inference_steps": 50
    }
    prediction =  replicate.predictions.create(
        "7762fd07cf82c948538e41f63f77d685e02b063e37e496e96eefd46c929f9bdc",
        input=input
    )
    for i in range(100):
        prediction.reload()
        print(prediction.error or "") 
        print(prediction.status)
        
        if prediction.status in {"succeeded", "failed", "canceled"}:
            break

        time.sleep(2)


    output_url = prediction.output[0]
    
    print(output_url)

    response = requests.get(output_url)
    if response.status_code == 200:
        content_type = response.headers.get('content-type')
        if 'image' in content_type:
            with open(f"output_images/output.png", "wb") as file:
                file.write(response.content)
        else:
            print("Response is not an image")
    