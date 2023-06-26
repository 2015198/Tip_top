import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import axiosClient from "../axios";

const StateContext = createContext({
  currentUser: {},
  userToken: null,
  setCurrentUser: () => { },
  setUserToken: () => { },
  records: [],
  toast: {
    message: null,
    show: false,
  },
});


export const ContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({
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
        // surveys,
        // questionTypes,
        toast,
        showToast,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);