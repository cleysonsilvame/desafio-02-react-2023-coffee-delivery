import { Headline } from '../../components/Headline'
import { Coffee } from '../../components/Coffee'
import { coffees } from '../../services/coffees'

import { MainContainer } from './styles'

export function Home() {
  return (
    <>
      <Headline />
      <MainContainer>
        <h3>Nossos cafés</h3>
        <div>
          {coffees.map((coffee) => (
            <Coffee key={coffee.name} {...coffee} />
          ))}
        </div>
      </MainContainer>
    </>
  )
}
