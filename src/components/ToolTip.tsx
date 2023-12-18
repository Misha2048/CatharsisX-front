import React, { useEffect, useState } from 'react';
import TooltipContainer from './TooltipContainer';
import TooltipText from './TooltipText';
import CloseBtn from './CloseBtn';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { clearHint } from '../redux/slices/hintSlice';

function ToolTip() {
  const dispatch = useDispatch() as AppDispatch;
  const [isShow, setIsShow] = useState(false);
  const message = useSelector((state: RootState) => state.hint.message);

  useEffect(() => {
    hideMessage();
  }, []);

  useEffect(() => {
    if (message !== '') {
      setIsShow(true);
    }
  }, [message]);

  function hideMessage() {
    setIsShow(false);
    setTimeout(() => {
      dispatch(clearHint());
    }, 300);
  }

  return (
    <TooltipContainer show={isShow}>
      <TooltipText>{message}</TooltipText>
      <CloseBtn onClick={hideMessage} />
    </TooltipContainer>
  );
}

export default ToolTip;
