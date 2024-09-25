import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const GlamourCard = (props) => {
    const { title='', description='', images='' } = props.productData;
    return (
        <Card sx={{ maxWidth : window.innerWidth < 500 ? '100%' : '345px' }} onClick={props.onClick} style={{cursor: "pointer"}}>
            <CardMedia
                component="img"
                sx={{ height: 300 }}
                image={images[0]}
                title={title}
                loading="lazy"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                {props.children}
            </CardActions>
        </Card>
    );
}

export default GlamourCard;