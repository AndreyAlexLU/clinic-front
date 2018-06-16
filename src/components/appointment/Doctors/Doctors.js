import React, {Fragment} from 'react';
import './doctors.css';
import Doctor from "./Doctor/Doctor";
import {PageHeader} from "react-bootstrap";
import { loadDoctorsBySpecAction } from '../../../actions/doctor';
import { connect } from 'react-redux';

import type { DoctorType } from '../../../models/Doctor';

type Props = {
    doctors: DoctorType[],
    loading: boolean,
    loadError: ?Error,
    getDoctors: (specId: string) => void,
}

class Doctors extends React.Component<Props, *> {
    
    componentDidMount() {
        const { specializationId, getDoctors } = this.props;
        
        getDoctors(specializationId);
    }
    
    render() {
        const { specializationId, doctors } = this.props;

        return (
            <Fragment>
                <PageHeader>
                    Выберите врача
                </PageHeader>

                <div className='doctors'>
                    { doctors.map(doctor =>
                        <Doctor
                            specializationId={ specializationId }
                            key={ doctor.personalNumber }
                            doctor={ doctor }
                        />
                    ) }
                </div>
            </Fragment>
        );
    }
}

const props = ({ doctor }) => {
    return {
        doctors: doctor.doctorsBySpec,
        loading: doctor.doctorsBySpecLoading,
        loadError: doctor.doctorsBySpecLoadError,
    };
};

const actions = {
    getDoctors: loadDoctorsBySpecAction,
};

export default connect(props, actions)(Doctors);
