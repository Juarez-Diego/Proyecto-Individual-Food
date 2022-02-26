
const initialState = {
    recipes: [],

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

        default: return state;
    }
};


export default rootReducer;