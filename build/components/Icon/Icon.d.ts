import { Component, CSSProperties } from 'react';
import { iconName } from './constants';
import './Icon.css';
export declare type IconType = keyof typeof iconName;
export declare type IconColorType = 'primary' | 'secondary' | 'white';
export declare type IconSize = 'original' | 'tiny' | 'small' | 'large';
declare const defaultProps: {
    size: string;
    color: string;
};
declare type DefaultProps = Readonly<typeof defaultProps>;
export declare type IconProps = {
    size?: IconSize;
    color?: IconColorType;
    style?: CSSProperties;
    icon: IconType;
    className?: string;
    testId?: string;
} & Partial<DefaultProps>;
declare class Icon extends Component<IconProps> {
    static defaultProps: {
        size: string;
        color: string;
    };
    render(): JSX.Element;
}
export default Icon;
