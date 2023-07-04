import React, { useEffect, useState} from "react";
import { ListAdsArea } from './styles.js';
import { Container } from '../../styled.js';
import useApi from '../../helpers/OlxApi.js';
import ShelfItem from "../../components/ShelfItem/index.js";


const ListAds = () => {

    const api = useApi();
    const [ads, setAds] = useState([]);

    useEffect(() => {
        const getAd = async () => {
            try {
                const listAds = await api.getAds({
                    sort: 'desc',
                });
                setAds(listAds);
            } catch ( error ) {
                console.error('Error na requisição: ', error);
            }
        }
        
        getAd();

    }, []);

    return (
        <>
        <Container>
            <ListAdsArea>
                <h2>Todos os anúncios</h2>
                <div className="ads-container">
                    {ads && <>
                        {ads.map((item, index) => {
                            return <ShelfItem key={index} data={item}/>
                        })}
                    </>}
                </div>
            </ListAdsArea>
        </Container>
        </>
    );
}

export default ListAds;