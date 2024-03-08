import { styled } from '@linaria/react'
import { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import SearchField from '@components/SearchField'
import { api } from '@api/index'
import { RootState } from '@redux/store'
import { setForumState } from '@redux/slices/forumSlice'
import { setHint } from '@redux/slices/hintSlice'
import { setPaginationValues } from '@redux/slices/paginationSlice'

const FilterBody = styled.div`
  align-self: center;
`

function ForumFilter() {
  const [text, setText] = useState('')
  const dispatch = useDispatch()
  const limit = useSelector((state: RootState) => state.pagination.pageLimit)

  const searchForumTopics = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      const resp = await api.forum.get({ title: text, offset: 0, limit })
      if (!resp.error) {
        dispatch(setForumState({ topics: resp.forums, questionTitle: text }))
        dispatch(setPaginationValues({ currentPage: 1, totalCount: resp.count }))
      } else {
        dispatch(
          setHint({
            message: "Something went wrong. Could't receive a list of forum topics.",
          }),
        )
      }
    },
    [text],
  )

  return (
    <FilterBody>
      <SearchField text={text} setText={setText} onIconClick={searchForumTopics} />
    </FilterBody>
  )
}

export default ForumFilter
