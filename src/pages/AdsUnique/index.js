import React, { useState, useEffect } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Link, useParams } from "react-router-dom";
import { PageArea, BreadCrumb } from './styles.js';
import { Container, Card, ButtonLink } from '../../styled.js';
import useApi from '../../helpers/OlxApi.js';
import { formatDateToBr, formatPriceToBr } from '../../helpers/HelperHandler.js';
import ShelfItem from "../../components/ShelfItem/index.js";


const AdsUnique = () => {
    const api = useApi();
    const  { id } = useParams();
    const [loading, setLoagind] = useState([]);
    const [adInfo, setAdInfo] = useState({});

    const proprietes = {
        duration: 5000,
        infinite: false,
        indicators: false,
        arrows: adInfo.images?.lenght > 1 ? true :  false
    }

    useEffect(() => {
        const getAdInfo = async (id) => {
            try {
                const listAd = await api.getAdUnique(id, true);
                setAdInfo(listAd);
            } catch ( error ) {
                console.error('Error na requisição: ', error);
            }
            
        }
        
        getAdInfo(id);
    }, [id]);

    const dateFormat = formatDateToBr(adInfo.createdAt);
    const priceFormat = formatPriceToBr(adInfo.price);

    return (
        <>
        <Container>
            <PageArea>
                <BreadCrumb> 
                    <Link to="/">Home</Link><span> / </span>
                    <Link to={`/ads?state=${adInfo.state}`}>{adInfo.state}</Link><span> / </span>
                    <Link to={`/ads?category=${adInfo.category?.slug}`}>{adInfo.category?.name}</Link>
                </BreadCrumb>
                <div className="adInfo-container">
                    <div className="adInfo-container__wrapper">
                        <div className="adInfo-container__wrapper__description">
                            <div className="adInfo-container__wrapper slide-container">
                                {adInfo.images &&
                                    <Slide {...proprietes}>
                                        {adInfo.images.map((item, index) => {
                                            return( 
                                                <>
                                                    <div key={index} className="each-slide">
                                                        <div>
                                                            <img src={item} alt={adInfo.title} />
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        })}
                                    </Slide>
                                } 
                            </div>

                            <div className="adInfo-container__header">
                                <h2>{adInfo.title}</h2>
                                <span>Publicado em {dateFormat}</span>
                            </div>
                            <p className="ad-description">{adInfo.description}</p>
                        </div>
                        <div className="adInfo-container__wrapper__infos">
                            <div className="adInfo-container__wrapper card">
                               <span>{priceFormat}</span>
                            </div>
                            <div className="adInfo-container__wrapper userInfos">
                                <Card>
                                    <h5>{adInfo.user?.name}</h5>
                                    <p>Entre em contato por e-mail <span>{adInfo.user?.email}</span></p>
                                    <span></span>
                                    <p>Localização: {adInfo.state}</p>

                                    <ButtonLink className="button-link" href={`mailto:${adInfo.user?.email}`}>Entrar em contato</ButtonLink>
                                </Card>
                            </div>
                        </div>
                    </div>

                    <h4> Itens Relacionados </h4>
                    <div className="adInfo-container__other">
                        {adInfo.other && 
                            <>
                                {adInfo.other.map((item, index) => {
                                    return( 
                                        <>
                                            <ShelfItem key={index} data={item} /> 
                                        </>
                                    )
                                })}
                            </>
                        }
                    </div>
                </div>
            </PageArea>
        </Container>
        </>
    );
}

export default AdsUnique;