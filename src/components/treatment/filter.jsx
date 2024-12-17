import React, { useState } from "react";
import SearchBar from "../inputs/SearchBar";
import SortButtons from "../inputs/SortButtons";
import MovieList from "./MovieList";
import Pagination from "./pagination";
import { useNavigate } from "react-router-dom";

const Filter = (props) => {
  const [title, setTitle] = useState("");
  const [sort, setSort] = useState("");
  const [currentPage, setCurrentPage] = useState(1); 
  const [favorites, setFavorites] = useState([]);
  const [selectedFilm, setSelectedFilm] = useState(null); 
  const filmPerPage = 5;
  const navigate = useNavigate();


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

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };
  const handleAddToFavorites = (filmTitle) => {
    const selectedFilm = props.films.find((film) => film.title === filmTitle);
    if (selectedFilm && !favorites.includes(selectedFilm)) {
      setFavorites([...favorites, selectedFilm]);
    }
  };

  const handleDetails = (film) => {
    setSelectedFilm(film);
  };
  const handleShowFav=()=>{
    navigate("/favories")
  }
  return (
    <div>
      
      <div className="favoriebutton">
        <button onClick={handleShowFav}> View Favorites </button>
      </div>  
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
        <MovieList currentFilms={currentFilms} onSave={handleAddToFavorites} savedFilms={favorites} onDetails={handleDetails} selectedFilm={selectedFilm}/>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
      
    </div>
  );
};

export default Filter;