import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {
    orders: [],
    loading: false,
    purchased: false
}

const purchaseInit = (state, action) => {
    return updateObject(state, {purchased: false});
}

const purchaseBurgerStart = (state, action) => {
    return updateObject(state, {loading: true});
}

const purchaseBurgerSuccess = (state, action) => {
    const newOrder = updateObject(action.orderData, {id: action.orderId});
            // const newOrder = {
            //     ...action.orderData,
            //     id: action.orderId
            // }
    return updateObject(state, {
        loading: false,
        orders: state.orders.concat(newOrder),
        purchased: true
    });
}

const purchaseBurgerFail = (state, action) => {
    return updateObject(state, {loading: false});
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PURCHASE_INIT: return purchaseInit(state, action);            
            // return {
            //     ...state,
            //     purchased: false
            // }
        case actionTypes.PURCHASE_BURGER_START: return purchaseBurgerStart(state, action);            
            // return {
            //     ...state,
            //     loading: true
            // }
        case actionTypes.PURCHASE_BURGER_SUCCESS: return purchaseBurgerSuccess(state, action);            
            // return {
            //     ...state,
            //     loading: false,
            //     orders: state.orders.concat(newOrder),
            //     purchased: true
            // };
        case actionTypes.PURCHASE_BURGER_FAIL: return purchaseBurgerFail(state, action);            
            // return {
            //     ...state,
            //     loading: false
            // };
        case actionTypes.FETCH_ORDERS_START:
            return updateObject(state, {loading: true});
            // return {
            //     ...state,
            //     loading: true
            // };
        case actionTypes.FETCH_ORDERS_SUCCESS:
            return updateObject(state, {
                orders: action.orders,
                loading: false
            });
            // return {
            //     ...state,
            //     orders: action.orders,
            //     loading: false
            // };
        case actionTypes.FETCH_ORDERS_FAIL:
            return updateObject(state, {loading: false});
            // return {
            //     ...state,
            //     loading: false
            // }
        default:
            return state;
    }
}

export default reducer;