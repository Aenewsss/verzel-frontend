import { useEffect, useState } from "react"

export const Filter: React.FC<any> =
    ({ setOpenBasicModal, setOpenComplexModal, basicFilter, complexFilter, filters, setFilters, cleanFilter, setCleanFilter }) => {

        useEffect(() => {
            if (basicFilter && filters.filter((el: any) => el != basicFilter)) {
                if (!filters.length) setFilters([basicFilter])
                else setFilters((filters: any) => [...filters, basicFilter])
            }
            if (complexFilter && filters.filter((el: any) => el != complexFilter)) {
                if (!filters.length) setFilters([complexFilter])
                else setFilters((filters: any) => [...filters, complexFilter])
            }

        }, [basicFilter, complexFilter])

        useEffect(() => {
            if (cleanFilter) {
                setFilters([]);
                setCleanFilter(false);
                setOpenBasicModal({ state: false, category: '' });
                setOpenComplexModal({ state: false, category: '' });
            }
        }, [cleanFilter])

        const addFilter = (category: string) => {
            switch (category) {
                case "price":
                    setOpenComplexModal({ state: true, category })
                    return;

                case "name":
                case "brand":
                case "model":
                    setOpenBasicModal({ state: true, category })
                    return;

                case "default":
                    return alert('Nenhum filtro selecionado');
            }
        }

        return (
            <section className="container mt-5">
                <div className="ms-md-5 d-flex flex-column align-items-center justify-content-center ">
                    <ul className="pe-5 pt-3 pb-3 d-flex flex-column align-items-start justify-content-start gap-4 border rounded">
                        <h5>Filtrar por:</h5>
                        <li className="border-bottom pe-xl-5 scale text-animation-bold">
                            <button onClick={e => addFilter("price")} className="btn btn-default">
                                <span>Preço
                                    {
                                        filters.filter((filterCategory: any) => filterCategory.category == "price").length > 0 ?
                                            <span className="text-success fw-bold">&nbsp;V</span> :
                                            <span className="text-danger">&nbsp;X</span>
                                    }
                                </span>
                            </button>
                        </li>
                        <li className="border-bottom pe-xl-5 scale text-animation-bold">
                            <button onClick={e => addFilter("name")} className="btn btn-default">
                                <span>Nome
                                    {
                                        filters.filter((filterCategory: any) => filterCategory.category == "name").length > 0 ?
                                            <span className="text-success fw-bold">&nbsp;V</span> :
                                            <span className="text-danger">&nbsp;X</span>
                                    }
                                </span>
                            </button>
                        </li>
                        <li className="border-bottom pe-xl-5 scale text-animation-bold">
                            <button onClick={e => addFilter("brand")} className="btn btn-default">
                                <span>Marca
                                    {
                                        filters.filter((filterCategory: any) => filterCategory.category == "brand").length > 0 ?
                                            <span className="text-success fw-bold">&nbsp;V</span> :
                                            <span className="text-danger">&nbsp;X</span>
                                    }
                                </span>
                            </button>
                        </li>
                        <li className="border-bottom pe-xl-5 scale text-animation-bold">
                            <button onClick={e => addFilter("model")} className="btn btn-default">
                                <span>Modelo
                                    {
                                        filters.filter((filterCategory: any) => filterCategory.category == "model").length > 0 ?
                                            <span className="text-success fw-bold">&nbsp;V</span> :
                                            <span className="text-danger">&nbsp;X</span>
                                    }
                                </span>
                            </button>
                        </li>
                        <li className="pe-xl-5 scale text-animation-bold">
                            <button onClick={e => setCleanFilter(true)} className="btn btn-default">
                                <span>Limpar Filtros</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
