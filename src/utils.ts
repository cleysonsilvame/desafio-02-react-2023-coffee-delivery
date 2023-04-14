import { StateCreator, create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

export const storeFactory = <State>(
  name: string,
  state: StateCreator<
    State,
    [
      ['zustand/devtools', never],
      ['zustand/persist', unknown],
      ['zustand/immer', never],
    ],
    []
  >,
) =>
  create<State>()(
    devtools(
      persist(immer(state), {
        name: 'coffee-delivery@cleysonsilvame',
      }),
      {
        name,
      },
    ),
  )

export const formatToCurrency = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})
