import React, {useState} from 'react';
import '../index.css';

const FriendForm = ({addFriend}) => {
  const [friend, setFriend] = useState({name: '', email: '', age: ''});
    
  const handleChange = (e) => {
    setFriend({
      ...friend,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addFriend(friend);
  }

  return (
    <div className='friend-form'>
      <form onSubmit={handleSubmit}>
        <input type='text' name='name' placeholder='Name' value={friend.name} onChange={handleChange} />
        <input type='text' name='email' placeholder='Email' value={friend.email} onChange={handleChange} />
        <input type='text' name='age' placeholder='Age' value={friend.age} onChange={handleChange} />
        <button>Add Friend</button>
      </form>
    </div>
  );
};

    export default FriendForm;