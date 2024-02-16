import { useCallback, useState } from 'react'
import { styled } from '@linaria/react'

import AddBtn from '@components/AddBtn'
import CreateShelfModal from '@components/stillage/CreateShelfModal'

const CreateShelfContainer = styled.div`
  align-self: center;
`

function CreateShelf() {
  const [isShow, setIsShow] = useState(false)

  const showCreateShelfModal = useCallback(() => {
    setIsShow(true)
  }, [])

  return (
    <CreateShelfContainer>
      <AddBtn alignCenter onClick={showCreateShelfModal}>
        New Shelf
      </AddBtn>
      <CreateShelfModal isShow={isShow} setIsShow={setIsShow} />
    </CreateShelfContainer>
  )
}

export default CreateShelf
