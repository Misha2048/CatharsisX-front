import axiosInstance from '@api/axiosInstanse'
import { dispatchSetTokens } from '@helpers/tokensHelper'
import {
  IAnswerUpvoteRequest,
  IAnswerUpvoteResponse,
  ICatalogResponse,
  ICreateForumRequest,
  ICreateForumResponse,
  ICreateShelfRequest,
  ICreateStillageRequest,
  IDeleteShelvesRequest,
  IDeleteShelvesResponse,
  IDownloadFileRequest,
  IFilesRequest,
  IFilesResponse,
  IForgotPasswordRequest,
  IGetFilesRequest,
  IGetForumTopicsRequest,
  IGetForumTopicsResponse,
  IGetTopicRequest,
  IGetTopicResponse,
  ILoginRequest,
  INewPasswordRequest,
  INewPasswordResponse,
  INewUniversityRequest,
  INewUniversityResponse,
  IPostAnswerRequest,
  IPostAnswerResponse,
  IPostCommentRequest,
  IPostCommentResponse,
  IShelf,
  IShelvesRequest,
  IShelvesResponse,
  ISignUpRequest,
  IStillagesLikeRequest,
  IStillagesLikeResponse,
  IStillagesLikedResponse,
  IStillagesPaginationRequest,
  IStillagesRequest,
  IStillagesResponse,
  ITokensResponse,
  IUniversity,
  IUsersMe,
} from '@api/intefaces'

