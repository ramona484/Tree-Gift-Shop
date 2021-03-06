import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Button from "react-bootstrap/Button";
import { PersonCircle } from "react-bootstrap-icons";
import AccordionLog from "./AccordionLog";
import { useContext } from "react";
import { LoginContext } from "../../LoginContext";

function OverlayNav() {
  const { getToken, getName, getLastName, logout } = useContext(LoginContext);
    const token = getToken()

  const notLoggedPopover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Login or Sign up</Popover.Title>
      <Popover.Content>
        <AccordionLog />
      </Popover.Content>
    </Popover>
  );

  const loggedInPopover = (
    <Popover id="popover-basic">
      <Popover.Title as="p">Already logged in as <b>{getName()} {getLastName()}</b></Popover.Title>
      <Popover.Content>
        <button onClick={logout} className="btn btn-primary">Logout</button>
      </Popover.Content>
    </Popover>
  );

  const NotLogged = () => (
      <OverlayTrigger
      trigger="click"
      placement="bottom"
      overlay={notLoggedPopover}
    >
      
        <Button variant="light" >
          <PersonCircle size={25} />
        </Button>
      
      
    </OverlayTrigger>
  );

  const Logged = () => (
       <OverlayTrigger
      trigger="click"
      placement="bottom"
      overlay={loggedInPopover}
    >
      <Button variant="light" >
        <PersonCircle size={25} />
      </Button>
    </OverlayTrigger>
   
  );

  const Check = () => {
    if (!token) {
      return <NotLogged />;
    } else {
      return <Logged />;
    }
  };

  return (
    <div>
      <Check />
    </div>
  );
}

export default OverlayNav;
