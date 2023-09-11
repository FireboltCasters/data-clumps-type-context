<h2 align="center">
    data-clumps-type-context
</h2>

## About

A reporting format for Data-Clumps as used in [data-clumps](https://github.com/FireboltCasters/data-clumps/).


```ts
// src/api/src/ignoreCoverage/DataClumpsTypeContext.ts

/**
 * This type encapsulates the context of multiple data clumps. It includes the report's version,
 * the options used during the data clump analysis, and a dictionary mapping keys to data clump contexts.
 */
import {DataClumpsDetectorContext} from "./DataClumpsDetectorContext";
import {DataClumpTypeContext, Dictionary} from "../index";

export type DataClumpsTypeContext = {
    // The version of the context format or the tooling.
    report_version: string,

    // The options used during the data clump analysis.
    detector: DataClumpsDetectorContext,

    // A dictionary mapping keys to data clump contexts.
    data_clumps: Dictionary<DataClumpTypeContext>,

    // The timestamp when the report was generated
    report_timestamp: string,

    // The language or framework the detector is designed for
    target_language: string

    // An overall summary of the report, it could contain a general overview, high risk files or any other relevant summary data
    report_summary: any,

    // Information about the project or codebase where the data clumps are detected
    project_info: {
        project_name: string | null,
        project_version: string | null,
        project_commit: string | null,
        project_commit_date: string | null,
        additional: any,
    }
}

```

```ts
// src/api/src/ignoreCoverage/DataClumpsDetectorContext.ts

/**
 * This type holds the configuration options for a specific detector during data clump analysis.
 */
export type DataClumpsDetectorContext = {
    // The name of the detector used in the analysis
    name: string,
    url: string | null,

    // The version of the detector used in the analysis
    version: string,

    // The threshold value or metric that defines a data clump for the detector
    options: any,
}

```

```ts
// src/api/src/ignoreCoverage/DataClumpTypeContext.ts

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

```

```ts
// src/api/src/ignoreCoverage/DataClumpsVariableFromContext.ts

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

```

```ts
// src/api/src/ignoreCoverage/DataClumpsVariableToContext.ts

import {Position} from "../index";

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

    position: Position;

    // Modifiers applied to the parameter, e.g., 'public', 'private', 'readonly', etc.
    modifiers: string[] | undefined;
}

```

```ts
// src/api/src/ignoreCoverage/Position.ts

/**
 * This type represents a position in a source code
 */

export type Position = {
    startLine: number;
    startColumn: number;
    endLine: number;
    endColumn: number;
}

```

```ts
// src/api/src/ignoreCoverage/Dictionary.ts

export interface Dictionary<T> {
    [Key: string]: T;
}

```

## License

MIT

## Contributors

The FireboltCasters

<a href="https://github.com/FireboltCasters/data-clumps-type-context"><img src="https://contrib.rocks/image?repo=FireboltCasters/data-clumps-type-context" alt="Contributors" /></a>
