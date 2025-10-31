---

## Projekt von GitHub herunterladen und starten

1. **Repository klonen**
   ```
   git clone https://github.com/Mac80Mo/PythonFastAPI-Vue-Integration.git
   cd PythonFastAPI-Vue-Integration
   ```

2. **Voraussetzungen installieren**
   - **Docker Desktop** (für Container)
   - **Python** (falls du Backend lokal ohne Docker starten willst)
   - **Node.js & npm** (falls du Frontend lokal ohne Docker starten willst)
   - **Python-Abhängigkeiten:**
     ```
     pip install -r Backend/requirements.txt
     ```
   - **Node-Abhängigkeiten:**
     ```
     cd Frontend
     npm install
     ```

3. **Projekt mit Docker starten**
   ```
   docker-compose build --no-cache
   docker-compose up
   ```

4. **Backend und Frontend im Browser öffnen**
   - Backend: http://localhost:8000
   - Frontend: http://localhost:8080

**Hinweis:**
- Alle benötigten Pakete stehen in `Backend/requirements.txt` und `Frontend/package.json`.
- Für Hot-Reload oder lokale Entwicklung können Backend und Frontend auch ohne Docker gestartet werden.
# PythonFastAPI-Vue-Integration

## Projektübersicht

---

## Projekt starten (Docker, Backend & Frontend)

1. **Docker Desktop starten**
2. Im Hauptordner des Projekts folgenden Befehl ausführen:
   ```
   docker-compose build --no-cache
   docker-compose up
   ```
3. **Backend (FastAPI)** ist erreichbar unter:
   - http://localhost:8000
   - Test-Endpunkt: http://localhost:8000/dbtest
   - API-Dokumentation: http://localhost:8000/docs
4. **Frontend (Vue)** ist erreichbar unter:
   - http://localhost:8080

**Hinweis:**

- Änderungen am Code werden erst nach einem Neustart der Container übernommen (außer bei Hot-Reload-Konfiguration).
- Die Datenbankdateien und der Ordner `planung` werden nicht mitversioniert.

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
