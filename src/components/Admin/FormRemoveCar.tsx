import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AdminService } from "../../services/admin";
import { ICar } from "../../types/car.interface";
import { CancelButton } from "./CancelButton";

export const FormRemoveCar = () => {

    const [cars, setCars] = useState<ICar[]>([]);
    const [selectedCar, setSelectedCar] = useState<ICar>({ _id: '',price: 0, brand: '', image: '', model: '', name: '' });
    const [error, setError] = useState(false);

    const navigate = useNavigate();

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

    const handleChange = async (e: any) => {
        try {
            const response = await AdminService.getCarById(e.target.value);
            setSelectedCar(response);
        } catch (error) {
            setError(true);
        }
    };

    const removeCar = (e: any) => {
        e.preventDefault();

        try {
            AdminService.removeCar(selectedCar._id);
            navigate('/admin');
        } catch (error) {
            setError(true);
        }
    }

    return (
        <form className="w-100 mw-50 mt-4" onSubmit={removeCar}>
            <div className="mb-3">
                <select onChange={handleChange} className="form-control" name="car" id="car">
                    <option value="select">Selecionar Carro</option>
                    {
                        cars.map(car => {
                            return (
                                <option key={car._id.substring(0, 8)} value={car._id}>{car.name}</option>
                            )
                        })
                    }
                </select>
            </div>
            <div className={selectedCar._id ? `mb-3 d-flex flex-column position-relative align-items-center` : 'd-none'}>
                <img src={selectedCar.image} className="img-fluid mw-300" alt="car.image" />
                <h3 className="position-absolute bg-opacity text-white fw-normal text-capitalize text-center"><span className="fs-4">{selectedCar.name} - ${selectedCar.price}</span> </h3>
            </div>
            <div className="mb-3 d-flex justify-content-between">
                <CancelButton />
                <button className="btn btn-primary">REMOVER CARRO</button>
            </div>
        </form>
    );
}