# filepath: /Users/harshmishra/Downloads/FINAL_YEAR_PROJECT/return-rate-reimagined-main/src/models/load_model.py
from ultralytics import YOLO

# Load the trained model
def load_yolo_model(model_path: str):
    model = YOLO(model_path)
    return model