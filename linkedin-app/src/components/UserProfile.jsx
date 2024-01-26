import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const { userId } = useParams();  
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const res = await fetch(
          `https://striveschool-api.herokuapp.com/api/profile/${userId}`
        );

        if (res.ok) {
          const data = await res.json();
          setUser(data);
        } else {
          throw new Error('Error fetching user data');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserProfile();
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Surname: {user.surname}</p>
      
    </div>
  );
};

export default UserProfile;
