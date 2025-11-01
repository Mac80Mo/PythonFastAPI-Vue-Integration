from pydantic import BaseModel, EmailStr, validator

class UserCreate(BaseModel):
    username: str
    email: EmailStr
    password: str

    @validator('username')
    def username_length(cls, v):
        if len(v) < 3:
            raise ValueError('Username muss mindestens 3 Zeichen haben')
        return v

    @validator('password')
    def password_length(cls, v):
        if len(v) < 6:
            raise ValueError('Passwort muss mindestens 6 Zeichen haben')
        return v

class ItemCreate(BaseModel):
    name: str
    description: str = ""
    price: float

    @validator('name')
    def name_length(cls, v):
        if len(v) < 2:
            raise ValueError('Name muss mindestens 2 Zeichen haben')
        return v

    @validator('price')
    def price_positive(cls, v):
        if v <= 0:
            raise ValueError('Preis muss positiv sein')
        return v
