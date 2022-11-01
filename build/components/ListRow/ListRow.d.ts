import React, { ReactNode } from 'react';
import './ListRow.css';
export declare type ListRowProps = {
    content: string | ReactNode;
    active: boolean;
    onClick?: Function;
    onKeyDown?: any;
    leftIcon?: React.ReactNode;
    rightArrow?: boolean;
    lockIcon?: boolean;
    className?: string;
    id?: string;
    linkToRow?: string;
    newEntryIcon?: boolean;
    newEntryOnClick?: Function;
};
declare const ListRow: (props: ListRowProps) => JSX.Element;
export default ListRow;
