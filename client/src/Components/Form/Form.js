import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { createRecipe } from "../../Actions";
import { getDiets } from "../../Actions";


import "../Form/Form.css"


function formValidation(input) {
    let formErrors = {};

    if (!input.name_of_dish) {
        formErrors.name_of_dish = "Title is required";
    }
    if (!input.summary) {
        formErrors.summary = "Summary is required";
    }
    if (!input.steps) {
        formErrors.steps = "Instructions are required";
    }
    if (input.score < 0 || input.score > 100) {
        formErrors.score = "Score must between 1 and 100";
    }
    if (input.Health_Level < 0 || input.Health_Level > 100) {
        formErrors.Health_Level = "Health Score must between 1 and 100";
    }
    return formErrors;
};

export function Form() {
const dispatch = useDispatch()
const allDiets = useSelector(state => state.diets)
const [formErrors, setFormErrors] = useState({})

const [input, setInput] = useState({
    name_of_dish: "",
    score: 0,
    Health_Level: 0,
    image: "",
    steps: "",
    summary: "",
    diets: []
})


useEffect(() => {
    dispatch(getDiets())
}, [])


function handleSubmit(e) {
    setInput({
        ...input,
        [e.target.name] : e.target.value
    })
    setFormErrors(formValidation({
        ...input,
        [e.target.name] : e.target.value
    }))
}

function checkBoxes(e){
    if(e.target.checked){
        setInput({
            ...input,
            diets: [...input.diets, e.target.value]
        })
    }
}

function submit(e){
    e.preventDefault()
    if(Object.values(formErrors).length > 0) {
        alert("Please fill in all the required fields")
    } else{
        dispatch(createRecipe(input))
    alert("Recipe created successfully!")
    }
    
}
   
    return(
        <div className="form">
            <h1 className="form_main_title">Fill in the fields</h1>
            
            <form onSubmit={submit}>
                <div className="form_text">
                <label>Title: </label>
                <input type="text"
                value={input.name_of_dish}
                name="name_of_dish"
                onChange={handleSubmit}
                /> 
                {formErrors.name_of_dish && (<p className="form_warning">{formErrors.name_of_dish}</p>)} 
                <br/>


                <label>Score: </label>
                <input type="number"
                value={input.score}
                name="score"
                onChange={handleSubmit}
                />
                {formErrors.score && (<p className="form_warning">{formErrors.score}</p>)}
                <br/>

                <label>Health Score: </label>
                <input type="number"
                value={input.Health_Level}
                name="Health_Level"
                onChange={handleSubmit}
                />
                {formErrors.Health_Level && (<p className="form_warning">{formErrors.Health_Level}</p>)} 
                <br/>

                <label>Image URL: </label>
                <input type="text"
                value={input.image}
                name="image"
                onChange={handleSubmit}
                />
                <br/>

                <label>Step by Step: </label>
                <textarea 
                value={input.steps}
                name="steps"
                onChange={handleSubmit}
                />
                {formErrors.steps && (<p className="form_warning">{formErrors.steps}</p>)} 
                <br/>

                <label>Summary: </label>
                <textarea 
                value={input.summary}
                name="summary"
                onChange={handleSubmit}
                />
                {formErrors.summary && (<p className="form_warning">{formErrors.summary}</p>)} 
                <br/>
                </div>
               


                <div className="form_checkbox">
                <h4 className="form_diet_title">Diets: </h4>

                <label className="form_boxes"> Gluten Free 
                <input 
                type="checkbox"
                value="gluten free"
                onChange={(e) => checkBoxes(e)}
                />
                
                </label>

                <label className="form_boxes"> Ketogenic 
                <input 
                type="checkbox"
                value="dairy free" 
                onChange={(e) => checkBoxes(e)}
                />
                </label>


                <label className="form_boxes"> Vegetarian 
                <input 
                type="checkbox"
                value="vegetarian"
                onChange={(e) => checkBoxes(e)}
                />
                </label>



                <label className="form_boxes"> Lacto-Vegetarian 
                <input 
                type="checkbox"
                value="lacto vegetarian"
                onChange={(e) => checkBoxes(e)}
                />
                
                </label>


                <label className="form_boxes"> Ovo-Vegetarian 
                <input 
                type="checkbox"
                value="lacto ovo vegetarian"
                onChange={(e) => checkBoxes(e)}
                />
                </label>


                <label className="form_boxes"> Vegan 
                <input 
                type="checkbox"
                value="vegan"
                onChange={(e) => checkBoxes(e)}
                />
                </label>


                <label className="form_boxes"> Pescetarian 
                <input 
                type="checkbox"
                value="pescatarian"
                onChange={(e) => checkBoxes(e)}
                />
                </label>


                <label className="form_boxes"> Paleo 
                <input 
                type="checkbox"
                value="paleolithic"
                onChange={(e) => checkBoxes(e)}
                />
                </label>


                <label className="form_boxes"> Primal 
                <input 
                type="checkbox"
                value="primal"
                onChange={(e) => checkBoxes(e)}
                />
                </label>


                <label className="form_boxes"> Whole30 
                <input 
                type="checkbox"
                value="whole 30"
                onChange={(e) => checkBoxes(e)}
                />
                </label>
                </div>


                <button className="form_button">Create Recipe</button>
            </form>
        </div>
    )
}

export default Form;