export const api = {
  users: {
    me: async (): Promise<IUsersMe> => {
      return axiosInstance
        .request({
          method: 'GET',
          url: '/users/me',
        })
        .then((response) => response.data as IUsersMe)
    },
  },

  auth: {
    signUp: async (options: ISignUpRequest): Promise<ITokensResponse> => {
      return axiosInstance
        .request({
          method: 'POST',
          url: '/auth/signup',
          data: options,
        })
        .then((response) => {
          if (response.data.accessToken && response.data.refreshToken) {
            dispatchSetTokens(response.data)
          }
          return response.data as ITokensResponse
        })
    },

    login: async (options: ILoginRequest): Promise<ITokensResponse> => {
      return axiosInstance
        .request({
          method: 'POST',
          url: '/auth/login',
          data: options,
        })
        .then((response) => {
          if (response.data.accessToken && response.data.refreshToken) {
            dispatchSetTokens(response.data)
          }
          return response.data as ITokensResponse
        })
    },
    forgotPassword: async (options: IForgotPasswordRequest): Promise<ITokensResponse> => {
      return axiosInstance
        .request({
          method: 'POST',
          url: '/auth/forgot-password',
          data: options,
        })
        .then((response) => response.data as ITokensResponse)
    },
    newPassword: async (options: INewPasswordRequest): Promise<INewPasswordResponse> => {
      return axiosInstance
        .request({
          method: 'POST',
          url: '/auth/new-password',
          data: options,
        })
        .then((response) => response.data as INewPasswordResponse)
    },
    logout: async (): Promise<null> => {
      return axiosInstance.request({
        method: 'GET',
        url: '/auth/logout',
      })
    },
  },
  universities: {
    getUniversities: async (): Promise<IUniversity[]> => {
      return axiosInstance
        .request({
          method: 'GET',
          url: '/universities',
        })
        .then((response) => response.data as IUniversity[])
    },
  },
  emailVerify: (() => {
    const funcToCall = async (): Promise<null> => {
      return axiosInstance
        .request({
          url: '/email-verify',
        })
        .then((response) => response.data)
    }

    /*
            Тут сделано таким образом, чтобы можно было вызвать как
            api.emailVerify() так и, например, api.emailVerify.doSmtg()

            Для этого нужно объявить новый проп, например, так:
            funcToCall.test = () => {console.log('test')}
        */

    return funcToCall
  })(),

  shelves: {
    get: async (options: IShelvesRequest): Promise<IShelvesResponse> => {
      return axiosInstance
        .request({
          method: 'GET',
          url: '/shelfs',
          params: options,
        })
        .then((response) => response.data as IShelvesResponse)
    },
    delete: async (options: IDeleteShelvesRequest): Promise<IDeleteShelvesResponse> => {
      return axiosInstance
        .request({
          method: 'DELETE',
          url: `/shelfs/${options.id}`,
        })
        .then((response) => response.data as IDeleteShelvesResponse)
    },
    post: async (options: ICreateShelfRequest): Promise<IShelf> => {
      return axiosInstance
        .request({
          method: 'POST',
          url: '/shelfs',
          data: { stillage: options.stillageId, name: options.shelfName },
        })
        .then((response) => response.data as IShelf)
    },
  },

  files: {
    upload: async (options: IFilesRequest): Promise<IFilesResponse> => {
      const formData = new FormData()
      formData.append('file', options.file)
      formData.append('filename', options.fileName)
      formData.append('shelf_id', options.shelfId)
      return axiosInstance
        .request({
          method: 'POST',
          url: '/files/upload',
          data: formData,
        })
        .then((response) => response.data as IFilesResponse)
    },
    get: async (options: IGetFilesRequest): Promise<IFilesResponse[]> => {
      return axiosInstance
        .request({
          method: 'GET',
          url: '/files',
          params: { shelf: options.shelfId },
        })
        .then((response) => response.data as IFilesResponse[])
    },
    download: async (options: IDownloadFileRequest): Promise<Buffer> => {
      return axiosInstance
        .request({
          method: 'GET',
          url: `/files/download/${options.id}`,
          responseType: 'blob',
        })
        .then((response) => response.data as Buffer)
    },
  },

  mail: {
    newUniversityLetter: async (
      options: INewUniversityRequest,
    ): Promise<INewUniversityResponse> => {
      return axiosInstance
        .request({
          method: 'POST',
          url: '/mail/new-university-letter',
          data: options,
        })
        .then((response) => response.data as INewUniversityResponse)
    },
  },

  stillages: {
    get: async (options?: IStillagesRequest): Promise<IStillagesResponse[]> => {
      return axiosInstance
        .request({
          method: 'GET',
          url: '/stillages',
          params: options,
        })
        .then((response) => response.data as IStillagesResponse[])
    },
    like: async (options: IStillagesLikeRequest): Promise<IStillagesLikeResponse> => {
      return axiosInstance
        .request({
          method: 'PATCH',
          url: `/stillages/like/${options.id}`,
        })
        .then((response) => ({ status: response.status }) as IStillagesLikeResponse)
    },
    liked: async (options?: IStillagesPaginationRequest): Promise<IStillagesLikedResponse> => {
      return axiosInstance
        .request({
          method: 'GET',
          url: '/stillages/liked',
          params: options,
        })
        .then((response) => response.data as IStillagesLikedResponse)
    },
    post: async (options: ICreateStillageRequest): Promise<IStillagesResponse> => {
      return axiosInstance
        .request({
          method: 'POST',
          url: '/stillages',
          data: options,
        })
        .then((response) => response.data as IStillagesResponse)
    },
  },

  catalog: async (options?: IStillagesPaginationRequest): Promise<ICatalogResponse> => {
    return axiosInstance
      .request({
        method: 'GET',
        url: '/catalog',
        params: options,
      })
      .then((response) => response.data as ICatalogResponse)
  },

  forum: {
    get: async (options?: IGetForumTopicsRequest): Promise<IGetForumTopicsResponse> => {
      return axiosInstance
        .request({
          method: 'GET',
          url: '/forum',
          params: options,
        })
        .then((response) => response.data as IGetForumTopicsResponse)
    },
    post: async (options: ICreateForumRequest): Promise<ICreateForumResponse> => {
      return axiosInstance
        .request({
          method: 'POST',
          url: '/forum',
          data: options,
        })
        .then((response) => response.data as ICreateForumResponse)
    },
  },

  topic: async (options: IGetTopicRequest): Promise<IGetTopicResponse> => {
    return axiosInstance
      .request({
        method: 'GET',
        url: `/forum/topic/${options.id}`,
      })
      .then((response) => response.data as IGetTopicResponse)
  },

  answer: {
    post: async (options: IPostAnswerRequest): Promise<IPostAnswerResponse> => {
      return axiosInstance
        .request({
          method: 'POST',
          url: '/answer',
          data: options,
        })
        .then((response) => response.data as IPostAnswerResponse)
    },
    upvote: async (options: IAnswerUpvoteRequest): Promise<IAnswerUpvoteResponse> => {
      return axiosInstance
        .request({
          method: 'PATCH',
          url: '/answer/upvote',
          data: options,
        })
        .then((response) => response.data as IAnswerUpvoteResponse)
    },
  },

  comment: {
    post: async (options: IPostCommentRequest): Promise<IPostCommentResponse> => {
      return axiosInstance
        .request({
          method: 'POST',
          url: '/comment',
          data: options,
        })
        .then((response) => response.data as IPostCommentResponse)
    },
  },
}
