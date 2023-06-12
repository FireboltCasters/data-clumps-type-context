/**
 * This type represents a parameter from the context in which a data clump exists.
 */
import {Position, DataClumpsVariableToContext} from "../index";

export type DataClumpsVariableFromContext = {
    // A unique identifier for this parameter.
    key: string;

    // The name of the parameter in the source code.
    name: string;

    // The data type of the parameter.
    type: string;

    // Modifiers applied to the parameter, e.g., 'public', 'private', 'readonly', etc.
    modifiers: string[] | undefined;

    position: Position;

    // Representation of the matching parameter in the destination context.
    to_variable: DataClumpsVariableToContext;
}
