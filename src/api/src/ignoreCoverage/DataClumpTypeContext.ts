/**
 * This type represents the context in which a data clump exists.
 */
import {DataClumpsVariableFromContext, Dictionary} from "../index";

export type DataClumpTypeContext = {
    // The type of the context, in this case always 'data_clump'.
    type: string;

    // A unique identifier typically composed of the file path, class name, method name, and parameter names.
    key: string;

    // The file path from where the data clump originates.
    from_file_path: string;

    // The name of the class or interface where the data clump originates.
    from_class_or_interface_name: string;

    // A unique key of the class or interface where the data clump originates.
    from_class_or_interface_key: string;

    // The name of the method where the data clump originates, if applicable.
    from_method_name: string | null;

    // A unique key of the method where the data clump originates, if applicable.
    from_method_key: string | null;

    // The file path to where the data clump points.
    to_file_path: string;

    // The name of the class or interface to where the data clump points.
    to_class_or_interface_name: string;

    // A unique key of the class or interface to where the data clump points.
    to_class_or_interface_key: string;

    // The name of the method to where the data clump points, if applicable.
    to_method_name: string | null;

    // A unique key of the method to where the data clump points, if applicable.
    to_method_key: string | null;

    // The specific type of data clump: 'parameter_data_clump' or 'field_data_clump'.
    data_clump_type: string;

    // A dictionary mapping keys to data clumps parameter from context.
    data_clump_data: Dictionary<DataClumpsVariableFromContext>
}
