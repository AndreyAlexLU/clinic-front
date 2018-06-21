// @flow
import React, { Component } from 'react';
import { Button, Gapped, Modal } from 'retail-ui/components/all';

type Props = {|
    onConfirm: () => void,
    onClose: () => void,
|};

export default class AppointmentModal extends Component<Props, *> {
    render() {
        const {
            message, onClose, onConfirm,
        } = this.props;
        return (
            <Modal>
                <Modal.Header>
                    Подтвердите запись
                </Modal.Header>
                <Modal.Body/>
                <Modal.Footer>
                    <Gapped gap={10}>
                        <Button use='primary' onClick={ onConfirm }>Записать</Button>
                        <Button onClick={ onClose }>Отмена</Button>
                    </Gapped>
                </Modal.Footer>
            </Modal>
        );
    }
}
