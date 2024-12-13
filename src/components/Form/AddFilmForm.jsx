import React from "react";

const AddFilmForm =(props)=>{
    return(<div className="new-form">
        <div className="">
            <label htmlFor="title">Titre</label>
            <input type="text" name="title" id="title" value={props.formValues.title} onChange={props.inputChange} />
            {props.errors.title && <p className="error">{props.errors.title}</p>}   
        </div>
        <div className="">
            <label htmlFor="director">Director</label>
            <input type="text" name="director" id="director" value={props.formValues.director} onChange={props.inputChange} />
            {props.errors.director && <p className="error">{props.errors.director}</p>}   
        </div>
        <div className="">
            <label htmlFor="releaseYear">Release Year</label>
            <input type="text" name="releaseYear" id="releaseYear" onChange={props.inputChange} value={props.formValues.releaseYear}/>
            {props.errors.releaseYear && <p className="error">{props.errors.releaseYear}</p>}   

        </div>
        <div>
        <label>Genre</label>
            <select name="genre" value={props.formValues.genre} onChange={props.inputChange}>
                <option value="">Select a genre</option>
                <option value="Fantasy">Action</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Dystopian">Crime</option>
                <option value="Classic">Drama</option>
                <option value="Adventure">Historical Drama</option>
                <option value="Historical Fiction">Science Fiction</option>
                <option value="Philosophical Fiction">Comedy-Drama</option>
            </select>
            {props.errors.genre && <p className="error">{props.errors.genre}</p>}   
        </div>
        <div>
            <label>Rating</label>
            <input type="number" name="rating" value={props.formValues.rating} onChange={props.inputChange}/>
            {props.errors.rating && <p className="error">{props.errors.rating}</p>}   
        </div>
        <div>
        <button type="submit" onClick={props.onSubmit}>Add Book</button>
        <button type="button" onClick={props.onReset}> Reset </button>
      </div>
    </div>)
}
export default AddFilmForm;