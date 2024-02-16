import { useCallback, useState } from 'react'

import CreateStillageModal from '@components/stillage/CreateStillageModal'
import AddBtn from '@components/AddBtn'
import { styled } from '@linaria/react'

const CreateStillageContainer = styled.div`
  align-self: center;
`

function CreateStillage() {
  const [isShow, setIsShow] = useState(false)

  const showCreateStillageModal = useCallback(() => {
    setIsShow(true)
  }, [])

  return (
    <CreateStillageContainer>
      <AddBtn alignCenter onClick={showCreateStillageModal}>
        New Stillage
      </AddBtn>
      <CreateStillageModal isShow={isShow} setIsShow={setIsShow} />
    </CreateStillageContainer>
  )
}

export default CreateStillage
