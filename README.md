# PythonFastAPI-Vue-Integration

---

## Schnellstart

### Backend (FastAPI)

• RESTful API with automatic OpenAPI documentation  
• SQLAlchemy database integration prepared  
• Pydantic input validation and type safety  
• CORS middleware configured for frontend communication  
• Clean MVC architecture pattern  
• Hot-reload development environment

### Frontend (Vue.js 3)

• Modern Vue 3 Composition API architecture  
• Centralized API service for backend communication  
• Dynamic theme system (light/dark) with CSS variables  
• Responsive navbar with hamburger menu  
• Global CSS system for consistent styling  
• Optimized Docker hot-reload configuration

### Development Environment

• Docker-based containerization  
• Volume mounts for live code updates  
• Optimized polling for CSS hot-reload  
• CORS-enabled cross-origin requests  
• Structured project organization

---

## Architecture

### Backend Structure

• **MVC Pattern**: Models, Views, Controllers separation  
• **Pydantic Schemas**: Input validation and serialization  
• **FastAPI Router**: Modular endpoint organization  
• **SQLAlchemy**: Database abstraction layer  
• **Type Hints**: Full Python type safety

### Frontend Structure

• **Composition API**: Modern Vue 3 patterns  
• **Global Styles**: Centralized CSS management  
• **Theme System**: CSS variables with localStorage persistence  
• **Component Architecture**: Reusable UI components  
• **API Service**: Centralized backend communication

---

## Quick Start

### Prerequisites

• Docker Desktop installed  
• Git for version control  
• Code editor (VS Code recommended)

### Launch Development Environment

```bash
# Clone and start containers
git clone <repository-url>
cd PythonFastAPI-Vue-Integration
docker-compose up -d --build

# Access applications
Frontend: http://localhost:8080
Backend API: http://localhost:8000
API Documentation: http://localhost:8000/docs
```

### Development Workflow

• **Code Changes**: Automatic hot-reload (no restart needed)  
• **New Dependencies**: Edit requirements.txt or package.json → rebuild containers  
• **Database**: SQLite file in ./DB/ directory  
• **Logs**: `docker-compose logs -f [service]`

---

## Technology Stack

### Core Technologies

• **Python 3.11**: Backend runtime  
• **FastAPI**: Modern Python web framework  
• **Vue.js 3**: Progressive JavaScript framework  
• **Docker**: Containerization platform  
• **SQLite**: Development database

### Key Dependencies

• **Backend**: uvicorn, sqlalchemy, pydantic, email-validator  
• **Frontend**: vue-router, axios, @vue/cli-service  
• **Development**: Hot-reload, CORS, volume mounts

---

## Current Features

### Implemented UI Components

• **Responsive Navbar**: Fixed positioning with theme integration  
• **Hamburger Menu**: Mobile-friendly navigation sidebar  
• **Theme Toggle**: Light/dark mode with localStorage persistence  
• **API Demo**: Backend connectivity testing interface

### API Integration

• **Centralized Service**: Single API client configuration  
• **Error Handling**: Try-catch patterns with user feedback  
• **Type Safety**: Pydantic validation on all endpoints  
• **CORS Configuration**: Secure cross-origin requests

### Styling System

• **CSS Variables**: Theme-compatible color system  
• **Global Styles**: Centralized style management  
• **Responsive Design**: Mobile-first approach  
• **Clean Code**: No component-specific CSS blocks

---

## Internationalization

• **Supported languages**: English and German. The UI offers a language toggle in the navbar and stores the selection in `localStorage`. Translations live in `Frontend/src/locales/*.json` and are available to components via the composable `src/composables/useLocale.js`.
• **Seed (optional)**: Use `Frontend/scripts/translate-locales.js` to seed translations using DeepL (API key required). Machine translations should be reviewed before production use.

---

## Development Guidelines

### Code Organization

• **Backend**: Follow MVC pattern strictly  
• **Frontend**: Use Composition API exclusively  
• **Styles**: Global CSS only, no component styles  
• **API**: Centralized service pattern

### Best Practices

• **Type Safety**: Python type hints, Pydantic schemas  
• **Error Handling**: Comprehensive try-catch blocks  
• **Clean Code**: No magic numbers, clear naming  
• **Hot-Reload**: Optimized for Docker development

