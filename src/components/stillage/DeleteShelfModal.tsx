import { api } from '@api/index'
import BlackOverlay from '@components/BlackOverlay'
import ModalWindowBtn from '@components/ModalWindowBtn'
import ModalWindowSpinner from '@components/ModalWindowSpinner'
import ModalBody from '@components/modalWindow/ModalBody'
import ModalButtonsRow from '@components/modalWindow/ModalButtonsRow'
import ModalCenteredColumn from '@components/modalWindow/ModalCenteredContainer'
import ModalText from '@components/modalWindow/ModalText'
import { removeStillageItem } from '@redux/slices/stillageSlice'
import { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'

interface Props {
  isShow: boolean
  setIsShow: (show: boolean) => void
  shelfName: string
  shelfId: string
}

const initialStatus = 'initial'

function DeleteShelfModal({ isShow, setIsShow, shelfName, shelfId }: Props) {
  const [status, setStatus] = useState(initialStatus)
  const [message, setMessage] = useState('')
  const dispatch = useDispatch()

  const hideModalWindow = useCallback((event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    event.preventDefault()
    setTimeout(() => {
      setStatus(initialStatus)
    }, 300)
    setIsShow(false)
  }, [])

  const deleteShelf = useCallback(
    async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault()
      setStatus('deleting')
      setMessage('Deleting...')
      const resp = await api.shelves.delete({ id: shelfId })
      setStatus('finished')
      if (resp.error) {
        setMessage("Something went wrong. The shelf wasn't deleted. Please try again.")
      } else {
        setMessage('The shelf was deleted.')
        dispatch(removeStillageItem(shelfId))
      }
    },
    [shelfId],
  )

  return (
    <>
      <ModalBody show={isShow}>
        {status === 'initial' && (
          <>
            <ModalText bold>Delete {shelfName}?</ModalText>
            <ModalText>All files on the shelf will be deleted. This cannot be undone.</ModalText>
            <ModalButtonsRow>
              <ModalWindowBtn onClick={deleteShelf}>Delete</ModalWindowBtn>
              <ModalWindowBtn onClick={hideModalWindow}>Cancel</ModalWindowBtn>
            </ModalButtonsRow>
          </>
        )}

        {status === 'deleting' && (
          <ModalCenteredColumn>
            <ModalWindowSpinner />
            <ModalText>{message}</ModalText>
          </ModalCenteredColumn>
        )}

        {status === 'finished' && (
          <ModalCenteredColumn>
            <ModalText>{message}</ModalText>
            <ModalWindowBtn onClick={hideModalWindow}>Ok</ModalWindowBtn>
          </ModalCenteredColumn>
        )}
      </ModalBody>
      <BlackOverlay show={isShow} onClick={hideModalWindow} />
    </>
  )
}

export default DeleteShelfModal
