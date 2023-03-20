import { Grid, TextField } from "@mui/material";
import { ICourseArea } from "../../entities/environment";

interface IProps {
  courseAreas: ICourseArea[];
  setterFunction: React.Dispatch<React.SetStateAction<ICourseArea[]>>;
  label: string;
  xs: number
  index: number;
  property: string
}

const SizeOfArea = ({courseAreas, setterFunction, label, xs, index, property}: IProps) => {

  const handleChange = (event) => {
    const updatedArea = { ...courseAreas[index], [property]: event.target.value }
    const courseAreasUpdated = [...courseAreas];
    courseAreasUpdated[index] = updatedArea;
    setterFunction(courseAreasUpdated);
  }

  return (
    <Grid item xs={xs}>
      <TextField
        fullWidth
        required={true}
        label={label}
        variant='outlined'
        value={courseAreas[index][property]}
        onChange={(event) => handleChange(event)}
        error={false}
        helperText={''}
      />
    </Grid>
  )
}

export default SizeOfArea;