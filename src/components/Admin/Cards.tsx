import { Link } from "react-router-dom"

export const Cards = () => {
    return (
        <>
            <div className="col-md-3 d-flex justify-content-center">
                <Link to="/admin/carros-cadastrados" className="scale box-shadow bg-cards bg-card-1 d-flex align-items-end justify-content-center btn btn-default border-green">
                    <h3 className="text-white bg-opacity m-0">Carros cadastrados</h3>
                </Link>
            </div>
            <div className="col-md-3 d-flex justify-content-center">
                <Link to="/admin/adicionar-carro" className="scale box-shadow bg-cards bg-card-2 d-flex align-items-end justify-content-center btn btn-default border-green">
                    <h3 className="text-white bg-opacity m-0">Adicionar carro</h3>
                </Link>
            </div>
            <div className="col-md-3 d-flex justify-content-center">
                <Link to="/admin/atualizar-dados" className="scale box-shadow bg-cards bg-card-3 d-flex align-items-end justify-content-center btn btn-default border-green">
                    <h3 className="text-white bg-opacity m-0">Atualizar dados</h3>
                </Link>
            </div>
            <div className="col-md-3 d-flex justify-content-center">
                <Link to="/admin/remover-carro" className="scale box-shadow bg-cards bg-card-4 d-flex align-items-end justify-content-center btn btn-default border-green">
                    <h3 className="text-white bg-opacity m-0">Remover carro</h3>
                </Link>
            </div>
        </>
    )
}