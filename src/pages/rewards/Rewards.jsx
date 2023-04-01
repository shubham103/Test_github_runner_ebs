import React from "react";
import LAUNCH from '../../assets/images/launch.svg';
import { Button } from 'primereact/button';
import NoRewards from "./NoRewards";
import RewardsList from "./RewardsList";


const Rewards = () => {
    return (
        <>
            {true && <NoRewards />}
            {/* <RewardsList /> */}
        </>
    )
};

export default Rewards;