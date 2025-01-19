import replicate
import time

neg_prompt = """cartoonish, abstract, unrealistic, exaggerated features, overemotional, 
                anime, comic, 3D render, low quality, pixelated"""


def generate_image(prompt, current_image):
    # with open(current_image, "rb") as f:
    #     current_image = base64.b64encode(f.read()).decode("utf-8")
        
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
        # "black-fore"
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

    return output_url
    
    