import Typography from '@mui/material/Typography';
import { default as MUICard } from '@mui/material/Card';
import { IInventory } from '../../entities/inventory';
import CardContent from '@mui/material/CardContent';

interface IProps {
    property: IInventory
}

const Card = ({ property }: IProps) => {
    return (
        <MUICard>
            <CardContent>
                <Typography>
                    {property.companyName}
                </Typography>
                <Typography sx={{ fontSize: 24 }}>
                    {property.chemicalName}
                </Typography>
                <Typography sx={{ fontSize: 16 }}>
                    {property.amount} {property.units}
                </Typography>
            </CardContent>
        </MUICard>
    )
}

export default Card;