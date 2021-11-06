import classes from "./Search.module.scss";
import {Card} from "./Card/Card";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentWeatherByName, hideAlert, showAlert} from "../../redux/actions";
import {Alert} from "../Alert/Alert";


export const Search = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    const city = useSelector(state => state.current.cityByName);
    const isCard = useSelector(state => state.current.isCard);

    const onSubmitHandler = (event) => {
        if (event.key !== "Enter") {
            return;
        }

        onClickHandler();
    }

    const onClickHandler = () => {
        if (value.trim()) {
            dispatch(hideAlert());
            dispatch(getCurrentWeatherByName(value));
        } else {
            dispatch(showAlert('Заполните поле!'));
        }

        setValue('');
    }

    return (
        <div className={classes.Search}>
            <div className={classes.container}>
                <div className={classes.logo}>Weather in your city</div>
                <div className={classes.search_form}>
                    <div className={classes.input_block}>
                        <input
                            className={classes.input}
                            placeholder="Поиск города..."
                            onChange={(event) => setValue(event.target.value)}
                            value={value}
                            onKeyPress={onSubmitHandler}
                        />
                        <Alert />
                        {isCard && <Card city={city} searchButtonClass={classes.button} />}
                    </div>
                    <button
                        onClick={onClickHandler}
                        className={classes.button}
                    >
                        Поиск
                    </button>
                </div>
            </div>
        </div>
    )
}
