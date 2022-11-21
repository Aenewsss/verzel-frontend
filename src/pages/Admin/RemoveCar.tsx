import { Title } from "../../components/Admin/Title";

export const RemoveCar = () => {
    return (
        <section className="container-fluid vh-100 d-flex flex-column align-items-center justify-content-center">
            <Title title={'Remover veículo'}/>
            <div className="form w-100 mw-50">
                <div className="mb-3">
                    <label htmlFor="">Nome</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="">Marca</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="">Modelo</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="">Foto</label>
                    <input type="text" className="form-control" />
                </div>
            </div>
        </section>
    );
}