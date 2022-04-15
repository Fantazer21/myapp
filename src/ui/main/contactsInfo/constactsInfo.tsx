import React from 'react';
import s from './styles.module.css'
import call from './icons/phone.svg'
import git from './icons/git.gif'
import cv from './icons/cv.png'
import linkedIn from './icons/in.png'
// @ts-ignore
import mycvNew from '../../../assets/IlyaStepanov.pdf'

const ContactsInfo = () => {
    return (
        <div className={s.contactsInfoWrapper}>
            <a href="https://t.me/fantazer21">
                <img className={s.imageCall} src={call} alt="call"/>
            </a>
            <a href="https://github.com/Fantazer21">
                <img className={s.imageGit} src={git} alt="git" />
            </a>
            <a href={mycvNew} download="IlyaStepanov.pdf" >
                <img className={s.imageCv} src={cv} alt="cv" />
            </a>
            <a href="https://www.linkedin.com/in/ilya-stepanov-044790200/">
                <img className={s.linkedIn} src={linkedIn} alt="linked"/>
            </a>
        </div>
    );
};


//import MyPDF from '../path/to/file.pdf';
// <a href={myPDF} download="My_File.pdf"> Download Here </a>
export default ContactsInfo;