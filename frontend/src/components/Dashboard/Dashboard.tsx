import { useState, useEffect } from 'react';
import PartnerTile from '../PartnerTile/PartnerTile';
import { PartnerData } from '../../types';
import EntryCard from '../EntryCard/EntryCard';

interface DashboardProps {}

/*
  The top-level component containing everything relevant to the dashboard,
  including information on each partner
*/
function Dashboard({ }: DashboardProps) {
  const [partners, setPartners] = useState<PartnerData[]>([]); // Initialize as an array

  // Load all partners on initial page load 
  useEffect(() => {
    fetch('http://localhost:4000/', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Fetched data:', data); // Log the fetched data
        if (data.sftt) {
          setPartners([data.sftt]); // Set partners to an array containing the single partner object
        } else {
          console.error('Fetched data does not contain the expected structure:', data);
        }
      })
      .catch((error) => {
        console.error('Error fetching partner data:', error);
      });
  }, []);

  return (
    <div id="main-content">
      <div id="main-partners-grid">
        <EntryCard />
        {partners.map((partner) => (
          <PartnerTile key={partner.name} partnerData={partner} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
