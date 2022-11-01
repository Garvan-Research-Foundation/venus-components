/// <reference types="react" />
import { Condition, Property, PropertyConditionConstraint, QueryCombination, Translations } from './types';
export declare const QueryCombinationBuilder: ({ query, onUpdateQuery, properties, conditions, translations, propertyConditionConstraints, }: {
    query: QueryCombination | undefined;
    onUpdateQuery: (query: QueryCombination) => void;
    properties: Property[];
    conditions: Condition[];
    translations: Translations;
    propertyConditionConstraints: PropertyConditionConstraint[];
}) => JSX.Element;
