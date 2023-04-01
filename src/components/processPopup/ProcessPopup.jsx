import React from "react";
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import TIMER from '../../assets/images/timer.svg';
import { useNavigate } from "react-router-dom";

const ProcessPopup = (props) => {
    const navigate = useNavigate();
    const { visible, title, subTitle, processStatus, buttonLabel, buttonType, footerContent } = props;
    return (
        <Dialog visible={visible} style={{ width: '30vw' }} closable={false}>
            <div className="grid">
                <div className="col-12 ">
                    <div className='flex justify-content-center align-items-center'>
                        <img src={TIMER} alt="fail" />
                    </div>
                    <h2 className="text-center">{title}</h2>
                    <p className="text-center">{subTitle}</p>
                    <div className='flex justify-content-center align-items-center'>
                        {buttonType !== 'primary' && <Button label={buttonLabel} className="p-button-sm p-button-outlined" onClick={() => props.hidePopup()} />}
                        {buttonType === 'primary' && < Button label={buttonLabel} className="p-button-sm" onClick={() => { navigate('/') }} />}
                    </div>
                    <p className="text-center">{footerContent}</p>
                </div>
            </div>

        </Dialog>
    )
}

export default ProcessPopup;