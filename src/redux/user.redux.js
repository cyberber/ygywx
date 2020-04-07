
import axios from 'axios'
const REGISTER_SUCCSS = 'REGISTER_SUCCSS'
const ERROR_MSG = 'ERROR_MSG'

const initState = {
    isAuth: '',
    userName: '',
    passWord: ''
}

// reducer
export function user(state= initState, action) {
    console.log(action)
    switch(action.type) {
        case REGISTER_SUCCSS:
            return { ...state, isAuth: true }
        case ERROR_MSG:
            return { ...state, isAuth: false }
        default:
            return state
    }
}

function registerSuccess(data) {
    return {type: REGISTER_SUCCSS, payload: data}
}

function errorMsg(msg) {
    return {msg, type: ERROR_MSG}

}

export function register({userName,passWord}) {
    if(!userName || !passWord) {
        return errorMsg('用户密码必须输入')
    }
    return dispatch=> {
        axios.post('/user/login', {userName, passWord})
        .then((res)=> {
            if(res.status === 200) {
                dispatch(registerSuccess({userName, passWord}))
            } else {
                dispatch(errorMsg(res.data.msg))
            }
    
    
        })
        .catch((err)=> {
            console.log(err);
        })
    }


} 