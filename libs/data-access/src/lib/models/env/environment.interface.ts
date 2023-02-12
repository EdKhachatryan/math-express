export declare enum NgEnvironment {
    Local = "local",
    Prod = "prod",
    UAT = "uat",
    Preprod = "preprod",
    Stage = "stage",
    Test = "test",
    E2e = "e2e"
}

export interface Environment {
    enableAngularProduction: boolean;
    apiEndpoint: string;
}
