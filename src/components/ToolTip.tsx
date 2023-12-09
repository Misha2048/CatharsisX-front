import React, { useEffect, useState } from 'react';
import { TooltipContainer } from './TooltipContainer';
import { TooltipText } from './TooltipText';
import CloseBtn from './CloseBtn';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { clearHint } from '../redux/slices/hintSlice';

function ToolTip() {
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
    <TooltipContainer data-show={show}>
      <TooltipText>{message}</TooltipText>
      <CloseBtn onClick={hideMessage} />
    </TooltipContainer>
  );
}

export default ToolTip;
