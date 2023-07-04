import React from "react";
import { Link } from 'react-router-dom';
import { AdsArea } from './styles';
import { formatPriceToBr } from "../../helpers/HelperHandler";

const ShelfItem = ({ data }) => {
    const priceFormat = formatPriceToBr(data.price);
    return (
        <>
        <AdsArea>
            <Link to={`/ad/${data.id}`} className="shelf-item">
                <div>
                    <img className="shelf-img" src={data.image} alt={data.title} />
                </div>
                <p>{data.category.name}</p>
                <h3>{data.title}</h3>
                <span>{priceFormat}</span>
            </Link>
        </AdsArea>
        </>
    );
}

export default ShelfItem;