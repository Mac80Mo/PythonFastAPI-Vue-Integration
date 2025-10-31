from sqlalchemy import create_engine, inspect

DATABASE_URL = "sqlite:///./DB/projekt1.db"
engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})

def test_connection():
    try:
        inspector = inspect(engine)
        tables = inspector.get_table_names()
        print("Verbindung erfolgreich! Tabellen:", tables)
    except Exception as e:
        print("Fehler bei der Verbindung:", e)

if __name__ == "__main__":
    test_connection()