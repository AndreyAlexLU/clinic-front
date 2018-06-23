// @flow
import React, { Component } from 'react';
import './doctorAppointmentSidepage.css';
import SidePage from 'retail-ui/components/SidePage/SidePage';
import { Button, Input, Textarea } from 'retail-ui/components/all';
import { getFullName } from '../../../../utils/getFullName';
import formatDate from '../../../../utils/formatDate';
import type { CardItem } from '../../../../models/CardItem';

type Props = {|
    sidepageOpened: boolean,
    patientId: number,
    doctorNumber: number,
    date: string,
    doctorFIO: string,
    patientFIO: string,
    
    onClose: () => void,
    onSave: (cardItem: CardItem) => void,
    onPrint: (cardItem: CardItem) => void,
|};

type State = {
    diagnosis: string,
    recommendations: string,
}

export default class DoctorAppointmentSidepage extends Component<Props, *> {
    
    state = {
        diagnosis: '',
        recommendations: '',
    };
    
    render() {
        const {
            patientFIO, date, sidepageOpened, onClose
        } = this.props;
        
        const { diagnosis, recommendations } = this.state;
        
        const formattedDate = formatDate(new Date(date));
        
        if (!sidepageOpened) {
            return null;
        }
        
        return (
            <SidePage onClose={ onClose }>
                <SidePage.Header>Заключение от { formattedDate }</SidePage.Header>
                <SidePage.Body>
                    <div className='doctor-appointment-sidepage-wrapper'>
                        <div className='doctor-appointment-sidepage-patient'>
                            Пациент: { patientFIO }
                        </div>
                        <label className='doctor-appointment-sidepage-label'>
                            <p className='doctor-appointment-sidepage-title'>
                                Диагноз
                            </p>
                            <Input
                                autoFocus
                                value={ diagnosis }
                                onChange={ this.onChangeDiagnosis }
                                width={ 620 }
                            />
                        </label>
    
                        <label className='doctor-appointment-sidepage-label'>
                            <p className='doctor-appointment-sidepage-title'>
                                Рекомендации
                            </p>
                            <Textarea
                                value={ recommendations }
                                onChange={ this.onChangeRecommendations }
                                resize='none'
                                rows={ 5 }
                                width={ 620 }
                            />
                        </label>
                    </div>
                </SidePage.Body>
                <SidePage.Footer panel>
                    <Button use='primary' onClick={ onSave }>Сохранить</Button>
                    <Button onClick={ onPrint }>Печать</Button>
                    <Button onClick={ onClose }>Отмена</Button>
                </SidePage.Footer>
            </SidePage>
        );
    }
    
    onSave = () => {
        const {
            patientFIO, doctorFIO, patientId, doctorNumber,
            date, onSave
        } = this.props;
        
        const { diagnosis, recommendations } = this.state;
        
        const cardItem: CardItem = {
            patientId,
            doctorNumber,
            date,
            diagnosis,
            recommendations,
            patientFIO,
            doctorFIO,
        };
        
        onSave(cardItem);
    };
    
    onPrint = () => {
        const {
            patientFIO, doctorFIO, patientId, doctorNumber,
            date, onSave
        } = this.props;
        
        const { diagnosis, recommendations } = this.state;
        
        const cardItem: CardItem = {
            patientId,
            doctorNumber,
            date,
            diagnosis,
            recommendations,
            patientFIO,
            doctorFIO,
        };
    
        onPrint(cardItem);
    };
    
    onChangeDiagnosis = (ev, diagnosis) => {
        this.setState({ diagnosis })
    };
    
    onChangeRecommendations = (ev, recommendations) => {
        this.setState({ recommendations })
    };
}
