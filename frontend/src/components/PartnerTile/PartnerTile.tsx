import { Button } from "@mui/material";
import { PartnerData } from "../../types";
import './PartnerTile.css';

/*
  A block for a single partner, containing information for them
  along with any tools to manage said information
*/

interface PartnerTileProps {
  partnerData: PartnerData
}

function PartnerTile({ partnerData }: PartnerTileProps) {

  return (
    <div className="partner-tile">
      <div className="partner-info">
        <div className="partner-header">
          <h2>{partnerData.name}</h2>
          <img className="partner-thumbnail" src={partnerData.thumbnailUrl} />
        </div>
        <p>
            {partnerData.isActive ? (
              <span className="active-status">Active</span>
            ) : (
              <span className="inactive-status">Inactive</span>
            )}
          </p>
        <p>{partnerData.description}</p>
      </div>
      <Button variant="contained" className="entry-submissionButton">
        delete
      </Button>
    </div>
  )
}

export default PartnerTile;