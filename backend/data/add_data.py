# Um modell besser zu trainieren, kann es hilfreich sein, mehr Daten hinzuzufügen, und diese zu mischen, damit das Modell nicht nur die Reihenfolge der Daten lernt, sondern auch die Vielfalt der Beispiele.

import json
import random

# laden
with open("tasks_dataset.json", "r", encoding="utf-8") as f:
    data = json.load(f)

    

# neue daten hinzufügen (copy hier rein!)
new_data = [
  {"text": "ibuprofenn kaufen", "label": "Gesundheit"},
  {"text": "medikamente apotheke hollen", "label": "Gesundheit"},
  {"text": "nasenspray kaufn", "label": "Gesundheit"},
  {"text": "klamoten kaufen", "label": "Freizeit"},
  {"text": "neue sneekers bestelln", "label": "Freizeit"},
  {"text": "geschenk für freund kaufn", "label": "Freizeit"},
  {"text": "jakce kaufen für winter", "label": "Freizeit"},
  {"text": "hoodi online bestelln", "label": "Freizeit"},
  {"text": "tasche shoppen gehn", "label": "Freizeit"},
  {"text": "laptop kaufn für arbeit", "label": "Organisatorisches"},
  {"text": "handyvertrag abschliesn", "label": "Organisatorisches"},
  {"text": "neues handy kaufn", "label": "Organisatorisches"},
  {"text": "versicherug abschließen", "label": "Organisatorisches"},
  {"text": "drucker fürs büro kaufn", "label": "Organisatorisches"},
  {"text": "internetvertrag abschliesn", "label": "Organisatorisches"},
  {"text": "software kaufn für job", "label": "Organisatorisches"},
  {"text": "monitor kaufn neu", "label": "Organisatorisches"},
  {"text": "abo abschliesen streaming", "label": "Organisatorisches"},
  {"text": "bürostuhl kaufn", "label": "Organisatorisches"}
]


data.extend(new_data)

# mischen
random.shuffle(data)

# speichern
with open("tasks_dataset.json", "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("✅ Dataset erweitert und gemischt!")