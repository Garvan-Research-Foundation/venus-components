declare const events: (editor: any) => {
    isFocused: () => boolean;
    focus: () => void;
    blur: () => void;
};
export default events;
