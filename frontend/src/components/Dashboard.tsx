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
  const [sortOrder, setSortOrder] = useState<string>('asc');
  const [filterActive, setFilterActive] = useState<boolean | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>(''); // Add a state for the search query

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

  /* FILTERS */
  
  const handleSortOrderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(event.target.value);
  };

  const handleFilterActiveChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterActive(event.target.value === 'all' ? null : event.target.value === 'active');
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value); 
  };

  // sort and filter partners based on the available filters
  const sortedAndFilteredPartners = partners
    .filter((partner) => {
      if (searchQuery) { 
        const query = searchQuery.toLowerCase();
        return (
          partner.name.toLowerCase().includes(query) ||
          partner.description.toLowerCase().includes(query) ||
          partner.websiteUrl.toLowerCase().includes(query)
        );
      }
      return true; 
    })
    .filter((partner) => (filterActive === null ? true : partner.isActive === filterActive))
    .sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });

  return (
    <div id="main-content">
      <div id="main-partners-grid">
        <div id="main-entry-card">
          <EntryCard />
          <div className="filters">
            <select value={sortOrder} onChange={handleSortOrderChange}>
              <option value="asc">Sort by Title: A-Z</option>
              <option value="desc">Sort by Title: Z-A</option>
            </select>

            <select value={filterActive === null ? 'all' : filterActive ? 'active' : 'inactive'} onChange={handleFilterActiveChange}>
              <option value="all">Show All</option>
              <option value="active">Show Active Only</option>
              <option value="inactive">Show Inactive Only</option>
            </select>

            <input
              type="search"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search partners"
            />
          </div>
        </div>
        {sortedAndFilteredPartners.map((partner) => (
          <PartnerTile key={partner.name} partnerData={partner} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;