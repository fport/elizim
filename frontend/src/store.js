import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer, productDetailsReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'

/* src/reducer rootunda olusturdugumuz reducerlarimizi combineReducer ile 
birlestiriyoruz. Redux DevTools kisminda gordugun stateler burdan geliyor */
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer
})

/* localstorage'a daha onceden sepete urun eklendiyse bunu localstorage'a ekliyoruz ve
uygulamayi tekrardan kullanici geri dondugunde bu datayi alip initial state'e koyuyoruz
cart kismina gelen datayi kaydettigimiz datayi cekip initial state yerlestiriyoruz */
const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

/* Uygulama ilk calistiginda baslangic state olarak aldigi state */
const initialState = {
  cart: { cartItems: cartItemsFromStorage }
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
