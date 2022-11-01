export declare type Translations = {
    matchAll: string;
    matchAny: string;
    propertyLabel: string;
    conditionLabel: string;
};
export declare enum MatchType {
    ANY = "ANY",
    ALL = "ALL"
}
export declare type Query = QueryCombination | QueryFragment;
export declare type QueryCombination = {
    type: 'QueryCombination';
    matchType: MatchType;
    queries: Query[];
};
export declare type QueryFragment = {
    type: 'QueryFragment';
    property?: Property;
    condition?: Condition;
};
export declare type Property = {
    displayName: string;
    id: string;
    value: any;
};
export declare type ConditionOptionsDisplayName = {
    displayName?: string;
};
export declare type PropertyConditionConstraint = {
    propertyId: string;
    conditionId: string;
    conditionOptionChoices: (ConditionOptions & ConditionOptionsDisplayName)[];
    conditionDisplayNameOverride?: string;
};
export declare type Condition = {
    displayName: string;
    id: string;
    value: any;
    conditionOptions?: ConditionOptions;
};
export declare type ConditionOptions = StringConditionOptions | NumberConditionOptions;
export declare type StringConditionOptions = {
    type: 'StringConditionOptions';
    value?: string;
};
export declare type NumberConditionOptions = {
    type: 'NumberConditionOptions';
    value?: number;
};
export declare const queryCombination: (matchType: MatchType, queries: Query[]) => QueryCombination;
export declare const queryFragment: (property?: Property, condition?: Condition) => QueryFragment;
