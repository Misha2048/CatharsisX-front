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

export interface IShelvesRequest {
  stillage: string
  name?: string
  last_upload_at?: string[]
  created_at?: string[]
}

export interface IShelf {
  id: string
  userId: string
  stillageId: string
  name: string
  last_upload_at: string
  created_at: string
}

export interface IShelvesResponse {
  stillageName: string
  stillageUserId: string
  findShelfsResponse: IShelf[]
}

export interface IUniversity {
  id: string
  name: string
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
}

export interface IFilesResponse {
  id: string
  name: string
  size: number
  uploadedAt: string
}

export interface INewUniversityRequest {
  name: string
}

export interface INewUniversityResponse {
  message: string
}

export interface IStillagesRequest {
  name?: string
  last_upload_at?: string[]
  created_at?: string[]
}

export interface IStillagesResponse {
  id: string
  userId: string
  name: string
  created_at: string
  last_upload_at: string
  university_id: string
  liked: boolean
  color: string
}

export interface IStillagesLikeRequest {
  id: string
}

export interface IStillagesLikeResponse {
  status: number
}

export interface IStillagesPaginationRequest {
  limit?: number
  offset?: number
  name?: string
  last_upload_at?: string[]
  created_at?: string[]
}

export interface IStillagesLikedResponse {
  count: number
  likedStillages: IStillagesResponse[]
}

export interface ICatalogResponse {
  count: number
  stillages: IStillagesResponse[]
}

export interface IGetFilesRequest {
  shelfId: string
}

export interface ICreateShelfRequest {
  stillageId: string
  shelfName: string
}
