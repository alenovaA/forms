import {CircularProgress} from "@mui/material";

const Loader = ({loading}) => {
    return loading && <CircularProgress color="primary" size={10} />
};

export default Loader;
