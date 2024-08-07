from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List

router = APIRouter()

class User(BaseModel):
    username: str
    interests: List[str]

users_db = {}

@router.post("/register")
def register_user(user: User):
    if user.username in users_db:
        raise HTTPException(status_code=400, detail="Username already registered")
    users_db[user.username] = user
    return {"message": "User registered successfully"}

@router.get("/profile/{username}")
def get_user_profile(username: str):
    user = users_db.get(username)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user
