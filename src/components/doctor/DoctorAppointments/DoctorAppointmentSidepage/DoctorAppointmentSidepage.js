// @flow
import React, { Component } from 'react';
import Toast from 'retail-ui/components/Toast';
import './doctorAppointmentSidepage.css';
import SidePage from 'retail-ui/components/SidePage/SidePage';
import { Button, Gapped, Input, Loader, Textarea } from 'retail-ui/components/all';
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
    loading: boolean,
    loadError: ?Error,
    
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
    
    componentDidUpdate(prevProps: Props) {
        const { loading, loadError, onClose } = this.props;
        
        if (prevProps.loading && !loading) {
            if (!loadError) {
                Toast.push('Заключение сохранено');
                onClose();
            } else {
                Toast.push('Ошибка при сохранении заключения');
            }
        }
    }
    
    render() {
        const {
            patientFIO, date, sidepageOpened, onClose, loading
        } = this.props;
        
        const { diagnosis, recommendations } = this.state;
        
        const formattedDate = formatDate(new Date(date));
        
        if (!sidepageOpened) {
            return null;
        }
        
        return (
            <SidePage width={ 770 } onClose={ onClose }>
                <SidePage.Header>Заключение от { formattedDate }</SidePage.Header>
                <SidePage.Body>
                    <Loader active={ loading }>
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
                    </Loader>
                </SidePage.Body>
                <SidePage.Footer panel>
                    <Gapped gap={ 10 }>
                        <Button use='primary' onClick={ this.onSave }>Сохранить</Button>
                        <Button onClick={ this.onPrint }>Печать</Button>
                        <Button onClick={ onClose }>Отмена</Button>
                    </Gapped>
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
            date, onPrint
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
