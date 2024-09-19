import React, { useState } from 'react';
import { Wine } from '../types/Wine';

interface WineListProps {
  wines: Wine[];
}

const WineList: React.FC<WineListProps> = ({ wines }) => {
  const [expandedWine, setExpandedWine] = useState<number | null>(null); // To track which wine is expanded

  // Sort wines by "Drink From" date, treating "Now" as the earliest
  const sortByDrinkFrom = (wines: Wine[]) => {
    return wines.sort((a, b) => {
      if (a.drinkWindowFrom === 'Now') return -1;
      if (b.drinkWindowFrom === 'Now') return 1;
      return parseInt(a.drinkWindowFrom) - parseInt(b.drinkWindowFrom);
    });
  };

  // Categorize wines into White, Red, Bubbles
  const whiteWines = sortByDrinkFrom(wines.filter((wine) => wine.wineType === 'White'));
  const redWines = sortByDrinkFrom(wines.filter((wine) => wine.wineType === 'Red'));
  const bubblesWines = sortByDrinkFrom(wines.filter((wine) => wine.wineType === 'Bubbles'));

  const toggleExpand = (id: number) => {
    setExpandedWine((prev) => (prev === id ? null : id)); // Toggle between expanded and collapsed state
  };

  const renderWineList = (wineList: Wine[], category: string) => (
    <div>
      <h2>{category} Wines</h2>
      <ul>
        {wineList.map((wine) => (
          <li key={wine.id} style={{ marginBottom: '10px', listStyleType: 'none' }}>
            <div style={{ cursor: 'pointer' }} onClick={() => toggleExpand(wine.id)}>
              <strong>{wine.name}</strong> ({wine.vintage}) - {wine.quantity} bottles
              {expandedWine === wine.id ? ' [Show Less]' : ' [Show More]'}
            </div>

            {expandedWine === wine.id && (
              <div style={{ marginLeft: '20px' }}>
                <p><strong>Country, Region:</strong> {wine.countryRegion}</p>
                <p><strong>Grape Variety:</strong> {wine.grapeVariety}</p>
                {wine.productNumber && <p><strong>Product Number:</strong> {wine.productNumber}</p>}
                <p><strong>Producer:</strong> {wine.producer}</p>
                <p><strong>Drink Window:</strong> {wine.drinkWindowFrom} - {wine.drinkWindowTo}</p>
                <p><strong>Production Method:</strong> {wine.method}</p>
                <p><strong>Quantity:</strong> {wine.quantity} bottles</p>
                <p><strong>Tasting Notes:</strong> {wine.tastingNotes}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div>
      {whiteWines.length > 0 && renderWineList(whiteWines, 'White')}
      {redWines.length > 0 && renderWineList(redWines, 'Red')}
      {bubblesWines.length > 0 && renderWineList(bubblesWines, 'Bubbles')}
    </div>
  );
};

export default WineList;
