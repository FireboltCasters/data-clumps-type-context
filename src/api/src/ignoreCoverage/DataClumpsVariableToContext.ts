/**
 * This type represents a parameter in the destination context matching a data clump.
 */
export type DataClumpsVariableToContext = {
    // A unique identifier for this parameter.
    key: string;

    // The name of the parameter in the source code.
    name: string;

    // The data type of the parameter.
    type: string;

    // Modifiers applied to the parameter, e.g., 'public', 'private', 'readonly', etc.
    modifiers: string[] | undefined;
}