---

## Planned Enhancements

### Authentication & Security

• JWT token-based authentication  
• User registration and login system  
• Protected routes and middleware

### Database & Storage

• Alembic migrations for schema management  
• PostgreSQL production database option  
• File upload and storage capabilities

### State & Testing

• Pinia state management integration  
• Comprehensive testing (pytest, vitest)  
• CI/CD pipeline with GitHub Actions

### Advanced Features

• PWA capabilities with service workers  
• Real-time features with WebSockets  
• API rate limiting and caching

---

## Projektübersicht (Deutsch)

Modernes Fullstack-Grundgerüst mit **FastAPI** Backend und **Vue.js 3** Frontend in **Docker**-Containern. Production-ready Entwicklungsumgebung mit Hot-Reload, CORS-Konfiguration, zentralisierter API-Integration und professionellem Theme-System.

---

## Hauptfunktionen

### Backend (FastAPI)

• RESTful API mit automatischer OpenAPI-Dokumentation  
• SQLAlchemy Datenbankintegration vorbereitet  
• Pydantic Input-Validierung und Typsicherheit  
• CORS-Middleware für Frontend-Kommunikation  
• Saubere MVC-Architektur  
• Hot-Reload Entwicklungsumgebung

### Frontend (Vue.js 3)

• Moderne Vue 3 Composition API Architektur  
• Zentraler API-Service für Backend-Kommunikation  
• Dynamisches Theme-System (hell/dunkel) mit CSS-Variablen  
• Responsive Navbar mit Hamburger-Menü  
• Globales CSS-System für konsistentes Styling  
• Optimierte Docker Hot-Reload Konfiguration

### Entwicklungsumgebung

• Docker-basierte Containerisierung  
• Volume-Mounts für Live-Code-Updates  
• Optimiertes Polling für CSS Hot-Reload  
• CORS-aktivierte Cross-Origin-Requests  
• Strukturierte Projektorganisation

---

## Internationalisierung

• **Unterstützte Sprachen**: Deutsch und Englisch. Die Sprache kann über den Toggle in der Navbar gewechselt werden; die Auswahl wird in `localStorage` gespeichert. Übersetzungen befinden sich in `Frontend/src/locales/*.json` und sind über das Composable `src/composables/useLocale.js` in Komponenten verfügbar.

• **Schnellstart (optional)**: `Frontend/scripts/translate-locales.js` kann verwendet werden, um Übersetzungen per DeepL (API-Key erforderlich) als Seed zu erzeugen — bitte maschinelle Übersetzungen vor Produktivsetzung prüfen.

## Schnellstart

### Voraussetzungen

• Docker Desktop installiert  
• Git für Versionskontrolle  
• Code-Editor (VS Code empfohlen)

### Entwicklungsumgebung starten

```bash
# Repository klonen und Container starten
git clone <repository-url>
cd PythonFastAPI-Vue-Integration
docker-compose up -d --build

# Anwendungen aufrufen
Frontend: http://localhost:8080
Backend API: http://localhost:8000
API Dokumentation: http://localhost:8000/docs
```

### Entwicklungsworkflow

• **Code-Änderungen**: Automatisches Hot-Reload (kein Neustart nötig)  
• **Neue Dependencies**: requirements.txt oder package.json bearbeiten → Container neu builden  
• **Datenbank**: SQLite-Datei im ./DB/ Verzeichnis  
• **Logs**: `docker-compose logs -f [service]`

---

## Technologie-Stack

### Kerntechnologien

• **Python 3.11**: Backend-Runtime  
• **FastAPI**: Modernes Python Web-Framework  
• **Vue.js 3**: Progressives JavaScript-Framework  
• **Docker**: Containerisierungs-Plattform  
• **SQLite**: Entwicklungsdatenbank

### Wichtige Dependencies

• **Backend**: uvicorn, sqlalchemy, pydantic, email-validator  
• **Frontend**: vue-router, axios, @vue/cli-service  
• **Entwicklung**: Hot-Reload, CORS, Volume-Mounts

---

## Aktuelle Features

