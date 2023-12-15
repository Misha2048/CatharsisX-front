import { store } from '../redux/store'
import { setTokens } from '../redux/slices/tokensSlice'
import { TokensState } from '../redux/slices/tokensSlice'

export function dispatchSetTokens(tokens: TokensState) {
  store.dispatch(setTokens(tokens))
}
