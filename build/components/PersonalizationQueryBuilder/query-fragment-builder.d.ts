/// <reference types="react" />
import { Condition, Property, PropertyConditionConstraint, QueryFragment } from './types';
export declare const QueryFragmentBuilder: ({ query, onUpdateQuery, properties, conditions, propertyLabel, conditionLabel, propertyConditionConstraints, }: {
    query: QueryFragment | undefined;
    onUpdateQuery: (query: QueryFragment) => void;
    properties: Property[];
    conditions: Condition[];
    propertyLabel: string;
    conditionLabel: string;
    propertyConditionConstraints: PropertyConditionConstraint[];
}) => JSX.Element;
