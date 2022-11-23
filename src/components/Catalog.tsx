import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MainService } from "../services/main";
import { ICar } from "../types/car.interface";

export const Catalog: React.FC<any> =
    ({ filters }) => {

        const [cars, setCars] = useState<ICar[]>([]);
        const [orderedByPrice, setOrderedByPrice] = useState<ICar[]>([]);

        const [error, setError] = useState(false);

        useEffect(() => {
            const listAllCars = async () => {
                try {
                    const response = await MainService.listAll();
                    setOrderedByPrice(response.sort((a: any, b: any) => a.price - b.price));
                    setCars(response);
                } catch (error) {
                    setError(true);
                }
            }
            listAllCars();
        }, [])


        return (
            <section className="container">
                <div className="row d-flex justify-content-md-start justify-content-center align-items-center">
                    {
                        orderedByPrice.map((car) => {
                            if (
                                (filters.filter((brand: any) => brand.category == 'brand' && brand.value == car.brand).length > 0) ||
                                (filters.filter((name: any) => name.category == 'name' && name.value == car.name).length > 0) ||
                                (filters.filter((model: any) => model.category == 'model' && model.value == car.model).length > 0) ||
                                (filters.filter((price: any) => price.category == 'price' && (car.price <= price.value.max || price.value.min >= car.price)).length > 0) ||
                                filters.length == 0) {
                                return (
                                    <div key={car._id.substring(0, 8)} className="col-md-4 mt-5 mw-250 ">
                                        <Link to={car._id} className="d-flex p-0 flex-column btn btn-default scale box-shadow">
                                            <div className="image-card d-flex justify-content-center align-items-center position-relative">
                                                <img className="position-absolute h-100 w-100 rounded-top" src={car.image} alt="car.image" />
                                            </div>
                                            <span className="fs-4 fw-normal text-capitalize mt-2">
                                                {car.brand}
                                                <span className="fs-4"> {car.name}</span>
                                            </span>
                                            <span>{car.model}</span>
                                            <div className="d-flex justify-content-around align-items-center">
                                                <span className="fw-normal">R$ {car.price}</span>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            }
                        })
                    }
                </div>

            </section>
        )
    }
