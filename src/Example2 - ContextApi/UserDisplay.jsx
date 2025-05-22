import { useContext } from 'react';
import { UserContext } from './UserContextProvider';

const UserDisplay = () => {
    const { username } = useContext(UserContext);

    return <h2>שלום, {username}!</h2>;
};

export default UserDisplay;