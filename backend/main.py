from fastapi import FastAPI
from pydantic import BaseModel

from pathlib import Path
import joblib

app = FastAPI()

BASE_DIR = Path(__file__).parent
MODEL_PATH = BASE_DIR / "model.joblib"

# Modell wird aus der Datei geladen 
model = joblib.load(MODEL_PATH)
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

    # Modell erwartet eine Liste von Texten
    predicted_category = model.predict([task.text])[0]
    
    return {
        "text": task.text, 
        "category": predicted_category
    }