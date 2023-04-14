import { MapPinLine } from 'phosphor-react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'

import { FormSchema } from '../../../hooks/useFormCart'

import {
  FormDeliveryContainer,
  HeaderContainer,
  InputsContainer,
} from './styles'

interface FormDeliveryProps {
  register: UseFormRegister<FormSchema>
  errors: FieldErrors<FormSchema>
}

export function FormDelivery({ register, errors }: FormDeliveryProps) {
  return (
    <FormDeliveryContainer>
      <HeaderContainer>
        <MapPinLine size={22} />
        <div>
          <p>Endereço de entrega</p>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </HeaderContainer>

      <InputsContainer>
        <div>
          <input
            type="text"
            placeholder="CEP"
            maxLength={8}
            {...register('cep')}
          />
          {errors.cep && <span>{errors.cep.message}</span>}
        </div>

        <div>
          <input type="text" placeholder="Rua" {...register('street')} />
          {errors.street && <span>{errors.street.message}</span>}
        </div>
        <div>
          <input type="number" placeholder="Número" {...register('number')} />
          {errors.number && <span>{errors.number.message}</span>}
        </div>
        <div>
          <input
            type="text"
            placeholder="Complemento"
            {...register('complement')}
          />
          {errors.complement && <span>{errors.complement.message}</span>}
        </div>
        <div>
          <input
            type="text"
            placeholder="Bairro"
            {...register('neighborhood')}
          />
          {errors.neighborhood && <span>{errors.neighborhood.message}</span>}
        </div>
        <div>
          <input type="text" placeholder="Cidade" {...register('city')} />
          {errors.city && <span>{errors.city.message}</span>}
        </div>
        <div>
          <input type="text" placeholder="UF" {...register('state')} />
          {errors.state && <span>{errors.state.message}</span>}
        </div>
      </InputsContainer>
    </FormDeliveryContainer>
  )
}
