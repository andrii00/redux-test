import {
    ADD_PRODUCTS,
    DELETE_PRODUCT, FULL_PRODUCT,
    PUSH_NEW_PRODUCT,
    SET_LOADING_FALSE,
    SET_LOADING_TRUE
} from "../action.types/actionTypes";

const initialState = {
    products: [],
    isLoading: false
}


export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCTS: {
            return {
                ...state,
                products: action.payload
            }
        }
        case SET_LOADING_TRUE: {
            return {
                ...state,
                isLoading: true
            }
        }
        case SET_LOADING_FALSE: {
            return {
                ...state,
                isLoading: false
            }
        }
        case PUSH_NEW_PRODUCT: {
            return {
                ...state,
                products: [...state.products, action.payload]
            }
        }
        case DELETE_PRODUCT: {
            return {
                ...state,
                products: [...state.products.filter(product => product.id !== action.payload)]
            }
        }
        case FULL_PRODUCT: {
            return {
                ...state,
                products: [...state.products.filter(product => product.id === action.payload.id)]
            }
        }
        default:
            return state
    }
}