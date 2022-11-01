/// <reference types="react" />
import { EditorElementProps } from './types';
declare const EditorElement: {
    ({ customToolbarComponents, value, onChange, toolbar, hoveringToolbar, contentStack, toolbarMode, allowExtraTags, contentTypeNameMap, disabled, fieldName, customPasteOptions, ...props }: EditorElementProps): JSX.Element;
    defaultProps: {
        onChange: () => void;
        value: {
            type: string;
            children: {
                type: string;
                attrs: {};
                children: {
                    text: string;
                }[];
            }[];
        }[];
        requestProps: {};
        onFocus: () => void;
        onBlur: () => void;
        onMouseEnter: () => void;
        onMouseLeave: () => void;
        placeholder: string;
        uid: any;
        required: boolean;
        allowExtraTags: {};
        contentTypeNameMap: {};
        plugins: any[];
        customPasteOptions: {};
    };
};
export default EditorElement;
