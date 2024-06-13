import { Button, Checkbox, FormControlLabel } from '@mui/material';
import TextField from '@mui/material/TextField';
import './EntryCard.css';
import { useState } from 'react';

/*
  A block for a single partner, containing information for them
  along with any tools to manage said information
*/

function EntryCard() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [websiteUrl, setWebsiteUrl] = useState('');
    const [thumbnailUrl, setThumbnailUrl] = useState('');
    const [isActive, setIsActive] = useState(false);

    const handleSubmit = async () => {
        const partnerData = {
            name,
            description,
            websiteUrl,
            thumbnailUrl,
            isActive,
            id: name.toLowerCase().replace(/\s+/g, '') 
        };

        try {
            const response = await fetch('http://localhost:4000', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(partnerData),
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            const result = await response.json();
            console.log('Data posted successfully:', result);
        } catch (error) {
            console.error('Error posting data:', error);
        }

        window.location.reload();
    };

    return (
        <div className="entry-card">
            <div className="entry-info">
                <TextField
                    id="name"
                    label="Partner Name"
                    variant="filled"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    id="description"
                    label="Partner Description"
                    variant="filled"
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <TextField
                    id="partnerUrl"
                    label="Website URL"
                    variant="filled"
                    required
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                />
                <TextField
                    id="thumbnailUrl"
                    label="Partner Logo Source"
                    variant="filled"
                    value={thumbnailUrl}
                    onChange={(e) => setThumbnailUrl(e.target.value)}
                />
                <FormControlLabel
                    control={<Checkbox checked={isActive} onChange={(e) => setIsActive(e.target.checked)} />}
                    label="Active?"
                    className="entry-activeCheckbox"
                />
            </div>
            <Button variant="contained" className="entry-submissionButton" onClick={handleSubmit}>
                Submit
            </Button>
            <div className="entry-name"></div>
        </div>
    );
}
export default EntryCard;