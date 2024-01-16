import React, { PropsWithChildren, useCallback } from 'react'
import { styled } from '@linaria/react'

import folderIcon from '@assets/folder-icon.svg'
import editIcon from '@assets/edit-icon.svg'
import trashIcon from '@assets/trash-icon.svg'

interface PropsType extends PropsWithChildren {
  showDeleteModal: () => void
}

const StyledItem = styled.li`
  background-color: #828282;
  padding: 16px;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  img {
    width: 24px;
    height: 24px;
  }
  button {
    background-color: transparent;
    width: 24px;
    height: 24px;
  }

  & > img {
    margin-right: 12px;
  }
  p {
    font-size: 16px;
    line-height: 1.1;
    color: #fff;
    padding: 4px 16px 0 0;
    flex: 1 1 auto;
  }
  p + button {
    margin-right: 16px;
  }

  @media screen and (min-width: 768px) {
    p {
      font-size: 18px;
      padding: 3px 16px 0 0;
    }
  }
`

function StillageItem({ children, showDeleteModal }: PropsType) {
  const handleDeleteClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault()
      showDeleteModal()
    },
    [showDeleteModal],
  )

  return (
    <StyledItem>
      <img src={folderIcon} alt='' />
      <p>{children}</p>
      <button>
        <img src={editIcon} alt='Rename' />
      </button>
      <button onClick={handleDeleteClick}>
        <img src={trashIcon} alt='Delete' />
      </button>
    </StyledItem>
  )
}

export default StillageItem
