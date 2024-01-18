import axiosInstance from '@api/axiosInstanse'
import { dispatchSetTokens } from '@helpers/tokensHelper'
import {
  IDeleteShelvesRequest,
  IDeleteShelvesResponse,
  IFilesRequest,
  IFilesResponse,
  IForgotPasswordRequest,
  ILoginRequest,
  INewPasswordRequest,
  INewUniversityRequest,
  INewUniversityResponse,
  IShelfsRequest,
  IShelfsResponse,
  ISignUpRequest,
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
    getUniversities: async (): Promise<Array<IUniversity>> => {
      return axiosInstance
        .request({
          method: 'GET',
          url: '/universities',
        })
        .then((response) => response.data as Array<IUniversity>)
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
    get: async (options: IShelfsRequest): Promise<IShelfsResponse[]> => {
      return axiosInstance
        .request({
          method: 'GET',
          url: '/shelfs',
          params: options,
        })
        .then((response) => response.data as IShelfsResponse[])
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
}
