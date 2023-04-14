import { MapPinLine } from 'phosphor-react'

export function FormDelivery() {
  return (
    <div className="bg-base-card w-[640px] rounded-md p-10">
      <div className="flex gap-2">
        <MapPinLine className="text-brand-yellow-dark" size={22} />
        <div>
          <p className="flex font-roboto font-normal leading-base text-base-subtitle ">
            Endereço de entrega
          </p>
          <p className="font-roboto font-normal text-sm text-base-text">
            Informe o endereço onde deseja receber seu pedido
          </p>
        </div>
      </div>

      <section className="flex flex-col gap-4 mt-8">
        <input
          type="text"
          placeholder="CEP"
          className="bg-base-input rounded-md p-3  text-sm border border-base-button w-[200px]"
        />
        <input
          type="text"
          placeholder="Rua"
          className="bg-base-input rounded-md p-3  text-sm border border-base-button"
        />
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Número"
            className="bg-base-input rounded-md p-3  text-sm border border-base-button w-[200px]"
          />
          <input
            type="text"
            placeholder="Complemento"
            className=" flex justify-between bg-base-input  rounded-md p-3 text-sm border border-base-button w-full"
          />
        </div>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Bairro"
            className="bg-base-input rounded-md p-3 text-sm border border-base-button w-[200px]"
          />
          <input
            type="text"
            placeholder="Cidade"
            className="bg-base-input rounded-md p-3 text-sm border border-base-button w-full"
          />
          <input
            type="text"
            placeholder="Uf"
            className="bg-base-input rounded-md p-3 border text-sm border-base-button w-[60px]"
          />
        </div>
      </section>
    </div>
  )
}
