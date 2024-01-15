export interface IUsersMe {
  id: string
  first_name: string
  last_name: string
  email: string
  email_verified: boolean
}

export interface ISignUpRequest {
  first_name: string
  last_name: string
  email: string
  password: string
  university_id: string
}

export interface ITokensResponse {
  accessToken: string
  refreshToken: string
}

export interface ILoginRequest {
  email: string
  password: string
}

export interface IForgotPasswordRequest {
  email: string
}

export interface INewPasswordRequest {
  id: string
  password: string
}

export interface IShelfsRequest {
  stillage?: string
  name?: string
  last_upload_at?: string
  created_at?: string
}

export interface IShelfsResponse {
  id: string
  userId: string
  stillageId: string
  name: string
  last_upload_at: string
  created_at: string
}
