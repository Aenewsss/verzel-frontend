import { useEffect, useState } from "react";
import { CardsCars } from "../../components/Admin/CardsCars";
import { Title } from "../../components/Admin/Title";
import { MainService } from "../../services/main";
import { ICar } from "../../types/car.interface";

export const ListCars = () => {

   

    return (
        <section className="container-fluid vh-100 d-flex flex-column align-items-center justify-content-center">
            <Title title={'Carros cadastrados'} />
            <CardsCars />
        </section>
    );
}