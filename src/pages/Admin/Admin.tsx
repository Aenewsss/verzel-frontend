import { Cards } from "../../components/Admin/Cards";
import { Title } from "../../components/Admin/Title";

export const Admin = () => {
    return (
        <section className="container-fluid vh-100 d-flex align-items-center">
            <div className="row h-100 w-100  justify-content-center mb-5">
                <div className="col-md-12 d-flex justify-content-center align-items-center mb-5 gap-3">
                    <Title title={'ADMIN - Verzel Cars'}/>
                </div>
                <Cards />
            </div>
        </section>
    );
}