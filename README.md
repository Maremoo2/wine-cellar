# Wine Cellar Tracker

**Wine Cellar Tracker** is a React-based web application that allows users to manage and track their wine collection. Wines can be categorized, added, edited, and stored locally in the browser using **Local Storage**, ensuring persistence even after refreshing the page. The app supports detailed wine information, collapsible views for easy navigation, and categorized wines based on type (White, Red, or Bubbles).

## To Clear the Local Storage (optional):
If you ever need to clear the local storage data (e.g., for testing), you can run the following command in the browser's developer console:
localStorage.removeItem('wines');

## Features

1. **Add Wine**:
   - Input detailed information about your wines, including:
     - Name
     - Vintage
     - Wine Type (White, Red, or Bubbles)
     - Country, Region
     - Grape Variety
     - Product Number (optional)
     - Producer
     - Drink Window (from - to)
     - Production Method
     - Quantity
     - Tasting Notes
     - Optionally upload an image of the wine.
   - Wines are saved locally in the browser using **Local Storage**, so the data persists even after refreshing the page or closing the browser.

2. **Edit Wine**:
   - Each wine entry can be edited.
   - Click the **"Edit"** button next to a wine to populate the form with the current details.
   - Update the wine’s details and save them back to Local Storage.

3. **Collapsible Wine Entries**:
   - Wine entries are collapsible to reduce clutter and provide easy navigation.
   - The wine’s name, vintage, and quantity are shown by default, and you can expand a wine entry to view the detailed information.

4. **Categorized by Wine Type**:
   - Wines are automatically categorized into **White**, **Red**, or **Bubbles** based on their type.
   - Wines are sorted by their "Drink From" date, with wines that are ready to drink now or soon appearing first.

5. **Local Storage Persistence**:
   - All added and edited wines are saved in the browser's **Local Storage**, ensuring that the collection remains intact between page reloads.

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- [npm](https://www.npmjs.com/) installed (usually comes with Node.js).

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/wine-cellar-tracker.git
   cd wine-cellar-tracker
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the app:**

   ```bash
   npm start
   ```

   The app will be available at `http://localhost:3000` in your browser.

## Usage

### Adding a Wine

1. Fill out the form with details about the wine, such as its name, vintage, type, region, and tasting notes.
2. Optionally, upload an image of the wine.
3. Click **Add Wine** to add the wine to your collection. The wine will be stored in the app and saved in **Local Storage**.

### Editing a Wine

1. Next to each wine entry, there is an **Edit** button.
2. Clicking **Edit** will populate the form with the current wine details.
3. Modify any details as needed and click **Update Wine** to save the changes. The wine entry will be updated in **Local Storage**.

### Viewing and Organizing Wines

1. Wines are categorized into **White**, **Red**, and **Bubbles**.
2. Each wine can be expanded or collapsed by clicking on it. In the collapsed view, only the name, vintage, and quantity are displayed. In the expanded view, all details such as tasting notes, production method, and drink window are shown.
3. Wines within each category are sorted by the **"Drink From"** date, with "Now" or earlier years appearing at the top.

## Project Structure

```
wine-cellar-tracker/
│
├── src/
│   ├── components/
│   │   ├── AddWineForm.tsx    # Form for adding or editing a wine
│   │   ├── WineList.tsx       # Displays the categorized list of wines
│   │
│   ├── types/
│   │   ├── Wine.ts            # Wine type definition
│   │
│   ├── App.tsx                # Main application component
│   ├── index.tsx              # Entry point for the React app
│
├── public/                    # Static public assets
│
├── package.json               # Project metadata and dependencies
├── README.md                  # Readme file
└── ...
```

## Future Enhancements

- **Delete Wines**: Add the ability to remove wines from the collection.
- **Search or Filter**: Implement a search bar or filters to easily find specific wines by name, vintage, or region.
- **Favorites**: Allow users to mark certain wines as favorites for easy access.
- **More Categories**: Add more wine types or allow users to define custom categories.
- **Wine Rating**: Implement a system for rating wines within the app.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
