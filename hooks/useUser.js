import axios from 'axios';
import { useEffect, useState } from 'react';

export function useUser() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const user = await axios.get('api/user/verify');
      setUser(user.data);
    };
    fetchData();
  }, []);

  return user;
}
