import { MapPin, ShoppingCart } from "phosphor-react"

import LogoCoffeeDelivery from "../assets/logo-coffee-delivery.svg"

export function Header() {
  return (
    <header className="flex justify-between p-8 mx-auto max-w-[1440px]">
      <img
        className="h-10"
        src={LogoCoffeeDelivery}
      />
      <div className="flex gap-3">
        <button className="p-2 flex gap-1 bg-brand-purple-light text-brand-purple-dark rounded-md font-roboto font-normal hover:opacity-90 hover:transition-opacity" >
          <MapPin size={22} weight="fill" className="text-brand-purple " />
          <p>Guarulhos, SP</p>
        </button>
        <button className="p-2 flex bg-brand-purple-light rounded-md hover:opacity-90 hover:transition-opacity">
          <ShoppingCart size={22} weight="fill" className="text-brand-yellow-dark"/>
        </button>
      </div>

    </header>
  )
}