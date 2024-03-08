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

export interface INewPasswordResponse {
  message: string
  error?: string
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
  private: boolean
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

export interface ICreateStillageRequest {
  stillage_name: string
  color: string
  private: boolean
}

export interface IDownloadFileRequest {
  id: string
}

export interface IGetForumTopicsRequest {
  title?: string
  offset?: number
  limit?: number
}

export interface IForumTopic {
  forumId: string
  title: string
  tags: string[]
  body: string
}

export interface IGetForumTopicsResponse {
  count: number
  forums: IForumTopic[]
  error?: string
}

export interface ICreateForumRequest {
  title: string
  body: string
  tags?: string[]
}

export interface ICreateForumResponse {
  forumId: string
  title: string
  userId: string
  tags: string[]
  body: string
  error?: string
}

export interface IGetTopicRequest {
  id: string
}

export interface IGetTopicResponse {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
  userId: string
  userFirstName: string
  userLastName: string
  title: string
  body: string
  tags: string[]
  created_at: string
  last_modified_at: string
  answers?: IAnswer[]
  error?: string
}

export interface IAnswer {
  id: string
  userId: string
  userFirstName: string
  userLastName: string
  body: string
  upvotes: number
  createdAt: string
  comments?: IComment[]
}

export interface IComment {
  id: string
  userId: string
  userFirstName: string
  userLastName: string
  body: string
  answerId: string
  createdAt: string
}

export interface IAnswerUpvoteRequest {
  id: string
  score: number
}

export interface IAnswerUpvoteResponse {
  message: string
  error?: string
}

export interface IPostCommentRequest {
  answerId: string
  body: string
}

export interface IPostCommentResponse {
  id: string
  userId: string
  userFirstName: string
  userLastName: string
  body: string
  answerId: string
  created_at: string
  last_modified_at: string
  createdAt: string
  error?: string
}

export interface IPostAnswerRequest {
  forumId: string
  body: string
}

export interface IPostAnswerResponse extends IAnswer {
  error?: string
}
