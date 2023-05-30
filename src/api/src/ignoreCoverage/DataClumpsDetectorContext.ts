/**
 * This type holds the configuration options for a specific detector during data clump analysis.
 */
export type DataClumpsDetectorContext = {
    // The name of the detector used in the analysis
    name: string,

    // The version of the detector used in the analysis
    version: string,

    // The threshold value or metric that defines a data clump for the detector
    options: any,
}
