import cv2
import numpy as np

# Load the pre-trained model and its weights
net = cv2.dnn.readNetFromCaffe("path_to_prototxt_file", "path_to_caffe_model")


# Function to get output layer names
def get_output_layers(net):
    layer_names = net.getLayerNames()
    return [layer_names[i[0] - 1] for i in net.getUnconnectedOutLayers()]


# Check if the detected object is one of our items
def is_target_item(class_id):
    target_items = {
        "apple": 53,
        # Add other items
        # 'milk': ID_FOR_MILK,
        # 'eggs': ID_FOR_EGGS,
        # 'butter': ID_FOR_BUTTER,
        # 'bread': ID_FOR_BREAD
    }
    return any(class_id == target_items[item] for item in target_items)


# Process the frame from the camera
def process_frame(frame):
    (h, w) = frame.shape[:2]
    blob = cv2.dnn.blobFromImage(
        cv2.resize(frame, (300, 300)), 0.007843, (300, 300), 127.5
    )
    net.setInput(blob)
    detections = net.forward(get_output_layers(net))

    for i in np.arange(0, detections.shape[2]):
        confidence = detections[0, 0, i, 2]
        if confidence > 0.2:  # Threshold to filter weak detections
            class_id = int(detections[0, 0, i, 1])
            if is_target_item(class_id):
                # Logic to handle detection of a target item
                print(f"Detected item with class ID: {class_id}")


# Initialize camera
cap = cv2.VideoCapture(0)

while True:
    ret, frame = cap.read()
    if not ret:
        break
    process_frame(frame)
    cv2.imshow("Frame", frame)
    if cv2.waitKey(1) & 0xFF == ord("q"):
        break

cap.release()
cv2.destroyAllWindows()
