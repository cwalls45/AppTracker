import { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AddInventoryForm from "./AddInventoryForm";
import { useDispatch } from "react-redux";
import { inventoryActionCreators } from "../../redux";
import { bindActionCreators } from "redux";

const Inventory = () => {

    const dispatch = useDispatch();
    const { getAllInventory } = bindActionCreators(inventoryActionCreators, dispatch)

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
            <Grid container item md={7}>
                This is were the inventory will be displayed
            </Grid>
        </Grid>
    )
};

export default Inventory;