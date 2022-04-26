import coder from './giphy.gif'
import s from './styles.module.css'
import React from 'react';
import {mainData} from "../../../dal/dataForPage";
import {useDispatch} from "react-redux";
import {setStatusMenuAC} from "../../../bll/reducers/setActiveMenuReducer";
import {setDelayAC} from "../../../bll/reducers/setDelayStatusReducer";

type mainInfoPropsType = {
    language: 'RU' | 'ENG'
}

function MainInfo(props: mainInfoPropsType) {
    const dispatch = useDispatch()

    const changeStatus = () => {
        dispatch(setStatusMenuAC(1))
        dispatch(setDelayAC(true))
    }

    const mainInfoTitle = mainData[props.language][0].title
    const mainInfoDescription = mainData[props.language][1].description

    return <div>
        <h1 className={s.title}>{mainInfoTitle}</h1>
        <img onClick={changeStatus} src={coder} className={s.image} alt="Programmer"/>
        <h2 className={s.title}>{mainInfoDescription}</h2>
    </div>;
}
export default MainInfo
