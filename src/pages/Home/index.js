import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Container } from '../../styled.js';
import { SearchContainer } from './styles.js';
import useApi from '../../helpers/OlxApi.js';

const Home = () => {
    const api = useApi();

    const [categories, setCategories] = useState([]);
    const [ads, setAds] = useState([]);

    useEffect(() => {
        const getCategory = async () => {
            try {
                const cats = await api.getCategories();
                setCategories(cats);
            } catch ( error ) {
                console.error('Error na requisição: ', error);
            }
            
        }
        
        getCategory();

    }, []);

    useEffect(() => {
        const getAd = async () => {
            try {
                const listAds = await api.getAds();
                setAds(listAds);
            } catch ( error ) {
                console.error('Error na requisição: ', error);
            }
            
        }
        
        getAd();

    }, []);

    return (
        <>
            <SearchContainer>
                <Container>
                    <div className="search-container">
                        <form method="GET" action="/ads">
                            <input type="text" name="search" placeholder="O que você procura?" />
                            <button>
                                <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
                                </svg>
                            </button>
                        </form>
                    </div>
                    <div className="category-container">
                        {categories && 
                            <>
                                {categories.map((item, index) => {
                                    return (
                                        <>
                                            <Link key={index} to={`/ads?category=${item.slug}`} className="category-link">
                                                <div>
                                                    <img className="category-img" src={item.url} alt={item.name} />
                                                </div>
                                                <span>{item.name}</span>
                                            </Link>
                                        </>
                                    )
                                })}
                            </>
                        }
                    </div>
                </Container>
            </SearchContainer>

            <Container>
                <h2>Anúncios recentes</h2>


            </Container>                        
        </>

    );
}

export default Home;