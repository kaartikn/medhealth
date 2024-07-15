import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminUploadComponent = () => {
    const [medicines, setMedicines] = useState([]);
    const [updatedMedicines, setUpdatedMedicines] = useState([]);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    
    const github_access_token = "token " + process.env.REACT_APP_GITHUB_TOKEN;

    useEffect(() => {
        const fetchMedicines = async () => {
            try {
                const response = await fetch('/medicine_info.json');
                const data = await response.json();
                setMedicines(data);
                console.log(medicines);
                setUpdatedMedicines(data);
            } catch (error) {
                console.error('Error fetching medicines data:', error);
            }
        };

        fetchMedicines();
    }, []);

    const handleFileChange = (index, event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const newMedicines = [...updatedMedicines];
                newMedicines[index].picture = reader.result;
                setUpdatedMedicines(newMedicines);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleInputChange = (index, event) => {
        const { name, value } = event.target;
        const newMedicines = [...updatedMedicines];
        newMedicines[index][name] = value;
        setUpdatedMedicines(newMedicines);
    };

    const handleSave = async () => {
        setLoading(true);
        setSuccess(false);

        try {
            const updatedJsonContent = await Promise.all(
                updatedMedicines.map(async (medicine) => {
                    if (medicine.picture.startsWith('data:image')) {
                        // If the image was updated, upload the image
                        const base64Content = medicine.picture.split(',')[1];
                        const med_name = medicine.name.split(" ")[0].toLowerCase();
                        const imageName = `public/medicines/${med_name}.jpg`;
                        await axios.put(
                            `https://api.github.com/repos/kaartikn/medhealth/contents/${imageName}`,
                            {
                                message: 'Upload image',
                                content: base64Content
                            },
                            {
                                headers: {
                                    Authorization: github_access_token
                                }
                            }
                        );
                        // Update the picture path after successful upload
                        medicine.picture = `/${imageName}`;
                    }
                    return medicine;
                })
            );

            // Fetch the current JSON file
            const jsonResponse = await axios.get(
                'https://api.github.com/repos/kaartikn/medhealth/contents/public/medicine_info.json',
                {
                    headers: {
                        Authorization: github_access_token
                    }
                }
            );

            // Update the JSON file with the new data
            await axios.put(
                'https://api.github.com/repos/kaartikn/medhealth/contents/public/medicine_info.json',
                {
                    message: 'Update medicines data',
                    content: btoa(JSON.stringify(updatedJsonContent, null, 2)),
                    sha: jsonResponse.data.sha
                },
                {
                    headers: {
                        Authorization: github_access_token
                    }
                }
            );

            setLoading(false);
            setSuccess(true);

        } catch (error) {
            console.error('Error saving data:', error);
        }
    };

    if (loading){
        return <div>Loading ....</div>
    }

    if (success){
        return (
            <div>
                <p>Page successfully updated!</p>
                <a href="/">Go to the main page</a>
            </div>
        )
    }


    return (
        <div className="admin-upload-container">
            {updatedMedicines.map((medicine, index) => (
                <div key={index} className="medicine-edit-card">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={medicine.name}
                        placeholder="Name"
                        onChange={(e) => handleInputChange(index, e)}
                    />
                    <label>Composition</label>
                    <input
                        type="text"
                        name="composition"
                        value={medicine.composition}
                        placeholder="Composition"
                        onChange={(e) => handleInputChange(index, e)}
                    />
                    <label>Indication</label>
                    <input
                        type="text"
                        name="indication"
                        value={medicine.indication}
                        placeholder="Indication"
                        onChange={(e) => handleInputChange(index, e)}
                    />
                    <label>Regimen</label>
                    <input
                        type="text"
                        name="regimen"
                        value={medicine.regimen}
                        placeholder="Regimen"
                        onChange={(e) => handleInputChange(index, e)}
                    />
                    <label>Additional Info</label>
                    <input
                        type="text"
                        name="additionalInfo"
                        value={medicine.additionalInfo}
                        placeholder="Additional Info"
                        onChange={(e) => handleInputChange(index, e)}
                    />
                    <label>Picture</label>
                    <input
                        type="file"
                        onChange={(e) => handleFileChange(index, e)}
                    />
                    <img src={medicine.picture} alt={medicine.name} className="medicine-preview" />
                </div>
            ))}

            <button onClick={handleSave}>Save</button>
        </div>
    );
};

export default AdminUploadComponent;
