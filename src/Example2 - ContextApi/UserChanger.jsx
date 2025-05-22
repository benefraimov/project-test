import { useContext, useState } from 'react';
import { UserContext } from './UserContextProvider';

const UserChanger = () => {
    // locally State Management
    const [userName, setUserName] = useState("");
    const { changeUser } = useContext(UserContext);

    return (
        <>
            <button onClick={() => changeUser(userName)}>
                החלף משתמש
            </button><br />
            <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
        </>
    );
};

export default UserChanger;