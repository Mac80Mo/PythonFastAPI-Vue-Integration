from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.views import router

app = FastAPI()

# CORS-Konfiguration für Frontend-Backend-Kommunikation
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:8080"],  # Frontend-URL
    allow_credentials=True,
    allow_methods=["*"],  # Alle HTTP-Methoden erlauben
    allow_headers=["*"],  # Alle Headers erlauben
)

app.include_router(router)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
