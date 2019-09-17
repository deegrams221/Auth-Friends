// In your FriendsList component, rendered with <ProtectedRoute />, you will create a list of your friends that you get from the API.
// import react, and axiosWithAuth

import React from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';

class FriendsList extends React.Component {
  state = {
    friendsList: []
  };

  componentDidMount() {
    this.getData();
  }

  // fetch data from protected api
  getData = () => {
    axiosWithAuth()
      .get('/friends')
      .then(res => console.log(res))
      .catch(error => console.log(error));
  }
  
}

export default FriendsList;