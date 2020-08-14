import React from 'react';
import DehazeIcon from '@material-ui/icons/Dehaze';
// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const ProfilePage = () => (
  <div>
    <div>
      <p>
        hello!
      </p>
    </div>
  </div>
);

export default ProfilePage;
