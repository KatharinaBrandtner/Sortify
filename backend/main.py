from fastapi import FastAPI
from pydantic import BaseModel

from pathlib import Path
import joblib

app = FastAPI()

BASE_DIR = Path(__file__).parent
MODEL_PATH = BASE_DIR / "model.joblib"

# Modell wird aus der Datei geladen 
model = joblib.load(MODEL_PATH)
class TaskRequest(BaseModel):
    task: str

# Root Endpoint
@app.get("/")
def read_root():
    return {"message": "Sortify API läuft 🚀"}

# Endpoint
@app.post("/classify")
def classify(task: TaskRequest):

    task_text = task.task.lower()

    predicted_category = model.predict([task_text])[0]

    probabilities = model.predict_proba([task_text])[0]
    confidence = max(probabilities)
    
    return {
        "task": task_text,
        "category": predicted_category,
        "confidence": round(confidence * 100),
    }
