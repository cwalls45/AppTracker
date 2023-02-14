import Grid from "@mui/material/Grid";
import { IInventory } from "../../entities/inventory";
import Card from "./Card";

interface IProps {
    inventory: IInventory[];
};

const InventoryBoard = ({ inventory }: IProps) => {
    return (
        <Grid container item justifyContent='center' md={true}>
            {inventory.map((invtry) => <Card property={invtry} key={`${invtry.companyName}${invtry.chemicalName}`} />)}
        </Grid>
    )
};

export default InventoryBoard;