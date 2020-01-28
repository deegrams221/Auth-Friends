// In your FriendsList component, rendered with <ProtectedRoute />, you will create a list of your friends that you get from the API.
// import react, and axiosWithAuth

import React, {useEffect, useState} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import FriendForm from './FriendForm';
import '../index.css';

const Friends = () => {
  const [friends, setFriends] = useState([]);

  const getFriends = () => {
    axiosWithAuth()
      .get('/friends')
      .then(res => {
        setFriends(res.data);
      })
      .catch(err => console.log(err.response));
  }

  useEffect(() => {
    getFriends();
  }, [])

  const addFriend = friend => {
    axiosWithAuth()
      .post('/friends', friend)
      .then(res => {
        setFriends(res.data);
      })
      .catch(err => console.log(err.response));
  }

  return (
    <div>
      <h1>Add a New Friend!</h1>
      <FriendForm addFriend={addFriend}/>
      <h2>My Friend List</h2>
      {friends.map(friend => 
        <div className="friend-card" key={friend.id}>
          <h3>{friend.name}</h3>
          <h4>Age: {friend.age}</h4>
          <h5>Email: {friend.email}</h5>
        </div>
      )}
    </div>
  );
};

export default Friends;