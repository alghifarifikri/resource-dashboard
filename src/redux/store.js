import { configureStore } from '@reduxjs/toolkit'
import customerReducer from './slice/customerSlice'
import supplierReducer from './slice/supplierSlice'
import orderReducer from './slice/orderSlice'
import authReducer from './slice/authSlice'

const initialState = {
  sidebarShow: true,
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest }
    default:
      return state
  }
}

const store = configureStore({
  reducer: {
    customers: customerReducer,
    suppliers: supplierReducer,
    orders: orderReducer,
    auth: authReducer,
    changeState: changeState,
  },
})

export default store
