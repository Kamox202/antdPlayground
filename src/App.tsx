// import logo from './logo.svg';
import React from 'react';
import './App.css';
import {Button} from 'antd';
import {Typography} from 'antd';
import {useState} from 'react';
import TableWithSearch from './komponenty/TableWithSearch';

const { Title, Text, Paragraph } = Typography;


const App = () => {

  
  return (
    <>
    <TableWithSearch />
    </>
  );
}

export default App;