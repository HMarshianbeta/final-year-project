# filepath: /Users/harshmishra/Downloads/FINAL_YEAR_PROJECT/return-rate-reimagined-main/src/models/evaluate_model.py
from src.components.model_evaluation import ModelEvaluation
from ultralytics import YOLO

def evaluate_model(model_path: str, dataset_path: str):
    model = YOLO(model_path)
    model_evaluation = ModelEvaluation(model)
    fitness_score = model_evaluation.get_fitness_score('test', dataset_path)
    print(f"Fitness Score: {fitness_score}")