import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { createRecipe } from "../../Actions";
import { getDiets } from "../../Actions";

import "../Form/Form.css"

export function Form() {
const dispatch = useDispatch()
const allDiets = useSelector(state => state.diets)

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
}

function checkBoxes(e){
    if(e.target.checked){
        setInput({
            ...input,
            diets: [e.target.value ]
        })
    }
}

function submit(e){
    e.preventDefault()
    dispatch(createRecipe(input))
    alert("Recipe created successfully!")
}

    return(
        <div className="form">
            <h1>Componente Form</h1>
            <form onSubmit={submit}>
                <label>Title: </label>
                <input type="text"
                required 
                value={input.name_of_dish}
                name="name_of_dish"
                onChange={handleSubmit}
                />
                <br/>

                <label>Score: </label>
                <input type="number"
                value={input.score}
                name="score"
                onChange={handleSubmit}
                />
                <br/>

                <label>Health Score: </label>
                <input type="number"
                value={input.Health_Level}
                name="Health_Level"
                onChange={handleSubmit}
                />
                <br/>

                <label>Image URL: </label>
                <input type="text"
                value={input.image}
                name="image"
                onChange={handleSubmit}
                />
                <br/>

                <label>Step by Step: </label>
                <textarea required
                value={input.steps}
                name="steps"
                onChange={handleSubmit}
                />
                <br/>

                <label>Summary: </label>
                <textarea required
                value={input.summary}
                name="summary"
                onChange={handleSubmit}
                />
                <br/>


                <label>Diets: </label>
                <br/>

                <label> Gluten Free
                <input 
                type="checkbox"
                value="gluten free"
                onChange={(e) => checkBoxes(e)}
                />
                
                </label>

                <label> Ketogenic
                <input 
                type="checkbox"
                value="dairy free" 
                onChange={(e) => checkBoxes(e)}
                />
                </label>


                <label> Vegetarian
                <input 
                type="checkbox"
                value="vegetarian"
                onChange={(e) => checkBoxes(e)}
                />
                </label>



                <label> Lacto-Vegetarian
                <input 
                type="checkbox"
                value="lacto vegetarian"
                onChange={(e) => checkBoxes(e)}
                />
                
                </label>


                <label> Ovo-Vegetarian
                <input 
                type="checkbox"
                value="lacto ovo vegetarian"
                onChange={(e) => checkBoxes(e)}
                />
                </label>


                <label> Vegan
                <input 
                type="checkbox"
                value="vegan"
                onChange={(e) => checkBoxes(e)}
                />
                </label>


                <label> Pescetarian
                <input 
                type="checkbox"
                value="pescatarian"
                onChange={(e) => checkBoxes(e)}
                />
                </label>


                <label> Paleo
                <input 
                type="checkbox"
                value="paleolithic"
                onChange={(e) => checkBoxes(e)}
                />
                </label>


                <label> Primal
                <input 
                type="checkbox"
                value="primal"
                onChange={(e) => checkBoxes(e)}
                />
                </label>


                <label> Whole30
                <input 
                type="checkbox"
                value="whole 30"
                onChange={(e) => checkBoxes(e)}
                />
                </label>


                <button>Add Recipe</button>
            </form>
        </div>
    )
}

export default Form;