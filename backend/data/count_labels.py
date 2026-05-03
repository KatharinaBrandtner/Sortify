# Befehl ausführen: python3 count_labels.py

# import json
# from collections import Counter

# with open("tasks_dataset.json", "r", encoding="utf-8") as f:
#     data = json.load(f)

# # Labels extrahieren
# labels = [item["label"] for item in data]

# # Häufigkeiten zählen
# label_counts = Counter(labels)

# # Ergebnisse ausgeben
# print("Label-Verteilung:\n")
# for label, count in label_counts.items():
#     print(f"{label}: {count}")

# # Um die Verteilung der Labels zu sehen 
# # Ausgabe: xxx: 123


import json
from collections import Counter

# Dataset laden
with open("tasks_dataset.json", "r", encoding="utf-8") as f:
    data = json.load(f)

# Filter: alle mit "kaufen"
kaufen_tasks = [item for item in data if "kaufen" in item["text"]]

print(f"\nGefundene 'kaufen'-Tasks: {len(kaufen_tasks)}\n")

# Kategorien zählen
labels = [item["label"] for item in kaufen_tasks]
counter = Counter(labels)

print("Verteilung:\n")
for label, count in counter.items():
    print(f"{label}: {count}")

# Beispiele anzeigen
print("\nBeispiele:\n")
for item in kaufen_tasks[:100]:
    print(f"{item['text']} → {item['label']}")

# Weil beim trainieren des Modells das Wort "kaufen" in vielen Texten vorkommt, könnte es sein, dass das Modell dieses Wort als starkes Signal für eine bestimmte Kategorie interpretiert. 
# Daher ist es interessant zu sehen, wie viele Texte mit "kaufen" in den verschiedenen Kategorien vorhanden sind.
# Und ggf anpassungen am Datensatz oder Modell vorzunehmen...
# Ausgabe: Gefundene 'kaufen'-Tasks: 32
# Freizeit: 2
# Gesundheit: 7
# Haushalt: 23
# -> Daraus kann man ableiten, ob das Wort "kaufen" in der Kategorie "Haushalt" überrepräsentiert ist, was es meist falsch zuordnet.