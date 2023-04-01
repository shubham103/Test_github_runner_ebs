import React from "react";
import { Card } from 'primereact/card';
import { InputText } from "primereact/inputtext";
import CLAPPERBOARD from '../../assets/images/clapperboard.svg';
import GRADUATION_CAP from '../../assets/images/graduation-cap.svg';
import LIST_CHECK from '../../assets/images/list-check.svg';
import CIRCLE_FILLED from '../../assets/images/circle-filled.svg';




const RewardsList = () => {
    return (
        <>
            <div className="grid">
                <div className="col-12 md:col-4 lg:col-4 gap-2">
                    <Card title="Title">
                        <p className="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                            numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                        </p>
                    </Card>
                </div>
                <div className="col-12 md:col-4 lg:col-4">
                    <Card title="Title">
                        <p className="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                            numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                        </p>
                    </Card>
                </div>
                <div className="col-12 md:col-4 lg:col-4">
                    <Card title="Title">
                        <p className="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                            numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                        </p>
                    </Card>
                </div>

            </div>
            <div className="grid justify-content-center align-items-center mt-4 ">
                <div className="col-12 md:col-6 lg:col-6">
                    <span className="p-input-icon-left">
                        <i className="pi pi-search" />
                        <InputText placeholder="Search" />
                    </span>
                </div>
                <div className="col-12 md:col-6 lg:col-6">
                    <div className="flex flex-row-reverse flex-wrap ">
                        <div className="flex align-items-center justify-content-center text-gray-900">
                            <div className='align-items-center cursor-pointer'>
                                <img src={LIST_CHECK} alt="clapper board" className="ml-4 mr-2" />
                                Others
                            </div >
                        </div>
                        <div className="flex align-items-center justify-content-center text-gray-900">
                            <div className='align-items-center cursor-pointer'>
                                <img src={GRADUATION_CAP} alt="clapper board" className="ml-4 mr-2" />
                                Education
                            </div >
                        </div>
                        <div className="flex align-items-center justify-content-center text-gray-900">
                            <div className='align-items-center cursor-pointer'>
                                <img src={CLAPPERBOARD} alt="clapper board" className="ml-4 mr-2" />
                                Entertainment
                            </div >
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid">
                <div className="flex col-12">
                    <div className="flex align-items-center justify-content-center ">English:</div>
                    <div className="flex align-items-center justify-content-center">
                        <img src={CIRCLE_FILLED} alt="circle filled" className="ml-4 mr-2" />
                        Make 3 montly payment with no delay</div>
                    <div className="flex align-items-center justify-content-center ">
                        <img src={CIRCLE_FILLED} alt="circle filled" className="ml-4 mr-2" />
                        The EMI must be more than Rs 5000/month
                    </div>
                </div>
            </div>
            <div className="grid">
                <div className="col-12 md:col-3 lg:col-3">
                    <Card title="Title">
                        <p className="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                            numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                        </p>
                    </Card>
                </div>
                <div className="col-12 md:col-3 lg:col-3">
                    <Card title="Title">
                        <p className="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                            numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                        </p>
                    </Card>
                </div>
                <div className="col-12 md:col-3 lg:col-3">
                    <Card title="Title">
                        <p className="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                            numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                        </p>
                    </Card>
                </div>
                <div className="col-12 md:col-3 lg:col-3">
                    <Card title="Title">
                        <p className="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                            numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                        </p>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default RewardsList;