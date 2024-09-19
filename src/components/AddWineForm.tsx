import React, { useState } from 'react';
import { Wine } from '../types/Wine';

interface AddWineFormProps {
  addWine: (wine: Wine) => void;
}

const AddWineForm: React.FC<AddWineFormProps> = ({ addWine }) => {
  const [wine, setWine] = useState<Wine>({
    id: Date.now(),
    name: '',
    vintage: new Date().getFullYear(),
    wineType: '', // Dropdown field for Wine Type
    countryRegion: '',
    grapeVariety: '',
    productNumber: '',
    producer: '',
    drinkWindowFrom: '',
    drinkWindowTo: '',
    method: '',
    quantity: 0,
    tastingNotes: '',
    image: '', // Optional image
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setWine((prevWine) => ({
      ...prevWine,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addWine(wine);
    setWine({
      id: Date.now(),
      name: '',
      vintage: new Date().getFullYear(),
      wineType: '',
      countryRegion: '',
      grapeVariety: '',
      productNumber: '',
      producer: '',
      drinkWindowFrom: '',
      drinkWindowTo: '',
      method: '',
      quantity: 0,
      tastingNotes: '',
      image: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={wine.name} onChange={handleInputChange} placeholder="Wine Name" required />
      <input type="number" name="vintage" value={wine.vintage} onChange={handleInputChange} placeholder="Vintage" required />

      {/* Dropdown for Wine Type */}
      <select name="wineType" value={wine.wineType} onChange={handleInputChange} required>
        <option value="">Select Wine Type</option>
        <option value="White">White</option>
        <option value="Red">Red</option>
        <option value="Bubbles">Bubbles</option>
      </select>

      <input type="text" name="countryRegion" value={wine.countryRegion} onChange={handleInputChange} placeholder="Country, Region" required />
      <input type="text" name="grapeVariety" value={wine.grapeVariety} onChange={handleInputChange} placeholder="Grape Variety" required />
      <input type="text" name="productNumber" value={wine.productNumber} onChange={handleInputChange} placeholder="Product Number (optional)" />
      <input type="text" name="producer" value={wine.producer} onChange={handleInputChange} placeholder="Producer" required />

      <div style={{ display: 'flex', gap: '10px' }}>
        <input type="text" name="drinkWindowFrom" value={wine.drinkWindowFrom} onChange={handleInputChange} placeholder="Drink From" />
        <input type="text" name="drinkWindowTo" value={wine.drinkWindowTo} onChange={handleInputChange} placeholder="Drink To" />
      </div>

      <textarea name="method" value={wine.method} onChange={handleInputChange} placeholder="Production Method"></textarea>
      <input type="number" name="quantity" value={wine.quantity} onChange={handleInputChange} placeholder="Quantity" required />
      <textarea name="tastingNotes" value={wine.tastingNotes} onChange={handleInputChange} placeholder="Tasting Notes"></textarea>

      <button type="submit">Add Wine</button>
    </form>
  );
};

export default AddWineForm;
