import { useCallback, useRef, useState } from 'react'
import { styled } from '@linaria/react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import BlackOverlay from '@components/BlackOverlay'
import CloseBtn from '@components/CloseBtn'
import CloseBtnContainer from '@components/filter/CloseBtnContainer'
import ModalBody from '@components/modalWindow/ModalBody'
import ModalTitle from '@components/modalWindow/ModalTitle'
import TextArea from '@components/TextArea'
import ModalText from '@components/modalWindow/ModalText'
import ModalWindowBtn from '@components/ModalWindowBtn'
import { api } from '@api/index'
import { setHint } from '@redux/slices/hintSlice'

interface Props {
  isShow: boolean
  setIsShow: (value: boolean) => void
}

const Input = styled.input`
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  line-height: 1.15;
  display: block;
  width: 100%;
  border: 1px solid #fff;
  padding: 10px 0 10px 10px;
  border-radius: 5px;

  &::placeholder {
    color: #000;
    opacity: 70%;
    font-size: 16px;
    font-weight: 300;
    line-height: 1.15;
  }
`

const TagsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const initialFormData = { title: '', description: '' }
const initialTagsData = { tag1: '', tag2: '', tag3: '', tag4: '', tag5: '' }

function AskQuestionModal({ isShow, setIsShow }: Props) {
  const [formData, setFormData] = useState(initialFormData)
  const [tagsData, setTagsData] = useState(initialTagsData)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)
  const formRef = useRef<HTMLFormElement | null>(null)

  const hideModal = useCallback((event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    event.preventDefault()
    document.body.classList.remove('_lock')
    setIsShow(false)
  }, [])

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      event.preventDefault()
      const name = event.target.name
      const value = event.target.value
      if (name === 'description') textareaRef.current?.setCustomValidity('')
      setFormData((prevData) => ({ ...prevData, [name]: value }))
    },
    [],
  )

  const handleTagChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const name = event.target.name
    const value = event.target.value
    setTagsData((prevData) => ({ ...prevData, [name]: value }))
  }, [])

  const submitForm = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      if (formData.description.length < 20) {
        textareaRef.current?.setCustomValidity('Use at least 20 characters')
        return formRef.current?.reportValidity()
      }
      let tags: string[] | undefined = []
      for (const value of Object.values(tagsData)) {
        if (value.trim()) tags.push(value)
      }
      if (tags.length > 1 && new Set(tags).size !== tags.length) {
        return dispatch(setHint({ message: "Tags shouldn't be the same" }))
      }
      if (tags.length === 0) tags = undefined
      const resp = await api.forum.post({ title: formData.title, body: formData.description, tags })
      if (!resp.error) {
        document.body.classList.remove('_lock')
        navigate(`/forum/${resp.forumId}`)
      } else {
        dispatch(setHint({ message: resp.error }))
      }
    },
    [formData, tagsData],
  )

  return (
    <>
      <BlackOverlay show={isShow} onClick={hideModal} />
      <form onSubmit={submitForm} ref={formRef}>
        <ModalBody show={isShow}>
          <ModalTitle>Ask a question</ModalTitle>
          <CloseBtnContainer>
            <CloseBtn size='small' onClick={hideModal} />
          </CloseBtnContainer>
          <Input
            placeholder='Title'
            type='text'
            name='title'
            value={formData.title}
            onChange={handleInputChange}
            required
            minLength={1}
            maxLength={150}
          />
          <TextArea
            ref={textareaRef}
            placeholder='Description'
            name='description'
            value={formData.description}
            onChange={handleInputChange}
            required
          />
          <TagsContainer>
            <ModalText>Tags (optional)</ModalText>
            <Input
              placeholder='tag #1'
              type='text'
              name='tag1'
              value={tagsData.tag1}
              onChange={handleTagChange}
              minLength={1}
              maxLength={50}
            />
            <Input
              placeholder='tag #2'
              type='text'
              name='tag2'
              value={tagsData.tag2}
              onChange={handleTagChange}
              minLength={1}
              maxLength={50}
            />
            <Input
              placeholder='tag #3'
              type='text'
              name='tag3'
              value={tagsData.tag3}
              onChange={handleTagChange}
              minLength={1}
              maxLength={50}
            />
            <Input
              placeholder='tag #4'
              type='text'
              name='tag4'
              value={tagsData.tag4}
              onChange={handleTagChange}
              minLength={1}
              maxLength={50}
            />
            <Input
              placeholder='tag #5'
              type='text'
              name='tag5'
              value={tagsData.tag5}
              onChange={handleTagChange}
              minLength={1}
              maxLength={50}
            />
          </TagsContainer>
          <ModalWindowBtn type='submit' alignCenter>
            Create Question
          </ModalWindowBtn>
        </ModalBody>
      </form>
    </>
  )
}

export default AskQuestionModal
