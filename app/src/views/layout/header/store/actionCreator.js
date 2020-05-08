import {actionTypes} from './index'
import {fromJS} from 'immutable'
import axios from 'axios'


const changeList = (data) =>{
  return {
    type: actionTypes.CHANGE_LIST,
    data: fromJS(data)
  }
}
export const searchFocus = () => {
  return {
    type:actionTypes.SEARCH_FOCUS
  }
}
export const searchBlur = () => {
  return {
    type:actionTypes.SEARCH_BLUR
  }
}

// thunk 请求
export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then((res)=>{
      const data = res.data;
      const action = changeList(data.data);
      dispatch(action);
    }).catch((err)=>{
      console.log(err)
    })
  }
}
