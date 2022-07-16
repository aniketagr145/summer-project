export const InitialState = {user:null,loggedIn:false}
export const reducer = (state, action) => {
    if(action.type==="DATA"){
        return {
            ...state,
            user:action.payload
        };
    }
    if(action.type==="LOGGED"){
        return {
            ...state,
            loggedIn:true
        };
    }
    if(action.type==="LOGGEDOUT"){
        return {
            ...state,
            loggedIn:false,
            user:null
        };
    }
    if(action.type==="CLEAR"){
        return null
    }
    return state
}