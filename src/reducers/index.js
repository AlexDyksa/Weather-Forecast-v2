import { CHANGED_CITY_NAME } from '../actions/types';

const initialState = {
    enteredCityName: ''
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGED_CITY_NAME:
            return { ...state, enteredCityName: action.payload };
        default:
            return state;
    }
};


export default rootReducer;
