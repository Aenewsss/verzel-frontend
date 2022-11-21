import { LoginForm } from "../components/LoginForm";
import { Navbar } from "../components/Navbar";

export const Login = () => {
    return (
        <>
            <Navbar login={true} />
            <div className="row">
                <div className="col-md-6 d-md-flex d-none">
                    <img className="img-fluid vh-100" src="https://img.freepik.com/free-photo/family-with-son-choosing-car-car-showroom_1303-14209.jpg?w=360&t=st=1669021501~exp=1669022101~hmac=42069fa896c3b0702fc116ebafaf0b09cf7c5fde7bca2dbd04a42a31d6a99e7c" alt="" />
                </div>
                <div className="col-md-6 d-flex align-items-center"><LoginForm /></div>
            </div>
        </>
    );
}