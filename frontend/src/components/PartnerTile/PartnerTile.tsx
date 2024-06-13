import { Button } from "@mui/material";
import { PartnerData } from "../../types";
import './PartnerTile.css';
import { useState } from "react";

/*
  A block for a single partner, containing information for them
  along with any tools to manage said information
*/

interface PartnerTileProps {
  partnerData: PartnerData
}

function PartnerTile({ partnerData }: PartnerTileProps) {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const maxDescriptionLength = 200;

  const handleToggleDescription = () => {
    setIsDescriptionExpanded(!isDescriptionExpanded);
  };

  const getDescriptionPreview = (description: string, length: number) => {
    if (description.length <= length) return description;
    const trimmedText = description.substring(0, length);
    return `${trimmedText.substring(0, trimmedText.lastIndexOf(' '))}...`;
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm(`Are you sure you want to delete the partner: ${partnerData.name}?`);

    if (!confirmDelete) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:4000/${partnerData.id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log(`Partner ${partnerData.name} deleted successfully`);
      } else {
        console.error(`Error deleting partner: ${response.status} ${response.statusText}`);
      }
    } catch (error: any) {
      console.error(`Error deleting partner: ${error.message}`);
    }

    window.location.reload();
  };

  return (
    <div className="partner-tile">
      <div className="partner-info">
        <div className="partner-header">
          <h2>
            <a className="partner-title" href={partnerData.websiteUrl} target="_blank" rel="noopener">{partnerData.name}</a>
          </h2>
          <img className="partner-thumbnail" src={partnerData.thumbnailUrl} />
        </div>
        <p>
          {partnerData.isActive ? (
            <span className="active-status">Active</span>
          ) : (
            <span className="inactive-status">Inactive</span>
          )}
        </p>
        {/* Condense the description */}
        <p>
          {isDescriptionExpanded
            ? partnerData.description
            : getDescriptionPreview(partnerData.description, maxDescriptionLength)}
        </p>
        {partnerData.description.length > maxDescriptionLength && (
          <Button onClick={handleToggleDescription} variant="text" className="toggle-description">
            {isDescriptionExpanded ? 'Read less' : 'Read more'}
          </Button>
        )}
      </div>
      <Button variant="contained" className="partner-delete" onClick={handleDelete}>
        Delete
      </Button>
    </div>
  )
}

export default PartnerTile;