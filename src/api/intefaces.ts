import { AxiosProgressEvent } from 'axios'

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
  stillage: string
  name?: string
  last_upload_at?: string[]
  created_at?: string[]
}

export interface IShelfsResponse {
  id: string
  userId: string
  stillageId: string
  name: string
  last_upload_at: string
  created_at: string
}

export interface IDeleteShelvesRequest {
  id: string
}

export interface IDeleteShelvesResponse {
  message: string
  error?: string
}

export interface IFilesRequest {
  file: File
  shelfId: string
  fileName: string
  onUploadProgress: (progressEvent: AxiosProgressEvent) => void
}

export interface IFilesResponse {
  message?: string
  error?: string
}

export interface INewUniversityRequest {
  name: string
}

export interface INewUniversityResponse {
  message: string
}
