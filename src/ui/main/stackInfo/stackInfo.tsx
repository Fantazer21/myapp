import React from "react";
import s from "./styles.module.css";
import books from './books-stack-of-three.svg'
import front from './frontend.svg'
import design from './design.svg'
import test from './test.svg'


const StackInfo = () => {
    return (
        <div className={s.stackContainer}>

            <div className={s.wrapperInfoBlock}>
                <img className={s.image} src={books} alt="books" />
                <h4>
                    JavaScript,
                    TypeScript,
                    HTML5,
                    CSS3,
                    Git
                </h4>
            </div>
            <div className={s.wrapperInfoBlock}>
                <img className={s.image} src={front} alt="frameworks" />
                <h4>
                    React, React-Native, Redux,  Redux-thunk, Redux-Saga
                </h4>
            </div>

            <div className={s.wrapperInfoBlock}>
                <img className={s.image} src={design} alt="design" />
                <h4>
                    Material UI, Ant-Design, Formik
                </h4>
            </div>
            <div className={s.wrapperInfoBlock}>
                    <img className={s.image} src={test} alt="tests" />
                    <h4>
                        Jest, SnapShot, Storybook
                    </h4>
            </div>
        </div>
    );
};

export default StackInfo;