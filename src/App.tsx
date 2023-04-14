import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { Layout } from './layouts/Layout'
import { Checkout } from './pages/Checkout'
import { Home } from './pages/Home'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme'
import { Confirmed } from './pages/Confirmed'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="confirmed" element={<Confirmed />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
