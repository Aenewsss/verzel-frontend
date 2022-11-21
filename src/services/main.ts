import { ICar } from "../types/car.interface";
import Api from "./api";

export const MainService = {
    listAll: async () => {
        const response = await Api.get('/listAll');
        return response.data.cars
    }
}