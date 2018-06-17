// @flow
import React, { Component, Fragment } from 'react';
import './userForm.css';
import type { User } from '../../models/User';
import { Button, DatePicker, Input, RadioGroup, Select, Textarea } from 'retail-ui/components/all';
import { RolesEnum } from '../../constants/roles';
import DateInput from 'retail-ui/components/DateInput/DateInput';
import type { DoctorType } from '../../models/Doctor';

type Props = {|
    user?: ?User,
    specializations: Object[],
    
    getSpecs: () => void,
    onSubmit: (userData: User) => void,
    onSaveDoctor?: (doctor: DoctorType) => void,
|};

type State = {
    user: User,
    doctor: DoctorType,
}

export default class UserForm extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        const { user } = props;
        
        this.state = {
            user: {
                sex: '0',
                ...user
            },
            doctor: {
            
            }
        }
    }
    
    static defaultProps = {
        user: {},
    };
    
    componentDidMount() {
        this.props.getSpecs();
    }
    
    render() {
        const roleItems = [
            [ RolesEnum.DOCTOR, 'Врач' ],
            [ RolesEnum.REGISTRAR, 'Регистратор' ],
            [ RolesEnum.ADMINISTRATION, 'Администрация клиники' ],
            [ RolesEnum.SYS_ADMIN, 'Системный администратор' ],
        ];
        
        const specsItems = this.props.specializations.map(spec => {
            return [ spec.id, spec.name ];
        });
        
        return (
            <div className='user-form'>
                <div className='user-form-row'>
                    <div className='user-form-label'>
                        Роль
                    </div>
                    <Select
                        items={ roleItems }
                        value={ this.state.user.roleId }
                        onChange={ (_, value) => this.onChangeField('roleId', value) }
                    />
                </div>
                
                <div className='user-form-row'>
                    <div className='user-form-label'>
                        Логин
                    </div>
                    <Input
                        value={ this.state.user.login }
                        onChange={ (_, val) => this.onChangeField('login', val) }
                    />
                </div>
                
                <div className='user-form-row'>
                    <div className='user-form-label'>
                        Пароль
                    </div>
                    <Input
                        type='password'
                        value={ this.state.user.password }
                        onChange={ (_, val) => this.onChangeField('password', val) }
                    />
                </div>
                
                <div className='user-form-row'>
                    <div className='user-form-label'>
                        Имя
                    </div>
                    <Input
                        value={ this.state.user.firstName }
                        onChange={ (_, val) => this.onChangeField('firstName', val) }
                    />
                </div>
                
                <div className='user-form-row'>
                    <div className='user-form-label'>
                        Фамилия
                    </div>
                    <Input
                        value={ this.state.user.lastName }
                        onChange={ (_, val) => this.onChangeField('lastName', val) }
                    />
                </div>
                
                <div className='user-form-row'>
                    <div className='user-form-label'>
                        Отчество
                    </div>
                    <Input
                        value={ this.state.user.middleName }
                        onChange={ (_, val) => this.onChangeField('middleName', val) }
                    />
                </div>
                
                { this.state.user.roleId === RolesEnum.DOCTOR && (
                    <Fragment>
                        <div className='user-form-row'>
                            <div className='user-form-label'>
                                Роль
                            </div>
                            <Select
                                items={ specsItems }
                                value={ this.state.doctor.specializationId }
                                onChange={ (_, value) => this.onChangeDoctor('specializationId', value) }
                            />
                        </div>
    
                        <div className='user-form-row'>
                            <div className='user-form-label'>
                                Образование
                            </div>
                            <Textarea
                                width={ 400 }
                                rows={ 2 }
                                value={ this.state.doctor.education }
                                onChange={ (_, val) => this.onChangeDoctor('education', val) }
                            />
                        </div>
    
                        <div className='user-form-row'>
                            <div className='user-form-label'>
                                Опыт
                            </div>
                            <Input
                                width={ 150 }
                                value={ this.state.doctor.experience }
                                onChange={ (_, val) => this.onChangeDoctor('experience', val) }
                            />
                        </div>
    
                        <div className='user-form-row'>
                            <div className='user-form-label'>
                                Статус
                            </div>
                            <Input
                                width={ 150 }
                                value={ this.state.doctor.status }
                                onChange={ (_, val) => this.onChangeDoctor('status', val) }
                            />
                        </div>
                    </Fragment>
                )}
                
                <div className='user-form-row'>
                    <div className='user-form-label'>
                        Дата рождения
                    </div>
                    <DatePicker
                        value={ this.state.user.birthDate }
                        onChange={ (_, val) => this.onChangeField('birthDate', val) }
                        enableTodayLink
                    />
                </div>
                
                
                <div className='user-form-row'>
                    <div className='user-form-label'>
                        Пол
                    </div>
                    <RadioGroup
                        inline
                        items={ [
                            [ '0', 'Мужской' ],
                            [ '1', 'Женский' ]
                        ] }
                        defaultValue='0'
                        value={ this.state.user.sex }
                        onChange={ (_, val) => this.onChangeField('sex', val) }
                    />
                </div>
                
                <div className='user-form-row'>
                    <div className='user-form-label'>
                        Серия паспорта
                    </div>
                    <Input
                        width={ 70 }
                        mask='9999'
                        value={ this.state.user.passportSeries }
                        onChange={ (_, val) => this.onChangeField('passportSeries', val) }
                    />
                </div>
                
                <div className='user-form-row'>
                    <div className='user-form-label'>
                        Номер паспорта
                    </div>
                    <Input
                        width={ 100 }
                        mask='999999'
                        value={ this.state.user.passportNumber }
                        onChange={ (_, val) => this.onChangeField('passportNumber', val) }
                    />
                </div>
                
                <div className='user-form-row'>
                    <div className='user-form-label'>
                        Дата выдачи паспорта
                    </div>
                    <DateInput
                        width={ 100 }
                        value={ this.state.user.passportIssueDate }
                        onChange={ (_, val) => this.onChangeField('passportIssueDate', val) }
                    />
                </div>
                
                <div className='user-form-row'>
                    <div className='user-form-label'>
                        Орган выдачи паспорта
                    </div>
                    <Textarea
                        width={ 400 }
                        rows={ 2 }
                        value={ this.state.user.passportAuthority }
                        onChange={ (_, val) => this.onChangeField('passportAuthority', val) }
                    />
                </div>
                
                <div className='user-form-row'>
                    <div className='user-form-label'>
                        Адрес
                    </div>
                    <Textarea
                        width={ 400 }
                        value={ this.state.user.address }
                        onChange={ (_, val) => this.onChangeField('address', val) }
                    />
                </div>
                
                <div className='user-form-row'>
                    <div className='user-form-label'>
                        Номер телефона
                    </div>
                    <Input
                        value={ this.state.user.telephoneNumber }
                        onChange={ (_, val) => this.onChangeField('telephoneNumber', val) }
                    />
                </div>
                
                <div className='user-form-row'>
                    <div className='user-form-label'>
                        Email
                    </div>
                    <Input
                        value={ this.state.user.email }
                        onChange={ (_, val) => this.onChangeField('email', val) }
                    />
                </div>
                
                <div className='user-form-submit'>
                    <Button use='primary' type='submit' onClick={ this.onSubmit }>
                        Сохранить
                    </Button>
                </div>
            
            </div>
        );
    }
    
    onSubmit = () => {
        const { user } = this.state;
        
        if (user.roleId === RolesEnum.DOCTOR) {
            const { doctor } = this.state;
            const { onSaveDoctor } = this.props;
            
            doctor.userLogin = user.login;
            onSaveDoctor(doctor);
        }
        
        this.props.onSubmit(user);
    };
    
    onChangeField = (name, val) => {
        this.setState({
            user: {
                ...this.state.user,
                [ name ]: val,
            }
        })
    }
    
    onChangeDoctor = (name, val) => {
        this.setState({
            doctor: {
                ...this.state.doctor,
                [ name ]: val,
            }
        })
    }
}




