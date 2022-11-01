import React from 'react';
import './LeftNavigation.css';
interface ActionProps {
    label: string;
    onClick: Function;
    type: string;
}
interface HeaderDataProps {
    title: string | React.ReactNode;
    actions: Array<ActionProps>;
    pageHeaderContent?: string | React.ReactNode;
}
interface NavArrayProp {
    title: React.ReactNode;
    onclick: Function;
    id: string;
    headerData?: HeaderDataProps;
    component: React.ReactNode;
    externalLink?: string;
    default?: boolean;
    link?: string;
}
interface LeftNavigation {
    navigationData: Array<NavArrayProp>;
    navigationTitle: string | React.ReactNode;
    customDefault?: NavArrayProp;
}
interface NavigationProps {
    navigationProps: LeftNavigation;
    headerContent?: boolean;
}
interface TitleProps {
    label: string;
    info?: string;
    component?: React.ReactNode;
}
interface LeftHeaderProps {
    title: TitleProps;
    actions?: Array<ActionProps>;
    component?: React.ReactNode;
}
export declare const LeftNavHeader: React.FunctionComponent<LeftHeaderProps>;
declare const LeftNavigation: React.FunctionComponent<NavigationProps>;
export default LeftNavigation;
