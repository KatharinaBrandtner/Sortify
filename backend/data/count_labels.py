# Befehl ausführen: python3 count_labels.py

import json
from collections import Counter

# JSON-Datei laden (Dateiname ggf. anpassen)
with open("tasks_dataset.json", "r", encoding="utf-8") as f:
    data = json.load(f)

# Labels extrahieren
labels = [item["label"] for item in data]

# Häufigkeiten zählen
label_counts = Counter(labels)

# Ergebnisse ausgeben
print("Label-Verteilung:\n")
for label, count in label_counts.items():
    print(f"{label}: {count}")