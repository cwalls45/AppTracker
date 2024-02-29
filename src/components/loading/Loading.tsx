import { Backdrop, CircularProgress } from "@mui/material"
import { useSelector } from "react-redux";
import { State } from "../../redux";

const Loading = () => {

  const environment = useSelector((state: State) => state.environment);

  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={environment.isLoading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

export default Loading;