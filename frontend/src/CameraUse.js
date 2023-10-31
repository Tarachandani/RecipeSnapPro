import React, { useRef } from 'react';

function CameraUse() {
    const videoRef = useRef(null);

    const handleCameraOpen = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            videoRef.current.srcObject = stream;
            videoRef.current.play();
        } catch (error) {
            console.error("Error accessing the camera:", error);
        }
    };

    return (
        <div>
            <button onClick={handleCameraOpen}>Open Camera</button>
            <video ref={videoRef} width="640" height="480" autoPlay></video>
        </div>
    );
}

export default CameraUse;
