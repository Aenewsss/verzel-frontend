import React from 'react';
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { Admin } from './pages/Admin/Admin';
import { ListCars } from './pages/Admin/ListCars';
import { NewCar } from './pages/Admin/NewCar';
import { RemoveCar } from './pages/Admin/RemoveCar';
import { UpdateCar } from './pages/Admin/UpdateCar';
import { Car } from './pages/Car';
import { Login } from './pages/Login';
import { Main } from './pages/Main';
import { withAuth } from './utils/withAuth';

export const RoutesConfig = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Main />} />
                    <Route path='login' element={<Login />} />
                    <Route path=':id' element={<Car />} />
                    <Route path='admin' element={withAuth() ? <Admin /> : <Login />} />
                    <Route path='admin/carros-cadastrados' element={withAuth() ? <ListCars /> : <Login />} />
                    <Route path='admin/adicionar-carro' element={withAuth() ? <NewCar /> : <Login />} />
                    <Route path='admin/atualizar-dados' element={withAuth() ? <UpdateCar /> : <Login />} />
                    <Route path='admin/remover-carro' element={withAuth() ? <RemoveCar /> : <Login />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}