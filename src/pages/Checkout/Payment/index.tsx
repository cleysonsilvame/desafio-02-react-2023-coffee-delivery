import * as ToggleGroup from '@radix-ui/react-toggle-group'
import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { Control, Controller } from 'react-hook-form'

import { FormSchema } from '../../../hooks/useFormCart'

import { PaymentContainer, ToggleContainer } from './styles'

interface PaymentProps {
  control: Control<FormSchema>
}

export function Payment({ control }: PaymentProps) {
  return (
    <PaymentContainer>
      <div>
        <CurrencyDollar size={22} />
        <div>
          <p>Pagamento</p>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </div>
      <Controller
        control={control}
        name="payment_type"
        defaultValue="debit"
        render={({
          field: { value, onChange, ref },
          fieldState: { error },
        }) => (
          <ToggleContainer
            ref={ref}
            type="single"
            value={value}
            onValueChange={onChange}
          >
            <div>
              <ToggleGroup.Item className="ToggleGroupItem" value="debit">
                <CreditCard size={16} />
                CARTÃO DE DÉBITO
              </ToggleGroup.Item>
              <ToggleGroup.Item className="ToggleGroupItem" value="credit">
                <Bank size={16} />
                CARTÃO DE CREDITO
              </ToggleGroup.Item>
              <ToggleGroup.Item className="ToggleGroupItem" value="money">
                <Money size={16} />
                DINHEIRO
              </ToggleGroup.Item>
            </div>

            {error && <span>{error.message}</span>}
          </ToggleContainer>
        )}
      />
    </PaymentContainer>
  )
}
