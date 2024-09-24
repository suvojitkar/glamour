import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import GlamourCard from '../Component/GlamourCard/GlamourCard';
import useFetch from '../Hooks/useFetch';
import GlamourCartLayout from '../Component/GlamourCartLayout/GlamourCartLayout';

const ProductList = () => {
    const navigate = useNavigate();

    const redirectToProductDetails = (id) => {
        navigate(`/product/${id}`);
    }

    const ProductList = () => {
        const { apiResp } = useFetch({ url: "https://dummyjson.com/products" });
        const products = apiResp?.products;
        if (products?.length) {
            return <CardLayout>{products.map((productData) => {
                return <GlamourCard key={productData.id} productData={productData} onClick={() => redirectToProductDetails(productData.id)}>
                    <GlamourCartLayout productData={productData}/>
                </GlamourCard>
            }
            )}
            </CardLayout>
        }
    }

    return <ProductList />
}

const columnsCount = window.innerWidth < 500 ? 1 : 4;

const CardLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(${columnsCount}, 1fr);
  gap: 16px;
  padding: 16px;
`;


export default ProductList;