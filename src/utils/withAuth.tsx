import { Admin } from "../pages/Admin/Admin"

export const withAuth = () => {
    if(localStorage.getItem('token')){
        return  <Admin />
    }
    return null
}