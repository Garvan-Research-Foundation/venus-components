import React, { FormEventHandler } from 'react';
import './Form.css';
export interface FormProps {
    onSubmit?: FormEventHandler;
    style?: React.CSSProperties;
    className?: string;
    children: React.ReactChild | React.ReactNodeArray;
    testId?: string;
}
declare const Form: {
    (props: FormProps): JSX.Element;
    defaultProps: Partial<FormProps>;
};
export default Form;
