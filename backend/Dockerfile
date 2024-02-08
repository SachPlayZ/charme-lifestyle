FROM python:3.11.5-slim

WORKDIR /app

COPY /backend/requirements.txt .

RUN pip install -r requirements.txt

COPY . .

EXPOSE 5000

CMD ["python", "app.py"]