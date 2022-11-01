/**
 * Important
 * Modal Component renders as a different mini-app within
 * sibling node of body invoke using callback
 **/
import React from 'react';
import './Modal.css';
export declare type Style = {
    content: object;
    overlay: object;
};
export declare type ModalProps = {
    /**
     * function will be called after modal will be close
     */
    onClose?: (data: any) => void;
    /**
     * pass redux store if needed to connect component in modal
     */
    store?: any;
    modalContentPosition?: string;
    /**
     * String className to be applied to the modal
     */
    customClass?: any;
    canCloseOnRouteSwitch?: boolean;
    /**
      * Object indicating styles to be used for the modal.
      * It has two keys, `overlay` and `content`.
      */
    style?: Style;
    /**
     * Function that will be run after the modal has opened.
     */
    onOpen?: () => any;
    /**
     * Number indicating the milliseconds to wait before closing the modal
     */
    closeTimeoutPeriod?: number;
    /**
     * Boolean indicating if pressing the esc key should close the modal
     */
    shouldCloseOnEscape?: boolean;
    /**
     * Boolean indicating if the overlay should close the modal
     */
    shouldCloseOnOverlayClick?: boolean;
    /**
     * Specified string indicating size of modal
     */
    size?: 'tiny' | 'xsmall' | 'small' | 'medium' | 'large' | 'max';
    isSidebar?: Boolean;
};
export declare type CbModalProps = {
    /**
     * React component to render within modal
     */
    component: React.ReactNode;
    /**
     * Props to configure modal
     */
    modalProps?: ModalProps;
    /**
     *String testId that renders a data-testid attribute in the DOM,
      useful for testing
     */
    testId?: string;
};
export declare type ReturnCbModalProps = {
    closeModal: (data?: any) => void;
    update: (args: any) => void;
    parentDiv: any;
};
export declare function Modal(props: any): JSX.Element;
export declare function ModalHeader(props: any): JSX.Element;
export declare function ModalFooter(props: any): JSX.Element;
export declare function ModalBody(props: any): JSX.Element;
declare const _default: any;
export default _default;
