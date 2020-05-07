import React from 'react'
import {connect} from 'react-redux'
import {HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addition,Button,SearchWrapper} from './style'
import {CSSTransition} from 'react-transition-group'

class Header extends React.Component{
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
            <span className="iconfont a">&#xe636;</span>
            </NavItem>
            <SearchWrapper>
                <CSSTransition
                  in={this.props.focused}
                  timeout={200}
                  classNames="slide"
                >
                    <NavSearch className={this.props.focused?'focused':''} onFocus={this.props.focusInput} onBlur={this.props.blurInput}></NavSearch>
                </CSSTransition>
              <span className={this.props.focused?'focused iconfont':'iconfont'} >&#xe62d;</span>
            </SearchWrapper>
        </Nav>
        <Addition>
            <Button className="writting"><span className="iconfont">&#xe742;</span>写文章</Button>
            <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }


}
const mapStateToProps = (state) =>{
  return {
    focused:state.header.focused
  }
}
const mapDispatchToProps = (dispatch) =>{
  return {
    focusInput(){
      const action = {
        type:'focus'
      }
      dispatch(action);
    },
    blurInput(){
      const action = {
        type:'blur'
      }
      dispatch(action);
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header)