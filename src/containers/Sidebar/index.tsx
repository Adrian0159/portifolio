import Titulo from '../../components/Titulo'
import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import { Descricao, BotaoTema, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Adriano Gonçalves da Silva</Titulo>
      <Paragrafo tipo="secundaria" FontSize={16}>
        Adrian0159
      </Paragrafo>
      <Descricao tipo="principal" FontSize={12}>
        Engenheiro Front-end
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
