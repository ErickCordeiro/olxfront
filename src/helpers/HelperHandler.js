import moment from "moment";
import 'moment/locale/pt-br'; 

export const formatDateToBr = (date) => {
    const dateFormated = moment(date).format('DD/MM/YYYY HH:mm:ss');
    return dateFormated;
}

export const formatPriceToBr = (price) => {

    let priceFormated = '0,00';

    if(price) {
        priceFormated = price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    }
    
    return priceFormated;
}