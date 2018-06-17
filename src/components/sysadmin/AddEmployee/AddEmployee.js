// @flow
import React, { Component } from 'react';
import UserForm from '../../UserForm/UserForm';
import { connect } from 'react-redux';
import { getSpecializationsAction, loadDoctorsBySpecAction, saveDoctorAction } from '../../../actions/doctor';
import { createUserAction } from '../../../actions/user';
import type { User } from '../../../models/User';
import Toast from 'retail-ui/components/Toast/Toast';
import { withRouter } from 'react-router-dom';
import type { DoctorType } from '../../../models/Doctor';

type Props = {|
    history: Object,
    createdUserRole: number,
    loading: boolean,
    loadError: ?Error,
    specializations: Object[],
    
    createUser: (userData: User) => void,
    getSpecs: () => void,
    saveDoctor: (doctor: DoctorType) => void,
|};

class AddEmployee extends Component<Props, *> {
    componentDidUpdate(prevProps: Props) {
        const { loading, loadError, createdUserRole, history } = this.props;
        
        if (prevProps.loading && !loading) {
            if (loadError) {
                Toast.push(`Ошибка при сохранении: ${loadError.toString()}`)
            } else {
                Toast.push('Пользователь сохранен');
                history.push(`/sysadmin/employees/${createdUserRole}`)
            }
        }
    }
    
    render() {
        const { specializations, createUser, getSpecs, saveDoctor } = this.props;
        
        return (
            <div>
                <UserForm
                    specializations={ specializations }
                    onSubmit={ createUser }
                    onSaveDoctor={ saveDoctor }
                    getSpecs={ getSpecs }
                />
            </div>
        );
    }
}

const props = ({ user, doctor }) => {
    return {
        createdUserRole: user.createdUserRole,
        loading: user.createUserLoading,
        loadError: user.createUserLoadError,
        specializations: doctor.specializations
    };
};

const actions = {
    createUser: createUserAction,
    getSpecs: getSpecializationsAction,
    saveDoctor: saveDoctorAction,
};

export default withRouter(connect(props, actions)(AddEmployee));
