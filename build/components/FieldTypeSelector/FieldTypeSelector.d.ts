/// <reference types="react" />
import './FieldTypeSelector.css';
export declare const useFieldTypeSelectorContext: () => unknown;
export declare const FieldTypeSelectorProvider: (props: any) => JSX.Element;
interface IFieldTypeSelector {
    children?: any;
    fields: Object;
    action?: (arg: any) => void;
    forceShow?: Boolean;
    fieldListType?: 'tiles' | 'dropdown';
    disableAddAction?: Boolean;
    tooltipText?: String;
}
export default function FieldTypeSelector(props: IFieldTypeSelector): JSX.Element;
export {};
