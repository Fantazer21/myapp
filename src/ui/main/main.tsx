import React, {useEffect} from 'react';
import s from './styles.module.css'

import Particles from "react-tsparticles";
import preloader from './preloader.gif'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/store";
import MainInfo from "./mainInfo/mainInfo";
import StackInfo from "./stackInfo/stackInfo";
import {setDelayAC} from "../../bll/reducers/setDelayStatusReducer";
import ContactsInfo from "./contactsInfo/constactsInfo";
import {loadFull} from "tsparticles";

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

    const particlesInit = async (main: any) => {
        await loadFull(main);
    };

    return (
        <div className={s.main}>
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    background: {
                        color: {
                            value: "#151515",
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            resize: true,
                        },
                        modes: {
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
                            value: "#9c9999",
                        },
                        links: {
                            color: "#969292",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
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
                            value: {min: 1, max: 5},
                        },
                    },
                    detectRetina: true,
                }}
            />
            <div className={s.mainContainer}>
                {delay ? <img src={preloader} className={s.loader} alt="Programmer"/>
                    : (() => {
                            switch (menuStatus) {
                                case 0:
                                    return <MainInfo  language={language}/>;
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