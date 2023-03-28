import { MapPin, ShoppingCart } from 'phosphor-react'

import LogoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={LogoCoffeeDelivery} alt="" />
      <div>
        <span>
          <MapPin size={22} weight="fill" />
          <p>Guarulhos, SP</p>
        </span>
        <button>
          <ShoppingCart size={22} weight="fill" />
        </button>
      </div>
    </HeaderContainer>
  )
}
