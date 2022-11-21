import { useNavigate } from "react-router-dom"

export const CancelButton = () => {

    const navigate = useNavigate();

    const backAdminMenu = () => navigate('/admin');

    return (
        <button onClick={backAdminMenu} className="btn btn-danger">Cancelar</button>
    )
}