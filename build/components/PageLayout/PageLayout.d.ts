import React, { MouseEventHandler } from 'react';
import './PageLayout.css';
export declare type headerProps = {
    backNavigation?: Function;
    Breadcrumb?: React.ReactNode;
    component?: React.ReactNode;
    title?: string;
    headerLogoOnClick?: MouseEventHandler;
};
export declare type mainContentProps = {
    component?: React.ReactNode;
    livePreview?: React.ReactNode;
};
export declare type sidebarProps = {
    component?: React.ReactNode;
};
export declare type topNavBarProps = {
    component?: React.ReactNode;
};
export declare type stickyFooterProps = {
    component?: React.ReactNode;
};
export declare type layoutProps = {
    footer?: stickyFooterProps;
    content?: mainContentProps | emptyPageContentProps;
    header?: headerProps;
    headerType?: string;
    leftSidebar?: sidebarProps;
    rightSidebar?: sidebarProps;
    layoutBackgroundColor?: boolean;
    leftFooter?: React.ReactNode;
    rightFooter?: React.ReactNode;
    type: string;
    className?: string;
    mode?: 'compact' | 'fullscreen';
    topNavBar?: topNavBarProps;
    topNavMode?: boolean;
};
export declare type contentProps = {
    content: mainContentProps;
    type: string;
    toggle?: Function;
    toggleStat?: boolean;
    headerType?: string;
    mode?: 'compact' | 'fullscreen';
    layoutBackgroundColor?: boolean;
};
export declare type layoutHeaderProps = {
    header: headerProps;
    toggle?: Function;
    toggleStat?: boolean;
    type: string;
    headerType?: string;
    mode?: 'compact' | 'fullscreen';
    layoutBackgroundColor?: boolean;
};
export declare type leftSidebarProps = {
    leftSidebar: sidebarProps;
};
export declare type rightSidebarProps = {
    rightSidebar: sidebarProps;
};
export declare type footerProps = {
    footer?: stickyFooterProps;
};
export declare type rightFooterProps = {
    rightFooter?: React.ReactNode;
};
export declare type leftFooterProps = {
    leftFooter?: React.ReactNode;
};
export declare type secondaryLayoutProps = {
    content: mainContentProps;
    footer?: stickyFooterProps;
    header: headerProps;
    leftSidebar?: sidebarProps;
    rightSidebar?: sidebarProps;
    className?: string;
    mode?: 'compact' | 'fullscreen';
    layoutBackgroundColor?: boolean;
    leftFooter?: React.ReactNode;
    rightFooter?: React.ReactNode;
    topNavBar?: topNavBarProps;
};
export declare type primaryLayoutProps = {
    content: mainContentProps;
    header: headerProps;
    leftSidebar?: sidebarProps;
    type?: string;
    headerType?: string;
    className?: string;
};
export declare type emptyPageContentProps = {
    component?: React.ReactNode;
    alignContent?: 'center';
    backgroundColor?: 'primary' | 'secondary';
};
export declare type emptyPageProps = {
    content: emptyPageContentProps;
    header?: headerProps;
};
declare const PageLayout: (props: layoutProps) => JSX.Element;
export default PageLayout;
