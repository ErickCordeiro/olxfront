import React from "react";
import { Link } from 'react-router-dom';
import { AdsArea } from './styles';

const ShelfItem = ({ data }) => {
    
    return (
        <>
        <AdsArea>
            <Link to={`/ad/${data.id}`} className="shelf-item">
                <div>
                    <img className="shelf-img" src={data.image} alt={data.title} />
                </div>
                <h3>{data.title}</h3>
                <span>R$ {data.price.toLocaleString('pt-BR',
                    { minimumFractionDigits: 2, maximumFractionDigits: 2 }
                    )
                }</span>
            </Link>
        </AdsArea>
        </>
    );
}

export default ShelfItem;