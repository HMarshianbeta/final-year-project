from fastapi import FastAPI, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from ultralytics import YOLO
from PIL import Image
import io
import numpy as np

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:8080"],  # Frontend origin
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

model = YOLO('src/models/best.pt')

@app.post("/predict")
async def predict(file: UploadFile):
    print(f"File name: {file.filename}")
    print(f"Content type: {file.content_type}")

    # Validate file type
    if file.content_type not in ["image/jpeg", "image/png"]:
        raise HTTPException(status_code=400, detail="Unsupported file type. Only JPEG and PNG are supported.")

    # Read the file once
    try:
        image_bytes = await file.read()
        print(f"File size: {len(image_bytes)} bytes")

        # Validate and process the image
        img = Image.open(io.BytesIO(image_bytes))
        img.verify()  # Verify the image is valid
        img = Image.open(io.BytesIO(image_bytes)).convert("RGB")  # Reopen and convert to RGB
    except Exception as e:
        print(f"Error: {e}")
        raise HTTPException(status_code=400, detail="Invalid image file.")

    # Convert the image to a NumPy array
    img_array = np.array(img)

    # Run inference
    results = model(img_array)

    # Access the first result and convert to a Pandas DataFrame
    predictions_df = results[0].to_df()  # Use to_df() instead of pandas()
    predictions = predictions_df.to_dict(orient="records")  # Convert DataFrame to a dictionary
    return {"predictions": predictions}