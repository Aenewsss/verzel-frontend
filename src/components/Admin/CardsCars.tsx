import { url } from "inspector"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { AdminService } from "../../services/admin"
import { ICar } from "../../types/car.interface"

export const CardsCars = () => {

    const [cars, setCars] = useState<ICar[]>([]);

    const [error, setError] = useState(false);

    useEffect(() => {
        const listAllCars = async () => {
            try {
                const response = await AdminService.listAll();
                setCars(response);
            } catch (error) {
                setError(true);
            }
        }
        listAllCars();
    }, [])

    return (
        <div className="row d-flex justify-content-center gap-2">
            {
                cars.map(car => {
                    return (
                        <div key={car._id.substring(0, 8)} className="col-md-4 mt-5 mb-5 pt-5 p-0 ms-2 me-2 bg-cards">
                            <div className="scale box-shadow  d-flex flex-column align-items-center justify-content-end btn btn-default border-green">
                                <img width={300} height={200} src={car.image} alt="car.image" />
                                <h3 className="text-dark fw-normal text-capitalize mt-2">{car.brand} - <span className="fs-4">{car.name} - {car.price}</span> </h3>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}