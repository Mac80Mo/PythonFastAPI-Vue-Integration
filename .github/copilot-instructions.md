# GitHub Copilot Instructions - PythonFastAPI-Vue-Integration

## Projektübersicht

Fullstack-Grundgerüst mit FastAPI (Backend) und Vue.js 3 (Frontend) in Docker.
Production-ready für Entwicklung mit Hot-Reload, CORS, API-Integration und Theme-Switching.

---

## Architektur-Prinzipien

### Backend (FastAPI)

- **MVC-Pattern strikt einhalten**:
  - `app/models/`: Pydantic Schemas für Validierung, SQLAlchemy Models für DB
  - `app/views/`: API-Endpunkte (Router), nur Request/Response-Handling
  - `app/controllers/`: Business-Logik (aktuell minimal, bei Bedarf erweitern)
- **Immer Pydantic-Validierung** verwenden für Input
- **CORS ist aktiviert** für `http://localhost:8080`
- **Uvicorn mit --reload** für Hot-Reload

### Frontend (Vue.js 3)

- **Vue 3 Composition API** bevorzugen (nicht Options API)
- **Zentraler API-Service** (`src/services/api.js`) für alle Backend-Calls
- **Theme-System** mit CSS-Variablen in `src/assets/styles/variables.css`
- **Keine Inline-API-Calls** in Komponenten - immer über `api.js`

---

## Coding-Standards

### Python (Backend)

- Type-Hints verwenden
- Pydantic BaseModel für alle Request/Response-Schemas
- FastAPI Router für Modularisierung
- SQLAlchemy für Datenbank-Zugriffe
- Keine direkten DB-Queries in Views - über Controller/Services

### JavaScript/Vue (Frontend)

- ES6+ Syntax
- Async/await für API-Calls (kein .then())
- **Clean Code Prinzipien** strikt befolgen
- **🚨 KRITISCH: Styles IMMER global in `src/assets/styles/global.css` definieren! 🚨**
  - **NIEMALS** `<style scoped>` oder `<style>` Blöcke in Vue-Komponenten verwenden
  - **ALLE** wiederverwendbaren Styles gehören in die globale CSS-Datei
  - Komponenten sollen nur Template + Script enthalten, KEINE Styles
  - Diese Regel hat oberste Priorität und muss von JEDEM LLM befolgt werden!
- CSS-Variablen aus `variables.css` verwenden
- Keine Magic Numbers/Strings - Konstanten definieren
- **Komponenten-CSS ist VERBOTEN** - ausnahmslos alle Styles global
- **Typografie-Regeln für globale Styles:**
  - Headings (h1–h6) nach Major Third Scale (1.25) skalieren
  - Basisgröße für Fließtext: 1rem (16px)
  - Alle Schriftgrößen ausschließlich in rem
  - Letter-Spacing und Line-Height nach Typografie-Vorgaben:
    • Headings: abgestuft negativ, Body: 0–0.01em
    • Headings: Line-Height 1.1–1.3, Body: 1.5
  - Typografische Hierarchie und Lesbarkeit sind Pflicht
  - Diese Regeln sind verbindlich für alle globalen Styles

---

## Dateistruktur

### Neue Backend-Endpunkte

```
Backend/app/
├── models/schemas.py      # Pydantic Schema hinzufügen
├── views/__init__.py      # Router-Endpoint hinzufügen
└── controllers/           # Business-Logik (optional)
```

### Neue Frontend-Features

```
Frontend/src/
├── services/api.js        # API-Methode hinzufügen
├── views/                 # Neue Seite erstellen
├── components/            # Wiederverwendbare Komponente
└── router/index.js        # Route registrieren
```

---

## Docker & Development

- **Hot-Reload ist aktiviert** - kein Container-Neustart bei Code-Änderungen
- **Vue-Komponenten (.vue)**: Hot-Reload funktioniert zuverlässig
- **Globale CSS-Änderungen**: Manchmal Container-Restart nötig (`docker-compose restart frontend`)
- **Bei neuen Dependencies**:
  - Backend: `requirements.txt` bearbeiten → `docker-compose up --build`
  - Frontend: `package.json` bearbeiten → lokal `npm install` → `docker-compose up --build`
- **Volume-Mounts** sorgen für Live-Updates
- **Optimierte vue.config.js**: Polling aktiviert für Docker-Kompatibilität

---

## Theme-System & Globale Styles

- **CSS-Variablen verwenden** statt hardcodierte Farben
- **Globale Styles**: Alle wiederverwendbaren Styles in `src/assets/styles/global.css`
- **Verfügbare Variablen**:
  - `--color-bg`: Hintergrund
  - `--color-text-primary`: Hauptschrift (H1)
  - `--color-text-secondary`: Sekundärschrift (H2, Rahmen)
  - `--color-text-tertiary`: Fließtext
- **Theme-Klassen**: `.theme-light` und `.theme-dark`
- **LocalStorage**: Theme-Präferenz wird gespeichert
- **Navbar & Layout**: Globale UI-Komponenten (Burger-Menü, Theme-Toggle) in `global.css`

