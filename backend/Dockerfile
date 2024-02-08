FROM python:3.11.5-slim

WORKDIR /app
COPY /backend/requirements.txt .

RUN pip install -r requirements.txt

COPY . .

EXPOSE 5000

CMD ["python", "/backend/app.py"]

# CMD ["gunicorn", "-b", "0.0.0.0:5000", "app:app"]