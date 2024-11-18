import requests

def sentiment_analyser(text_to_analyse):

    # initialistions 
    URL = 'https://sn-watson-sentiment-bert.labs.skills.network/v1/watson.runtime.nlp.v1/NlpService/SentimentPredict'
    headers = {"grpc-metadata-mm-model-id": "sentiment_aggregated-bert-workflow_lang_multi_stock"}
    obj = {"raw_document": {"text":text_to_analyse}}

    # send the request to the web API
    response = requests.post(URL, json=obj, headers=headers)

    return response.text
