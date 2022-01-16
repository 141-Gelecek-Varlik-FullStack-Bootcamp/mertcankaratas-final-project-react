export const LOGIN="LOGIN";
export const LOGOUT="LOGOUT";
export function loginUser(user){
    return {
        type : LOGIN,
        payload:user
    }



}


export function logoutUser(user){
    return{
        type: LOGOUT,
        payload:user
    }
}