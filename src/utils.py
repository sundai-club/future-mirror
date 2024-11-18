import re
import ast

def parse_reponse(response):
    matches = re.findall(r'```json(.*?)```', response)
    if matches:
        return ast.literal_eval(matches[0])
    else:
        return None
    



