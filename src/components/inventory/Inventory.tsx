import { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AddInventoryForm from "./AddInventoryForm";
import { useDispatch, useSelector } from "react-redux";
import { inventoryActionCreators, State } from "../../redux";
import { bindActionCreators } from "redux";
import InventoryBoard from "./InventoryBoard";

const Inventory = () => {

    const dispatch = useDispatch();
    const { getAllInventory } = bindActionCreators(inventoryActionCreators, dispatch);
    const { inventory } = useSelector((state: State) => state);

    useEffect(() => {
        getAllInventory()
    }, []);

    return (
        <Grid container sx={{ width: 'auto' }}>
            <Grid container justifyContent='center'>
                <Typography variant="h2" component="div">
                    Inventory Dashboard
                </Typography>
            </Grid>
            <AddInventoryForm />
            <InventoryBoard inventory={inventory} />
        </Grid>
    )
};

export default Inventory;