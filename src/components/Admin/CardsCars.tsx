import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { AdminService } from "../../services/admin"
import { ICar } from "../../types/car.interface"

export const CardsCars = () => {

    const [cars, setCars] = useState<ICar[]>([])

    const [error, setError] = useState(false)

    useEffect(() => {
        const listAllCars = async () => {
            try {
                const response = await AdminService.listAll()
                console.log(response)
                setCars(response)
            } catch (error) {
                setError(true)
            }
        }
        listAllCars();
    }, [])

    return (
        <div className="row">
            {
                cars.map(car => {
                    return (
                        <div className="col-md-4">
                            <Link to={car._id} className="scale box-shadow bg-cards d-flex flex-column align-items-center justify-content-end btn btn-default border-green">
                                <h3 className="fw-normal text-capitalize">{car.brand} - <span className="fs-4">{car.name}</span> </h3>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}