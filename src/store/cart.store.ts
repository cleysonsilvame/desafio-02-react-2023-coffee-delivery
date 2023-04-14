import { storeFactory } from '../utils'

export interface Coffee {
  name: string
  amount: number
  src?: string
  price?: number
}

interface CartStore {
  cart: Coffee[]
  addOrIncrementCoffeeInCart: (cart: Coffee) => void
  decrementCoffeeFromCart: (cart: { name: string; amount: number }) => void
  removeCoffeeFromCart: (cart: { name: string }) => void
  clearCart: () => void
}

export const useCartStore = storeFactory<CartStore>('cart-store', (set) => ({
  cart: [],
  addOrIncrementCoffeeInCart: (cart) => {
    set(
      (state) => {
        const index = state.cart.findIndex(({ name }) => name === cart.name)

        if (index !== -1) {
          state.cart[index].amount += cart.amount
        } else {
          state.cart.push(cart)
        }
      },
      undefined,
      'addOrIncrementCoffeeInCart',
    )
  },
  decrementCoffeeFromCart: (cart) => {
    set(
      (state) => {
        const index = state.cart.findIndex(({ name }) => name === cart.name)

        if (index === -1) return

        state.cart[index].amount -= cart.amount
      },
      undefined,
      'removeCoffeeFromCart',
    )
  },
  removeCoffeeFromCart: (cart) => {
    set(
      (state) => {
        const index = state.cart.findIndex(({ name }) => name === cart.name)

        if (index === -1) return

        state.cart.splice(index, 1)
      },
      undefined,
      'removeCoffeeFromCart',
    )
  },
  clearCart: () => set({ cart: [] }, undefined, 'clearCart'),
}))
