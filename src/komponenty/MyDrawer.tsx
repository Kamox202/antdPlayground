import MyForm from "./MyForm";
import MyTable from "./Table";
import { Drawer, Form, FormInstance } from "antd";
import { DataType } from "./Table";

interface Props{
    form: FormInstance<DataType>;
    showDrawer: boolean;
    
   }

const MyDrawer = ({showDrawer}: Props, {form} : Props, hideDrawer: any) =>
    {
         [form] = Form.useForm();

        return(
            <Drawer open={showDrawer} onClose={hideDrawer}>
                <MyForm InputForm={form}/>
            </Drawer>
        )
    };

export default MyDrawer;