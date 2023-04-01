import React, { useEffect, useState } from "react";
import DraftGrid from "./DraftGrid";
import PendingGrid from "./PendingGrid";
import ApprovedGrid from "./ApprovedGrid";

const StatusGrid = () => {
    const [title, setTitle] = useState('Our Process');
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('currentUser')));

    useEffect(() => {
        setCurrentUser(JSON.parse(localStorage.getItem('currentUser')));
    }, []);

    return (
        <div className="grid ml-4 mt-8 mr-4">
            {currentUser?.loanStatus === 'DRAFT' ? <DraftGrid /> : currentUser?.loanStatus === 'APPROVAL_PENDING' ? <PendingGrid currentUser={currentUser} /> : <ApprovedGrid currentUser={currentUser} />}

        </div>
    )
}

export default StatusGrid;