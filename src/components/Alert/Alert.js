import classes from "./Alert.module.scss";
import {useSelector} from "react-redux";

export const Alert = () => {
    const alert = useSelector(state => state.app.alert);

    if (!alert) return null;

    return (
        <div className={classes.Alert}>
            {alert}
        </div>
    )
}