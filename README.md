# PythonFastAPI-Vue-Integration

## Projektübersicht

Modernes Fullstack-Grundgerüst mit **FastAPI** (Backend), **Vue.js 3** (Frontend) und **Docker**. Production-ready für die Entwicklung mit Hot-Reload, CORS-Konfiguration, API-Integration und professionellem Theme-System.

---

## Features

**Backend (FastAPI)**

- RESTful API mit automatischer OpenAPI-Dokumentation
- SQLAlchemy Datenbankanbindung vorbereitet
- Pydantic Input-Validierung
- CORS-Middleware konfiguriert
- MVC-Projektstruktur

# PythonFastAPI-Vue-Integration

## Project Overview

Fullstack boilerplate with FastAPI (Backend) and Vue.js 3 (Frontend) in Docker.
Production-ready for development with hot-reload, CORS, API integration, and theme switching.

---

## Architecture Principles

### Backend (FastAPI)

- **Strict MVC pattern**:
  - `app/models/`: Pydantic schemas for validation, SQLAlchemy models for DB
  - `app/views/`: API endpoints (router), only request/response handling
  - `app/controllers/`: Business logic (minimal, extend as needed)
- **Always use Pydantic validation** for input
- **CORS enabled** for `http://localhost:8080`
- **Uvicorn with --reload** for hot-reload

### Frontend (Vue.js 3)

- **Prefer Vue 3 Composition API** (not Options API)
- **Central API service** (`src/services/api.js`) for all backend calls
- **Theme system** with CSS variables in `src/assets/styles/variables.css`
- **No inline API calls** in components – always use `api.js`

---

## Coding Standards

### Python (Backend)

- Use type hints
- Pydantic BaseModel for all request/response schemas
- FastAPI router for modularization
- SQLAlchemy for database access
- No direct DB queries in views – use controller/services

### JavaScript/Vue (Frontend)

- ES6+ syntax
- Async/await for API calls (no .then())
- **Strict clean code principles**
- **Prefer global styles**: define styles in `src/assets/styles/global.css`
- Use CSS variables from `variables.css`
- No magic numbers/strings – define constants
- **Component CSS only for specific styles** – otherwise global

---

## File Structure

### New Backend Endpoints

```
Backend/app/
├── models/schemas.py      # Add Pydantic schema
├── views/__init__.py      # Add router endpoint
└── controllers/           # Business logic (optional)
```

### New Frontend Features

```
Frontend/src/
├── services/api.js        # Add API method
├── views/                 # Create new page
├── components/            # Reusable component
└── router/index.js        # Register route
```

---

## Docker & Development

- **Hot-reload enabled** – no container restart needed for code changes
- **Vue components (.vue)**: hot-reload works reliably
- **Global CSS changes**: sometimes container restart needed (`docker-compose restart frontend`)
- **For new dependencies**:
  - Backend: edit `requirements.txt` → `docker-compose up --build`
  - Frontend: edit `package.json` → local `npm install` → `docker-compose up --build`
- **Volume mounts** provide live updates
- **Optimized vue.config.js**: polling enabled for Docker compatibility

---

## Theme System & Global Styles

- **Use CSS variables** instead of hardcoded colors
- **Global styles**: all reusable styles in `src/assets/styles/global.css`
- **Available variables**:
  - `--color-bg`: background
  - `--color-text-primary`: main text (H1)
  - `--color-text-secondary`: secondary text (H2, borders)
  - `--color-text-tertiary`: body text
- **Theme classes**: `.theme-light` and `.theme-dark`
- **LocalStorage**: theme preference is saved
- **Navbar & layout**: global UI components (burger menu, theme toggle) in `global.css`

---

## API Integration Best Practices

### Create Backend Endpoint

1. Define schema in `models/schemas.py`
2. Add validator (e.g. `@validator`)
3. Register router in `views/__init__.py`
4. Use status codes (201, 404, 422, etc.)

### Add Frontend API Call

1. Create method in `services/api.js`
2. Import in component: `import api from '@/services/api'`
3. Use try-catch for error handling
4. Show loading states

---

## Example Code

### Backend Endpoint

```python
# models/schemas.py
class ItemCreate(BaseModel):
    name: str
    price: float

    @validator('price')
    def price_positive(cls, v):
        if v <= 0:
            raise ValueError('Price must be positive')
        return v

# views/__init__.py
@router.post("/items", status_code=status.HTTP_201_CREATED)
def create_item(item: ItemCreate):
    return {"name": item.name, "price": item.price}
```

### Frontend API Call

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
    console.error('Error:', error);
  }
}
```

---

## What NOT to do

❌ API calls directly in Vue components (importing axios)
❌ Hardcoded colors instead of CSS variables
❌ Frontend validation without backend validation
❌ Inline styles instead of CSS classes
❌ Global variables without constants
❌ Console.logs in production code
❌ Ignoring errors without error handling
❌ Component-specific CSS for reusable styles
❌ Duplicate CSS rules instead of global definitions

---

## Next Planned Features

- JWT authentication
- Alembic database migrations
- Pinia state management
- Pytest & Vitest testing

---

**If unsure**: Follow the existing structure and best practices!
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
