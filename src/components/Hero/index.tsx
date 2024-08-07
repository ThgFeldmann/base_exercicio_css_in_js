import { HeroForm as HeroForm } from './styles'
import { HeroDiv as HeroDiv } from './styles'
import { HeroTitle as HeroTitle } from './styles'

const Hero = () => (
  <HeroForm>
    <HeroDiv className="container">
      <HeroTitle>
        As melhores vagas para tecnologia, design e artes visuais.
      </HeroTitle>
    </HeroDiv>
  </HeroForm>
)

export default Hero
