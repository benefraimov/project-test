import { useContext } from 'react';
import { UserContext } from './UserContextProvider';

const UserChanger = () => {
    const { changeUser } = useContext(UserContext);

    return (
        <button onClick={() => changeUser("דני")}>
            החלף משתמש לדני
        </button>
    );
};

export default UserChanger;