import { FormNewCar } from "../../components/Admin/FormNewCar";
import { Title } from "../../components/Admin/Title";

export const NewCar = () => {
    return (
        <section className="container-fluid vh-100 d-flex flex-column align-items-center justify-content-center">
            <Title title={'Adicionar novo carro'}/>
           <FormNewCar />
        </section>
    );
}