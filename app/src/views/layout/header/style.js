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
  padding-right:70px;
  box-sizeing:border-box;
  margin:0 auto;
  height:100%;
`

export const NavItem = styled.div`
  line-height:56px;
  font-size:17px;
  padding:0 15px;
  color:#333;
  &.left {
    float:left;
  }
  &.right {
    float:right;
  }
  &.active{
    color:#ea6f5a;
  }
`

export const SearchWrapper = styled.div`
  float:left;
  position:relative;
  .slide-enter{
    transition:all .2s ease-out;
  }
  .slide-enter-active{
    width:240px;
  }
  .slide-exit {
    transition:all .2s ease-out;
  }
  .slide-exit-active {
    width:160px;
  }
  .iconfont{
    position:absolute;
    right:5px;
    bottom:4px;
    width:30px;
    text-align:center;
    line-height:30px;
    border-radius:15px;
    &.focused{
      background:#777;
      color:#fff;
    }
  }
`
export const NavSearch = styled.input.attrs({
  placeholder:'搜索'
})`
  width:160px;
  height:38px;
  margin-top:9px;
  padding: 0 30px 0 20px;
  border:none;
  color:#666;
  outline:none;
  border-radius:19px;
  margin-left:20px;
  background:#eee;
  font-size:14px;
  &::placeholder{
    color:#999;
  }
  &.focused{
    width:240px;
  }
`
export const Addition = styled.div`
  position:absolute;
  top:0;
  right:0;
  height:56px;
`
export const Button = styled.div`
  float:right;
  margin-top:9px;
  margin-right:20px;
  line-height:38px;
  padding:0 20px;
  border-radius:19px;
  border:1px solid #ec6149;
  &.reg{
    color:#ec6149
  }
  &.writting{
    background:#ec6149;
    color:#fff;
  }
`