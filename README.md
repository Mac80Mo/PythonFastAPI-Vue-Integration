# PythonFastAPI-Vue-Integration

A production-ready fullstack starter using FastAPI (backend) and Vue.js 3 (frontend) in Docker. Features hot-reload, robust API integration, multilingual support, global theme system, and clean MVC architecture for rapid development.

<!-- Quick bilingual index -->

## Index / Inhaltsverzeichnis

- **English**

  - [Security: XSS scan (local pre-push & CI)](#security-xss-scan-local-pre-push--ci)
  - [Development Guidelines](#development-guidelines)

- **Deutsch**
  - [Sicherheit: XSS-Scan (lokal pre-push & CI)](#sicherheit-xss-scan-lokal-pre-push--ci)
  - [Entwicklungsrichtlinien](#entwicklungsrichtlinien)

---

## Key Features

### Backend Features

• **RESTful API** with automatic OpenAPI documentation and interactive Swagger UI
• **Pydantic Validation** with custom validators for robust input handling
• **SQLAlchemy Integration** with SQLite database and connection testing
• **CORS Middleware** configured for seamless frontend-backend communication
• **MVC Architecture** with clean separation of Models, Views, and Controllers
• **Hot-Reload Development** with uvicorn auto-reload for instant code updates

### Frontend Features

• **Vue 3 Composition API** throughout the entire application
• **Multilingual Support** with German/English localization system
• **Dynamic Theme System** with light/dark modes and localStorage persistence
• **Responsive Navigation** with burger menu and theme/language toggles
• **Global CSS Architecture** with typographic hierarchy and CSS variables
• **Centralized API Service** for all backend communication

### Development Environment

• **Docker Containerization** with optimized hot-reload configuration
• **Volume Mounting** for live code updates without container rebuilds
• **Polling-Based File Watching** for reliable CSS and component updates
• **Production-Ready Setup** with proper CORS, validation, and error handling

---

## Architecture

### Backend Structure

• **MVC Pattern** with strict separation of concerns
• **Pydantic Schemas** for input validation and type safety
• **FastAPI Routers** for modular endpoint organization
• **SQLAlchemy Engine** with database inspection capabilities
• **Custom Validators** for business logic enforcement

### Frontend Structure

• **Composition API** with reactive composables for theme and locale management
• **Global Styling System** with centralized CSS variables and typography rules
• **Component Architecture** with reusable UI components (Navbar, Footer, BurgerMenu)
• **Service Layer** with axios-based API client for backend integration
• **Vue Router** for single-page application navigation

---

## Quick Start

### Prerequisites

• Docker Desktop installed and running
• Git for repository cloning
• Code editor (VS Code recommended)

### Launch Development Environment

```powershell
# Clone repository and navigate
git clone https://github.com/Mac80Mo/PythonFastAPI-Vue-Integration.git
cd PythonFastAPI-Vue-Integration

# Start containers with hot-reload
docker-compose up -d --build

# Access applications
# Frontend: http://localhost:8080
# Backend API: http://localhost:8000
# API Documentation: http://localhost:8000/docs
```

### Development Workflow

• **Code Changes**: Automatic hot-reload (no container restart needed)
• **New Dependencies**: Edit requirements.txt or package.json → `docker-compose up --build`
• **Database Access**: SQLite file accessible in ./DB/ directory
• **Container Logs**: `docker-compose logs -f backend` or `docker-compose logs -f frontend`

---

## Technology Stack

### Core Technologies

• **Backend**: FastAPI 0.104+, Python 3.11, SQLAlchemy, Pydantic
• **Frontend**: Vue.js 3, Vue Router 4, Axios, Composition API
• **Database**: SQLite with SQLAlchemy ORM
• **Containerization**: Docker & Docker Compose
• **Development**: Hot-reload, CORS, Live CSS updates

### Key Dependencies

• **Backend**: uvicorn (ASGI server), email-validator (Pydantic)
• **Frontend**: @vue/cli-service, axios (HTTP client)
• **Development**: Optimized vue.config.js with polling for Docker compatibility

---

## Current Features

### API Endpoints

• **GET /dbtest** - Database connection testing with table inspection
• **POST /users** - User creation with email validation and custom validators
• **Interactive Documentation** - Automatic Swagger UI at /docs

### UI Components

• **Responsive Navbar** with theme toggle, language switcher, and burger menu
• **Theme System** with light/dark mode switching and CSS variable management
• **Multilingual Interface** supporting German and English with complete translations
• **Typography System** following Major Third scale (1.25) with proper rem units

### API Integration

• **Centralized Service** with axios client configuration
• **Error Handling** with try-catch patterns and user feedback
• **Loading States** and connection testing functionality

---

## Development Guidelines

### Security: XSS scan (local pre-push & CI)

• **Purpose**: Automated checks scan the frontend sources for common DOM-based XSS sinks (for example `v-html`, `innerHTML`, `document.write`) and HTML-like content in translation files. The goal is to detect risky patterns early and prevent unsafe changes from being merged.

• **Local pre-push hook (Husky)**

- The repository contains a committable Husky pre-push hook at `Frontend/.husky/pre-push` that runs `node Frontend/scripts/scan-xss-sinks.js` before a local `git push`.
- To enable it locally, run:

```powershell
cd Frontend
npm install
```

- After `npm install` Husky's `prepare` script installs the hooks. A failing scan aborts the push.

• **CI scan (GitHub Actions)**

- A GitHub Action (`.github/workflows/scan-xss.yml`) runs the same scanner on pushes to `main` and `master` and uploads a JSON report artifact named `xss-scan-report`.
- The CI job fails if any high-risk findings are detected; inspect the Actions logs and the uploaded artifact for details.

• **Manual run**

```powershell
node Frontend\scripts\scan-xss-sinks.js
Get-Content Frontend\scripts\scan-xss-report.json | Out-String
```

- The generated report is `Frontend/scripts/scan-xss-report.json`.

• **Notes & recommendations**

- The scanner examines `Frontend/src/**` by default to avoid noise from lockfiles and dependency manifests.
- If a finding is reported, review the report and fix the underlying issue (for example: avoid `v-html` with untrusted content; sanitize inputs if HTML is required).

### Code Organization

• **Backend**: Strict MVC pattern with Pydantic schemas in models/
• **Frontend**: Global CSS in assets/styles/, no component-scoped styles
• **API Calls**: All backend communication through services/api.js
• **Validation**: Pydantic validators for business logic, type hints throughout

### Best Practices

• **CSS Architecture**: Global styles with CSS variables, typographic hierarchy
• **State Management**: Composables for theme and locale with localStorage
• **Component Design**: Reusable components without embedded styles
• **Error Handling**: Comprehensive validation and user-friendly error messages

---

## Planned Enhancements

### Authentication & Security

• JWT token-based authentication system
• User registration and login workflows
• Protected routes and authorization middleware

### Database & Storage

• Alembic migrations for database schema management
• PostgreSQL support for production environments
• File upload and storage capabilities

### State & Testing

• Pinia state management integration
• Comprehensive testing with Pytest (backend) and Vitest (frontend)
• End-to-end testing with Cypress

### Advanced Features

• Real-time WebSocket communication
• Email notification system
• Advanced form validation and UI components
• Performance optimization and caching strategies

---

# PythonFastAPI-Vue-Integration (Deutsch)

Ein production-ready Fullstack-Starter mit FastAPI (Backend) und Vue.js 3 (Frontend) in Docker. Features Hot-Reload, robuste API-Integration, mehrsprachige Unterstützung, globales Theme-System und saubere MVC-Architektur für schnelle Entwicklung.

---

## Hauptfunktionen

### Backend-Features

• **RESTful API** mit automatischer OpenAPI-Dokumentation und interaktiver Swagger-UI
• **Pydantic-Validierung** mit benutzerdefinierten Validatoren für robuste Eingabebehandlung
• **SQLAlchemy-Integration** mit SQLite-Datenbank und Verbindungstests
• **CORS-Middleware** konfiguriert für nahtlose Frontend-Backend-Kommunikation
• **MVC-Architektur** mit sauberer Trennung von Models, Views und Controllers
• **Hot-Reload-Entwicklung** mit uvicorn Auto-Reload für sofortige Code-Updates

### Frontend-Features

• **Vue 3 Composition API** durchgängig in der gesamten Anwendung
• **Mehrsprachige Unterstützung** mit Deutsch/Englisch-Lokalisierungssystem
• **Dynamisches Theme-System** mit Hell-/Dunkel-Modi und localStorage-Persistierung
• **Responsive Navigation** mit Burger-Menü und Theme-/Sprach-Umschaltern
• **Globale CSS-Architektur** mit typografischer Hierarchie und CSS-Variablen
• **Zentraler API-Service** für die gesamte Backend-Kommunikation

### Entwicklungsumgebung

• **Docker-Containerisierung** mit optimierter Hot-Reload-Konfiguration
• **Volume-Mounting** für Live-Code-Updates ohne Container-Rebuilds
• **Polling-basierte Datei-Überwachung** für zuverlässige CSS- und Komponenten-Updates
• **Production-Ready Setup** mit ordnungsgemäßem CORS, Validierung und Fehlerbehandlung

---

## Architektur

### Backend-Struktur

• **MVC-Pattern** mit strikter Trennung der Belange
• **Pydantic-Schemas** für Eingabevalidierung und Typsicherheit
• **FastAPI-Router** für modulare Endpunkt-Organisation
• **SQLAlchemy-Engine** mit Datenbank-Inspektionsfähigkeiten
• **Benutzerdefinierte Validatoren** für Geschäftslogik-Durchsetzung

### Frontend-Struktur

• **Composition API** mit reaktiven Composables für Theme- und Locale-Management
• **Globales Styling-System** mit zentralisierten CSS-Variablen und Typografie-Regeln
• **Komponenten-Architektur** mit wiederverwendbaren UI-Komponenten (Navbar, Footer, BurgerMenu)
• **Service-Layer** mit axios-basiertem API-Client für Backend-Integration
• **Vue Router** für Single-Page-Application-Navigation

---

## Schnellstart

### Voraussetzungen

• Docker Desktop installiert und ausgeführt
• Git für Repository-Kloning
• Code-Editor (VS Code empfohlen)

### Entwicklungsumgebung starten

```powershell
# Repository klonen und navigieren
git clone https://github.com/Mac80Mo/PythonFastAPI-Vue-Integration.git
cd PythonFastAPI-Vue-Integration

# Container mit Hot-Reload starten
docker-compose up -d --build

# Anwendungen aufrufen
# Frontend: http://localhost:8080
# Backend API: http://localhost:8000
# API-Dokumentation: http://localhost:8000/docs
```

### Entwicklungsworkflow

• **Code-Änderungen**: Automatischer Hot-Reload (kein Container-Neustart erforderlich)
• **Neue Dependencies**: requirements.txt oder package.json bearbeiten → `docker-compose up --build`
• **Datenbank-Zugang**: SQLite-Datei zugänglich im ./DB/ Verzeichnis
• **Container-Logs**: `docker-compose logs -f backend` oder `docker-compose logs -f frontend`

---

## Technologie-Stack

### Kerntechnologien

• **Backend**: FastAPI 0.104+, Python 3.11, SQLAlchemy, Pydantic
• **Frontend**: Vue.js 3, Vue Router 4, Axios, Composition API
• **Datenbank**: SQLite mit SQLAlchemy ORM
• **Containerisierung**: Docker & Docker Compose
• **Entwicklung**: Hot-Reload, CORS, Live CSS-Updates

### Wichtige Dependencies

• **Backend**: uvicorn (ASGI-Server), email-validator (Pydantic)
• **Frontend**: @vue/cli-service, axios (HTTP-Client)
• **Entwicklung**: Optimierte vue.config.js mit Polling für Docker-Kompatibilität

---

## Aktuelle Features

### API-Endpunkte

• **GET /dbtest** - Datenbank-Verbindungstest mit Tabellen-Inspektion
• **POST /users** - Benutzer-Erstellung mit E-Mail-Validierung und benutzerdefinierten Validatoren
• **Interaktive Dokumentation** - Automatische Swagger-UI unter /docs

### UI-Komponenten

• **Responsive Navbar** mit Theme-Toggle, Sprachumschalter und Burger-Menü
• **Theme-System** mit Hell-/Dunkel-Modus-Umschaltung und CSS-Variablen-Management
• **Mehrsprachige Oberfläche** mit Unterstützung für Deutsch und Englisch mit vollständigen Übersetzungen
• **Typografie-System** nach Major Third Skala (1.25) mit ordnungsgemäßen rem-Einheiten

### API-Integration

• **Zentraler Service** mit axios-Client-Konfiguration
• **Fehlerbehandlung** mit try-catch-Mustern und Benutzer-Feedback
• **Ladezustände** und Verbindungstest-Funktionalität

---

## Entwicklungsrichtlinien

### Sicherheit: XSS-Scan (lokal pre-push & CI)

• **Zweck**: Automatisierte Prüfungen durchsuchen die Frontend-Quellen nach typischen DOM-basierten XSS-Senken (z. B. `v-html`, `innerHTML`, `document.write`) und HTML-ähnlichen Inhalten in Übersetzungsdateien. Ziel ist es, riskante Patterns früh zu erkennen und Pushes/Merges zu verhindern, wenn ein Problem besteht.

• **Lokaler pre-push-Hook (Husky)**:

    - Im Repo liegt ein committbarer Husky pre-push-Hook unter `Frontend/.husky/pre-push`, der vor jedem lokalen `git push` das Script `node Frontend/scripts/scan-xss-sinks.js` ausführt.

    - Aktivierung lokal (im `Frontend`-Ordner):

```powershell
cd Frontend
npm install
```

    - Nach `npm install` installiert das `prepare`-Script von Husky die Hooks automatisch. Schlägt der Scan fehl, wird der Push abgebrochen.

• **CI-Scan (GitHub Actions)**:

    - Eine GitHub Action (`.github/workflows/scan-xss.yml`) führt denselben Scanner bei Pushes auf `main` und `master` aus und lädt einen JSON-Report als Artefakt `xss-scan-report` hoch.

    - Der CI-Job schlägt fehl, wenn High-Risk-Treffer gefunden werden; prüfe das Actions-Tab und das Artefakt für Details.

• **Manueller Lauf**:

```powershell
node Frontend\scripts\scan-xss-sinks.js
Get-Content Frontend\scripts\scan-xss-report.json | Out-String
```

• **Hinweise & Empfehlungen**:

    - Der Scanner prüft standardmäßig nur `Frontend/src/**`, um False-Positives aus Lockfiles zu vermeiden.
    - Wenn ein Fund gerechtfertigt ist, überprüfe den Report und behebe das Problem (z. B. `v-html` vermeiden; Inhalte sanitieren, falls HTML benötigt wird).

### Code-Organisation

• **Backend**: Striktes MVC-Pattern mit Pydantic-Schemas in models/
• **Frontend**: Globales CSS in assets/styles/, keine komponenten-spezifischen Styles
• **API-Aufrufe**: Alle Backend-Kommunikation über services/api.js
• **Validierung**: Pydantic-Validatoren für Geschäftslogik, Type-Hints durchgängig

### Best Practices

• **CSS-Architektur**: Globale Styles mit CSS-Variablen, typografische Hierarchie
• **State-Management**: Composables für Theme und Locale mit localStorage
• **Komponenten-Design**: Wiederverwendbare Komponenten ohne eingebettete Styles
• **Fehlerbehandlung**: Umfassende Validierung und benutzerfreundliche Fehlermeldungen

---

## Geplante Erweiterungen

### Authentifizierung & Sicherheit

• JWT-Token-basiertes Authentifizierungssystem
• Benutzer-Registrierung und Login-Workflows
• Geschützte Routen und Autorisierungs-Middleware

### Datenbank & Storage

• Alembic-Migrationen für Datenbank-Schema-Management
• PostgreSQL-Unterstützung für Produktionsumgebungen
• Datei-Upload und Storage-Funktionalitäten

### State & Testing

• Pinia State-Management-Integration
• Umfassende Tests mit Pytest (Backend) und Vitest (Frontend)
• End-to-End-Tests mit Cypress

### Erweiterte Features

• Echtzeit-WebSocket-Kommunikation
• E-Mail-Benachrichtigungssystem
• Erweiterte Formular-Validierung und UI-Komponenten
• Performance-Optimierung und Caching-Strategien

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
• **Footer**: Theme-aware sticky footer with localized "Impressum" link (component: `Frontend/src/components/Footer.vue`)

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
