# Dieses Skript überprüft die Ähnlichkeit von Texten in einem Datensatz, um mögliche Duplikate zu identifizieren.
import json
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# Dataset laden
with open("tasks_dataset.json", "r", encoding="utf-8") as f:
    data = json.load(f)

texts = [item["text"] for item in data]

# Vectorizer
vectorizer = TfidfVectorizer()
X = vectorizer.fit_transform(texts)

# Ähnlichkeit berechnen
similarity_matrix = cosine_similarity(X)

# Threshold (anpassen!)
THRESHOLD = 0.8

print("\nÄhnliche Tasks:\n")

seen = set()

for i in range(len(texts)):
    for j in range(i + 1, len(texts)):
        score = similarity_matrix[i][j]
        
        if score > THRESHOLD:
            pair = tuple(sorted([i, j]))
            
            if pair not in seen:
                seen.add(pair)
                print(f"\nScore: {score:.2f}")
                print(f"1: {texts[i]}")
                print(f"2: {texts[j]}")

# es kam raus das zb  
# Score: 1.00
# 1: meeting vorbereiten und agenda schreiben
# 2: meeting vorbereiten und agenda schreiben
# das selbe ist, kann deshalb gelöscht werden, damit das Modell nicht lernt
# best case also 0 echte Duplikate, max. 2–3 ähnliche Varianten, viele unterschiedliche Formulierungen