import Grid from "@mui/material/Grid";
import AddInventoryForm from "./AddInventoryForm";

const Inventory = () => {
    return (
        <Grid container>
            <AddInventoryForm />
            <Grid container item md={7} direction="column">
                This is were the inventory will be displayed
            </Grid>
        </Grid>
    )
};

export default Inventory;