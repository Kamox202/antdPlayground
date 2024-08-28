import { Input, Table, TableColumnsType, TableProps } from "antd";
import { useState } from "react";
import type { SorterResult } from 'antd/es/table/interface';
import Column from "antd/es/table/Column";

interface dataType {
    id: string;
    name: string;
}


const TableWithSearch = () =>{


    const columns: TableColumnsType<dataType> =[
        
            {
                title: "LP",
                key: "LP",
                render: (_: number, __: dataType, index: number) => index + 1,

            },

            {
                title: "ID",
                dataIndex: "id",
                key: "ID",
                sorter:  {
                    compare: (a:any, b:any) => a.id - b.id,
                   
                  },
                
                
            },

            {
                title: "Nazwa",
                dataIndex: "name",
                key: "Name",
                sorter: (a, b) => {
                    if(a.name < b.name) { return -1; }
                    if(a.name > b.name) { return 1; }
                    return 0;
                  },
            },
            
        
        ];


        const [dataSource, useDataSource] = useState<dataType[]>([
            {
                id: "200",
                name: "Beta CMT"
            },
        
            {
                id: "220",
                name: "MATVC"
            },
        
            {
                id: "100",
                name: "TGM"
            },
        
            {
                id: "37",
                name: "ADFR"
            },
        ])
        
        const handleChange = (value: dataType) => {
            const  newTable = c
        }

    return(
        <>
        <Input placeholder="Szukaj" onChange={handleChange} />
            <Table columns={columns} dataSource={dataSource}/>
        </>
    );
}

export default TableWithSearch;