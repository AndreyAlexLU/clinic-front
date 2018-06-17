// @flow
import React, { Component } from 'react';
import type { User } from '../../../models/User';
import { Glyphicon, Table } from 'react-bootstrap';
import { getFullName } from '../../../utils/getFullName';
import formatDate from '../../../utils/formatDate';
import { connect } from 'react-redux';
import { createUserAction, getUsersByRoleAction } from '../../../actions/user';
import './employeeList.css';
import { Kebab, MenuItem, Select } from 'retail-ui/components/all';
import { RolesEnum } from '../../../constants/roles';

type Props = {|
    users: User[],
    getUsers: (roleId: number) => void,
|};

class EmployeeList extends Component<Props, *> {
    componentDidMount() {
        const { getUsers, match } = this.props;
        
        getUsers(match.params.roleId);
    }
    
    componentDidUpdate(prevProps: Props) {
        const { getUsers, match } = this.props;
        
        if (prevProps.match.params.roleId !== match.params.roleId) {
            getUsers(match.params.roleId);
        }
    }
    
    onChangeRoleId = (_, roleId) => {
        const { history } = this.props;
        history.push(`/sysadmin/employees/${roleId}`);
    };
    
    render() {
        const roleItems = [
            [ RolesEnum.DOCTOR, 'Врач' ],
            [ RolesEnum.REGISTRAR, 'Регистратор' ],
            [ RolesEnum.ADMINISTRATION, 'Администрация клиники' ],
            [ RolesEnum.SYS_ADMIN, 'Системный администратор' ],
        ];
        
        const { users } = this.props;
        
        return (
            <div className='employee-list'>
                <div className='employee-list-role'>
                    <div className='employee-list-role-label'>
                        Выберите роль
                    </div>
                    <Select
                        items={ roleItems }
                        value={ +this.props.match.params.roleId }
                        onChange={ this.onChangeRoleId }
                    />
                </div>
                
    
                <table className='blueTable'>
                    <thead>
                        <tr>
                            <th>Логин</th>
                            <th>ФИО</th>
                            <th>№ Паспорта</th>
                            <th>Дата выдачи</th>
                            <th>Место выдачи</th>
                            <th>Дата рождения</th>
                            <th>Адрес</th>
                            <th>Телефон</th>
                            <th>Почта</th>
                            <th>Действия</th>
                        </tr>
                    </thead>
                    <tbody>
                        { users && users.map((user: User) => (
                            <tr key={user.login}>
                                <td>
                                    {user.login}
                                </td>
                                <td>
                                    { getFullName(user) }
                                </td>
                                <td>
                                    { user.passportSeries } { user.passportNumber }
                                </td>
                                <td>
                                    { user.passportIssueDate }
                                </td>
                                <td>
                                    { user.passportAuthority }
                                </td>
                                <td>
                                    { user.birthDate }
                                </td>
                                <td>
                                    { user.address }
                                </td>
                                <td>
                                    { user.telephoneNumber }
                                </td>
                                <td>
                                    { user.email !== 'undefined' ? user.email : '   ' }
                                </td>
                                <td className='trips-icons-td' >
                                    <Kebab size='large'>
                                        <MenuItem icon='Edit'>
                                            Редактировать
                                        </MenuItem>
                                        <MenuItem icon='Trash'>
                                            Удалить
                                        </MenuItem>
                                    </Kebab>
                                </td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
            
        );
    }
}

const props = ({ user }) => {
    return {
        users: user.users,
    };
};

const actions = {
    getUsers: getUsersByRoleAction,
};

export default connect(props, actions)(EmployeeList);
