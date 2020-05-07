import React from 'react'
import {HeaderWrapper,Logo,Nav} from './style'

export default class Header extends React.Component{
  render(){
    return (
      <HeaderWrapper>
        {/* href="/" */}
        <Logo></Logo>
        <Nav></Nav>
      </HeaderWrapper>
    )
  }
}