import {actionTypes} from './index'
import {fromJS} from 'immutable' // 保证state不被修改

const defaultState = fromJS({
  focused:false,
  list:[]
})

export default (state = defaultState ,action) =>{
  if(action.type === actionTypes.SEARCH_FOCUS){
    return state.set('focused',true);
  }
  if(action.type === actionTypes.SEARCH_BLUR){
    return state.set('focused',false);
  }
  if(action.type === actionTypes.CHANGE_LIST){
    return state.set('list',action.data);
  }
  return state
}