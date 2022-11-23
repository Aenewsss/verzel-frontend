import { useEffect, useState } from "react"
import { Navbar } from "../components/Navbar"
import { MainService } from "../services/main";
import { ICar } from "../types/car.interface";

export const AboutCar: React.FC<any> = ({ id }) => {

    const [car, setCar] = useState<ICar>({ _id: '', price: 0, brand: '', image: '', model: '', name: '' });

    useEffect(() => {
        const getCar = async () => {
            try {
                const response = await MainService.getCarById(id);
                setCar(response)
            } catch (error) {
                console.log(error)
            }
        }
        getCar();
    }, [])

    return (
        <section className="container d-flex justify-content-center">
            <div className="row d-flex justify-content-center">
                <div key={car._id.substring(0, 8)} className="col-md-6 mt-5 d-flex justify-content-center">
                    <img className="img-fluid rounded scale box-shadow" src={car.image} alt="car.image" />
                </div>
                <div className="col-md-6 d-flex flex-column mt-5 gap-4 justify-content-center">
                    <span className="fs-4 fw-normal text-capitalize">Nome - {car.name}</span>
                    <span className="fs-4 fw-normal text-capitalize">Marca - {car.brand}</span>
                    <span className="fs-4 fw-normal text-capitalize">Modelo - {car.model}</span>
                    <span className="fs-4 fw-normal text-capitalize">Valor - R$ {car.price}</span>
                </div>
            </div>
        </section>
    )
}