# PythonFastAPI-Vue-Integration

## Projektübersicht

Fullstack-Grundgerüst mit FastAPI (Backend), Vue.js (Frontend) und Docker. Datenbankanbindung vorbereitet, saubere Projektstruktur nach MVC-Prinzip.

## Projektstruktur

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
├── DB/                     # Datenbankordner (z.B. SQLite, nicht versioniert)
│   └── projekt1.sqbpro
│
├── docker-compose.yml      # Orchestrierung der Container
│
└── README.md               # Projektbeschreibung
```

## Projekt von GitHub herunterladen und starten

1. **Repository klonen**
   ```
   git clone https://github.com/Mac80Mo/PythonFastAPI-Vue-Integration.git
   cd PythonFastAPI-Vue-Integration
   ```
2. **Voraussetzungen installieren**
   - Docker Desktop
   - Python (optional, für lokalen Backend-Start)
   - Node.js & npm (optional, für lokalen Frontend-Start)
3. **Abhängigkeiten installieren**
   - Backend: `pip install -r Backend/requirements.txt`
   - Frontend: `cd Frontend && npm install`
4. **Projekt mit Docker starten**
   ```
   docker-compose build --no-cache
   docker-compose up
   ```
5. **Backend und Frontend im Browser öffnen**
   - Backend: http://localhost:8000 (Test-Endpunkt: `/dbtest`, API-Doku: `/docs`)
   - Frontend: http://localhost:8080

**Hinweise:**

- Änderungen am Code werden erst nach Neustart der Container übernommen (außer bei Hot-Reload).
- Datenbankdateien und der Ordner `planung` werden nicht versioniert.
- Alle benötigten Pakete stehen in `Backend/requirements.txt` und `Frontend/package.json`.

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
│
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
