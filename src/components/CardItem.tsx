import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

type CardProps = {
    name: string
    image: string
    status: string
    id: number
}

const CardItem: React.FC<CardProps> = ({ name, image, status, id }) => {

    return (
        <Card key={id} sx={{ maxWidth: 380 }}>
            <CardActionArea >
                <CardMedia
                    component="img"
                    height="340"
                    image={image}
                    alt={name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {status}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default CardItem