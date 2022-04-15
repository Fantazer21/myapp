import React, {useEffect} from 'react';
import s from './styles.module.css'

// import Particles from "react-tsparticles";
import preloader from './preloader.gif'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/store";
import MainInfo from "./mainInfo/mainInfo";
import StackInfo from "./stackInfo/stackInfo";
import {setDelayAC} from "../../bll/reducers/setDelayStatusReducer";
import ContactsInfo from "./contactsInfo/constactsInfo";

const options = {
    fpsLimit: 120,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "push",
            },
            onHover: {
                enable: true,
                mode: "repulse",
            },
            resize: true,
        },
        modes: {
            bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.1,
                size: 40,
            },
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: "#ffffff",
        },
        links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.19,
            width: 1,
        },
        collisions: {
            enable: true,
        },
        move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 2,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 80,
        },
        opacity: {
            value: 0.1,
        },
        shape: {
            type: "circle",
        },
        size: {
            random: true,
            value: 4,
        },
    },
    detectRetina: true,
}


function Main() {
    const language = useSelector<AppRootStateType, 'RU' | 'ENG'>(state => state.setLanguage.language)
    const menuStatus = useSelector<AppRootStateType, number>(state => state.setActiveMenu.status)
    const delay = useSelector<AppRootStateType, boolean>(state => state.setDelay.delay)
    const dispatch = useDispatch()

    const setSkeleton = () => {
        setTimeout(() => {
            dispatch(setDelayAC(false))
        }, 2000)
    }

    useEffect(() => {
        setSkeleton()
    }, [language, menuStatus])
    return (
        <div className={s.main}>
            {/*<Particles*/}
            {/*    id="tsparticles"*/}
            {/*    options={{options}}*/}
            {/*/>*/}
            <div className={s.mainContainer}>
                {delay ? <img src={preloader} className={s.loader} alt="Programmer"/>
                    : (() => {
                            switch (menuStatus) {
                                case 0:
                                    return <MainInfo language={language}/>;
                                case 1:
                                    return <StackInfo/>;
                                case 2:
                                    return <ContactsInfo/>;
                                default:
                                    return null;
                            }
                        }

                    )()
                }
            </div>
        </div>
    );
}

export default Main;