/// <reference types="react" />
import { MatchType } from './types';
export declare const MatchNode: ({ matchType, onMatchNodeSelection, matchAllLabel, matchAnyLabel, }: {
    matchType?: MatchType;
    onMatchNodeSelection: (matchType?: MatchType) => void;
    matchAllLabel: string;
    matchAnyLabel: string;
}) => JSX.Element;
