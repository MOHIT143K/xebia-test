import * as ActionTypes from './ActionTypes';
import axios from 'axios';

// Function used to set searched planet in reducer.
export const setSearchedPlanet = (payload) => {
    return {
        type: ActionTypes.SET_SEARCHED_PLANETS,
        payload
    };
};

export const setSelectedSearchedPlanet = (payload) => {
    return {
        type: ActionTypes.SET_SELECTED_SEARCHED_PLANETS,
        payload
    };
};

// Action to get result against search value.
export const performSearch = (searchTerm) => {
    return dispatch => {
        return axios.get('https://swapi.co/api/planets/', {
            params: {
                search: searchTerm
            }
        })
        .then(function (response) {
            dispatch(setSearchedPlanet(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
    };
};

// Fucntion used to update search value
export const onChangeSearch = (payload) => {
    return {
        type: ActionTypes.ON_CHANGE_SEARCH,
        payload
    }
};

