from fastapi import FastAPI
import RPi.GPIO as GPIO
GPIO.setmode(GPIO.BCM) 

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/gpio/{pin}/on")
def on(pin):
    GPIO.setup(int(pin), GPIO.OUT)
    GPIO.output(int(pin), True) 
    return {
        "pin":pin,
        "state": 'on'
    }

@app.get("/gpio/{pin}/off")
def off(pin):
    GPIO.setup(int(pin), GPIO.OUT)
    GPIO.output(int(pin), False) 
    return {
        "pin":pin,
        "state": 'off'
    }
