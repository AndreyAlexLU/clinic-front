// @flow
import React, { Component } from 'react';
import UserForm from '../../UserForm/UserForm';
import { connect } from 'react-redux';
import { loadDoctorsBySpecAction } from '../../../actions/doctor';
import { createUserAction } from '../../../actions/user';
import type { User } from '../../../models/User';

type Props = {|
    createdUser: User,
    createUser: (userData: User) => void,
|};

class AddEmployee extends Component<Props, *> {
    render() {
        const { createUser } = this.props;
        
        return (
            <UserForm
                onSubmit={ createUser }
            />
        );
    }
}

const props = ({ user }) => {
    return {
        createdUser: user.createdUser,
    };
};

const actions = {
    createUser: createUserAction,
};

export default connect(props, actions)(AddEmployee);
