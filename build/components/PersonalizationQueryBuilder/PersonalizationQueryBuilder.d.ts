/// <reference types="react" />
import './PersonalizationQueryBuilder.scss';
import { Condition, Property, PropertyConditionConstraint, Query, Translations } from './types';
export declare const PersonalizationQueryBuilder: ({ properties, conditions, onUpdateQuery, existingQuery, propertyConditionConstraints, translations, }: {
    properties: Property[];
    conditions: Condition[];
    onUpdateQuery: (query: Query) => void;
    existingQuery?: Query;
    propertyConditionConstraints?: PropertyConditionConstraint[];
    translations?: Translations;
}) => JSX.Element;
