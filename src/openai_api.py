import openai

class OpenAIAPI:
    def __init__(self):
        self.openai_client = openai.OpenAI()
    

    def generate_response(self, prompt):
        response = self.openai_client.Completion.create(
            engine="gpt-4o-mini",
            prompt=prompt,
            max_tokens=1024,
            temperature=0.3,
        )
        return response.choices[0].message.content
    
