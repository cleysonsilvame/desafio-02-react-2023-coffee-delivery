import { ShoppingCartSimple } from 'phosphor-react'
import {
  CoffeeContainer,
  CartContainer,
  SubtitleContainer,
  TagContainer,
  TitleContainer,
  PriceContainer,
  SendCartButtonContainer,
} from './styles'
import { CountButton } from '../CountButton'
import { useState } from 'react'
import { useCartStore } from '../../store/cart.store'

interface CoffeeProps {
  name: string
  description: string
  src: string
  price: number
  tags: string[]
}

export function Coffee({ name, description, src, price, tags }: CoffeeProps) {
  const [coffeeCount, setCoffeeCount] = useState(1)
  const addOrIncrementCoffeeInCart = useCartStore(
    (state) => state.addOrIncrementCoffeeInCart,
  )

  function handleSendCoffeeToCart() {
    addOrIncrementCoffeeInCart({ name, amount: coffeeCount, src, price })
    setCoffeeCount(1)
  }

  return (
    <CoffeeContainer>
      <img src={src} alt="" />
      <TagContainer>
        {tags.map((tag) => (
          <div key={tag}>
            <div>{tag}</div>
          </div>
        ))}
      </TagContainer>
      <TitleContainer>{name}</TitleContainer>
      <SubtitleContainer>{description}</SubtitleContainer>
      <CartContainer>
        <PriceContainer>
          <p>R$</p>
          <p>{price}</p>
        </PriceContainer>

        <CountButton
          amount={coffeeCount}
          increment={() => setCoffeeCount((state) => state + 1)}
          decrement={() => setCoffeeCount((state) => state - 1)}
        />

        <SendCartButtonContainer onClick={handleSendCoffeeToCart}>
          <ShoppingCartSimple size={22} weight="fill" />
        </SendCartButtonContainer>
      </CartContainer>
    </CoffeeContainer>
  )
}
