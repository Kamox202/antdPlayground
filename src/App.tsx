// import logo from './logo.svg';
import React from 'react';
import './App.css';
import {Button, Form, Table} from 'antd';
import {Typography} from 'antd';
import {useState} from 'react';
import TableWithSearch from './komponenty/TableWithSearch';
import MyDrawer from './komponenty/MyDrawer';
import ChildComponent from './komponenty/MyDrawer';
import MyModal from './komponenty/MyModal';

const { Title, Text, Paragraph } = Typography;



const App = () => {

   const [open, setOpen] = useState(false);

//   const [form] = Form.useForm()


const hideDrawer = () =>{
  setOpen(false);
}


const showDrawer = () => {
  setOpen(!open);
}

  return (
    <>
    <Button onClick={showDrawer}>pokaż drower</Button>
    <MyDrawer showDrawer={open} hideDrawer={hideDrawer}/>
    </>
  );



};

export default App;