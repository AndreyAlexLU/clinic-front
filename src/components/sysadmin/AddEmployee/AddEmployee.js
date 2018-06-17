// @flow
import React, { Component } from 'react';
import UserForm from '../../UserForm/UserForm';
import { connect } from 'react-redux';
import { loadDoctorsBySpecAction } from '../../../actions/doctor';
import { createUserAction } from '../../../actions/user';
import type { User } from '../../../models/User';
import Toast from 'retail-ui/components/Toast/Toast';
import { withRouter } from 'react-router-dom';

type Props = {|
    history: Object,
    createdUserRole: number,
    loading: boolean,
    loadError: ?Error,
    createUser: (userData: User) => void,
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
        const { createUser } = this.props;
        
        return (
            <div>
                <UserForm
                    onSubmit={ createUser }
                />
            </div>
        );
    }
}

const props = ({ user }) => {
    return {
        createdUserRole: user.createdUserRole,
        loading: user.createUserLoading,
        loadError: user.createUserLoadError,
    };
};

const actions = {
    createUser: createUserAction,
};

export default withRouter(connect(props, actions)(AddEmployee));
