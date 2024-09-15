import { Modal, Typography } from "antd";
import { exampleDataType } from "./ExampleData";

interface Props{
    showModal: boolean,
    handleCancel?: () => void,
    handleOk: () => void,
    record?: exampleDataType,
}

const {Title} = Typography;

const MyModal = ({showModal, handleOk, handleCancel, record}:Props) =>{

return(
<>
 <Modal open={showModal} onOk={handleOk} onCancel={handleCancel}>
        <Title>{record?.id}</Title>
        <Typography>{record?.nazwa}</Typography>
 </Modal>
</>
);

};

export default MyModal;