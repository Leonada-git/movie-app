import React, { useState } from "react";
import SearchBar from "../inputs/SearchBar";
import SortButtons from "../inputs/SortButtons";
import MovieList from "./MovieList";
import Pagination from "./pagination";
import Favoris from "./Favoris";

const Filter = (props) => {
  const [title, setTitle] = useState("");
  const [sort, setSort] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageFav, setCurrentPageFav] = useState(1);
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const [selectedFilm, setSelectedFilm] = useState(null); 
  const filmPerPage = 5;

  const SearchResult = () => {
    let Films = props.films || [];
    let result = Films.filter((film) =>
      (film.title || "" ).toLowerCase().includes(title.toLowerCase()) || (film.genre || "" ).toLowerCase().includes(title.toLowerCase())
    );

    result = result.sort((a, b) => {
      switch (sort) {
        case "note":
          return b.rating - a.rating;
        case "annee":
          return b.releaseYear - a.releaseYear;
        default:
          return 0;
      }
    });

    return result;
  };

  const lastFilm = currentPage * filmPerPage;
  const firstFilm = lastFilm - filmPerPage;
  const currentFilms = SearchResult().slice(firstFilm, lastFilm);
  const totalPages = Math.ceil(SearchResult().length / filmPerPage);
  const lastFavFilm = currentPageFav * filmPerPage;
  const firstFavFilm = lastFavFilm - filmPerPage;
  const currentFavorites = favorites.slice(firstFavFilm, lastFavFilm);
  const totalFavPages = Math.ceil(favorites.length / filmPerPage);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };
  const handlePageChangeFav = (newPage) => {
    if (newPage > 0 && newPage <= totalFavPages) {
      setCurrentPageFav(newPage);
    }
  };
  const handleAddToFavorites = (filmTitle) => {
    const selectedFilm = props.films.find((film) => film.title === filmTitle);
    if (selectedFilm && !favorites.includes(selectedFilm)) {
      setFavorites([...favorites, selectedFilm]);
    }
  };

  const handleRemoveFromFavorites = (filmTitle) => {
    setFavorites(favorites.filter((film) => film.title !== filmTitle));
  };

  const handleDetails = (film) => {
    setSelectedFilm(film);
  };

  return (
    <div>
      <div className="filter-section">
        <SearchBar onSearch={(newTitle) => {
            setTitle(newTitle);
            setCurrentPage(1); 
          }} />
        <SortButtons onSelect={(newSort) => {
            setSort(newSort);
            setCurrentPage(1);
          }} />
      </div>
      <div className="favoriebutton">
        <button onClick={() => setShowFavorites(!showFavorites)}>
          {showFavorites ? "Back to All Movies" : "View Favorites"}
        </button>
      </div>
      {showFavorites ? (
        <div>
          <Favoris  Films={currentFavorites} onRemove={handleRemoveFromFavorites} selectedFilm={selectedFilm} currentFilms={currentFilms} onDetails={handleDetails} />
          <Pagination
            currentPage={currentPageFav}
            totalPages={totalFavPages}
            onPageChange={handlePageChangeFav}
          />
        </div>
      ) : (
        <div>
          <MovieList currentFilms={currentFilms} onSave={handleAddToFavorites} savedFilms={favorites} onDetails={handleDetails} selectedFilm={selectedFilm}/>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
};

export default Filter;
