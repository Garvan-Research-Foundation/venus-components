/// <reference types="react" />
import './StackCard.css';
import { AvatarData } from '../Avatar/Avatar';
declare const defaultProps: {
    title: string;
    active: boolean;
    stats: any[];
    avatars: any[];
    type: string;
    modified: string;
    onActiveToggle: (state: any, event: any) => void;
    starActiveTooltip: string;
    starInActiveTooltip: string;
};
declare type DefaultProps = Readonly<typeof defaultProps>;
declare type CardStats = {
    number: string;
    category: string;
};
export declare type StackCardProps = {
    title?: string;
    active?: boolean;
    stats: CardStats[];
    data?: any;
    avatars?: AvatarData[];
    modified: string;
    type?: 'text' | 'image';
    starActiveTooltip?: string;
    starInActiveTooltip?: string;
    onActiveToggle: (state: any, event: any) => void;
} & Partial<DefaultProps>;
declare const StackCard: {
    (props: StackCardProps): JSX.Element;
    defaultProps: {
        title: string;
        active: boolean;
        stats: any[];
        avatars: any[];
        type: string;
        modified: string;
        onActiveToggle: (state: any, event: any) => void;
        starActiveTooltip: string;
        starInActiveTooltip: string;
    };
};
export default StackCard;
