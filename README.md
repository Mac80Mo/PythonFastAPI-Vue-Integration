# PythonFastAPI-Vue-Integration

## Projektübersicht

Dieses Projekt ist ein Fullstack-Grundgerüst nach dem MVC-Prinzip mit einem Python-Backend (FastAPI), einem Vue-Frontend und einer eingebundenen Datenbank. Die Containerisierung erfolgt über Docker und docker-compose.

---

## Struktur

```
PythonFastAPI-Vue-Integration/
│
├── Backend/                # FastAPI Backend (MVC-Struktur)
│   ├── app/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── views/
│   │   └── __init__.py
│   ├── Dockerfile
│   ├── main.py
│   └── requirements.txt
│
├── Frontend/               # Vue.js Frontend
│   ├── Dockerfile
│   ├── package.json
│   ├── package-lock.json
│   └── src/
│       ├── App.vue
│       ├── main.js
│       ├── components/
│       ├── router/
│       ├── store/
│       └── views/
│
├── DB/                     # Datenbankordner (z.B. SQLite)
│   └── projekt1.sqbpro (wird nicht versioniert)
│
├── docker-compose.yml      # Orchestrierung der Container
│
└── README.md               # Projektbeschreibung

---

- Test-Endpunkt `/dbtest` prüft die Datenbankverbindung
- Start: `main.py`
- Dockerfile vorhanden

## Frontend

- Routing und Views sind vorbereitet, aber noch minimal
- Aktuell keine Views/Routen aktiv

## Datenbank

- Die `.gitignore` ist für Python, Node, Datenbank und Planung korrekt eingerichtet.

## Docker & Compose
- `docker-compose.yml` startet Backend und Frontend
- Backend: Port 8000

- Ergänze Views und Routen im Frontend
- Implementiere Models, Controller und Endpunkte im Backend
- Richte die Datenbankanbindung ein
- Optional: Hot-Reload für Entwicklung
- Weitere Dateien/Ordner können bei Bedarf in die `.gitignore` aufgenommen werden
## Starten des Projekts

1. Docker Desktop starten
2. Im Hauptordner:
```

docker-compose build --no-cache
docker-compose up

```
3. Backend erreichbar unter: http://localhost:8000
4. Frontend erreichbar unter: http://localhost:8080

---

## Hinweise

- Im Frontend sind aktuell keine Views/Routen aktiv. Lege z.B. eine Home.vue in `src/views` an und aktiviere die Route in `src/router/index.js`.
- Das Backend ist bereit für die Erweiterung um Endpunkte, Models und Controller.
- Die Datenbankanbindung ist vorbereitet, aber noch nicht implementiert.

---

## Weiterentwicklung

- Ergänze Views und Routen im Frontend
- Implementiere Models, Controller und Endpunkte im Backend
- Richte die Datenbankanbindung ein
- Optional: Hot-Reload für Entwicklung


```
