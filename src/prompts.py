image_gen_prompt = """
Following are the examples of a few surveys that we have done on a user.

Name: Alex

    Physical Health:
        Blood Pressure: 145/92 (Score: 0)
        Blood Sugar: Hemoglobin A1c of 7.1 (Score: 0)
        Cholesterol: 200 mg/dL (Score: 0)
        BMI: 31.2 (Score: 0)
    Lifestyle:
        Nutrition: Eats a diet with minimal fruit, vegetables, and whole grains, high sodium intake (Score: 0)
        Alcohol: Drinks 5-6 alcoholic beverages weekly (Score: 0)
        Smoking: Current smoker (Score: 0)
        Aerobic Activity: Less than 100 minutes of physical activity per week (Score: 0)
        Sleep: Sleeps less than 6 hours a night, untreated sleep apnea (Score: 0)
    Social/Emotional:
        Stress: High stress that significantly affects daily functioning (Score: 0)
        Social Relationships: Has very few connections outside immediate family (Score: 0)
        Meaning in Life: Often feels life lacks purpose (Score: 0)

Total Score: 0
Low Brain Care Score Profile: Alex

Summary - "Alex is a 45-year-old office worker who struggles with maintaining a healthy lifestyle. Their blood pressure is consistently high (145/92), and their Hemoglobin A1c levels indicate poorly managed blood sugar (7.1). Alex’s cholesterol levels are above the healthy range (200 mg/dL), and their BMI (31.2) classifies them as obese. They rarely eat fruits, vegetables, or whole grains, consume over five alcoholic drinks per week, and smoke regularly. Physical activity is minimal, with less than 100 minutes of exercise weekly, and sleep is disrupted by untreated apnea, leaving them with less than six hours of rest most nights. Alex experiences high stress that often affects their ability to function, lacks close social connections, and frequently feels their life lacks purpose."
Example 2 - Medium Brain Care Score Profile

Name: Jordan

    Physical Health:
        Blood Pressure: 135/85 (Score: 2)
        Blood Sugar: Hemoglobin A1c of 6.0 (Score: 1)
        Cholesterol: LDL within CDC guidelines, no treatment needed (Score: 1)
        BMI: 27.4 (Score: 1)
    Lifestyle:
        Nutrition: Follows 2 of the dietary recommendations (Score: 1)
        Alcohol: Consumes 2 alcoholic drinks per week (Score: 1)
        Smoking: Quit smoking 5 years ago (Score: 3)
        Aerobic Activity: Completes 150 minutes of moderate exercise weekly (Score: 1)
        Sleep: Gets 7 hours of sleep nightly with occasional disturbances (Score: 1)
    Social/Emotional:
        Stress: Moderate stress, occasionally impacts daily life (Score: 1)
        Social Relationships: Has 2 close friends to rely on (Score: 1)
        Meaning in Life: Generally feels life has purpose (Score: 1)

Total Score: 15
Medium Brain Care Score Profile: Jordan

Summary -"Jordan is a 38-year-old teacher who is moderately health-conscious but struggles with consistency. Their blood pressure is pre-hypertensive (135/85), and their Hemoglobin A1c (6.0) shows borderline blood sugar control. Cholesterol is within acceptable limits due to lifestyle management. With a BMI of 27.4, Jordan is slightly overweight. Their diet meets two of the brain health recommendations, and they drink two alcoholic beverages weekly. A former smoker, Jordan quit five years ago and exercises regularly, completing 150 minutes of moderate activity per week. Sleep is adequate, averaging seven hours a night, but occasionally disrupted. Jordan manages moderate stress well enough for it to only occasionally impact their life. They have two close friends for support and generally feel their life has meaning and purpose."
High Brain Care Score Profile

Name: Taylor

    Physical Health:
        Blood Pressure: 118/76 (Score: 3)
        Blood Sugar: Hemoglobin A1c of 5.4 (Score: 2)
        Cholesterol: Well-controlled LDL within CDC guidelines (Score: 1)
        BMI: 22.8 (Score: 2)
    Lifestyle:
        Nutrition: Meets all 4 dietary recommendations (Score: 2)
        Alcohol: Drinks 1 alcoholic beverage monthly (Score: 2)
        Smoking: Never smoked (Score: 3)
        Aerobic Activity: Engages in 200 minutes of moderate exercise weekly (Score: 1)
        Sleep: Gets 7-8 hours of restful sleep nightly, no sleep issues (Score: 1)
    Social/Emotional:
        Stress: Manages stress effectively, rarely impacts life (Score: 2)
        Social Relationships: Has a supportive social network beyond family (Score: 1)
        Meaning in Life: Strong sense of purpose and fulfillment (Score: 1)

Total Score: 21
Low Brain Care Score Profile: Taylor

"Taylor is a 32-year-old fitness enthusiast who prioritizes brain and body health. Their blood pressure is ideal (118/76), and their Hemoglobin A1c (5.4) reflects excellent blood sugar control. Cholesterol is well-managed within CDC guidelines, and their BMI (22.8) is within the healthy range. Taylor follows all four dietary recommendations for brain health, rarely drinks alcohol (1 beverage per month), and has never smoked. They engage in 200 minutes of moderate exercise weekly and sleep 7-8 hours per night without disturbances. Taylor effectively manages stress, which rarely impacts their life, has a supportive network of friends, and enjoys a strong sense of purpose and fulfillment in life"

Task -

For each of the examples provided, create a prompt based on the total score which would instruct a model to modify the look of the person's face 
0 (min score)- very unhealthy
21(max score) - healthier 

Prompt for Alex (Score: 0 - Very Unhealthy)
image_prompt - "Create a realistic portrait of a 45-year-old individual who appears physically and emotionally unhealthy. The person has noticeable signs of stress, such as dark under-eye circles and a dull complexion. Their face shows signs of obesity, such as a fuller appearance and double chin. Add indications of a high-stress lifestyle, such as slightly unkempt hair, tired, strained facial muscles, and a downcast expression. The overall look should convey someone struggling with their health and emotional well-being."

Prompt for Jordan (Score: 15 - Moderately Healthy)
image_prompt - "Create a realistic portrait of a 38-year-old individual who looks moderately healthy. Their face appears slightly fuller, reflecting a slightly overweight BMI, but with signs of effort toward self-care, such as a clear complexion and well-kept hair. The expression is neutral to mildly upbeat, indicating a generally optimistic outlook. Their eyes show mild stress, but overall, they appear approachable and in decent health, with subtle indications of an active lifestyle, such as a slight flush in their cheeks."

Prompt for Taylor (Score: 21 - Very Healthy)
image_prompt - "Create a realistic portrait of a 32-year-old individual who appears vibrant and in excellent health. Their face is lean and well-defined, with a radiant complexion and clear, bright eyes. The expression is confident and cheerful, reflecting emotional well-being and a sense of purpose. Add subtle details such as well-groomed hair and a slight athletic glow to highlight their healthy and active lifestyle. The overall appearance should exude vitality, balance, and strong mental health."

Now based on the above examples generate the image prompt for the following person profile:

Person Profile:
{survey}

Summary:
{summary}

Give the prompt in the following format
```json{{"image_prompt": "image_prompt"}}```

Output(image_prompt):
"""


