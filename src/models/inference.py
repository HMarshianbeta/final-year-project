# filepath: /Users/harshmishra/Downloads/FINAL_YEAR_PROJECT/return-rate-reimagined-main/src/models/inference.py
from ultralytics import YOLO

def run_inference(model_path: str, image_path: str):
    model = YOLO(model_path)
    results = model(image_path)
    results.show()  # Display the results
    return results