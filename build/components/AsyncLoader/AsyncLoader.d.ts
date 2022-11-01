/// <reference types="react" />
import './AsyncLoader.css';
declare type AsyncLoaderProps = {
    className?: string;
    color?: string;
    testId?: string;
};
declare const AsyncLoader: {
    (props: AsyncLoaderProps): JSX.Element;
    defaultProps: Partial<AsyncLoaderProps>;
};
export default AsyncLoader;
