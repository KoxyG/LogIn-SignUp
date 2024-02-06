"use client"
import { createContext, useContext, useState } from 'react';

export const FormContext = createContext();

export const FormContextProvider = ({ children }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [contact, setContact] = useState('');


  const [loading, setLoading] = useState(false);

  return (
    <FormContext.Provider value={{ name, setName, email, setEmail, number, setNumber, password, setPassword, userName, setPassword, loading, setLoading}}>
      {children}
    </FormContext.Provider>
  );
};

