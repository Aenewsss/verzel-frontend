import { ICar } from "../types/car.interface";
import Api from "./api";

export const MainService = {
    listAll: async () => {
        const response = await Api.get('/listAll');
        return response.data.cars
    },
    getCarById: async (id: string) => {
        const response = await Api.get(`/car/${id}`, {
            headers: { 'x-access-token': localStorage.getItem('token') }
        });
        return response.data.car;
    }
}