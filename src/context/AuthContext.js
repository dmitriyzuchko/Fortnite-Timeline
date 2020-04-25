import React from 'react';

export default React.createContext({
  username: null,
  logout: username => {},
  userID: null,
});
