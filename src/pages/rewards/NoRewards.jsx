import React from "react";
import LAUNCH from '../../assets/images/launch.svg';
import { Button } from 'primereact/button';

const NoRewards = () => {
    return (
        <>
            <div className='flex justify-content-center align-items-center '>
                <img src={LAUNCH} alt="no user" />
            </div >
            <div className='flex justify-content-center align-items-center '>
                <p className="title">We are on the way</p>
            </div >
            <div className='flex justify-content-center align-items-center '>
                <p className="font-l text-base light-text w-8">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
            </div >
            <div className='flex justify-content-center align-items-center '>
                <Button label="Go to Home" className="p-button-outlined mr-2" />
            </div>
        </>
    )
}

export default NoRewards;