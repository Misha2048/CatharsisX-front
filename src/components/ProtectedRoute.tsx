import React, { PropsWithChildren, useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import { api } from '@api/index'
import { RootState } from '@redux/store'
import { setValue } from '@redux/slices/UserSlice'
import Spinner from '@components/Spinner'

interface Props extends PropsWithChildren {
  component: React.FunctionComponent
}

function ProtectedRoute({ component: Component }: Props) {
  const dispatch = useDispatch()
  const isEmailVerified = useSelector((state: RootState) => state.user.emailVerified)
  const [isFetching, setIsFetching] = useState(true)

  const checkEmailVerified = useCallback(async () => {
    const userInfo = await api.users.me()
    dispatch(setValue({ emailVerified: userInfo.email_verified }))
    setIsFetching(false)
  }, [])

  useEffect(() => {
    checkEmailVerified()
  }, [])

  return isEmailVerified ? <Component /> : isFetching ? <Spinner /> : <Navigate to='/check-email' />
}

export default ProtectedRoute
