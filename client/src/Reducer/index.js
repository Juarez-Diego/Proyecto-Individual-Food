
const initialState = {
    recipes: [],
    diets: [],
    recipeDetail: [],
    allRecipesCopy: []
  };


function rootReducer(state = initialState, action){
    switch(action.type) {
        case "GET_RECIPES":
            return {
                ...state,
                recipes: action.payload,
                allRecipesCopy: action.payload
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
        
        case "RECIPE_DETAILS":
                return {
                    ...state,
                    recipeDetail: action.payload
                }

        case "SORT_ALPHABETICALLY":
            const alpha = action.payload === "Ascending" ?
            state.recipes.sort((a, b) => {
                if (a.name_of_dish > b.name_of_dish) return 1;
                if (b.name_of_dish > a.name_of_dish) return -1;
                return 0;
            }) :
            state.recipes.sort((a, b) => {
                if (a.name_of_dish > b.name_of_dish) return -1;
                if (b.name_of_dish > a.name_of_dish) return 1;
                return 0;
            });
            return {
                ...state,
                recipes: alpha
            }

        case "SORT_BY_SCORE":
            const sortScore = action.payload === "high" ?
                state.recipes.sort((a, b) => {
                    if (a.score > b.score) return 1;
                    if (b.score > a.score) return -1;
                    return 0;
                }) :
                state.recipes.sort((a, b) => {
                    if (a.score > b.score) return -1;
                    if (b.score > a.score) return 1;
                    return 0;
                });
            return {
                ...state,
                recipes: sortScore
            }
            

        case "SORT_BY_DIETS":
            const getDiet = state.allRecipesCopy
            console.log(getDiet)
            const sorting = action.payload === "all" ? getDiet :
            getDiet.filter(function(r) {
                if(r.diets) {
                    if(r.diets.includes(action.payload)) {
                        return r
                    }
                }
            })

             return {
                ...state,
                 recipes: sorting
             }


        default: return state;
    }
};




export default rootReducer;