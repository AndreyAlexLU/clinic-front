import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './specializations.css';
import Specialization from "./Specialization/Specialization";
import {PageHeader} from "react-bootstrap";
import { getSpecializationsAction } from '../../../actions/doctor';

/*
const specializations = [
    {
        id: '0d9042d1-04a5-410f-933d-768a0293c7f9',
        name: 'Невролог'
    },
    {
        id: '5819e7e5-9e9b-4b6e-8848-9fb0cca76c5d',
        name: 'Терапевт'
    },
    {
        id: '5819e7e5-9e9b-4b6e-8888-9fb0cca76c5d',
        name: 'Гастроэнтеролог'
    },
];
*/

type Props = {
    specializations: Object[],
    specializationsLoading: boolean,
    specializationsLoadError: ?Error,
    getSpecs: () => void,
}

class Specializations extends React.Component<Props, State> {
    componentDidMount() {
        this.props.getSpecs();
    }
    
    render() {
        const {
            specializations,
        } = this.props;
        
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
                </div>
            </Fragment>
        )
    }
}

const props = ({ doctor }) => {
    return {
        specializations: doctor.specializations,
        specializationsLoading: doctor.specializationsLoading,
        specializationsLoadError: doctor.specializationsLoadError,
    };
};

const actions = {
    getSpecs: getSpecializationsAction,
};

export default connect(props, actions)(Specializations);
