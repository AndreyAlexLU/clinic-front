import React, {Fragment} from 'react';
import './doctors.css';
import Doctor from "./Doctor/Doctor";
import {PageHeader} from "react-bootstrap";

const doctors = [
    {
        id: '37a4cbf6-61c7-4ee8-96dd-6c43b8141753',
        name: 'Позднякова Нина Васильевна',
    },
    {
        id: '9f28f12f-31d7-485a-9289-8c3c2fb44eb2',
        name: 'Давыдова Зинаида Николаевна',
    },
];

export default class Doctors extends React.Component {

    render() {
        const { specializationId } = this.props;

        return (
            <Fragment>
                <PageHeader>
                    Выберите врача
                </PageHeader>

                <div className='doctors'>
                    { doctors.map(doctor =>
                        <Doctor
                            specializationId={ specializationId }
                            key={ doctor.id }
                            doctor={ doctor }
                        />
                    ) }
                </div>
            </Fragment>
        );
    }
}