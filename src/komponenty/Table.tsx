
import { Form, Table, TableProps, Button, Drawer } from "antd";
import MyDrawer from "./MyDrawer";
import { useState } from "react";
import MyForm from "./MyForm";

export interface DataType{
    ID: number;
    Name: string;
    Address: string;
}



const data: DataType[] = 
[
    {
        ID: 1,
        Name: 'Kamil',
        Address: 'szparagowa'
    },
    {
        ID: 2,
         Name: 'Dominik',
        Address: 'Stalowa'
    }
]

const MyTable = () =>
    {

        const [drawerVisible, setDrawerVisible] = useState(false);
        const [editingRecord, setEditingRecord] = useState(null);
        let DrShow: boolean = false;
    
        const [form] = Form.useForm();
        const showDrawer = (record: any) => {
            setEditingRecord(record);
            form.setFieldsValue(record);
            setDrawerVisible(true);
            DrShow = true;
          };

          const onClose = () => {
            setDrawerVisible(false);
            DrShow = false;
          };

          const columns: TableProps<DataType>['columns'] =
          [
          {
          title: "ID",
          dataIndex: "ID",
          },
          
          {
          title: "Nazwa",
          dataIndex: "Name",
          },
          
          {
          title: "Adres",
          dataIndex: "Address",
          },
          
          {
              title: "Drawer",
              key: 'Action',
              render: (_, record) => (
                  <Button type="link" onClick={() => showDrawer(record)}>
                    Edit
                  </Button>)
              },
          
          ];

        return(
        <>
            <Table columns={columns} dataSource={data} />
            <Drawer open={DrShow} onClose={onClose}><MyForm InputForm={form}></MyForm></Drawer>
            {/* <MyDrawer form={form} showDrawer={drawerVisible} hideDrawer={onClose} /> */}
            
        </>
        );
    };

export default MyTable;