import { Header } from "../components/Header";
import { Headline } from "../components/Headline";
import { Coffee } from "../components/Coffee";
import { coffees } from "../services/coffees";

export function Home() {
  return (
    <>
      <Headline />
      <div className="w-[1120px] mx-auto">
        <h3 className="font-baloo font-extrabold text-[32px] text-base-subtitle leading-[130%] mb-[54px]">
          Nossos cafés
        </h3>
        <div className="flex gap-8 flex-wrap">
          {coffees.map((coffee) => (
            <Coffee key={coffee.name} {...coffee} />
          ))}
        </div>
      </div>
    </>
  );
}
