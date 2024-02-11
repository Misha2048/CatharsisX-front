import axiosInstance from '@api/axiosInstanse'
import { dispatchSetTokens } from '@helpers/tokensHelper'
import {
  ICatalogResponse,
  IDeleteShelvesRequest,
  IDeleteShelvesResponse,
  IFilesRequest,
  IFilesResponse,
  IForgotPasswordRequest,
  IGetFilesRequest,
  IGetFilesResponse,
  ILoginRequest,
  INewPasswordRequest,
  INewUniversityRequest,
  INewUniversityResponse,
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
    newPassword: async (options: INewPasswordRequest): Promise<ITokensResponse> => {
      return axiosInstance
        .request({
          method: 'POST',
          url: '/auth/new-password',
          data: options,
        })
        .then((response) => response.data as ITokensResponse)
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
    get: async (options: IGetFilesRequest): Promise<IGetFilesResponse[]> => {
      return axiosInstance
        .request({
          method: 'GET',
          url: '/files',
          params: { shelf: options.shelfId },
        })
        .then((response) => response.data as IGetFilesResponse[])
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
}
