import { Node } from "slate";
declare const actions: (editor: any) => {
    selection: {
        get: () => any;
        set: (_selection: any) => void;
        isSelected: () => boolean;
        isFocused: () => boolean;
        getEnd: () => import("slate").BasePoint;
        before: any;
        after: any;
        isPointEqual: (point: import("slate").BasePoint, another: import("slate").BasePoint) => boolean;
    };
    generators: {
        elements: (root: Node, options?: {
            from?: import("slate").Path;
            to?: import("slate").Path;
            reverse?: boolean;
            pass?: (node: import("slate").NodeEntry<Node>) => boolean;
        }) => Generator<import("slate").ElementEntry, void, undefined>;
    };
    _adv: {
        editor: any;
        Transforms: import("slate/dist/transforms/general").GeneralTransforms & import("slate/dist/transforms/node").NodeTransforms & import("slate/dist/transforms/selection").SelectionTransforms & import("slate/dist/transforms/text").TextTransforms;
        Editor: import("slate").EditorInterface;
        ReactEditor: any;
        addToDecorate: (decorateFunc: any) => void;
        Text: import("slate").TextInterface;
    };
    getNode: (at: any, option: any) => import("slate").NodeEntry<Node>;
    getNodes: (option: any) => Generator<import("slate").NodeEntry<Node>, void, undefined>;
    getPath: (node: any) => import("slate").Path;
    setAttrs: (attrs: any, options: any) => void;
    isNodeOfType: (type: any) => boolean;
    string: (at: any) => string;
    addMark: (key: any, val: any) => void;
    removeMark: (key: any) => void;
    hasMark: (key: any) => any;
    insertText: (text: any, location: any) => void;
    getText: () => string;
    deleteText: () => void;
    getEmbeddedItems: () => any;
    getVariable: (variableName: any, defaultValue?: any) => any;
    setVariable: (variableName: any, value: any) => void;
    updateNode: (type: any, attrs: any, options: any) => void;
    unsetNode: (options?: {}) => void;
    insertNode: (node: any, options: any) => void;
    deleteNode: (options: any) => void;
    wrapNode: (node: any, options: any) => void;
    unWrapNode: (options: any) => void;
    mergeNodes: (options: any) => void;
    removeNode: (node: any) => void;
};
export default actions;
