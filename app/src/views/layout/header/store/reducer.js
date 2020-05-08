import {actionTypes} from './index'
import {fromJS} from 'immutable' // 保证state不被修改，返回一个新的数据(immutable对象)

const defaultState = fromJS({
  focused:false,
  list:[] // 这里的初始值是immutable对象，所以一定要注意传过来的action 一定是immutable对象
})

export default (state = defaultState ,action) =>{
  switch(action.type) {
    case actionTypes.SEARCH_FOCUS:
      return state.set('focused',true);
    case actionTypes.SEARCH_BLUR:
      return state.set('focused',false);
    case actionTypes.CHANGE_LIST:
      return state.set('list',action.data);
    default:
      return state
  }
}