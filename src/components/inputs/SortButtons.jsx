import React from "react";

const SortButtons=(props)=>{
    return(<div className="sort buttons">
        <button className="sortbutton" onClick={() => props.onSelect("note")}>Trier par note</button>
        <button className="sortbutton" onClick={() => props.onSelect("annee")}>Trier par année</button>

    </div>)
}
export default SortButtons;