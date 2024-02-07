import React, { useState } from 'react';
import './AiStylist.css';

const AiStylist = () => {
    const [keywords, setKeywords] = useState([]);
    const [uploadedImage, setUploadedImage] = useState(null);

    const handleImageUpload = async (event) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('image', file);

        try {
            const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                setKeywords(data.keywords);
                setUploadedImage(URL.createObjectURL(file));
            } else {
                console.error('Error:', response.status);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="ai-stylist">
            <input className="image-upload" type="file" accept="image/*" onChange={handleImageUpload} />
            {uploadedImage && (
                <img className="uploaded-image" src={uploadedImage} alt="Uploaded" width="200" height="200" />
            )}
            {keywords.length > 0 && (
                <ul className="keyword-list">
                    {keywords.map((keyword, index) => (
                        <li className="keyword" key={index}>{keyword}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default AiStylist;