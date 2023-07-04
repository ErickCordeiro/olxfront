import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MaskedInput from "react-text-mask";
import createNumberMask from "text-mask-addons/dist/createNumberMask";
import { AddContainer } from "./styles.js";
import { Container, AlertError, Card } from '../../styled.js';
import useApi from '../../helpers/OlxApi.js';

const AddAd = () => {
    const api = useApi();
    const navigate = useNavigate();

    const [error, setError] = useState('');
    const [disabled, setDisabled] = useState(false);

    // Infos Form
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [priceNeg, setPriceNeg] = useState(false);
    const [images, setImages] = useState([]);
    const [categories, setCategories] = useState([]);


    useEffect(() => {
        const getCategories = async () => {
            try {
                const scat = await api.getCategories();
                setCategories(scat);
            } catch (error) {
                console.error('Error na requisição: ', error);
            }
        }

        getCategories();
    }, []);

    const handleImageBase64 = (e) => {
        const files = e.target.files;
        const convertedImages = [];

        for(let i = 0; i < files.length; i++){
            const file = files[i];
            const reader = new FileReader();

            reader.onloadend = () => {
                convertedImages.push(reader.result);
                if (convertedImages.length === files.length) {
                    setImages(convertedImages);
                }
            }

            reader.readAsDataURL(file);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true);
        setError('');

        //TODO: Fazer  a conexão com o banco agora para cadastrar as imagens e o anúncio
        let errors = [];

        if(!title.trim()) {
            errors.push('Titúlo não pode ser vazio!');
        }

        if(!category) {
            errors.push('Selecione uma categoria');
        }

        if(errors.length > 0) {
            setError(errors.join("\n"));
            setDisabled(false);
            return;
        }

        const json = await api.addAd(title, category, description, price, priceNeg, images);
        if(!json.info) {
            setError(json.message);
            setDisabled(false);
            return;
        }

        navigate(`/ad/${json.info._id}`);
    }

    const priceMask = createNumberMask({
        prefix: '',
        suffix: '',
        includeThousandsSeparator: true,
        thousandsSeparatorSymbol: '.',
        allowDecimal: true,
        decimalSymbol: ',',
        decimalLimit: 2, // how many digits allowed after the decimal
        integerLimit: 7, // limit length of integer numbers
        allowNegative: false,
        allowLeadingZeroes: false,
    });


    return (
        <>
        <Container>
            <AddContainer>
                <h1>Novo Anúncio</h1>
                <Card>

                    {error &&
                        <AlertError>{error}</AlertError>
                    }
    
                    <form onSubmit={handleSubmit}>
                        <label>
                            <span>Título</span>
                            <input 
                                type="text" 
                                name="title" 
                                placeholder="Digite o título" 
                                required disabled={disabled}
                                value={title}
                                onChange={e=>setTitle(e.target.value)} />
                        </label>

                        <label>
                            <span>Categoria</span>
                            <select 
                                name="category" 
                                required 
                                disabled={disabled}
                                value={category}
                                onChange={e=>setCategory(e.target.value)} >
                                    <option>Selecione</option>
                                    {categories && 
                                        <>
                                            {categories.map((item, index) => {
                                                return <option key={index} value={item._id}>{item.name}</option>
                                            })}
                                        </>
                                    }
                                    
                            </select>
                        </label>

                        <label className="d-flex">
                            <div className="flex-2">
                                <span>Preço</span>
                                <MaskedInput 
                                    mask={priceMask} 
                                    disabled={disabled || priceNeg}
                                    value={price}
                                    onChange={e=>setPrice(e.target.value)} 
                                    placeholder="R$ 0,00"
                                />
                            </div>
                            <div className="flex-2">
                                <span>Preço Negociavel ?</span>
                                <input 
                                    type="checkbox"
                                    name="priceNeg" 
                                    disabled={disabled}
                                    checked={priceNeg}
                                    onChange={e=>setPriceNeg(!priceNeg)} />
                            </div>
                        </label>

                        <label>
                            <span>Descrição</span>
                            <textarea
                                placeholder="Digite a descrição do anúncio"
                                name="description" 
                                required 
                                disabled={disabled}
                                value={description}
                                onChange={e=>setDescription(e.target.value)} >  
                            </textarea>
                        </label>

                        <label>
                            <span>Imagem (1 ou mais)</span>
                            <input 
                                type="file"
                                multiple
                                onChange={handleImageBase64}
                                disabled={disabled}
                                accept="image/png, image/jpeg, image/jpg"
                            />
                        </label>

                      
                        <button>Cadastrar Anúncio</button>
                    </form>
                </Card>
            </AddContainer>
        </Container>
        </>
    );
}

export default AddAd;