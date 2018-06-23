// @flow
import React, { Component } from 'react';
import ReactChartkick, { LineChart, PieChart } from 'react-chartkick'
import Chart from 'chart.js'
import { getSpecializationsAction } from '../../../actions/doctor';
import { connect } from 'react-redux';
import type { Statistics } from '../../../models/Statistics';
import { getPatientsNumberAction, getStatisticsAction } from '../../../actions/admin';

ReactChartkick.addAdapter(Chart)

type Props = {|
    patientsNumber: number,
    statistics: Statistics,
    
    getPatientsNumber: () => void,
    getStatistics: (isMonth: boolean) => void,
|};

class AdminStatistics extends Component<Props, *> {
    componentDidMount() {
        const { getPatientsNumber, getStatistics } = this.props;
        
        getPatientsNumber();
        getStatistics(false);
    }
    
    render() {
        const { patientsNumber, statistics } = this.props;
        
        return (
            <div>
                Количество пациентов { patientsNumber.toString() }
                <div>
                    <LineChart data={ statistics.money } />
                </div>
            
            </div>
        );
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
