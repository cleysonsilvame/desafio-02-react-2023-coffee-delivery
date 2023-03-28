import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'

import CoffeeDeliveryImage from '../../assets/coffee-delivery.png'
import { Badge } from './Bagde'
import { InnerContainer, SectionContainer } from './styles'

export function Headline() {
  return (
    <SectionContainer>
      <InnerContainer>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h2>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h2>

          <div>
            <Badge
              color="brand.yellow-dark"
              text="Compra simples e segura"
              icon={
                <ShoppingCart
                  size={16}
                  weight="fill"
                  className="text-base-white"
                />
              }
            />
            <Badge
              color="base.text"
              text="Embalagem mantém o café intacto"
              icon={
                <Package size={16} weight="fill" className="text-base-white" />
              }
            />
            <Badge
              color="brand.yellow"
              text="Entrega rápida e rastreada"
              icon={
                <Timer size={16} weight="fill" className="text-base-white" />
              }
            />
            <Badge
              color="brand.purple"
              text="O café chega fresquinho até você"
              icon={
                <Coffee size={16} weight="fill" className="text-base-white" />
              }
            />
          </div>
        </div>

        <img
          src={CoffeeDeliveryImage}
          alt="Copo branco com tampa preta e um papelão por volta com o logo do Coffe Delivery. Grãos por volta da imagem."
        />
      </InnerContainer>
    </SectionContainer>
  )
}
