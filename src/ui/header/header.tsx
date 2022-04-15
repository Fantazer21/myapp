import React, {useEffect} from 'react';
import reactLogo from "./reactLogo.svg";
import reduxLogo from "./reduxLogo.svg";
import s from './styles.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/store";
import {navBarData} from "../../dal/dataForPage";
import {setLanguageAC} from "../../bll/reducers/setLanguageReducer";
import {setStatusMenuAC} from "../../bll/reducers/setActiveMenuReducer";
import {setDelayAC} from "../../bll/reducers/setDelayStatusReducer";

import { alpha, styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import Burger from "./burger/burger";


const CustomSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-disabled': {
        backgroundColor: '#6a1b9a',
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
        color: '#6a1b9a',
        '&:hover': {
            backgroundColor: alpha('#6a1b9a', theme.palette.action.hoverOpacity),
        },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
        backgroundColor: '#6a1b9a',
    },
}));


function Header() {
    const language = useSelector<AppRootStateType, 'RU' | 'ENG'>(state => state.setLanguage.language)
    const menuStatus = useSelector<AppRootStateType, number>(state => state.setActiveMenu.status)
    const dispatch = useDispatch()
    const navbar = navBarData[language]

    const changeLanguage = () => {
        dispatch(setLanguageAC((language === 'RU') ? 'ENG' : 'RU'))
        dispatch(setDelayAC(true))
    }

    const changeStatus = (param: any) => {
        dispatch(setStatusMenuAC(param))
        dispatch(setDelayAC(true))
    }

    return (
        <div className={s.AppHeader}>
            <img src={reactLogo} className={s.ReactLogo} alt="React-logo" width={100}/>
            <div className={s.Navbar}>
                {
                    navbar.map((el, ind) => {
                        return <div key={ind} id={el} className={menuStatus === ind ? s.statusActive : s.elNavBar}
                                    onClick={() => changeStatus(ind)}>{el}</div>
                    })
                }
            </div>
            <div className={s.rSection}>
                <CustomSwitch  defaultChecked onClick={() => changeLanguage()}/>
                <img src={reduxLogo} className={s.ReduxLogo} alt="Redux-Logo" width={50}/>
            </div>
                <Burger/>
        </div>
    );
}

export default Header;