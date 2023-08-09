import { createSlice } from '@reduxjs/toolkit'
import { deleteApi, fetchApi, postApi, updateApi } from 'src/utils/api'

export const fetch = () => async (dispatch) => {
  dispatch(started())
  try {
    const response = await fetchApi('http://localhost:3001/api/supplier')
    if (response) {
      dispatch(getSupplierSuccess(response))
    }
  } catch (err) {
    console.log({ err })
    dispatch(failed(err))
  }
}

export const post = (payload) => async (dispatch) => {
  dispatch(started())
  try {
    const response = await postApi(payload, 'http://localhost:3001/api/supplier')
    if (response) {
      dispatch(addSupplierSuccess(response))
      window.alert('Add Data Successfully')
    }
  } catch (err) {
    console.log({ err })
    window.alert(err.message)
    dispatch(failed(err.message))
  }
}

export const update = (payload) => async (dispatch) => {
  dispatch(started())
  try {
    const response = await updateApi(payload, `http://localhost:3001/api/supplier/${payload.id}`)
    if (response) {
      dispatch(updateSupplierSuccess(response))
      window.alert('Update Data Successfully')
    }
  } catch (err) {
    console.log({ err })
    window.alert(err.message)
    dispatch(failed(err.message))
  }
}

export const remove = (payload) => async (dispatch) => {
  dispatch(started())
  try {
    const response = await deleteApi(payload, `http://localhost:3001/api/supplier/${payload.id}`)
    if (response) {
      dispatch(deleteSupplierSuccess(response))
      window.alert('Delete Data Successfully')
    }
  } catch (err) {
    console.log({ err })
    window.alert(err.message)
    dispatch(failed(err.message))
  }
}

const supplierSlice = createSlice({
  name: 'supplier',
  initialState: {
    suppliers: [],
    loading: false,
    error: null,
    success: null,
  },
  reducers: {
    started: (state) => {
      state.loading = true
      state.error = null
    },
    getSupplierSuccess: (state, action) => {
      state.suppliers = action.payload
      state.loading = false
    },
    addSupplierSuccess: (state, action) => {
      state.suppliers.push(action.payload)
      state.loading = false
      state.success = true
    },
    updateSupplierSuccess: (state, action) => {
      const { name, email, address, company } = action.payload
      const suppliers = state.suppliers.find((supplier) => supplier.id === action.payload.id)
      if (suppliers) {
        suppliers.name = name
        suppliers.email = email
        suppliers.address = address
        suppliers.company = company
      }
      state.loading = false
      state.success = true
    },
    deleteSupplierSuccess: (state, action) => {
      const suppliers = state.suppliers.filter((supplier) => {
        return supplier.id !== action.payload.id
      })
      state.suppliers = suppliers
      state.loading = false
      state.success = true
    },
    failed: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    clear: (state) => {
      state.error = null
      state.success = null
    },
  },
})

export const {
  started,
  getSupplierSuccess,
  addSupplierSuccess,
  updateSupplierSuccess,
  deleteSupplierSuccess,
  failed,
  clear,
} = supplierSlice.actions
export default supplierSlice.reducer
