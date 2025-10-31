from fastapi import APIRouter
from app.models.database import engine
from sqlalchemy import inspect

router = APIRouter()

@router.get("/dbtest")
def db_test():
	inspector = inspect(engine)
	tables = inspector.get_table_names()
	return {"tables": tables}