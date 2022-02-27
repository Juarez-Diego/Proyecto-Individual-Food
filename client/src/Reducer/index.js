
const initialState = {
    recipes: [],
    diets: []

  };


function rootReducer(state = initialState, action){
    switch(action.type) {
        case "GET_RECIPES":
            return {
                ...state,
                recipes: action.payload
            }

        case "GET_RECIPE_BY_NAME":
            return {
                ...state,
                recipes: action.payload
            }

        case "GET_DIETS":
            return {
                ...state,
                diets: action.payload
            }
            
        case "CREATE_RECIPE":
            return {
                ...state,
            }
        

        default: return state;
    }
};


export default rootReducer;