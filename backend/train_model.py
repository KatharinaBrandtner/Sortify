import json
from pathlib import Path
import joblib

#Machine Learning Imports
from sklearn.model_selection import train_test_split
from sklearn.pipeline import Pipeline
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import classification_report

#Pfade definieren
BASE_DIR = Path(__file__).parent
DATA_PATH = BASE_DIR / "data" / "tasks_dataset.json"
MODEL_PATH = BASE_DIR / "model.joblib"

#Datenset laden
with open(DATA_PATH, "r", encoding="utf-8") as f:
    data = json.load(f)

texts = [item["text"] for item in data]
labels = [item["label"] for item in data]

#Daten in Trainings und Testdaten teilen
X_train, X_test, y_train, y_test = train_test_split(
    texts,
    labels,
    test_size=0.2, # 20% Testdaten
    random_state=42,
    stratify=labels
)

#Pipeline erstellen
model = Pipeline([
    ("tfidf", TfidfVectorizer(
        lowercase=True,
        ngram_range=(1, 2)
    )),
    ("classifier", LogisticRegression(
        max_iter=1000
    ))
])

#Modell trainieren
model.fit(X_train, y_train)

#Modell testen
y_pred = model.predict(X_test)

print("Evaluation:\n")
print(classification_report(y_test, y_pred))

#Modell speichern - nicht jedes Mal neu Trainieren
joblib.dump(model, MODEL_PATH)

print(f"Modell gespeichert unter: {MODEL_PATH}")