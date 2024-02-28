import { styled } from '@linaria/react'
import { useCallback, useMemo, useState } from 'react'
import { Dispatch, UnknownAction } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'

import PaginationRadioInput from '@components/forum/PaginationRadioInput'
import { forumTopicsInitialLimit } from '@const'
import { RootState } from '@redux/store'
import { api } from '@api/index'
import { setForumState } from '@redux/slices/forumSlice'
import { range } from '@utils/arrayUtils'

interface Props {
  dispatch: Dispatch<UnknownAction>
  goToTopRef: React.MutableRefObject<HTMLElement | null>
}

const PaginationContainer = styled.div`
  padding: 25px 20px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  line-height: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 72px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    gap: 30px;
  }
`

const PaginationBtn = styled.button<{ isCurrent?: boolean; isDisabled?: boolean }>`
  cursor: ${(props) => (props.isDisabled ? 'not-allowed' : 'pointer')};
  padding: 5px 8px;
  border: 1px solid #fff;
  border-color: ${(props) => (props.isCurrent ? '#3ec290' : '#fff')};
  color: ${(props) => (props.isCurrent ? '#3ec290' : '#fff')};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  filter: ${(props) => (props.isDisabled ? 'brightness(0.5)' : 'none')};
`

const PaginationText = styled.p`
  padding: 5px 8px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`

const PaginationColumn = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px 8px;
  flex-wrap: wrap;
`

const dots = '...'
const siblingCount = 1

function ForumPagination({ dispatch, goToTopRef }: Props) {
  const totalCount = useSelector((state: RootState) => state.forum.totalCount)
  const [pageLimit, setPageLimit] = useState(forumTopicsInitialLimit)
  const [currentPage, setCurrentPage] = useState(1)

  const totalPageCount = Math.ceil(totalCount / pageLimit)

  const goToPage = useCallback(
    async (page: number, canGoToTop?: boolean) => {
      if (page === currentPage || page > totalPageCount) {
        return canGoToTop && goToTopRef.current?.scrollIntoView({ behavior: 'smooth' })
      }

      const offset = page * pageLimit - pageLimit
      const resp = await api.forum.get({ offset, limit: forumTopicsInitialLimit })
      if (!resp.error) {
        dispatch(setForumState({ topics: resp.forums, totalCount: resp.count }))
        goToTopRef.current?.scrollIntoView({ behavior: 'smooth' })
        setCurrentPage(page)
      }
    },
    [pageLimit, currentPage, totalPageCount],
  )

  const changeResultsPerPage = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const newPageLimit = Number(event.target.value)
    setPageLimit(newPageLimit)
    goToPage(1, true)
  }, [])

  const paginationRange = useMemo(() => {
    // Pages count is determined as siblingCount + (firstPage + lastPage + currentPage + 2*DOTS)
    const totalPageNumbers = siblingCount + 5

    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount)
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount)
    const isShowLeftDots = leftSiblingIndex > 2
    const isShowRightDots = rightSiblingIndex < totalPageCount - 2
    const firstPageIndex = 1
    const lastPageIndex = totalPageCount

    if (!isShowLeftDots && isShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount
      const leftRange = range(1, leftItemCount)

      return [...leftRange, dots, totalPageCount]
    }

    if (isShowLeftDots && !isShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount
      const rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount)
      return [firstPageIndex, dots, ...rightRange]
    }

    if (isShowLeftDots && isShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex)
      return [firstPageIndex, dots, ...middleRange, dots, lastPageIndex]
    }
  }, [totalCount, pageLimit, currentPage, totalPageCount, siblingCount])

  return (
    <PaginationContainer>
      {paginationRange && paginationRange.length > 1 && (
        <PaginationColumn>
          {paginationRange.map((value) =>
            value !== dots ? (
              <PaginationBtn
                key={value}
                onClick={() => goToPage(value as number)}
                isCurrent={currentPage === value}
              >
                {value}
              </PaginationBtn>
            ) : (
              <PaginationText key={value}>...</PaginationText>
            ),
          )}
          <PaginationBtn
            onClick={() => goToPage(currentPage + 1)}
            isDisabled={currentPage === totalPageCount}
          >
            Next
          </PaginationBtn>
        </PaginationColumn>
      )}
      <PaginationColumn>
        <PaginationRadioInput
          name='limit'
          id={'15_results_per_page'}
          value={15}
          checked={pageLimit === 15}
          onChange={changeResultsPerPage}
        />
        <PaginationRadioInput
          name='limit'
          id={'20_results_per_page'}
          value={20}
          checked={pageLimit === 20}
          onChange={changeResultsPerPage}
        />
        <PaginationRadioInput
          name='limit'
          id={'25_results_per_page'}
          value={25}
          checked={pageLimit === 25}
          onChange={changeResultsPerPage}
        />
        <PaginationText>per page</PaginationText>
      </PaginationColumn>
    </PaginationContainer>
  )
}

export default ForumPagination
