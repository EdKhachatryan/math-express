import { Authenticate } from "../../models";

export class Login {
    static readonly type = '[Auth] Login';

    constructor(public readonly data: Authenticate) {
    }
}

export class Logout {
    static readonly type = '[Auth] Logout';
}

export class ClearUser {
    static readonly type = '[Auth] ClearUser';
}
