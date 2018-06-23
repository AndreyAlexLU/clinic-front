// @flow
import React, { Component } from 'react';
import Toast from 'retail-ui/components/Toast';
import './doctorAppointmentCardSidepage.css';
import SidePage from 'retail-ui/components/SidePage/SidePage';
import { Button, Gapped, Input, Loader, Textarea } from 'retail-ui/components/all';
import { getFullName } from '../../../../utils/getFullName';
import formatDate from '../../../../utils/formatDate';
import type { CardItem } from '../../../../models/CardItem';

type Props = {|
    sidepageOpened: boolean,
    card: Object,
    
    onClose: () => void,
    onPrint: (cardItem: CardItem) => void,
|};


export default class DoctorAppointmentCardSidepage extends Component<Props, *> {
    render() {
        const { sidepageOpened, onClose, onPrint } = this.props;
        const {
            patientFIO, date, doctorFIO, diagnosis, recommendations,
        } = this.props.card;
        
        const formattedDate = formatDate(new Date(date));
        
        if (!sidepageOpened) {
            return null;
        }
        
        return (
            <SidePage width={ 770 } onClose={ onClose }>
                <SidePage.Header>Заключение от { formattedDate }</SidePage.Header>
                <SidePage.Body>
                    <div className='doctor-appointment-card-wrapper'>
                        <p className='doctor-appointment-card-element'>
                            Пациент: { patientFIO }
                        </p>
                        <p className='doctor-appointment-card-element'>
                            Диагноз: { diagnosis }
                        </p>
                        <p className='doctor-appointment-card-element'>
                            Рекомендации: { recommendations }
                        </p>
                    </div>
                </SidePage.Body>
                <SidePage.Footer panel>
                    <Gapped gap={ 10 }>
                        <Button onClick={ onPrint }>Печать</Button>
                        <Button onClick={ onClose }>Отмена</Button>
                    </Gapped>
                </SidePage.Footer>
            </SidePage>
        );
    }
    
}
