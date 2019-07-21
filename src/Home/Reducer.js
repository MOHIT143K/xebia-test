import * as ActionTypes from './ActionTypes';

// Default State for Home Module
const initialState = {
    searchedPlanets: {
        results: []
    },
    searchTerm: '',
    selectedPlanet: {}
};

export default function (state = initialState, action) {
    switch (action.type) {

        case ActionTypes.SET_SEARCHED_PLANETS:
            return {
                ...state,
                searchedPlanets: {
                    results: [...action.payload.results],
                }
            }

        case ActionTypes.ON_CHANGE_SEARCH:
            return Object.assign({}, state, {
                searchedPlanets: {
                    results: []
                },
                searchTerm: action.payload
            });
        
        case ActionTypes.SET_SELECTED_SEARCHED_PLANETS: 
            return Object.assign({}, state, {
                selectedPlanet : action.payload
            })

        default:
            return state;
    }
}
