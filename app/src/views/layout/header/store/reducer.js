const defaultState = {
  focused:false
}

export default (state = defaultState ,action) =>{
  if(action.type === 'focus'){
    const newState = JSON.parse(JSON.stringify(state));
    newState.focused = true;
    return newState
  }
  if(action.type === 'blur'){
    const newState = JSON.parse(JSON.stringify(state));
    newState.focused = false;
    return newState
  }
  return state
}