import React from 'react';
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { Admin } from './pages/Admin/Admin';
import { ListCars } from './pages/Admin/ListCars';
import { NewCar } from './pages/Admin/NewCar';
import { RemoveCar } from './pages/Admin/RemoveCar';
import { UpdateCar } from './pages/Admin/UpdateCar';
import { Login } from './pages/Login';
import { Main } from './pages/Main';

export const RoutesConfig = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Main />} />
                    <Route path='login' element={<Login />} />
                    <Route path='admin' element={<Admin />} />
                    <Route path='admin/carros-cadastrados' element={<ListCars />} />
                    <Route path='admin/adicionar-carro' element={<NewCar />} />
                    <Route path='admin/atualizar-dados' element={<UpdateCar />} />
                    <Route path='admin/remover-carro' element={<RemoveCar />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}