import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AdminService } from "../../services/admin";
import { ICar } from "../../types/car.interface";
import { UploadImageToS3 } from "../../utils/functionS3";
import { CancelButton } from "./CancelButton";

export const FormNewCar = () => {

    const [newCar, setNewCar] = useState<ICar>({ _id: '', brand: '', image: '', model: '', name: '', price: 0 });
    const [selectedFile, setSelectedFile] = useState<File>();
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e: any) => {
        setNewCar(newCar => ({
            ...newCar,
            [e.target.id]: e.target.value
        }));
    };

    const handleImage = (e: any) => setSelectedFile(e.target.files[0]);

    const addCar = async (e: any) => {
        e.preventDefault()

        const urlImage = await UploadImageToS3(selectedFile!);

        newCar.image = urlImage!;

        try {
            const addedCar = await AdminService.create(newCar);
            navigate('/admin');
        } catch (error) {
            setError(true);
        }
    };

    return (
        <form className="w-100 mw-50" onSubmit={addCar}>
            <div className="mb-3">
                <label htmlFor="">Nome</label>
                <input onChange={handleChange} id="name" required type="text" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="">Marca</label>
                <input onChange={handleChange} id="brand" required type="text" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="">Modelo</label>
                <input onChange={handleChange} id="model" required type="text" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="">Preço</label>
                <input onChange={handleChange} id="price" required type="number" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="">Foto</label>
                <input onChange={handleImage} id="image" required type="file" className="form-control" />
            </div>
            <div className="mb-3 d-flex justify-content-between">
                <CancelButton />
                <button className="btn btn-primary">ADICIONAR CARRO</button>
            </div>
        </form>
    );
}