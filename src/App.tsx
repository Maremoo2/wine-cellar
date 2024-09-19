import React, { useState } from 'react';
import AddWineForm from './components/AddWineForm';
import WineList from './components/WineList';
import { Wine } from './types/Wine';

const App: React.FC = () => {
  const [wines, setWines] = useState<Wine[]>([]);

  const addWine = (newWine: Wine) => {
    setWines((prevWines) => [...prevWines, newWine]);
  };

  return (
    <div>
      <h1>Wine Cellar Tracker</h1>
      <AddWineForm addWine={addWine} />
      <WineList wines={wines} />
    </div>
  );
};

export default App;
