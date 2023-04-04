import { CardsContext } from "../context/CardsContext.js"
import { useContext } from "react"

export const useCardsContext = () => {
  const context = useContext(CardsContext)

  if(!context) {
    throw Error('useCardsContext must be used inside a CardsContextProvider')
  }

  return context
}