### Implementierte UI-Komponenten

• **Responsive Navbar**: Fixe Positionierung mit Theme-Integration  
• **Hamburger-Menü**: Mobile-freundliche Navigations-Sidebar  
• **Theme-Toggle**: Hell/Dunkel-Modus mit localStorage-Persistierung  
• **API-Demo**: Backend-Verbindungstest-Interface

### API-Integration

• **Zentraler Service**: Einheitliche API-Client-Konfiguration  
• **Error-Handling**: Try-Catch-Patterns mit Benutzer-Feedback  
• **Typsicherheit**: Pydantic-Validierung auf allen Endpunkten  
• **CORS-Konfiguration**: Sichere Cross-Origin-Requests

### Styling-System

• **CSS-Variablen**: Theme-kompatibles Farbsystem  
• **Globale Styles**: Zentralisiertes Style-Management  
• **Responsive Design**: Mobile-First-Ansatz  
• **Clean Code**: Keine komponentenspezifischen CSS-Blöcke

---

## Entwicklungsrichtlinien

### Code-Organisation

• **Backend**: MVC-Pattern strikt befolgen  
• **Frontend**: Ausschließlich Composition API verwenden  
• **Styles**: Nur globale CSS, keine Komponenten-Styles  
• **API**: Zentralisiertes Service-Pattern

### Best Practices

• **Typsicherheit**: Python Type-Hints, Pydantic-Schemas  
• **Error-Handling**: Umfassende Try-Catch-Blöcke  
• **Clean Code**: Keine Magic Numbers, klare Benennung  
• **Hot-Reload**: Optimiert für Docker-Entwicklung

---

## Geplante Erweiterungen

### Authentifizierung & Sicherheit

• JWT-Token-basierte Authentifizierung  
• Benutzerregistrierung und Login-System  
• Geschützte Routen und Middleware

### Datenbank & Speicherung

• Alembic-Migrationen für Schema-Management  
• PostgreSQL Produktionsdatenbank-Option  
• Datei-Upload und Speicher-Funktionen

### State & Testing

• Pinia State-Management Integration  
• Umfassende Tests (pytest, vitest)  
• CI/CD-Pipeline mit GitHub Actions

### Erweiterte Features

• PWA-Funktionen mit Service Workern  
• Echtzeit-Features mit WebSockets  
• API Rate-Limiting und Caching

---

## License

MIT License - Free to use for personal projects.
return { theme, toggleTheme };
}

// Verwendung in Komponenten
import { useTheme } from "@/composables/useTheme";
const { theme, toggleTheme } = useTheme();

````

### **API-Integration**

Zentralisierter API-Service (`src/services/api.js`):

```javascript
import api from "@/services/api";

// Backend-Verbindung testen
const response = await api.testDatabase();

// User erstellen
const user = await api.createUser({
  username: "testuser",
  email: "test@example.com",
});
````

### **Globales CSS-System**

- **Styles zuerst global**: `src/assets/styles/global.css`
- **CSS-Variablen**: Theme-kompatible Farbpalette
- **Komponenten-CSS nur bei Bedarf**: Spezifische Styles bleiben lokal
- **Clean Code**: Keine duplizierten CSS-Regeln

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

## Aktuelle Features im Detail

### **Implementiert und funktionsfähig:**

- **Responsive Navbar** mit Burger-Menü und Theme-Toggle
- **Nahtloser Theme-Switch** mit Composables
- **Konsistentes Design-System** (Buttons, Borders, Spacing)
- **Vue 3 Composition API** Best Practices
- **Moderne UI/UX** mit Glasmorphism-Elementen
- **Docker Hot-Reload** optimiert für Entwicklung
- **FastAPI + Vue.js Integration** mit CORS
- **MVC Backend-Struktur** erweiterungsbereit

## Nächste Schritte (Optional)

- **Authentifizierung**: JWT-Token mit Login/Logout
- **Datenbank-Migrationen**: Alembic für Schema-Management
- **State-Management**: Pinia für komplexere Apps
- **Testing**: pytest (Backend), Vitest (Frontend)
- **CI/CD**: GitHub Actions Pipeline
- **PWA Features**: Service Worker, Offline-Support

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
