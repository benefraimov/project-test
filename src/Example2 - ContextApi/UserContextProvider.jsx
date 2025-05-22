import { createContext, useState } from 'react';
import UserDisplay from './UserDisplay';
import UserChanger from './UserChanger';

// שלב 1: יצירת קונטקסט
export const UserContext = createContext();

const UserContextProvider = () => {
    // שלב 2: משתנה ופונקציה לשינוי שם המשתמש
    const [username, setUsername] = useState("אורח");

    const changeUser = (newName) => setUsername(newName);

    return (
        // שלב 3: עטיפת הרכיבים עם Provider
        <UserContext.Provider value={{ username, changeUser }}>
            <UserDisplay />
            <UserChanger />
        </UserContext.Provider>
    );
};

export default UserContextProvider;