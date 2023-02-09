// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Environment, NgEnvironment } from "@math-express/data-access";

export const environment: Environment = {
    ngEnv: NgEnvironment.Test,
    enableAngularProduction: false,
    apiEndpoint: 'http://localhost:3000/',
};
