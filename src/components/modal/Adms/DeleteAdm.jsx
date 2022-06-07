import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Button } from "react-bootstrap";

import api from "../../../services/api";
import { FaTrashAlt } from "react-icons/fa";

const DeleteAdm = (props) => {
  function loadAdm() {
    api
      .get("/clerk/search/alladm")
      .then((response) => props.admDataState(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro para listar" + err);
      });
  }

  async function remove(id) {
    return api
      .delete(`clerk/delete/${id}`)
      .then(loadAdm)
      .catch((err) => {
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
            remove(props.admDel);
          }}
        >
          <FaTrashAlt />
        </Button>
      </OverlayTrigger>
    </>
  );
};
export default DeleteAdm;
