import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import logo from "../../assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <header className="text-center mt-5">
      <Container>
        <div className="text-center text-secondary">
          <img src={logo} />
          <p className="pt-3 mb-2">Journalism Without Fear or Favour</p>
          <p>{moment().format("dddd, MMMM DD, YYYY")}</p>
        </div>
       
      </Container>
    </header>
  );
};

export default Header;
