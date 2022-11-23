import { useNavigate } from "react-router-dom";
import { CardsCars } from "../../components/Admin/CardsCars";
import { Title } from "../../components/Admin/Title";

export const ListCars = () => {

    const navigate = useNavigate();

    return (
        <section className="container-fluid vh-100 d-flex flex-column align-items-center justify-content-center">
            <Title title={'Carros cadastrados'} />
            <CardsCars />
            <button className="position-fixed btn btn-danger top-20 left-20" onClick={e=> navigate('/admin')}>VOLTAR</button>
        </section>
    );
}