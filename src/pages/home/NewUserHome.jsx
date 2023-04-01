import React from "react";
import StatusGrid from "./StatusGrid";
import NewUserBanner from "./NewUserBanner";
import './Home.scss';

const NewUserHome = () => {
    return (
        <>
            <NewUserBanner />
            <StatusGrid></StatusGrid>
        </>
    )
}


export default NewUserHome;