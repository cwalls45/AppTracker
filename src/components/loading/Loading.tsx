import { Backdrop, CircularProgress } from "@mui/material"
import { useSelector } from "react-redux";
import { State } from "../../redux";

const Loading = () => {

  const state = useSelector((state: State) => state);

  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={state.environment.isLoading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

export default Loading;