import { useCallback } from 'react'
import { styled } from '@linaria/react'

import folderIcon from '@assets/folder-icon.svg'
import editIcon from '@assets/edit-icon.svg'
import trashIcon from '@assets/trash-icon.svg'

interface PropsType {
  shelfId: string
  shelfName: string
  setShelfId: (shelfId: string) => void
  setShelfName: (shelfName: string) => void
  setIsShowShelf: (value: boolean) => void
  setIsShowDeleteModal: (value: boolean) => void
}

const StyledItem = styled.li`
  background-color: #828282;
  padding: 16px;
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
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
`

const ShelfName = styled.p`
  font-size: 16px;
  line-height: 1.1;
  color: #fff;
  padding: 4px 16px 0 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    padding: 3px 16px 0 0;
  }
`

const ButtonsContainer = styled.div`
  display: flex;
  gap: 16px;
`

function StillageItem({
  shelfId,
  shelfName,
  setShelfId,
  setShelfName,
  setIsShowShelf,
  setIsShowDeleteModal,
}: PropsType) {
  const showThisShelf = useCallback(() => {
    setShelfId(shelfId)
    setShelfName(shelfName)
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
      <ButtonsContainer>
        <button>
          <img src={editIcon} alt='Rename shelf' />
        </button>
        <button onClick={showDeleteModal}>
          <img src={trashIcon} alt='Delete shelf' />
        </button>
      </ButtonsContainer>
    </StyledItem>
  )
}

export default StillageItem
