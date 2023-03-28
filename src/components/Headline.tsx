import { ShoppingCart, Timer, Package, Coffee } from "phosphor-react";

import CoffeeDeliveryImage from "../assets/coffee-delivery.png";
import BackgroundImage from "../assets/background.svg";
import { Badge } from "./Badge";

export function Headline() {
  return (
    <section className={`bg-[url('${BackgroundImage}')] bg-center py-[92px]`}>
      <div className="flex w-[1120px] mx-auto gap-10">
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="font-baloo font-extrabold text-5xl text-base-title leading-[130%]">Encontre o café perfeito para qualquer hora do dia</h1>
            <h2 className="text-xl text-base-subtitle leading-[130%]">
              Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
              hora
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <Badge
              color="bg-brand-yellow-dark"
              text="Compra simples e segura"
              icon={<ShoppingCart size={16} weight="fill" className="text-base-white" />}
            />
              <Badge
                color="bg-base-text"
                text="Embalagem mantém o café intacto"
                icon={<Package size={16} weight="fill" className="text-base-white" />}
              />
            <Badge
              color="bg-brand-yellow"
              text="Entrega rápida e rastreada"
              icon={<Timer size={16} weight="fill" className="text-base-white" />}
            />
            <Badge
              color="bg-brand-purple"
              text="O café chega fresquinho até você"
              icon={<Coffee size={16} weight="fill" className="text-base-white" />}
            />
          </div>

        </div>
        <img
          src={CoffeeDeliveryImage}
          alt="Copo branco com tampa preta e um papelão por volta com o logo do Coffe Delivery. Grãos por volta da imagem."
        />
      </div>
    </section>
  );
}
