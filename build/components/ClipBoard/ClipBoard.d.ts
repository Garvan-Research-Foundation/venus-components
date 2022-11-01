import React from 'react';
import './ClipBoard.css';
export declare type clipBoardProps = {
    children?: React.ReactNode;
    copyText: string;
    copyLabel?: string;
    className?: string;
    displayText?: string;
    position?: string;
    type?: string;
    withArrow?: boolean;
    testId?: string;
};
declare type clipFunction = {
    copyText: string;
    onCopy: Function;
};
export declare const csClipBoard: ({ copyText, onCopy }: clipFunction) => void;
declare const ClipBoard: {
    (props: clipBoardProps): JSX.Element;
    defaultProps: Partial<clipBoardProps>;
};
export default ClipBoard;
