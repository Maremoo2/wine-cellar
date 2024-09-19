export interface Wine {
    id: number;
    name: string;
    vintage: number;
    wineType: string;
    countryRegion: string;
    grapeVariety: string;
    productNumber?: string;
    producer: string;
    drinkWindowFrom: string;
    drinkWindowTo: string;
    method: string;
    quantity: number;
    tastingNotes: string;
    image?: string;  // Optional field for the image URL
  }
  