import styled from 'styled-components'

import { Props } from '.'

export const P = styled.p<Props>`
  color: ${(props) =>
    props.tipo === 'principal'
      ? props.theme.corPrincipal
      : props.theme.corSecundaria};
  font-size: ${(props) => (props.FontSize ? props.FontSize + 'px' : '14px')};
  line-height: 22px;
`
