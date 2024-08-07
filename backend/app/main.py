from fastapi import FastAPI
from app.api import news, user
from app.core import config

app = FastAPI(title=config.PROJECT_NAME, version="1.0")

app.include_router(news.router, prefix="/api/news")
app.include_router(user.router, prefix="/api/users")

@app.get("/")
def read_root():
    return {"message": "Welcome to the Personalized News Aggregator"}

@app.get("/latest")
def read_latest():
    return {"message": "This is the latest endpoint!"}
