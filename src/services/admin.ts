import { ICar } from "../types/car.interface";
import { IUser } from "../types/user.interface";
import Api from "./api";

export const AdminService = {
    login: async (params: IUser) => {
        const response = await Api.post('/admin/authenticate', params);
        localStorage.setItem('token', response.data.jwt);
    },
    create: async (params: ICar) => {
        const response = await Api.post('/admin/car/new', params, {
            headers: { 'x-access-token': localStorage.getItem('token') }
        });
        return response.data;
    },
    listAll: async () => {
        const response = await Api.get('/listAll', {
            headers: { 'x-access-token': localStorage.getItem('token') }
        });
        return response.data.cars;
    },
    getCarById: async (id: string) => {
        const response = await Api.get(`admin/car/getCar/${id}`, {
            headers: { 'x-access-token': localStorage.getItem('token') }
        });
        return response.data.car;
    },
    updateCar: async (id: string, params: ICar) => {
        console.log(id, params)
        const response = await Api.put(`admin/car/updateCar/${id}`, params, {
            headers: { 'x-access-token': localStorage.getItem('token') }
        });
        return response.data.car;
    },
    removeCar: async (id: string) => {
        const response = await Api.delete(`admin/car/remove/${id}`, {
            headers: { 'x-access-token': localStorage.getItem('token') }
        });
        return response.data;
    }
}