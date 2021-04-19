import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCES,
    PRODUCT_LIST_FAIL
} from '../constants/productConstans'

export const productListReducer = ( state = { products : []}, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST :
            return { loading: true, products: [] }
        case PRODUCT_LIST_SUCCES :
            return { loading: false, products: action.payload }
        case PRODUCT_LIST_FAIL :
            return { loading: false, error: action.payload }
        default:
            return state
    }
}