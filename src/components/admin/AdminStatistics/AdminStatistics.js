// @flow
import React, { Component } from 'react';
import './adminStatistics.css';
import ReactChartkick, { LineChart, PieChart } from 'react-chartkick'
import Chart from 'chart.js'
import { getSpecializationsAction } from '../../../actions/doctor';
import { connect } from 'react-redux';
import type { Statistics } from '../../../models/Statistics';
import { getPatientsNumberAction, getStatisticsAction } from '../../../actions/admin';
import { Gapped, Switcher } from 'retail-ui/components/all';

ReactChartkick.addAdapter(Chart)

type Props = {|
    patientsNumber: number,
    statistics: Statistics,
    
    getPatientsNumber: () => void,
    getStatistics: (isMonth: boolean) => void,
|};

type State = {
    isMonth: boolean,
}

class AdminStatistics extends Component<Props, State> {
    state = {
        isMonth: false,
    }
    
    componentDidMount() {
        const { getPatientsNumber, getStatistics } = this.props;
        
        getPatientsNumber();
        getStatistics(false);
    }
    
    render() {
        const { patientsNumber, statistics } = this.props;
        const { isMonth } = this.state;
        
        return (
            <div className='admin-statistics'>
                <Gapped vertical gap={20}>
                    <span>
                        Общее количество зарегистрированных пациентов: <strong>{ patientsNumber.toString() }</strong>
                    </span>
    
                    <Switcher
                        label="Статистика за период"
                        items={[
                            { label: 'Неделя', value: false },
                            { label: 'Месяц', value: true },
        
                        ]}
                        value={ isMonth }
                        onChange={ this.onChangePeriod }
                    />
    
                    <figure>
                        <LineChart
                            messages={{empty: "Нет данных"}}
                            data={ statistics.money }
                            width="800px" height="500px"
                        />
                        <figcaption>
                            Статистика прибыли
                        </figcaption>
                    </figure>
    
                    <figure>
                        <LineChart
                            messages={{empty: "Нет данных"}}
                            data={ statistics.patients }
                            width="800px" height="500px"
                        />
                        <figcaption>
                            Статистика посещений пациентов
                        </figcaption>
                    </figure>
                </Gapped>
            </div>
        );
    }
    
    onChangePeriod = (_, isMonth) => {
        this.setState({ isMonth });
        this.props.getStatistics(isMonth);
    }
}


const props = ({ admin }) => {
    return {
        patientsNumber: admin.patientsNumber,
        statistics: admin.statistics,
    };
};

const actions = {
    getPatientsNumber: getPatientsNumberAction,
    getStatistics: getStatisticsAction,
};

export default connect(props, actions)(AdminStatistics);
