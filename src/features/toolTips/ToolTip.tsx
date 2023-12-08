import React, { useEffect, useState } from 'react';
import { Container } from './components/Container';
import { Text } from './components/Text';
import CloseBtn from '../../components/CloseBtn';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { clearHint } from '../../redux/slices/hintSlice';

function index() {
  const dispatch = useDispatch() as AppDispatch;
  const [show, setShow] = useState(false);
  const message = useSelector((state: RootState) => state.hint.message);

  useEffect(() => {
    if (message !== '') {
      setShow(true);
    }
  }, [message]);

  function hideMessage() {
    setShow(false);
    setTimeout(() => {
      dispatch(clearHint());
    }, 300);
  }

  return (
    <Container data-show={show}>
      <Text>{message}</Text>
      <CloseBtn onClick={hideMessage} />
    </Container>
  );
}

export default index;
