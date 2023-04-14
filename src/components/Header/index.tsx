import { MapPin, ShoppingCart } from 'phosphor-react'

import { Link, NavLink } from 'react-router-dom'

import LogoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'
import { HeaderContainer } from './styles'
import { useCartStore } from '../../store/cart.store'

export function Header() {
  const amount = useCartStore((state) => state.cart.length)

  return (
    <HeaderContainer>
      <Link to="/">
        <img src={LogoCoffeeDelivery} alt="" />
      </Link>
      <div>
        <span>
          <MapPin size={22} weight="fill" />
          <p>Guarulhos, SP</p>
        </span>
        <NavLink to="/checkout" title="Carrinho">
          <ShoppingCart size={22} weight="fill" />
          {Boolean(amount) && <p>{amount}</p>}
        </NavLink>
      </div>
    </HeaderContainer>
  )
}
