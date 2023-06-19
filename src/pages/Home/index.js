import React from "react";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div>
                Home criada
            </div>

            <Link to="/about">Sobre a empresa</Link>
        </>

    );
}

export default Home;