import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const StateContext = createContext({
  currentUser: {},
  userToken: null,
  setCurrentUser: () => { },
  setUserToken: () => { },
  records: {},
  setRecords: () => {}
});


export const ContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({
    // name: 'Tom Cook',
    // email: 'tom@example.com',
    // imageUrl:
    //   'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  });
  // const [userToken, setUserToken] = useState('');
  const [userToken, _setUserToken] = useState(localStorage.getItem('TOKEN') || '');
  const [toast, setToast] = useState({ message: '', show: false });
  const [records, setRecords] = useState('');
  

  const setUserToken = (token) => {
    if (token) {
      localStorage.setItem('TOKEN', token)
    } else {
      localStorage.removeItem('TOKEN')
    }
    _setUserToken(token);
  };
   
  // if (currentUser.role = "manager") {
  //   const setNavigation = [
  //     { name: 'Dashboard', to: "/" },
  //     { name: 'View Site', to: "/sites" },
  //     { name: 'View Employees', to: '/employees' },
  //     { name: 'Records', to: '/records' },
  //   ]
  // };

  const showToast = (message) => {
    setToast({ message, show: true })
    setTimeout(() => {
      setToast({ message: '', show: false })
    }, 5000)
  }

  return (
    <StateContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        userToken,
        setUserToken,
        records,
        setRecords
        // surveys,
        // questionTypes,
        // toast,
        // showToast
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);