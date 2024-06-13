import { useState, useEffect } from 'react';
import PartnerTile from './PartnerTile/PartnerTile';
import { PartnerData } from '../types';
import EntryCard from './EntryCard/EntryCard';
import Footer from './Footer/Footer';

interface DashboardProps {

}

interface BackendResponse {
  [key: string]: PartnerData;
}

/*
  The top-level component containing everything relevant to the dashboard,
  including information on each partner
*/
function Dashboard({ }: DashboardProps) {
  const [partners, setPartners] = useState<PartnerData[]>([]);

  // load partners on page initialization
  useEffect(() => {
    fetch('http://localhost:4000/', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data: BackendResponse) => {
        const partnersArray = Object.values(data);
        setPartners(partnersArray);
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
      <Footer />
    </div>
  );
}

export default Dashboard;
