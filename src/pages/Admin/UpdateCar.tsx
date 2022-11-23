import { FormUpdateCar } from "../../components/Admin/FormUpdateCar";
import { Title } from "../../components/Admin/Title";

export const UpdateCar = () => {
    return (
        <section className="container-fluid vh-100 d-flex flex-column align-items-center justify-content-center">
            <Title title={'Atualizar dados do veículo'} />
            <FormUpdateCar />
        </section>
    );
}