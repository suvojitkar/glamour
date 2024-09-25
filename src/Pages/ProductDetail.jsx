import styled from '@emotion/styled';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from '../Hooks/useFetch';
import GlamourCartLayout from '../Component/GlamourCartLayout/GlamourCartLayout';

const ProductDetail = () => {
    const { id } = useParams();
    const { apiResp } = useFetch({url: `https://dummyjson.com/products/${id}`});
    const [details, setDetails] = useState({});
    
    useEffect(() => {
        if(Object.keys(apiResp)?.length) {
            setDetails(apiResp);
        }
    }, [apiResp]);

    const ProductDetailWidget = () => {
        return <ProductDetailLayout>
            <img src={apiResp.images[0]} height="500px" width="500px"/>
            <div>
                <h1> {apiResp.title} </h1> <br/>
                <ProductDescription> {apiResp.description} </ProductDescription> <br/>
                {/* <GlamourCartLayout /> */}
            </div>
        </ProductDetailLayout>
    }

    const Loading = () => {
        return "Loading ... "
    }

    return Object.keys(details)?.length ? <ProductDetailWidget/> : <Loading/>;
}

const ProductDetailLayout = styled.div `
    margin-top: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
`;

const ProductDescription = styled.div `
    width: 550px;
`;

export default ProductDetail