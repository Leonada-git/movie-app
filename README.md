
# React Movie Application

## Description
This application is designed to create a small React application that uses a JSON dataset (information about 10 films) to display and interact with these data. The main objective is to demonstrate how to manipulate and display data in a React application with various functionalities including search, sort, and detailed view features.

## Features
1. **Display a list of films**: The application initially displays a list of films using a JSON dataset provided within the application.
2. **Search functionality**: Users can search for films by title or genre to filter the displayed list of films.
3. **Sort functionality**: A button allows users to sort films by rating (from highest to lowest) or by release year (from newest to oldest).
4. **Detailed view**: Clicking on a film's title will display detailed information about that film, including the director, release year, genre, and rating.

## Installation
To run the application locally, follow these steps:

1. **Clone the repository**:
   ```bash
   https://github.com/Leonada-git/movie-app.git
   cd movie-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. **Open your browser** and go to `http://localhost:3000` to view the application.

## Usage
1. **Viewing the Film List**:
   - Upon loading, the application displays a list of 10 films from the provided JSON dataset.
   - The list includes film titles and genres.

2. **Search Functionality**:
   - Use the search bar to filter films by title or genre. As you type, the displayed list updates in real-time to show matching results.

3. **Sort Functionality**:
   - Use the "Sort by Rating" button to sort the displayed films by their rating (highest to lowest).
   - Use the "Sort by Year" button to sort the films by release year (newest to oldest).

4. **Detailed View**:
   - Clicking on a film title reveals detailed information including:
     - Director
     - Release year
     - Genre
     - Rating

5. **Favorites**:
   - Toggle between viewing all films and your favorite films by clicking the "View Favorites" button.
   - In the favorites view, you can remove films from your favorites list by clicking on them.

## Code Overview
- **`App.js`**: Contains the main application logic, including state management for films and favorite functionality.
- **`Filter.js`**: Provides the interface for search, sort, and favorite management, including pagination for handling large datasets.
- **`MovieList.js`**: Displays the list of films based on the current search and sort criteria.
- **`Favoris.js`**: Displays the user's favorite films with pagination.
- **`SearchBar.js`** and **`SortButtons.js`**: Components for handling search and sort actions.
- **`Validation.js`**: Form component for adding new films (hidden when in favorite view).


## Contact
For any questions or feedback, please reach out via(mailto:nadagourmaj@gmail.com).
