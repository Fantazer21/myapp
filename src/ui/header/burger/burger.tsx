import React from 'react';
import s from './styles.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../bll/store";
import {navBarData} from "../../../dal/dataForPage";
import {setStatusMenuAC} from "../../../bll/reducers/setActiveMenuReducer";
import {setDelayAC} from "../../../bll/reducers/setDelayStatusReducer";

const Burger = () => {
    const language = useSelector<AppRootStateType, 'RU' | 'ENG'>(state => state.setLanguage.language)
    const menuStatus = useSelector<AppRootStateType, number>(state => state.setActiveMenu.status)
    const dispatch = useDispatch()
    const navbar = navBarData[language]
    const changeStatus = (param: any) => {
        dispatch(setStatusMenuAC(param))
        dispatch(setDelayAC(true))
    }

    return (
                <div className={s.menuToggle}>
                    <input className={s.menuToggleInput} type="checkbox" />
                    <span className={s.menuToggleSpan}></span>
                    <span className={s.menuToggleSpan}></span>
                    <span className={s.menuToggleSpan}></span>
                    <ul className={s.menu}>
                        {
                            navbar.map((el, ind) => {
                                return <li key={ind} id={el} className={menuStatus === ind ? s.statusActive : s.elNavBar}
                                            onClick={() => changeStatus(ind)}>{el}</li>
                            })
                        }
                    </ul>
                </div>
    );
};

export default Burger;