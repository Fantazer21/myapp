import coder from './giphy.gif'
import s from './styles.module.css'
import React from 'react';
import {mainData} from "../../../dal/dataForPage";

type mainInfoPropsType = {
    language: 'RU' | 'ENG'
}

function mainInfo(props: mainInfoPropsType) {

    const mainInfoTitle = mainData[props.language][0].title
    const mainInfoDescription = mainData[props.language][1].description

    return <div>
        <h1 className={s.title}>{mainInfoTitle}</h1>
        <img src={coder} className={s.image} alt="Programmer"/>
        <h2 className={s.title}>{mainInfoDescription}</h2>
    </div>;
}
export default mainInfo
