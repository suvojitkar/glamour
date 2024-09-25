import Button from '@mui/material/Button'

const GlamourButton = (props) => {
  const {style, label, icon, size, variant, onClickHandler} = props;
  return <Button size={size} variant={variant} style={style} onClick={onClickHandler} type="button">{label}</Button>
}

export default GlamourButton