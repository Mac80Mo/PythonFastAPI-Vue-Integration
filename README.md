# PythonFastAPI-Vue-Integration

## Projektübersicht

Modernes Fullstack-Grundgerüst mit **FastAPI** (Backend), **Vue.js 3** (Frontend) und **Docker**. Production-ready für die Entwicklung mit Hot-Reload, CORS-Konfiguration, API-Integration und Theme-Switching.

---

## Features

✅ **Backend (FastAPI)**

- RESTful API mit automatischer OpenAPI-Dokumentation
- SQLAlchemy Datenbankanbindung vorbereitet
- Pydantic Input-Validierung
- CORS-Middleware konfiguriert
- MVC-Projektstruktur

✅ **Frontend (Vue.js 3)**

- Vue Router für Navigation
- Axios API-Integration
- Theme-Switching (Light/Dark Mode) mit LocalStorage
- CSS-Variablen für zentrales Design-Management
- Hot-Reload aktiviert

✅ **Docker & DevOps**

- Optimierte Dockerfiles für schnelle Builds
- Volume-Mounts für Live-Code-Updates
- Automatisches Hot-Reload für beide Services

---

## Schnellstart

### 1. Repository klonen

```bash
git clone https://github.com/Mac80Mo/PythonFastAPI-Vue-Integration.git
cd PythonFastAPI-Vue-Integration
```

### 2. Frontend-Abhängigkeiten installieren

```bash
cd Frontend
npm install
cd ..
```

### 3. Docker-Container starten

```bash
docker-compose up --build
```

### 4. Im Browser öffnen

- **Frontend**: http://localhost:8080
- **Backend API**: http://localhost:8000
- **API-Dokumentation**: http://localhost:8000/docs

---

## Projektstruktur

```
PythonFastAPI-Vue-Integration/
│
├── Backend/                    # FastAPI Backend
│   ├── app/
│   │   ├── controllers/       # Business-Logik (erweiterbar)
│   │   ├── models/            # Datenbank-Models & Schemas
│   │   └── views/             # API-Endpunkte
│   ├── Dockerfile             # Optimiert für Hot-Reload
│   ├── main.py                # FastAPI-App mit CORS
│   └── requirements.txt       # Python-Dependencies
│
├── Frontend/                   # Vue.js 3 Frontend
│   ├── src/
│   │   ├── assets/styles/     # CSS-Variablen & Globale Styles
│   │   ├── components/        # Wiederverwendbare Komponenten
│   │   ├── router/            # Vue Router
│   │   ├── services/          # API-Service-Layer (Axios)
│   │   ├── views/             # Seiten-Komponenten
│   │   └── App.vue            # Root-Komponente mit Theme-Switch
│   ├── Dockerfile             # Optimiert für Hot-Reload
│   └── package.json           # Node-Dependencies
│
├── DB/                         # Datenbankordner
├── docker-compose.yml          # Container-Orchestrierung
└── README.md
```

---

## Wichtige Endpunkte

### Backend

- **GET** `/dbtest` - Datenbankverbindung testen
- **POST** `/users` - User erstellen (mit Validierung)
- **GET** `/docs` - Interaktive API-Dokumentation (Swagger UI)

### Frontend

- `/` - Home-Seite mit Backend-Verbindungstest

---

## Theme-Switching

Das Frontend unterstützt Hell- und Dunkelmodus:

- **Light Mode**: Fast-weißer Hintergrund (#FAFAFA), schwarze Schrift
- **Dark Mode**: Dunkler Hintergrund (#181818), helle Schrift
- Auswahl wird im LocalStorage gespeichert
- Theme-Switch-Button oben rechts

**CSS-Variablen** (`Frontend/src/assets/styles/variables.css`):

```css
.theme-light {
  --color-bg: #fafafa;
  --color-text-primary: #111111;
  --color-text-secondary: #333333;
  --color-text-tertiary: #555555;
}

.theme-dark {
  --color-bg: #181818;
  --color-text-primary: #fafafa;
  --color-text-secondary: #cccccc;
  --color-text-tertiary: #aaaaaa;
}
```

---

## Hot-Reload

✅ **Automatisch aktiviert** für beide Services

- **Backend**: Uvicorn mit `--reload` Flag
- **Frontend**: Vue CLI Dev Server mit Polling

**Änderungen werden sofort sichtbar** - kein Container-Neustart nötig (außer bei Dependency-Änderungen).

---

## API-Integration

Das Frontend nutzt einen zentralisierten API-Service (`src/services/api.js`):

```javascript
import api from "@/services/api";

// Beispiel: Backend-Verbindung testen
const response = await api.testDatabase();

// Beispiel: User erstellen
const user = await api.createUser({
  username: "testuser",
  email: "test@example.com",
  password: "secret123",
});
```

Einfach erweiterbar für weitere Endpunkte.

---

## Entwicklung

### Neue Dependencies installieren

**Backend:**

```bash
# requirements.txt bearbeiten, dann:
docker-compose down
docker-compose up --build
```

**Frontend:**

```bash
cd Frontend
npm install <package-name>
cd ..
docker-compose down
docker-compose up --build
```

### Logs anzeigen

```bash
docker-compose logs -f          # Alle Services
docker-compose logs -f backend  # Nur Backend
docker-compose logs -f frontend # Nur Frontend
```

---

## Nächste Schritte (Optional)

- **Authentifizierung**: JWT-Token implementieren
- **Datenbank-Migrationen**: Alembic einrichten
- **State-Management**: Pinia für komplexere Apps
- **Testing**: pytest (Backend), Vitest (Frontend)
- **CI/CD**: GitHub Actions Pipeline

---

## Voraussetzungen

- Docker Desktop
- Node.js & npm (für lokale Entwicklung)
- Python 3.11+ (optional, für lokales Backend)

---

## Lizenz

MIT License - Frei verwendbar für eigene Projekte.

```

```
