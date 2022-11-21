export const Navbar: React.FC<any> = ({ login }) => {
    return (
        <nav className="navbar navbar-expand-lg bg-transparent d-flex flex-column box-shadow">
            <div className="container-fluid">
                <a className="navbar-brand ms-md-5 ps-md-5" href="/">
                    <img width={100} src="https://verzel.s3.sa-east-1.amazonaws.com/icons/verzel-logo.svg" alt="verzel-logo.svg" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse me-md-5 pe-md-5" id="navbarNavAltMarkup">
                    <div className="navbar-nav w-100 d-flex gap-4 justify-content-end me-md-5 pe-md-5">
                        <a className="nav-link" aria-current="page" href="#">Comprar carro</a>
                        <a className="nav-link" href="#">Vender Carro</a>
                        <a className="nav-link" href="/login">Entrar</a>
                    </div>
                </div>
            </div>
            <div className={login ? "d-none" : "bg-green w-100"}>
                <div className="container pt-3 pb-3">
                    <input type="text" className="form-control pt-2 pb-2 fw-light" placeholder="Busque por modelo" />
                </div>
            </div>
        </nav>
    )
}