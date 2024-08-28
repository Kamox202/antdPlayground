import { Form, FormInstance } from "antd";
import { DataType } from "./Table";

interface Props{
 InputForm: FormInstance<DataType>;
}

const MyForm = ({InputForm}:  Props) =>
    {
        return(
            <Form
            form={InputForm}>

            </Form>
        )
    };

export default MyForm