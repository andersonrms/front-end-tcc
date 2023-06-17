import React from "react";
import classnames from 'classnames'
import Modal from 'react-modal'

import styles from './Modal.module.css'
import { ModalProps } from "./types";

const ModalWrapper = ({ children }: ModalProps ) => {
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          width: '408px',
          border: 'none',
          boxShadow: '0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1)'
        },
      };

    return (
        <Modal isOpen style={customStyles} ariaHideApp={false}>
            {children}
        </Modal>
    )
}

export default ModalWrapper;