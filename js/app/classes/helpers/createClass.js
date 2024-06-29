import { Dexie } from '../../dexie.js';

/**
 * @typedef {import('../../currency.js').Currency} Currency
 * @typedef {import('./../localization.js').Localization} Localization
 * @typedef {import('../../helpers/download.js').DownloadCollectionOptions} DownloadCollectionOptions
 */

/**
 * Types for each column in the model.
 * @typedef {Object.<string, (StringConstructor | BooleanConstructor | NumberConstructor | DateConstructor)>} DisplayableTypes
 */

/**
 * Contains attributes for displaying attributes related to model.
 * @typedef {Object} DisplayOptions
 * @property {Object.<string, string>} [names] - Textual display property of each column name e.g. "appname" is mapped to "App".
 * @property {Object.<string, (string | number)>} [identifiers] - Object containing exact strings to test against for key data.
 * @property {string[]} [currency_fields] - Array of columns that are currencies.
 * @property {string[]} [boolean_fields] - Array of columns that are booleans.
 * @property {string[]} [number_fields] - Array of columns that are numbers.
 * @property {DisplayContext} [csv] - Context for displaying CSV data.
 * @property {DisplayContext} [json] - Context for displaying JSON data.
 * @property {DisplayContext} [table] - Context for displaying HTML tabular data.
 */

/**
 * Function for building a cell value.
 * @typedef {function((string | number | boolean | Date | null | undefined), Object): string} CellValueFunction
 */

/**
 * @typedef {Object} DisplayContext
 * @property {string[]} [columns] - Names of each columns to display.
 * @property {Object.<string, string>} [column_names] - Maps for each column to get each column's name.
 * @property {Object.<string, string>} [sorts] - Maps columns to sort against when displaying tabular data.
 * @property {Object.<string, string[]>} [column_class] - Maps for assigning columns classes to each column when displaying tabular data.
 * @property {Function} [row_class] - Function which returns an array of class names to apply to row on specific record when displaying tabular data.
 * @property {Object.<string, CellValueFunction>} [cell_value] - Maps for assigning contents for each cell when displaying tabular data.
 * @property {Object} [events] - Maps for events to bind to each row when displaying tabular data.
 **/

/**
 * Generic class for models.
 * @typedef {Object} Displayable
 * @property {string} identifier - String to uniquely identify this model.
 * @property {string} [primary_key] - The primary key for the data set in the database.
 * @property {DisplayableTypes} types - Maps for defining the data type of each column.
 * @property {function(Localization): DisplayOptions} makeDisplay - Function to build the display attributes.
 */

/**
 * Creates a new class.
 * @class
 * @param {Object} types - Maps defining the types for each column.
 * @returns {Displayable} Class constructor object.
 */
export function createClass(types) {
    return Dexie.defineClass(types);
}
