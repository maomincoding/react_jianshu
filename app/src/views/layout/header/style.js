import styled from 'styled-components'
import logoPic from '../../../assets/images/logo.png'

export const HeaderWrapper = styled.div`
 position:relative;
 height:58px;
 border-bottom:1px solid #f0f0f0;
`
export const Logo = styled.a.attrs({
  href:'/'
})`
 position:absolute;
 top:0;
 left:0;
 height:58px;
 width:100px;
 height:56px;
 display:block;
 background: url(${logoPic});
 background-size:contain;
`
export const Nav = styled.div`
  width:960px;
  margin:0 auto;
  height:100%;
`