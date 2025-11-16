FROM python:3.11-slim

WORKDIR /app

# Copy only requirements first for better layer caching
COPY requirements.txt /app/

# Set Python environment variables
ENV PYTHONPATH=/app \
    PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Note: Source code will be mounted via volume, not copied
# This ensures hot-reload works without rebuilds

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]