import "./style.css";
import { Button } from "../Button";

const CatalogCard = ({ title }) => {
    return (
        <div className="container-card">
            <img className="img-card" src="/assets/images/imageCatalog.png" alt="Card" />
            <img className="filter-card" src="/assets/images/FilterCatalog.png" alt="filter" />
            <div className="content-btn-title">

                <div className="container-title">
                    <h2 className="title-catalog">{title}</h2>
                </div>
                <Button isPink children="More Details" />
            </div>
        </div>
    )
}

export { CatalogCard };