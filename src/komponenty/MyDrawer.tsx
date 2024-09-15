import MyForm from "./MyForm";
import MyTable from "./Table";
import { Drawer, Form, FormInstance, Table } from "antd";
import { DataType } from "./Table";
import { exampleDataType, Tabela } from "./ExampleData";
import { useState } from "react";
import MyModal from "./MyModal";


interface Props{
    
    showDrawer: boolean;
    hideDrawer: () => void;
   }

  
const MyDrawer= ({showDrawer, hideDrawer}: Props) =>
    {
        const [modalOpen, setModalOpen] = useState(false);
        const [selectedRecord, setSelectedRecord] = useState<exampleDataType>();

        const hideModal = () =>{
            setModalOpen(false);
          }
          
          const showModal = (record: exampleDataType) => {
            setModalOpen(!modalOpen);
            setSelectedRecord(record)
          }
        

        return(
            <>
            <Drawer open={showDrawer} onClose={hideDrawer}>
                <Tabela openModal={showModal}/>
            </Drawer>

            <MyModal showModal={modalOpen} handleOk={hideModal} record={selectedRecord} />
            </>
        )
    };

export default MyDrawer;


