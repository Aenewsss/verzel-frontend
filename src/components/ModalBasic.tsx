import { useEffect, useState } from "react"

export const BasicModal: React.FC<any> =
    ({ openBasicModal, setOpenBasicModal, setBasicFilter,setCleanFilter }) => {

        const [filter, setFilter] = useState('');

        const handleSubmit = (e: any) => {
            e.preventDefault();

            setBasicFilter({ category: openBasicModal.category, value: filter });
            setOpenBasicModal({ state: false, category: '' });
        }

        return (
            <div style={{ opacity: openBasicModal.state ? '1' : '0', transform: openBasicModal.state ? 'translateX(-50%)' : 'translateX(300%)' }} className="custom-modal position-fixed absolute-centered d-flex flex-column rounded align-items-center bg-white mw-300 p-5">
                <form onSubmit={handleSubmit}>
                    <h5 className="mb-3 text-start">Selecione
                        {openBasicModal.category == 'name' ? ' o nome' : openBasicModal.category == 'brand' ? ' a marca' : ' o modelo'}
                    </h5>
                    <div className="mb-3">
                        <input required minLength={3} onChange={e => setFilter(e.target.value)} type="text" className="form-control" />
                    </div>
                    <div className="mb-3 d-flex justify-content-between">
                        <button className="btn btn-danger" onClick={e => setCleanFilter(true)}>Cancelar</button>
                        <button className="btn btn-primary">Filtrar</button>
                    </div>
                </form>
            </div>
        )
    }