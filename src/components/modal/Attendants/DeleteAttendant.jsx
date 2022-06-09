import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Button } from "react-bootstrap";

import api from "../../../services/api";
import { FaTrashAlt } from "react-icons/fa";

const DeleteAttendant = (props) => {

  async function loadAttendant() {
    window.alert('Deletado com susseso')
    await api
      .get("/clerk/search/all")
      .then((response) => {
        props.attendantDataState(response.data)})
      .catch((err) => {
        console.error("ops! ocorreu um erro para listar" + err);
      });
  }

  async function remove(id) {
    await api
    .delete(`clerk/delete/${id}`)
    .then(loadAttendant)
    .catch((err) => {
      window.alert('Erro ao deletar');
      console.error("ops! ocorreu um erro ao deletar!" + err);
    });
  }

  return (
    <>
      <OverlayTrigger
        placement="bottom"
        overlay={
          <Tooltip id={`tooltip-delete`}>
            <strong>Remover</strong>
          </Tooltip>
        }
      >
        <Button
          variant="danger"
          onClick={() => {
            remove(props.attendantDel);
          }}
        >
          <FaTrashAlt />
        </Button>
      </OverlayTrigger>
    </>
  );
};
export default DeleteAttendant;
