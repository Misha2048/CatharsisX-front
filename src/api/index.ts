import axiosInstance from './axiosInstanse'

import { dispatchSetTokens } from '../helpers/tokensHelper'
import {
  IForgotPasswordRequest,
  ILoginRequest,
  INewPasswordRequest,
  IShelfsRequest,
  IShelfsResponse,
  ISignUpRequest,
  ITokensResponse,
  IUsersMe,
} from './intefaces'

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
            return axiosInstance.request({
                method: 'POST',
                url: '/auth/new-password',
                data: options
            }).then(response => response.data as ITokensResponse);
        },
    logout: async (): Promise<null> => {
      return axiosInstance.request({
        method: 'GET',
        url: '/auth/logout',
      })
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

  shelves: async (options: IShelfsRequest): Promise<IShelfsResponse[]> => {
    return axiosInstance
        .request({
          method: 'GET',
          url: '/shelfs',
          data: options,
        })
        .then(response => response.data as IShelfsResponse[])
  },
}