---

## API-Integration Best Practices

### Backend-Endpunkt erstellen

1. Schema in `models/schemas.py` definieren
2. Validator hinzufügen (z.B. `@validator`)
3. Router in `views/__init__.py` registrieren
4. Status-Codes verwenden (201, 404, 422, etc.)

### Frontend API-Call hinzufügen

1. Methode in `services/api.js` erstellen
2. In Component importieren: `import api from '@/services/api'`
3. Try-Catch für Error-Handling
4. Loading-States anzeigen

---

## Beispiel-Code

### Backend-Endpunkt

```python
# models/schemas.py
class ItemCreate(BaseModel):
    name: str
    price: float

    @validator('price')
    def price_positive(cls, v):
        if v <= 0:
            raise ValueError('Preis muss positiv sein')
        return v

# views/__init__.py
@router.post("/items", status_code=status.HTTP_201_CREATED)
def create_item(item: ItemCreate):
    return {"name": item.name, "price": item.price}
```

### Frontend API-Call

```javascript
// services/api.js
createItem(itemData) {
  return apiClient.post('/items', itemData);
}

// In Component
import api from '@/services/api';

async createNewItem() {
  try {
    const response = await api.createItem({
      name: "Product",
      price: 19.99
    });
    console.log(response.data);
  } catch (error) {
    console.error('Fehler:', error);
  }
}
```

---

## Was NICHT tun

❌ API-Calls direkt in Vue-Komponenten (axios importieren)  
❌ Hardcodierte Farben statt CSS-Variablen  
❌ Validierung im Frontend ohne Backend-Validierung  
❌ Inline-Styles statt CSS-Classes  
❌ Globale Variablen ohne Konstanten  
❌ Console.logs in Production-Code  
❌ Fehler ignorieren ohne Error-Handling
❌ **NIEMALS `<style>` Blöcke in Vue-Komponenten - ALLE Styles gehören in global.css!**
❌ Komponenten-spezifisches CSS für wiederverwendbare Styles
❌ Duplizierte CSS-Regeln statt globaler Definitionen
❌ **Scoped-Styles in Komponenten - das ist STRENGSTENS VERBOTEN!**

---

## Nächste geplante Features

- JWT-Authentifizierung
- Alembic Database-Migrationen
- Pinia State-Management
- Pytest & Vitest Testing

---

## README.md Struktur-Vorgaben

**Wichtig: Bei README-Aktualisierung IMMER diese Struktur befolgen!**

### Erforderliche Abschnitte (in dieser Reihenfolge):

1. **Project Overview** (Englisch zuerst)

   - Kurze, prägnante Projektbeschreibung
   - Technologie-Stack erwähnen (FastAPI, Vue.js 3, Docker)
   - "Production-ready" und Hauptfeatures hervorheben

2. **Key Features** (Bulletpoints mit • statt -)

   - Backend Features (API, Validierung, CORS, etc.)
   - Frontend Features (Composition API, Theme, etc.)
   - Development Environment (Docker, Hot-Reload, etc.)

3. **Architecture** (Grobe Übersicht, KEINE Code-Details)

   - Backend Structure (MVC, Pydantic, etc.)
   - Frontend Structure (Composition API, Global Styles, etc.)

4. **Quick Start** (Einfache Setup-Schritte)

   - Prerequisites als Bulletpoints
   - Docker-Commands in Code-Block
   - URLs für Frontend/Backend/Docs

5. **Technology Stack**

   - Core Technologies
   - Key Dependencies (nur wichtigste erwähnen)

6. **Current Features** (Was bereits implementiert ist)

   - UI Components
   - API Integration
   - Styling System

7. **Development Guidelines** (Grob, ohne Code-Beispiele)

   - Code Organization
   - Best Practices

8. **Planned Enhancements** (Zukünftige Features)

   - Authentication & Security
   - Database & Storage
   - State & Testing
   - Advanced Features

9. **Deutsche Übersetzung** (Komplette Wiederholung auf Deutsch)
   - Alle Abschnitte 1-8 auf Deutsch übersetzen
   - Gleiche Struktur beibehalten

### Styling-Regeln für README:

- **Bulletpoints**: Immer • verwenden, niemals -
- **Hervorhebungen**: **Fett** für wichtige Begriffe
- **Keine Code-Beispiele**: Nur grobe Beschreibungen
- **Ausdrücklich**: Aussagekräftige, aber kurze Bulletpoints
- **Zweisprachig**: Englisch zuerst, dann komplette deutsche Version

---

**Bei Unsicherheiten**: Folge der bestehenden Struktur und Best Practices!

---

## Hinweis: Mehrsprachigkeit bei Text-Generierung

- Wenn ein Prompt Texte oder Dokumente anfordert, prüfe die gewünschte Sprache; liefere Inhalte in der angegebenen Sprache. Falls keine Sprache genannt ist, biete standardmäßig beide Versionen (EN/DE) oder frage kurz nach. Die entsprechenden Dateien liegen diesbezüglich im Frontend Ordner: locales/ de.json & en.json.
