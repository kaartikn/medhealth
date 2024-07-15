import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminUploadComponent = () => {
    const [updatedMedicines, setUpdatedMedicines] = useState([]);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [githubAccessToken, setGithubAccessToken] = useState('');

    useEffect(() => {
        const fetchMedicines = async () => {
            try {
                const response = await fetch('/medicine_info.json');
                const data = await response.json();
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
                        const base64Content = medicine.picture.split(',')[1];
                        const med_name = medicine.name.split(" ")[0].toLowerCase();
                        const imageName = `public/medicines/${med_name}.jpg`;

                        // Fetch the current file info to get the sha
                        const imageResponse = await axios.get(
                            `https://api.github.com/repos/kaartikn/medhealth/contents/${imageName}`,
                            {
                                headers: {
                                    Authorization: `token ${githubAccessToken}`
                                }
                            }
                        );

                        const sha = imageResponse.data.sha;

                        await axios.put(
                            `https://api.github.com/repos/kaartikn/medhealth/contents/${imageName}`,
                            {
                                message: 'Upload image',
                                content: base64Content,
                                sha: sha
                            },
                            {
                                headers: {
                                    Authorization: `token ${githubAccessToken}`
                                }
                            }
                        );

                        medicine.picture = `/${imageName}`;
                    }
                    return medicine;
                })
            );

            const jsonResponse = await axios.get(
                'https://api.github.com/repos/kaartikn/medhealth/contents/public/medicine_info.json',
                {
                    headers: {
                        Authorization: `token ${githubAccessToken}`
                    }
                }
            );

            await axios.put(
                'https://api.github.com/repos/kaartikn/medhealth/contents/public/medicine_info.json',
                {
                    message: 'Update medicines data',
                    content: btoa(JSON.stringify(updatedJsonContent, null, 2)),
                    sha: jsonResponse.data.sha
                },
                {
                    headers: {
                        Authorization: `token ${githubAccessToken}`
                    }
                }
            );

            setLoading(false);
            setSuccess(true);

        } catch (error) {
            console.error('Error saving data:', error);
            setLoading(false);
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

            <br />

            <div className='m-3 mb-0 admin-upload-container'>
                <div>GitHub Access Token</div>
                <input
                    type="text"
                    value={githubAccessToken}
                    placeholder="Enter GitHub Access Token"
                    onChange={(e) => setGithubAccessToken(e.target.value)}
                />
            </div>


            <button style={{ backgroundColor: "#05a66b", color:"#fff" }} onClick={handleSave}>Save</button>
        </div>
    );
};

export default AdminUploadComponent;