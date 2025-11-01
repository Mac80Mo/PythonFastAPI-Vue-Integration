from fastapi import APIRouter
from app.models.database import engine
from sqlalchemy import inspect

router = APIRouter()

@router.get("/dbtest")
def db_test():
	inspector = inspect(engine)
	tables = inspector.get_table_names()
	return {"tables": tables}

# Input-Validierung mit Pydantic für User
from app.models.schemas import UserCreate
from fastapi import status

@router.post("/users", status_code=status.HTTP_201_CREATED)
def create_user(user: UserCreate):
    # Hier würde die DB-Logik folgen
    # Für Demo: Rückgabe der validierten Nutzerdaten
    return {"username": user.username, "email": user.email}