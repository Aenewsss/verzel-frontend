import { useEffect, useState } from "react"

export const ComplexModal: React.FC<any> =
    ({ openComplexModal, setOpenComplexModal, setComplexFilter, setCleanFilter }) => {

        const [min, setMin] = useState(0);
        const [max, setMax] = useState(0);

        const handleSubmit = (e: any) => {
            e.preventDefault();

            setComplexFilter({ category: openComplexModal.category, value: { min, max } });
            setOpenComplexModal({ state: false, category: '' });
        }

        return (
            <div style={{ opacity: openComplexModal.state ? '1' : '0', transform: openComplexModal.state ? 'translate(-50%, -50%)' : 'translateX(300%)' }} className="custom-modal position-fixed absolute-centered d-flex flex-column rounded align-items-center bg-white mw-300 p-5">
                <form onSubmit={handleSubmit}>
                    <h5 className="mb-3 text-start">Selecione
                        {openComplexModal.category == 'price' ? ' o preço' : ' o ano'}
                    </h5>
                    <div className="mb-3">
                        <label htmlFor="">De</label>
                        <input required minLength={3} onChange={e => setMin(Number(e.target.value))} type="number" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="">Até</label>
                        <input required minLength={3} onChange={e => setMax(Number(e.target.value))} type="number" className="form-control" />
                    </div>
                    <div className="mb-3 d-flex justify-content-between">
                        <button className="btn btn-danger" onClick={e => setCleanFilter(true)}>Cancelar</button>
                        <button className="btn btn-primary">Filtrar</button>
                    </div>
                </form>
            </div>
        )
    }