import { useContext, useState } from "react";
import styled from '@emotion/styled';
import GlamourButton from "../GlamourButton/GlamourButton";
import { CartContext } from "../../Reducers/CartProvider";

const GlamourCartLayout = (props) => {
  const state = useContext(CartContext);
  const {style={width:'100%'}, label="Add to cart", icon="", size="small", variant="contained", productData} = props;
  const qtyFromState = state?.state?.filter(data => data.id === productData.id)[0]?.qty || 0;
  const [qty, setQty] = useState(qtyFromState);
  const onClickHandler = (e, action="inc") => {
    e.stopPropagation();
    if(action === "inc") {
      setQty((previousCount) => previousCount + 1);
      state.onAddHandler(productData);
    } else {
      setQty((previousCount) => previousCount - 1);
      state.onDeleteHandler(productData);
    }
  }

  const QtyCount = () => {
    return  <QtyCountLayout><GlamourButton 
                label=" + "
                variant={variant}
                onClickHandler={(e) => onClickHandler(e)}/> 
              
              {qty} 
              
              <GlamourButton 
                label=" - "
                variant={variant}
                onClickHandler={(e) => onClickHandler(e, "dec")}/>
            </QtyCountLayout>
  }

  return qty ? <QtyCount/> : 
            <GlamourButton
              style={style}
              label={label}
              icon={icon}
              size={size}
              variant={variant}
              onClickHandler={(e) => onClickHandler(e)}
            />
}

const QtyCountLayout = styled.div `
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

export default GlamourCartLayout