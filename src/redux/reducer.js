const rootReducer = (state, action) => {
    switch(action.type) {
        case "filter": return {
            ...state,
            type: action.type_,
            fuel: action.fuel
        }
        default : return state;
    }
}

export default rootReducer;

