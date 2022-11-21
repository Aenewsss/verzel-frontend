import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IUser } from "../types/user.interface";
import { AdminService } from "../services/admin";

export const LoginForm = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState<IUser>({
        username: '', password: ''
    });

    const [error, setError] = useState(false)

    const handleChange = (e: any) => {
        setUser(user => ({
            ...user,
            [e.target.id]: e.target.value
        }));
    }

    const login = async (e: any) => {
        e.preventDefault();

        try {
            const logged = await AdminService.login(user);
            navigate('/admin')
        } catch (error) {
            setError(true);
        }
    }

    return (
        <section className="container mb-5">
            <form className="mb-5 mw-50" onSubmit={login}>
                <div className="mb-4">
                    <h3 className="fs-3">Iniciar sessão</h3>
                </div>
                <div className="mb-3">
                    <label htmlFor="">Usuário</label>
                    <input required onChange={handleChange} className="form-control" type="text" id="username" />
                </div>
                <div className="mb-3">
                    <label htmlFor="">Senha</label>
                    <input required onChange={handleChange} className="form-control" type="password" id="password" />
                </div>
                <div className="mb-3">
                    <button className="btn btn-primary w-100">Iniciar sessão</button>
                </div>
                {
                    error &&
                    <p className="w-100 text-danger text-center">Usuário ou senha inválida</p>
                }
            </form>
        </section>
    );
}