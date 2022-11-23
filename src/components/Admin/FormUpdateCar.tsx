import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AdminService } from "../../services/admin";
import { ICar } from "../../types/car.interface";
import { UploadImageToS3 } from "../../utils/functionS3";
import { CancelButton } from "./CancelButton";

export const FormUpdateCar = () => {

    const [cars, setCars] = useState<ICar[]>([]);
    const [selectedCar, setSelectedCar] = useState<ICar>({ _id: '',price: 0, brand: '', image: '', model: '', name: '' });
    const [error, setError] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File>();

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

    const getCurrentCar = async (e: any) => {
        try {
            const response = await AdminService.getCarById(e.target.value);
            setSelectedCar(response);
        } catch (error) {
            setError(true);
        }
    };

    const handleImage = (e: any) => setSelectedFile(e.target.files[0]);

    const handleChange = (e: any) => {
        setSelectedCar(selectedCar => ({
            ...selectedCar,
            [e.target.id]: e.target.value
        }));
    };

    const updateCar = async (e: any) => {
        e.preventDefault();

        let urlImage;
        
        if(selectedFile) {
            urlImage = await UploadImageToS3(selectedFile!);
            selectedCar.image = urlImage!;
        }

        try {
            const response = await AdminService.updateCar(selectedCar._id, selectedCar);
            navigate('/admin');
        } catch (error) {
            setError(true);
        }
    };

    return (
        <form className="w-100 mw-50 mt-4" onSubmit={updateCar}>
            <div className="mb-3">
                <select onChange={getCurrentCar} className="form-control" name="car" id="car">
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
            <div className="mb-3">
                <label htmlFor="">Nome</label>
                <input value={selectedCar?.name} onChange={handleChange} id="name" required type="text" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="">Marca</label>
                <input value={selectedCar?.brand} onChange={handleChange} id="brand" required type="text" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="">Modelo</label>
                <input value={selectedCar?.model} onChange={handleChange} id="model" required type="text" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="">Preço</label>
                <input value={selectedCar?.price} onChange={handleChange} id="price" required type="number" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="">Foto</label>
                <input onChange={handleImage} id="image" type="file" className="form-control" />
            </div>
            <div className="mb-3 d-flex justify-content-between">
                <CancelButton />
                <button className="btn btn-primary">ATUALIZAR DADOS</button>
            </div>
        </form>
    );
}