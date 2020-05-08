import React from 'react'
import { connect } from 'react-redux'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, SearchInfoList, Addition, Button, SearchInfoItem, SearchInfoSwitch, SearchWrapper, SearchInfo, SearchInfoTitle } from './style'
import { CSSTransition } from 'react-transition-group'
import { actionCreator } from './store'

class Header extends React.Component {
  getListArea(show) {
    if (show) {
      return (
        <SearchInfo >
          <SearchInfoTitle>
            热门搜索
          <SearchInfoSwitch>换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList >
            {
              this.props.list.map((item)=>{
              return <SearchInfoItem key={item}>{item}</SearchInfoItem>
              })
            }
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null;
    }
  }
  render() {
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
              <NavSearch className={this.props.focused ? 'focused' : ''} onFocus={this.props.focusInput} onBlur={this.props.blurInput}></NavSearch>
            </CSSTransition>
            <span className={this.props.focused ? 'focused iconfont' : 'iconfont'} >&#xe62d;</span>
            {this.getListArea(this.props.focused)}
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
const mapStateToProps = (state) => {
  return {
    focused: state.get('header').get('focused'), // state.getIn(['header','focused'])
    list: state.getIn(['header','list'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    focusInput() {
      dispatch(actionCreator.getList());
      dispatch(actionCreator.searchFocus());
    },
    blurInput() {
      dispatch(actionCreator.searchBlur());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)