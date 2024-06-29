import { createClass } from './helpers/createClass.js';

/**
 * @typedef {import('./base.js').Displayable} Displayable
 * @typedef {import('./base.js').DisplayOptions} DisplayOptions
 * @typedef {import('./localization.js').Localization} Localization
 */

/**
 * Game item properties.
 * @typedef {Object} GameItemProperties
 * @property {string} app - App name.
 * @property {number} count - Number of this particular item.
 * @property {string} name - Name of item.
 * @property {number} price - Price of item(s).
 */

const types = {
    app: String,
    count: Number,
    name: String,
    price: Number
};

/**
 * Game item.
 * @namespace GameItem
 */
export class GameItem extends createClass(types) {
    /**
     * Identifier for game items.
     * @type {string}
     * @static
     */
    static identifier = 'gameitems';
    /**
     * Types for game items.
     * @type {ModelTypes}
     * @static
     */
    static types = types;
    /**
     * App name.
     * @type {string}
     */
    app;
    /**
     * Number of this particular item.
     * @type {number}
     */
    count;
    /**
     * Name of item.
     * @type {Date}
     */
    name;
    /**
     * Price of item(s).
     * @type {number}
     */
    price;
    
    /**
     * Creates a new game item.
     * @param {GameItemProperties} properties - Properties.
     */
    constructor(properties) {
        super(properties);
    }
    
    /**
     * Builds the display attributes.
     * @static
     * @param {Localization} locales - Localization strings.
     * @returns {DisplayOptions} Display options.
     */
    static makeDisplay(locales) {
        return {
            names: locales.db.gameitems.names,
            identifiers: locales.db.gameitems.identifiers,
            currency_fields: [
                'price'
            ],
            number_fields: [
                'price'
            ],
            boolean_fields: []
        };
    };
    
    /**
     * Converts game item to JSON format.
     * @returns {Object} JSON representation of the game item.
     */
    toJSON = function() {
        return {
            app: this.app,
            count: this.count,
            name: this.name,
            price: this.price
        };
    };
}