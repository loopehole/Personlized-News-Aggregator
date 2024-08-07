from fastapi import APIRouter, HTTPException, Query, Body
from sqlalchemy.orm import Session
import requests
from app.core.database import SessionLocal
from app.core.sentiment import analyze_sentiment
from typing import List, Optional
from pydantic import BaseModel
# import os

router = APIRouter()

NEWS_API_KEY = "ff21c9e4118a464397f6936c8c0695cf"  # Replace with your News API key
NEWS_API_URL = "https://newsapi.org/v2/top-headlines?sources=techcrunch"

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/latest")
def get_latest_news(q: str = Query("technology", description="Search query for latest news")):
    try:
        response = requests.get(NEWS_API_URL, params={
            "q": q,
            "apiKey": NEWS_API_KEY
        })
        response.raise_for_status()
        articles = response.json().get("articles", [])
        for article in articles:
            article["sentiment"] = analyze_sentiment(article["description"] or "")
        return {"articles": articles}
    except requests.RequestException as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/search")
def search_news(query: str = Query(..., description="Search query for news")):
    try:
        response = requests.get(NEWS_API_URL, params={
            "q": query,
            "apiKey": NEWS_API_KEY
        })
        response.raise_for_status()
        
        # Print raw response for debugging
        print("Raw response content:", response.text)
        
        articles = response.json().get("articles", [])
        for article in articles:
            article["sentiment"] = analyze_sentiment(article["description"] or "")
        return {"articles": articles}
    except requests.RequestException as e:
        # Handle different types of errors and provide meaningful messages
        if response.status_code == 401:
            raise HTTPException(status_code=401, detail="Unauthorized: Invalid API key.")
        elif response.status_code == 429:
            raise HTTPException(status_code=429, detail="Too Many Requests: Rate limit exceeded.")
        else:
            raise HTTPException(status_code=500, detail=f"Error: {str(e)}")

@router.get("/{news_id}")
def get_news(news_id: int):
    # Placeholder implementation
    return {"news_id": news_id, "content": "Sample news content"}

@router.post("/")
def create_news(news_item: dict = Body(...)):
    # Placeholder implementation
    return {"news_item": news_item}

@router.delete("/{news_id}")
def delete_news(news_id: int):
    # Placeholder implementation
    return {"news_id": news_id, "status": "deleted"}

class AnalyzeRequest(BaseModel):
    text: str

@router.post("/analyze")
def analyze_text(request: AnalyzeRequest):
    try:
        sentiment = analyze_sentiment(request.text)
        return {"sentiment": sentiment}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
