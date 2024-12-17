import React, { useState } from "react";
import SearchBar from "../inputs/SearchBar";
import SortButtons from "../inputs/SortButtons";
import Pagination from "./pagination";
import Favories from "./FavorieList";
import { useNavigate } from "react-router-dom";

const FavorieLogic = (props) => {
  const [title, setTitle] = useState("");
  const [sort, setSort] = useState("");
  const [currentPageFav, setCurrentPageFav] = useState(1);
  const [favorites, setFavorites] = useState([]);
  const [selectedFilm, setSelectedFilm] = useState(null); 
  const filmPerPage = 5;
  const navigate = useNavigate();

  const SearchResultFav = () => {
    let result = favorites.filter((film) =>
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

  const lastFavFilm = currentPageFav * filmPerPage;
  const firstFavFilm = lastFavFilm - filmPerPage;
  const currentFavorites = SearchResultFav().slice(firstFavFilm, lastFavFilm);
  const totalFavPages = Math.ceil(SearchResultFav().length / filmPerPage);

  const handlePageChangeFav = (newPage) => {
    if (newPage > 0 && newPage <= totalFavPages) {
      setCurrentPageFav(newPage);
    }
  };
  const handleRemoveFromFavorites = (filmTitle) => {
    setFavorites(favorites.filter((film) => film.title !== filmTitle));
  };

  const handleDetails = (film) => {
    setSelectedFilm(film);
  };
  const handleShowFav=()=>{
    navigate("/")
  }
  const fav = currentFavorites.length 
  return (
    <div>
        <div className="favoriebutton">
        <button onClick={handleShowFav}> Back to All Movies </button>
      </div>  
        <div className="main">
          <div className="filter-section">
          <SearchBar onSearch={(newTitle) => {
              setTitle(newTitle);
              setCurrentPageFav(1); 
            }} />
          <SortButtons onSelect={(newSort) => {
              setSort(newSort);
              setCurrentPageFav(1);
            }} />
        </div>
          <Favories  Films={currentFavorites} onRemove={handleRemoveFromFavorites} selectedFilm={selectedFilm} onDetails={handleDetails} />
          { fav > 0 && <Pagination currentPage={currentPageFav}totalPages={totalFavPages} onPageChange={handlePageChangeFav}/>}
          
        </div>
    </div>
  );
};

export default FavorieLogic;