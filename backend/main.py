from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Task(BaseModel):
    text: str

# Root Endpoint
@app.get("/")
def read_root():
    return {"message": "Sortify API läuft 🚀"}

# Endpoint
@app.post("/classify")
def classify(task: Task):
    text = task.text.lower()

    # erstmal dummy (später ML)
    if "lernen" in text or "uni" in text:
        return {"category": "Uni"}
    elif "wäsche" in text or "putzen" in text:
        return {"category": "Haushalt"}
    else:
        return {"category": "Freizeit"}