// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Environment, NgEnvironment } from "@math-express/data-access";

export const environment: Environment = {
    ngEnv: NgEnvironment.Stage,
    enableAngularProduction: true,
    apiEndpoint: 'http://localhost:3000/',
};
