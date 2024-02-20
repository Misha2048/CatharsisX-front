import { useCallback } from 'react'
import { styled } from '@linaria/react'

import folderIcon from '@assets/folder-icon.svg'
import editIcon from '@assets/edit-icon.svg'
import trashIcon from '@assets/trash-icon.svg'

interface PropsType {
  shelfId: string
  shelfName: string
  shelfUserId: string
  userId: string | null | undefined
  setShelfId: (shelfId: string) => void
  setShelfName: (shelfName: string) => void
  setShelfUserId: (shelfUserId: string) => void
  setIsShowShelf: (value: boolean) => void
  setIsShowDeleteModal: (value: boolean) => void
}

const StyledItem = styled.li`
  background-color: #828282;
  padding: 16px;
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  gap: 16px;
  overflow: hidden;
  img {
    width: 24px;
    height: 24px;
  }
  button {
    background-color: transparent;
    width: 24px;
    height: 24px;
  }
`

const ShelfNameContainer = styled.div`
  cursor: pointer;
  display: flex;
  gap: 12px;
  flex: 1 1 auto;
  max-width: calc(100% - 90px);
`

const ShelfName = styled.p`
  font-size: 16px;
  line-height: 1.1;
  color: #fff;
  padding-top: 4px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    padding-top: 3px;
  }
`

const ButtonsContainer = styled.div`
  display: flex;
  gap: 16px;
`

function StillageItem({
  shelfId,
  shelfName,
  shelfUserId,
  userId,
  setShelfId,
  setShelfName,
  setShelfUserId,
  setIsShowShelf,
  setIsShowDeleteModal,
}: PropsType) {
  const showThisShelf = useCallback(() => {
    setShelfId(shelfId)
    setShelfName(shelfName)
    setShelfUserId(shelfUserId)
    document.body.classList.add('_lock')
    setIsShowShelf(true)
  }, [shelfId, shelfName])

  const showDeleteModal = useCallback(() => {
    setShelfId(shelfId)
    setShelfName(shelfName)
    setIsShowDeleteModal(true)
  }, [shelfId, shelfName])

  return (
    <StyledItem>
      <ShelfNameContainer onClick={showThisShelf}>
        <img src={folderIcon} alt='' />
        <ShelfName title={shelfName}>{shelfName}</ShelfName>
      </ShelfNameContainer>
      {userId && userId === shelfUserId && (
        <ButtonsContainer>
          <button>
            <img src={editIcon} alt='Rename shelf' />
          </button>
          <button onClick={showDeleteModal}>
            <img src={trashIcon} alt='Delete shelf' />
          </button>
        </ButtonsContainer>
      )}
    </StyledItem>
  )
}

export default StillageItem
