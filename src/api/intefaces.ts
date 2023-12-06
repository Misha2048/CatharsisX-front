export interface IUsersMe {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    email_verified: boolean;
}

export interface ISignUpRequest {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
}

export interface ITokensResponse {
    accessToken: string;
    refreshToken: string;
}

export interface ILoginRequest {
    email: string;
    password: string;
}

