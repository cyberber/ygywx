import { createStore } from 'redux';


// import { createStore } from 'redux';
// import { counter, addGUN } from './index';

// const ADD_GUN  = '加机关枪'
// const REMOVE_GUN  = '减机关枪'

// // 新建store
// export function counter(state=0, action) { // 他是reducer
//     switch(action.type){
//         case ADD_GUN:
//           return state + 1;
//         case REMOVE_GUN:
//           return state - 1;
//         default: 
//           return 10;
//     }
// }

// // action creator
// export function addGUN() {
//   return {type: ADD_GUN}
// }
// export function removeGUN() {
//   return {type: REMOVE_GUN}
// }

// const store = createStore(counter)


// function listener() {
//   const current = store.getState()
//   console.log(current)
// }

// store.subscribe(listener)

// store.dispatch({type: '加机关枪'})
// store.dispatch({type: '减机关枪'})

// 初级使用redux

// 新建store



const ADD_GUN = '加机关枪'
const REMOVE_GUN = '减机关枪'

export function counter(state=1, action) {
  switch(action.type){
    case ADD_GUN:
      return state + 1;
    case REMOVE_GUN:
      return state - 1;
    default:
      return 10;
  }
}

// action creator
export function addGUN() {
  return {type: ADD_GUN}
}
export function removeGUN() {
  return {type: REMOVE_GUN}
}

export function addGUNAsync() {
  return dispatch => {
    setTimeout(() => {
      dispatch(addGUN())
    }, 2000);
  }
}


const store = createStore(counter)

function listener() {
  const current = store.getState()
  console.log(current)
}

store.subscribe(listener)

