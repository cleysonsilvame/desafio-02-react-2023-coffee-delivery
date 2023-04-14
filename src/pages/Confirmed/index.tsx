import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { Badge } from '../../components/Headline/Badge'
import { FormSchema } from '../../hooks/useFormCart'
import { Coffee } from '../../store/cart.store'

import ConfirmedImage from '../../assets/confirmed-image.svg'
import { MainContainer } from './styles'

const paymentMessages = {
  debit: 'Cartão de Debito',
  credit: 'Cartão de Crédito',
  money: 'Dinheiro',
} as const

export function Confirmed() {
  const location = useLocation()
  const navigate = useNavigate()

  const state = location.state as { data: FormSchema; cart: Coffee[] }

  useEffect(() => {
    console.log(state)
    if (!state) {
      navigate('/')
    }
  }, [navigate, state])

  if (!state) {
    return null
  }

  return (
    <MainContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <h3>Agora é só aguardar que logo o café chegará até você</h3>
      <section>
        <div>
          <div>
            <Badge
              icon={<MapPin weight="fill" />}
              text={
                <>
                  <p>
                    Entrega em{' '}
                    <strong>
                      Rua {state.data.street}, {state.data.number}{' '}
                      {state.data.complement}
                    </strong>
                  </p>
                  <p>
                    {state.data.neighborhood} - {state.data.city},{' '}
                    {state.data.state}
                  </p>
                </>
              }
              color="brand.purple"
            />
            <Badge
              icon={<Timer weight="fill" />}
              text={
                <>
                  <p>Previsão de entrega</p>
                  <p>
                    <strong>20 min - 30 min</strong>
                  </p>
                </>
              }
              color="brand.yellow"
            />
            <Badge
              icon={<CurrencyDollar weight="fill" />}
              text={
                <>
                  <p>Pagamento na entrega</p>
                  <p>
                    <strong>{paymentMessages[state.data.payment_type]}</strong>
                  </p>
                </>
              }
              color="brand.yellow-dark"
            />
          </div>
        </div>
        <img src={ConfirmedImage} alt="" />
      </section>
    </MainContainer>
  )
}
