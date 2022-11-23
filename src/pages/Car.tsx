import { useParams } from "react-router-dom"
import { AboutCar } from "../components/AboutCar"
import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"

export const Car = () => {

    const { id } = useParams()

    return (
        <>
            <Navbar />
            <AboutCar id={id} />
            <Footer />
        </>
    )
}