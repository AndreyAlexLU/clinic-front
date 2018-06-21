import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './registrarSpecializations.css';
import RegistrarSpecialization from "./RegistrarSpecialization/RegistrarSpecialization";
import {PageHeader} from "react-bootstrap";
import { getSpecializationsAction } from '../../../actions/doctor';

type Props = {
    specializations: Object[],
    specializationsLoading: boolean,
    specializationsLoadError: ?Error,
    getSpecs: () => void,
}

class RegistrarSpecializations extends React.Component<Props, State> {
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
                        <RegistrarSpecialization
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

export default connect(props, actions)(RegistrarSpecializations);
