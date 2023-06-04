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
        additional: any,
    }
}
