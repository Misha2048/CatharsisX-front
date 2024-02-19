import { useCallback, useState } from 'react'
import { styled } from '@linaria/react'

import AddBtn from '@components/AddBtn'
import CreateShelfModal from '@components/stillage/CreateShelfModal'

interface Props {
  stillageId: string
}

const CreateShelfContainer = styled.div`
  align-self: center;
`

function CreateShelf({ stillageId }: Props) {
  const [isShow, setIsShow] = useState(false)

  const showCreateShelfModal = useCallback(() => {
    setIsShow(true)
  }, [])

  return (
    <CreateShelfContainer>
      <AddBtn alignCenter onClick={showCreateShelfModal}>
        New Shelf
      </AddBtn>
      <CreateShelfModal stillageId={stillageId} isShow={isShow} setIsShow={setIsShow} />
    </CreateShelfContainer>
  )
}

export default CreateShelf