summary_gen_prompt = """
Transform the score survey into a prompt-summary and give it the name of the  user?

Example:

Name: Alex

    Physical Health:
        Blood Pressure: 145/92 (Score: 0)
        Blood Sugar: Hemoglobin A1c of 7.1 (Score: 0)
        Cholesterol: 200 mg/dL (Score: 0)
        BMI: 31.2 (Score: 0)
    Lifestyle:
        Nutrition: Eats a diet with minimal fruit, vegetables, and whole grains, high sodium intake (Score: 0)
        Alcohol: Drinks 5-6 alcoholic beverages weekly (Score: 0)
        Smoking: Current smoker (Score: 0)
        Aerobic Activity: Less than 100 minutes of physical activity per week (Score: 0)
        Sleep: Sleeps less than 6 hours a night, untreated sleep apnea (Score: 0)
    Social/Emotional:
        Stress: High stress that significantly affects daily functioning (Score: 0)
        Social Relationships: Has very few connections outside immediate family (Score: 0)
        Meaning in Life: Often feels life lacks purpose (Score: 0)

Total Score: 0
Low Brain Care Score Profile: Alex

Summary - "Alex is a 45-year-old office worker who struggles with maintaining a healthy lifestyle. Their blood pressure is consistently high (145/92), and their Hemoglobin A1c levels indicate poorly managed blood sugar (7.1). Alex’s cholesterol levels are above the healthy range (200 mg/dL), and their BMI (31.2) classifies them as obese. They rarely eat fruits, vegetables, or whole grains, consume over five alcoholic drinks per week, and smoke regularly. Physical activity is minimal, with less than 100 minutes of exercise weekly, and sleep is disrupted by untreated apnea, leaving them with less than six hours of rest most nights. Alex experiences high stress that often affects their ability to function, lacks close social connections, and frequently feels their life lacks purpose."
Example 2 - Medium Brain Care Score Profile

Name: Jordan

    Physical Health:
        Blood Pressure: 135/85 (Score: 2)
        Blood Sugar: Hemoglobin A1c of 6.0 (Score: 1)
        Cholesterol: LDL within CDC guidelines, no treatment needed (Score: 1)
        BMI: 27.4 (Score: 1)
    Lifestyle:
        Nutrition: Follows 2 of the dietary recommendations (Score: 1)
        Alcohol: Consumes 2 alcoholic drinks per week (Score: 1)
        Smoking: Quit smoking 5 years ago (Score: 3)
        Aerobic Activity: Completes 150 minutes of moderate exercise weekly (Score: 1)
        Sleep: Gets 7 hours of sleep nightly with occasional disturbances (Score: 1)
    Social/Emotional:
        Stress: Moderate stress, occasionally impacts daily life (Score: 1)
        Social Relationships: Has 2 close friends to rely on (Score: 1)
        Meaning in Life: Generally feels life has purpose (Score: 1)

Total Score: 15
Medium Brain Care Score Profile: Jordan

Summary -"Jordan is a 38-year-old teacher who is moderately health-conscious but struggles with consistency. Their blood pressure is pre-hypertensive (135/85), and their Hemoglobin A1c (6.0) shows borderline blood sugar control. Cholesterol is within acceptable limits due to lifestyle management. With a BMI of 27.4, Jordan is slightly overweight. Their diet meets two of the brain health recommendations, and they drink two alcoholic beverages weekly. A former smoker, Jordan quit five years ago and exercises regularly, completing 150 minutes of moderate activity per week. Sleep is adequate, averaging seven hours a night, but occasionally disrupted. Jordan manages moderate stress well enough for it to only occasionally impact their life. They have two close friends for support and generally feel their life has meaning and purpose."
High Brain Care Score Profile

Name: Taylor

    Physical Health:
        Blood Pressure: 118/76 (Score: 3)
        Blood Sugar: Hemoglobin A1c of 5.4 (Score: 2)
        Cholesterol: Well-controlled LDL within CDC guidelines (Score: 1)
        BMI: 22.8 (Score: 2)
    Lifestyle:
        Nutrition: Meets all 4 dietary recommendations (Score: 2)
        Alcohol: Drinks 1 alcoholic beverage monthly (Score: 2)
        Smoking: Never smoked (Score: 3)
        Aerobic Activity: Engages in 200 minutes of moderate exercise weekly (Score: 1)
        Sleep: Gets 7-8 hours of restful sleep nightly, no sleep issues (Score: 1)
    Social/Emotional:
        Stress: Manages stress effectively, rarely impacts life (Score: 2)
        Social Relationships: Has a supportive social network beyond family (Score: 1)
        Meaning in Life: Strong sense of purpose and fulfillment (Score: 1)

Total Score: 21
Total Score: 21
Low Brain Care Score Profile: Taylor

"Taylor is a 32-year-old fitness enthusiast who prioritizes brain and body health. Their blood pressure is ideal (118/76), and their Hemoglobin A1c (5.4) reflects excellent blood sugar control. Cholesterol is well-managed within CDC guidelines, and their BMI (22.8) is within the healthy range. Taylor follows all four dietary recommendations for brain health, rarely drinks alcohol (1 beverage per month), and has never smoked. They engage in 200 minutes of moderate exercise weekly and sleep 7-8 hours per night without disturbances. Taylor effectively manages stress, which rarely impacts their life, has a supportive network of friends, and enjoys a strong sense of purpose and fulfillment in life"


Survey:
{survey}

Give the output in following format:
```json{{"summary": "summary"}}```

Output(summary):
"""


new_img_prompts = """
Based on the given image description generate two descriptions one for a healthier person and one for an unhealthier person.

image_prompt - "{image_prompt}"

Give the output in following format:
```json{{"healthy_prompt": "healthy_prompt", "unhealthy_prompt": "unhealthy_prompt"}}```

Output:"""