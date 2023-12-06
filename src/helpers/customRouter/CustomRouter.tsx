import React from 'react';
import { Router } from 'react-router-dom';
import { BrowserHistory } from 'history';
import { useState, useLayoutEffect } from 'react';

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
