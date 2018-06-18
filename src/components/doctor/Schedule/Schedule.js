// @flow
import React, { Component } from 'react';
import './schedule.css';
import { RadioGroup } from 'retail-ui/components/all';

type Props = {||};

type State = {|
    isMonthPeriod: boolean,
    step: number,
|};

export default class Schedule extends Component<Props, State> {
    state = {
        isMonthPeriod: false,
        step: 15,
    };

    render() {
        return (
            <div className='schedule'>
                <div className="schedule-row">
                    <div className="schedule-row-label">
                        Период
                    </div>
                    <RadioGroup
                        inline
                        items={ [
                            [ false, 'Неделя' ],
                            [ true, 'Месяц' ]
                        ] }
                        defaultValue={ false }
                        value={ this.state.isMonthPeriod }
                        onChange={ (_, val) => this.onChangePeriod(val) }
                    />
                </div>

            </div>
        );
    }

    onChangePeriod(isMonthPeriod) {
        this.setState({
            isMonthPeriod,
        })
    }
}