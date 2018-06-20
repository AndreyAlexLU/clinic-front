// @flow
import React, { Component, Fragment } from 'react';
import './schedule.css';
import { Checkbox, Gapped, Input, RadioGroup } from 'retail-ui/components/all';

type Props = {||};

type WeekInterval = {|
    startTime: string,
    endTime: string,
|};

type State = {|
    isMonthPeriod: boolean,
    step: number,
    weekIntervals: { [ string ]: WeekInterval },
|};

export default class Schedule extends Component<Props, State> {
    state = {
        step: 15,
        weekIntervals: {},
    };

    render() {
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
            <div className='schedule'>
                <div className="schedule-row">
                    <div className="schedule-row-label">
                        Время приема
                    </div>
                    <Gapped gap={10}>
                        <Input
                            value={this.state.step}
                            onChange={this.onChangeStep}
                            width={120}
                        />

                        минут
                    </Gapped>
                </div>

                <div className="schedule-table">
                    {weeks.map(({ dayNumber, dayName }) => (
                        <div className="schedule-table-row">
                            <Gapped gap={10}>
                                <div className="schedule-table-label">
                                    {dayName}
                                </div>
                                <Checkbox
                                    checked={this.state.weekIntervals[ dayNumber ]}
                                    onChange={checked => this.onChangeWeekIntervalCheckbox(dayNumber, checked)}
                                />
                                {this.state.weekIntervals[ dayNumber ] && (
                                    <Fragment>
                                        <Input
                                            value={this.state.weekIntervals[ dayNumber ].startTime}
                                            onChange={(_, val) => this.onChangeInterval(dayNumber, 'startTime', val)}
                                            mask='99:99'
                                        />
                                        {" - "}
                                        <Input
                                            value={this.state.weekIntervals[ dayNumber ].endTime}
                                            onChange={(_, val) => this.onChangeInterval(dayNumber, 'endTime', val)}
                                            mask='99:99'
                                        />
                                    </Fragment>
                                )}
                            </Gapped>
                        </div>
                    ))}

                </div>
            </div>
        );
    }

    onChangeInterval = (dayNumber, prop, val) => {
        this.setState({
            weekIntervals: {
                ...this.state.weekIntervals,
                [ dayNumber ]: {
                    ...this.state.weekIntervals[ dayNumber ],
                    [ prop ]: val,
                },
            },
        })
    };

    onChangeWeekIntervalCheckbox = (dayNumber, checked) => {
        if (checked) {
            const weekObj = {
                startTime: '',
                endTime: '',
            };

            this.setState({
                weekIntervals: {
                    ...this.state.weekIntervals,
                    [ dayNumber ]: weekObj,
                },
            })
        } else {
            const { [ dayNumber ]: removed, ...weekIntervals } = this.state.weekIntervals;
            this.setState({ weekIntervals });
        }
    };

    onChangeStep(step) {
        this.setState({
            step,
        })
    }

}