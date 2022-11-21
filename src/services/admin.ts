import { ICar } from "../types/car.interface";
import { IUser } from "../types/user.interface";
import Api from "./api";

export const AdminService = {
    login: async (params: IUser) => {
        const response = await Api.post('/admin/authenticate', params);
        localStorage.setItem('token', JSON.stringify(response.data.jwt));
    },
    listAll: async () => {
        const response = await Api.get('/listAll', {
            headers: {'x-access-token': localStorage.getItem('token') }
        });
        return response.data.cars;
    },
    create: async (params: ICar) => {
        const response = await Api.post('/admin/car/new', params, {
            headers: {'x-access-token': localStorage.getItem('token') }
        });
        return response.data;
    }
}