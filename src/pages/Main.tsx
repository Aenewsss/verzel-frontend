import { useEffect, useState } from "react";
import { Catalog } from "../components/Catalog";
import { Filter } from "../components/Filter";
import { Footer } from "../components/Footer";
import { BasicModal } from "../components/ModalBasic";
import { ComplexModal } from "../components/ModalComplex";
import { Navbar } from "../components/Navbar";

export const Main = () => {

  const [filters, setFilters] = useState<string[]>([]);

  const [openBasicModal, setOpenBasicModal] = useState({ state: false, category: '' });
  const [openComplexModal, setOpenComplexModal] = useState({ state: false, category: '' });

  const [basicFilter, setBasicFilter] = useState();
  const [complexFilter, setComplexFilter] = useState();

  const [cleanFilter, setCleanFilter] = useState(false);


  return (
    <>
      <Navbar />
      <div className="row container-fluid">
        <div className="col-md-3">
          <Filter
            setOpenBasicModal={setOpenBasicModal} setOpenComplexModal={setOpenComplexModal}
            basicFilter={basicFilter} complexFilter={complexFilter}
            filters={filters} setFilters={setFilters}
            cleanFilter={cleanFilter} setCleanFilter={setCleanFilter}
          />
        </div>
        <div className="col-md-9">
          <Catalog filters={filters} />
        </div>

        {
          !openComplexModal.state &&
          <BasicModal
            openBasicModal={openBasicModal} setOpenBasicModal={setOpenBasicModal}
            setBasicFilter={setBasicFilter} setCleanFilter={setCleanFilter}
          />
        }

        {
          !openBasicModal.state &&
          <ComplexModal
            openComplexModal={openComplexModal} setOpenComplexModal={setOpenComplexModal}
            setComplexFilter={setComplexFilter} setCleanFilter={setCleanFilter}
          />
        }
        <Footer />
      </div>
    </>
  );
}