 import React, { useState } from "react";
import AddFilmForm from "./AddFilmForm";
const Validation=(props)=>{
    const [formValues, setFormValues] = useState({title:'', director: "", releaseYear: "", genre: "", rating: ""})
    const [errors, setErrors] = useState({});

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormValues((prev) => ({...prev, [name]: value}))
    }

    const validate = () => {
        const newErrors = {};
        if (!formValues.title) newErrors.title = "Title is required.";
        if (!formValues.director) newErrors.director = "Director is required.";
        if (!formValues.releaseYear || formValues.releaseYear <= 1500)
          newErrors.releaseYear = "Year must be greater than 1500.";
        if (!formValues.genre) newErrors.genre = "Genre is required.";
        if (
          !formValues.rating ||
          formValues.rating < 1 ||
          formValues.rating > 10
        )
          newErrors.rating = "Rating must be between 1 and 10.";
    
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
      };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            props.onAdd({ ...formValues});
            resetForm();
        }
    };
    
    const resetForm = () => {
        setFormValues({
          title: "",
          director: "",
          releaseYear: "",
          genre: "",
          rating: "",
        });
        setErrors({});
      };
    return(<div>
        <AddFilmForm formValues={formValues} inputChange={handleChange} errors={errors} onSubmit={handleSubmit} onReset={resetForm}/>
    </div>)
}
export default Validation;