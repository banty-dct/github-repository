import axios from 'axios'
import { SAVE_USER } from '../Constants'

export const saveUser = (repo) => {
    return {
        type: SAVE_USER,
        payload: {
            repo, 
            status: true
        }
    }
}

export const saveUserOnLoad = () => {
    return (dispatch) => {
        axios.get(`https://api.github.com/users/supreetsingh247/repos`)
            .then(res => {
                dispatch(saveUser(res.data))
            })
            .catch(err => {
                console.log('saveUserOnLoad Error', err)
            })
    }
}