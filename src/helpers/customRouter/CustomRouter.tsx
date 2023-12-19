import React, { useEffect } from 'react';
import { Router } from 'react-router-dom';
import { BrowserHistory } from 'history';
import { useState, useLayoutEffect } from 'react';
import { store } from '../../redux/store';
import { clearHint } from '../../redux/slices/hintSlice';

interface Props {
  children: React.ReactNode;
  history: BrowserHistory;
  basename?: string;
}

function CustomRouter({ children, history, basename }: Props) {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  useEffect(() => {
    history.listen(() => {
      store.dispatch(clearHint());
    });
  }, []);

  return (
    <Router
      basename={basename}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    >
      {children}
    </Router>
  );
}

export default CustomRouter;
