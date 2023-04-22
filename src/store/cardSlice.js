import {createSlice} from '@reduxjs/toolkit'
import { fetchData } from './initialCard.js'

const initialState = {
  cardItems: localStorage.getItem("cardItems")
    ? JSON.parse(localStorage.getItem("cardItems"))
    : [],
  cardTotalQuantity: 0,
  cardTotalPrice: 0,
};

const cardSlice  = createSlice ({
  name: 'card',
  initialState,
  reducers: {
    addCard(state, action) {
      const newItem = action.payload
      const exitingIndex = state.cardItems.findIndex(
        (item) => item.id === newItem.id
      )
      // everything is the same at shop and plans
      // features is to handle plans Quatnity only plans have it
      if(!newItem.features && exitingIndex >= 0 && state.cardItems[exitingIndex].cardQuantity <= 4) {
        state.cardItems[exitingIndex] = {
          ...state.cardItems[exitingIndex],
            cardQuantity: state.cardItems[exitingIndex].cardQuantity + 1
        }
      }else if(exitingIndex >= 0 && state.cardItems[exitingIndex].cardQuantity >= 5) {
        state.cardItems[exitingIndex] = { 
          ...state.cardItems[exitingIndex],
            limitations: 'limited to Five'
        } 
      }else if(exitingIndex < 0) {
        const item = { ...newItem, cardQuantity: 1 }
        state.cardItems.push(item)
      }
    localStorage.setItem("cardItems", JSON.stringify(state.cardItems));
    },
    decreaseCard(state, action) {
      const newItem = action.payload
      const exitingIndex = state.cardItems.findIndex(
        (item) => item.id === newItem.id
      )

      if (exitingIndex >= 0 && newItem.cardQuantity > 1) {
        state.cardItems[exitingIndex] = {
          ...state.cardItems[exitingIndex],
            cardQuantity: state.cardItems[exitingIndex].cardQuantity - 1 
        }
        state.cardItems[exitingIndex] = { 
          ...state.cardItems[exitingIndex],
            limitations: ''
          } 
      }else if ( exitingIndex >= 0 && newItem.cardQuantity == 1 ) {
        state.cardItems =
          state.cardItems.filter((item) => item.id !== newItem.id)
      }
    localStorage.setItem("cardItems", JSON.stringify(state.cardItems));
    },
    increaseCard(state, action) {
      const newItem = action.payload
      const exitingIndex = state.cardItems.findIndex (
        (item) => item.id === newItem.id
      )

      if(exitingIndex >= 0 && state.cardItems[exitingIndex].cardQuantity <= 4) {
        state.cardItems[exitingIndex] = { 
          ...state.cardItems[exitingIndex],
            cardQuantity: state.cardItems[exitingIndex].cardQuantity + 1
        }           
          state.cardItems[exitingIndex] = { 
          ...state.cardItems[exitingIndex],
            limitations: ''
          } 
      }else if(exitingIndex >= 0 && state.cardItems[exitingIndex].cardQuantity === 5) {
        state.cardItems[exitingIndex] = { 
          ...state.cardItems[exitingIndex],
            limitations: 'limited to Five'
        }  
      }
    localStorage.setItem("cardItems", JSON.stringify(state.cardItems));
    },
    deleteCard(state, action) {
      const newItem = action.payload
      state.cardItems = 
        state.cardItems.filter((item) => item.id !== newItem.id)

        localStorage.setItem("cardItems", JSON.stringify(state.cardItems));
    },
    getTotals(state, action) {
      let {total, quantity} = state.cardItems.reduce((cardTotal, cardItem) => {
        const { price, cardQuantity } = cardItem
        const itemTotal = price * cardQuantity

        cardTotal.total += itemTotal
        cardTotal.quantity += cardQuantity

        return cardTotal
      },
      {
        total: 0,
        quantity: 0
      })
      total = parseFloat(total.toFixed(2))
      state.cardTotalQuantity = quantity
      state.cardTotalPrice = total
    }
}})

export const { addCard, decreaseCard, increaseCard, deleteCard, getTotals } =
  cardSlice.actions;

export default cardSlice



