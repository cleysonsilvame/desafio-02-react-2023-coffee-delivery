import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

import { CartItem } from '../../components/CartItem'
import { FormSchema, useFormCart } from '../../hooks/useFormCart'
import { useCartStore } from '../../store/cart.store'
import { formatToCurrency } from '../../utils'

import { FormDelivery } from './FormDelivery'
import { Payment } from './Payment'

import {
  CheckoutContainer,
  ConfirmButton,
  RightContainer,
  SummaryContainer,
  TitleContainer,
} from './styles'

const shippingPrice = 3.5

export function Checkout() {
  const navigate = useNavigate()

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useFormCart()
  const cart = useCartStore((state) => state.cart)
  const clearCart = useCartStore((state) => state.clearCart)

  const totalPriceFromCart = useMemo(
    () =>
      cart.reduce((totalPrice, cart) => {
        totalPrice += cart.amount * Number(cart?.price)

        return totalPrice
      }, 0),
    [cart],
  )

  function onSubmit(data: FormSchema) {
    navigate('/confirmed', {
      state: { data, cart },
    })
    clearCart()
  }

  return (
    <CheckoutContainer onSubmit={handleSubmit(onSubmit)}>
      <div>
        <TitleContainer>Complete seu pedido</TitleContainer>
        <FormDelivery register={register} errors={errors} />
        <Payment control={control} />
      </div>

      <RightContainer>
        <TitleContainer>Cafés selecionados</TitleContainer>
        <div>
          {cart.map((cart) => (
            <CartItem key={cart.name} cart={cart} />
          ))}
          <SummaryContainer>
            <span>Total de itens</span>
            <span>{formatToCurrency.format(totalPriceFromCart)}</span>
            <span>Entrega</span>
            <span>{formatToCurrency.format(shippingPrice)}</span>
            <span>Total</span>
            <span>
              {formatToCurrency.format(shippingPrice + totalPriceFromCart)}
            </span>
          </SummaryContainer>
          <ConfirmButton type="submit" disabled={!cart.length}>
            confirmar pedido
          </ConfirmButton>
        </div>
      </RightContainer>
    </CheckoutContainer>
  )
}
