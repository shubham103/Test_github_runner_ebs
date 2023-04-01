import React from "react";

const EmiSchedule = () => {
    return (
        <>
            <div class="flex justify-content-center flex-wrap mt-5 mb-5">
                <div class="flex align-items-center justify-content-center font-bold">
                    EMI Schedule for First Tranche
                </div>
            </div>
            <div className="grid agreement-table">

                <table>
                    <thead>
                        <tr>
                            <th >
                                Sl.No
                            </th>
                            <th >
                                Perticulars
                            </th>
                            <th >
                                Details
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                1
                            </td>
                            <td className="font-semi">
                                Loan Amount
                            </td>
                            <td>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                2
                            </td>
                            <td >
                                Intrest
                            </td>
                            <td>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                3
                            </td>
                            <td >
                                Interest borne By Educational Institution
                            </td>
                            <td>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                4
                            </td>
                            <td className="font-semi">
                                Total EMIs
                            </td>
                            <td>

                            </td>
                        </tr>

                        <tr>
                            <td>
                                6
                            </td>
                            <td className="font-semi">
                                Amount to be paid per month (in Rs.)
                            </td>
                            <td>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                7
                            </td>
                            <td>
                                Advance EMI to be paid
                            </td>
                            <td>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                8
                            </td>
                            <td className="font-semi">
                                Down Payment, if any
                            </td>
                            <td>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                9
                            </td>
                            <td className="font-semi">
                                Balance EMIs Payable by the Borrower
                            </td>
                            <td>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                10
                            </td>
                            <td className="font-semi">
                                Emi to be payable on or before
                            </td>
                            <td>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                11
                            </td>
                            <td className="font-semi">
                                Tranche Disbursal Date
                            </td>
                            <td>

                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}


export default EmiSchedule;