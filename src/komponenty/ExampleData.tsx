import { EyeOutlined } from "@ant-design/icons";
import { Table } from "antd";


export interface exampleDataType{

    id: number,
    nazwa: string,
}


interface columnsProps {
    openModal: (record: exampleDataType) => void;
}

export const Tabela = ({openModal}:columnsProps) => {

const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'ID',
    },

    {
        title: 'Nazwa',
        dataIndex: 'nazwa',
        key: 'Nazwa',
    },

    {
        title: 'Akcje',
        render: (_:exampleDataType, record:exampleDataType) => (<EyeOutlined onClick={() =>openModal(record)} />)
    },

]

const exampleData:exampleDataType[] = [
    {
        id:0,
        nazwa: "Jan",
    },
    
    {
        id:1,
        nazwa: "Adam",
    },

];

return(
    <Table columns={columns} dataSource={exampleData} />
);

}
