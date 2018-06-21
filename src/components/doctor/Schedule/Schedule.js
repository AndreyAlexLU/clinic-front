// @flow
import React, { Component, Fragment } from 'react';
import './schedule.css';
import { Button, Checkbox, Gapped, Input, Loader, RadioGroup } from 'retail-ui/components/all';
import { loadTimetableAction, loadTimetableUnitsAction } from '../../../actions/timetable';
import withRouter from 'react-router-dom/es/withRouter';
import { connect } from 'react-redux';
import type { ScheduleType } from '../../../models/Schedule';
import { getScheduleAction, loadDoctorAction, updateScheduleAction } from '../../../actions/doctor';
import type { DoctorType } from '../../../models/Doctor';
import type { User } from '../../../models/User';

type Props = {|
    user: User,
    doctor: DoctorType,
    schedule: ScheduleType,
    doctorLoading: boolean,
    doctorLoadError: ?Error,
    scheduleUpdating: boolean,
    scheduleUpdateError: ?Error,
    scheduleLoading: boolean,
    scheduleLoadError: ?Error,
    
    updateSchedule: (schedule: ScheduleType) => void,
    getSchedule: (doctorNumber: number) => void,
    loadDoctor: (login: string) => void,
|};

type State = {|
    schedule: ScheduleType
|};

class Schedule extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        
        this.state = {
            schedule: {
                ...props.schedule,
                doctorNumber: 1,
            },
        };
    }
    
    componentDidMount() {
        const { user, loadDoctor } = this.props;
        if (user.login && user.login !== 'undefined') {
            loadDoctor(user.login);
        }
    }
    
    componentDidUpdate(prevProps: Props) {
        const {
            doctorLoading, doctorLoadError, doctor, getSchedule,
            schedule,
        } = this.props;
        
        if (!doctorLoading && prevProps.doctorLoading) {
            if (!doctorLoadError) {
                this.setState({
                    schedule: {
                        ...this.state.schedule,
                        doctorNumber: doctor.personalNumber
                    }
                });
    
                getSchedule(doctor.personalNumber);
            }
        }
        
        if (schedule !== prevProps.schedule) {
            this.setState({
                schedule,
            })
        }
    }
    
    render() {
        const { updateSchedule, scheduleUpdating, scheduleLoading } = this.props;
        const { schedule } = this.state;
        
        const weeks = [
            {
                dayNumber: 1,
                dayName: 'Понедельник',
            },
            {
                dayNumber: 2,
                dayName: 'Вторник',
            },
            {
                dayNumber: 3,
                dayName: 'Среда',
            },
            {
                dayNumber: 4,
                dayName: 'Четверг',
            },
            {
                dayNumber: 5,
                dayName: 'Пятница',
            },
            {
                dayNumber: 6,
                dayName: 'Суббота',
            },
            {
                dayNumber: 0,
                dayName: 'Воскресенье',
            },
        ];
        
        return (
            <Loader active={ scheduleUpdating || scheduleLoading }>
                <div className='schedule'>
                    <div className='schedule-row'>
                        <Gapped gap={ 10 }>
                            Время приема
                            <Input
                                value={ schedule.step }
                                onChange={ (_, v) => this.onChangeStep(v) }
                                width={ 50 }
                            />
                            минут
                        </Gapped>
                    </div>
        
                    <div className='schedule-table'>
                        { weeks.map(({ dayNumber, dayName }) => (
                            <div className='schedule-table-row'>
                                <Gapped gap={ 10 }>
                                    <div className='schedule-table-label'>
                                        { dayName }
                                    </div>
                                    <Checkbox
                                        checked={ schedule.weekIntervals[ dayNumber ] }
                                        onChange={ (_, checked) => this.onChangeWeekIntervalCheckbox(dayNumber, checked) }
                                    />
                                    { schedule.weekIntervals[ dayNumber ] && (
                                        <Fragment>
                                            <Input
                                                width={ 70 }
                                                value={ schedule.weekIntervals[ dayNumber ].startTime }
                                                onChange={ (_, val) => this.onChangeInterval(dayNumber, 'startTime', val) }
                                                mask='99:99'
                                            />
                                            { " - " }
                                            <Input
                                                width={ 70 }
                                                value={ schedule.weekIntervals[ dayNumber ].endTime }
                                                onChange={ (_, val) => this.onChangeInterval(dayNumber, 'endTime', val) }
                                                mask='99:99'
                                            />
                                        </Fragment>
                                    ) }
                                </Gapped>
                            </div>
                        )) }
        
                    </div>
        
                    <div className='schedule-footer'>
                        <Button onClick={ (_) => updateSchedule(schedule) } use='primary' size='large'>
                            Обновить расписание
                        </Button>
                    </div>
    
                </div>
            </Loader>
        );
    }
    
    onChangeInterval = (dayNumber, prop, val) => {
        const { schedule } = this.state;
        
        this.setState({
            schedule: {
                ...schedule,
                weekIntervals: {
                    ...schedule.weekIntervals,
                    [ dayNumber ]: {
                        ...schedule.weekIntervals[ dayNumber ],
                        [ prop ]: val,
                    },
                },
            }
            
        })
    };
    
    onChangeWeekIntervalCheckbox = (dayNumber, checked) => {
        const { schedule } = this.state;
        
        if (checked) {
            const weekObj = {
                startTime: '',
                endTime: '',
            };
            
            this.setState({
                schedule: {
                    ...schedule,
                    weekIntervals: {
                        ...schedule.weekIntervals,
                        [ dayNumber ]: weekObj,
                    },
                }
            })
        } else {
            const { weekIntervals } = this.state.schedule;
            delete weekIntervals[ dayNumber ];
            this.setState({
                schedule: {
                    ...schedule,
                    weekIntervals,
                }
            });
        }
    };
    
    onChangeStep = (step) => {
        const { schedule } = this.state;
    
        this.setState({
            schedule: {
                ...schedule,
                step,
            }
        });
    }
    
}

const props = ({ doctor, user }) => {
    return {
        user: user.user,
        doctor: doctor.doctor,
        schedule: doctor.schedule,
        doctorLoading: doctor.doctorLoading,
        doctorLoadError: doctor.doctorLoadError,
        scheduleUpdating: doctor.scheduleUpdating,
        scheduleUpdateError: doctor.scheduleUpdateError,
    };
};

const actions = {
    getSchedule: getScheduleAction,
    updateSchedule: updateScheduleAction,
    loadDoctor: loadDoctorAction,
};

export default withRouter(connect(props, actions)(Schedule));
