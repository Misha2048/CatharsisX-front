import { styled } from '@linaria/react'

const AddUniversityForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  input[type='text'] {
    width: 100%;
  }

  button {
    align-self: center;
  }
`

export default AddUniversityForm
