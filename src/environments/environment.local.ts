// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Environment } from "@math-express/data-access";

export const environment: Environment = {
    // ngEnv: NgEnvironment.Local,
    enableAngularProduction: false,
    apiEndpoint: 'http://127.0.0.1:3000',
};
