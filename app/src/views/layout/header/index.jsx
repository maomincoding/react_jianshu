import React from 'react'
import {HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addition,Button,SearchWrapper} from './style'
import {CSSTransition} from 'react-transition-group'

export default class Header extends React.Component{
  constructor(props) {
    super(props);
    this.focusInput = this.focusInput.bind(this);
    this.blurInput = this.blurInput.bind(this);
    this.state= {
      focused:false
    }
  }
  render(){
    return (
      <HeaderWrapper>
        {/* href="/" */}
        <Logo></Logo>
        <Nav>
            <NavItem className="left active">首页</NavItem>
            <NavItem className="left">下载App</NavItem>
            <NavItem className="right">登录</NavItem>
            <NavItem className="right">
            <span className="iconfont">&#xe636;</span>
            </NavItem>
            <SearchWrapper>
                <CSSTransition
                  in={this.state.focused}
                  timeout={200}
                  classNames="slide"
                >
                    <NavSearch className={this.state.focused?'focused':''} onFocus={this.focusInput} onBlur={this.blurInput}></NavSearch>
                </CSSTransition>
              <span className={this.state.focused?'focused iconfont':'iconfont'} >&#xe62d;</span>
            </SearchWrapper>
        </Nav>
        <Addition>
            <Button className="writting"><span className="iconfont">&#xe742;</span>写文章</Button>
            <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }

  focusInput(){
    this.setState({
      focused:true
    })
  }
  blurInput(){
    this.setState({
      focused:false
    })
  }
}