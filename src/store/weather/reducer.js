export const initialState = {
    loading: true,
    cities: [],
    errorMessage: null
};

export default function reduce(state = initialState, action = {}){
    switch (action.type) {
        case "SEARCH_CITIES_REQUEST":
            return {
                ...state,
                loading: true,
                errorMessage: null
            };
        case "SEARCH_CITIES_SUCCESS":
            return {
                ...state,
                loading: false,
                cities: action.payload
            };
        case "SEARCH_CITIES_FAILURE":
            return {
                ...state,
                loading: false,
                errorMessage: action.error
            };
        default:
            return state;
    }
};
