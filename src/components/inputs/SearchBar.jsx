import React from "react";

const  SearchBar=(props)=>{
    const HandelSearch=(e)=>{
        const value=e.target.value;
        props.onSearch(value);
    }
    return(<div className="search">
        <input type="text" name="title" id="title"  placeholder="Rechercher un film..." onChange={HandelSearch}/>
    </div>)
}
export default  SearchBar;