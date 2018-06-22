// @flow
import React, { Component } from 'react';
import UserForm from '../../UserForm/UserForm';
import { connect } from 'react-redux';
import { saveDoctorAction } from '../../../actions/doctor';
import { createUserAction } from '../../../actions/user';
import type { User } from '../../../models/User';
import Toast from 'retail-ui/components/Toast/Toast';
import { withRouter } from 'react-router-dom';
import type { DoctorType } from '../../../models/Doctor';
import type { PatientType } from '../../../models/Patient';
import { savePatientAction } from '../../../actions/patient';

type Props = {|
    history: Object,
    loading: boolean,
    loadError: ?Error,
    
    createUser: (userData: User) => void,
    getSpecs: () => void,
    savePatient: (patient: PatientType) => void,
|};

class AddPatient extends Component<Props, *> {
    componentDidUpdate(prevProps: Props) {
        const { loading, loadError } = this.props;
        
        if (prevProps.loading && !loading) {
            if (loadError) {
                Toast.push(`Ошибка при сохранении: ${loadError.toString()}`)
            } else {
                Toast.push('Пользователь сохранен');
            }
        }
    }
    
    render() {
        const { createUser, savePatient } = this.props;
        
        return (
            <div>
                <UserForm
                    onSubmit={ createUser }
                    onSavePatient={ savePatient }
                />
            </div>
        );
    }
}

const props = ({ user }) => {
    return {
        loading: user.createUserLoading,
        loadError: user.createUserLoadError,
    };
};

const actions = {
    createUser: createUserAction,
    savePatient: savePatientAction,
};

export default withRouter(connect(props, actions)(AddPatient));
