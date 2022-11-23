import { FormRemoveCar } from "../../components/Admin/FormRemoveCar";
import { Title } from "../../components/Admin/Title";

export const RemoveCar = () => {
    return (
        <section className="container-fluid vh-100 d-flex flex-column align-items-center justify-content-center">
            <Title title={'Remover veículo'} />
            <FormRemoveCar />
        </section>
    );
}