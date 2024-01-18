import { styled } from '@linaria/react'

const UploadFileForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  input[type='text'] {
    width: 100%;
  }
  button {
    align-self: center;
  }

  @media screen and (min-width: 768px) {
    gap: 24px;
  }
`

export default UploadFileForm
