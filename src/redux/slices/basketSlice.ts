import { createSlice } from '@reduxjs/toolkit'
import { IProduct } from '@src/types/IProduct'

const initialState = {
  items: []
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, { ...action.payload, count: 1 }]
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        ({ id }: IProduct) => id == action.payload.id
      )

      let basketCopy = [...state.items]

      if (index >= 0) {
        basketCopy.splice(index, 1)
      } else {
        console.warn("Can't remove item from basket")
      }

      state.items = basketCopy
    }
  }
})

export const { addToBasket, removeFromBasket } = basketSlice.actions

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items

export default basketSlice.reducer
