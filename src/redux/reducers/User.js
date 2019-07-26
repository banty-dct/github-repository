import { SAVE_USER } from "../Constants"
const init = {
    status: false
}

const userReducer = (state = init, {type, payload}) => {
    switch(type){
        case SAVE_USER:
            return {...state, ...payload}
        default:
            return state
    }
}

export default userReducer