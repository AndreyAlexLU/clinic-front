import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import './specializations.css';
import Specialization from "./Specialization/Specialization";
import {PageHeader} from "react-bootstrap";

const specializations = [
    {
        id: '0d9042d1-04a5-410f-933d-768a0293c7f9',
        name: 'Уролог'
    },
    {
        id: '5819e7e5-9e9b-4b6e-8848-9fb0cca76c5d',
        name: 'Проктолог'
    },
    {
        id: '5819e7e5-9e9b-4b6e-8888-9fb0cca76c5d',
        name: 'Гинеколог'
    },
];

export default class Appointment extends React.Component {
    render() {
        return (
            <Fragment>
                <PageHeader>
                    Выберите специализацию врача
                </PageHeader>

                <div className='specializations'>
                    { specializations.map(specialization =>
                        <Specialization
                            key={ specialization.id }
                            specialization={ specialization }
                        />
                    ) }
                    { this.props.specialization }
                </div>
            </Fragment>
        )
    }
}