import { Button, Grid, Typography } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface IProps {
    year: number;
    handleChangeYear: React.Dispatch<React.SetStateAction<number>>;
}

const YearSelector = ({ year, handleChangeYear }: IProps) => {

    const previousYear = () => handleChangeYear(year - 1);
    const advanceYear = () => handleChangeYear(year + 1);

    return (
        <Grid container justifyContent='center' alignItems='center'>
            <Button onClick={previousYear}>
                <ArrowBackIosNewIcon />
            </Button>
            <Typography variant="h5" component="div">
                {year}
            </Typography>
            <Button onClick={advanceYear}>
                <ArrowForwardIosIcon />
            </Button>
        </Grid>
    );
}

export default YearSelector;