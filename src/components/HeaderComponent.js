import React, { Component } from "react";
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Nav,
  Navbar,
  NavbarToggler,
  NavLink,
  NavItem,
  Collapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  ButtonDropdown,
  Modal,
  Input,
  Form,
  Label,
  FormGroup,
  ModalHeader,
  ModalBody,
  Button,
} from "reactstrap";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false,
      IsModalOpen: false,
      isDropdown1Open: false,
      isDropdown2Open: false,
      isDropdown3Open: false,
      isDropdown4Open: false,
    };

    this.toggleNav = this.toggleNav.bind(this);
    this.toggleDropdown1 = this.toggleDropdown1.bind(this);
    this.toggleDropdown2 = this.toggleDropdown2.bind(this);
    this.toggleDropdown3 = this.toggleDropdown3.bind(this);
    this.toggleDropdown4 = this.toggleDropdown4.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    //this.handleLogin = this.handleLogin.bind(this);
  }

  toggleDropdown1() {
    this.setState({
      isDropdown1Open: !this.state.isDropdown1Open,
    });
  }

  toggleDropdown2() {
    this.setState({
      isDropdown2Open: !this.state.isDropdown2Open,
    });
  }
  toggleDropdown3() {
    this.setState({
      isDropdown3Open: !this.state.isDropdown3Open,
    });
  }

  toggleDropdown4() {
    this.setState({
      isDropdown4Open: !this.state.isDropdown4Open,
    });
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  handleLogin(event) {
    alert(
      `Username: ${this.username.value} Password: ${this.password.value} Remember: ${this.remember.checked}`
    );
    this.toggleModal();
    event.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        <Jumbotron fluid>
          <Container fluid>
            <Row>
              <Col xs="3">
                <Navbar outline color="primary">
                  <NavbarToggler onClick={this.toggleNav} className="ml-2" />
                  <Collapse isOpen={this.state.isNavOpen} navbar>
                    <Nav navbar>
                      <NavItem>
                        <NavLink>test</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink>test2</NavLink>
                      </NavItem>
                    </Nav>
                  </Collapse>
                </Navbar>
              </Col>
              <Col  xs="6" className="text-center">
                <h2>PetMatch</h2>
              </Col>
            <Col xs="2" className="ml-5">
            <span className="navbar-text ml-auto">
                <Button outline onClick={this.toggleModal}>
                  <i className="fa fa-sign-in fa-lg" /> Login
                </Button>
              </span>
           </Col> 
            </Row>
          </Container>
        </Jumbotron>

        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleLogin}>
              <FormGroup>
                <Label htmlFor="username">Username</Label>
                <Input
                  type="text"
                  id="username"
                  name="username"
                  innerRef={(input) => (this.username = input)}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  innerRef={(input) => (this.password = input)}
                />
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    name="remember"
                    innerRef={(input) => (this.remember = input)}
                  />
                  Remember me
                </Label>
              </FormGroup>
              <Button type="button" value="submit" color="info">
                Login
              </Button>
            </Form>
          </ModalBody>
        </Modal>

      
        <div className="container-fluid header">
          <div className="row align-items-center text-center">
            <div className="col-3">
              <ButtonDropdown
                isOpen={this.state.isDropdown1Open}
                toggle={this.toggleDropdown1}
              >
                <DropdownToggle outline caret className="text-white">
                  Dogs
                </DropdownToggle>
                <DropdownMenu className="dropdownMenu">
                  <DropdownItem>test1</DropdownItem>
                  <DropdownItem>test2</DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            </div>
            <div className="col-3">
              <ButtonDropdown
                isOpen={this.state.isDropdown2Open}
                toggle={this.toggleDropdown2}
              >
                <DropdownToggle outline className="dropdownToggle"> Cats </DropdownToggle>
                <DropdownMenu className="dropdownMenu">
                  <DropdownItem>test1</DropdownItem>
                  <DropdownItem>test2</DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            </div>
            <div className="col-3">
              <ButtonDropdown
                isOpen={this.state.isDropdown3Open}
                toggle={this.toggleDropdown3}
              >
                <DropdownToggle >Other</DropdownToggle>
                <DropdownMenu className="dropdownMenu">
                  <DropdownItem>test1</DropdownItem>
                  <DropdownItem>test2</DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            </div>
            <div className="col-3">
              <ButtonDropdown
                isOpen={this.state.isDropdown4Open}
                toggle={this.toggleDropdown4}
              >
                <DropdownToggle color="secondary">Agencies</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>test1</DropdownItem>
                  <DropdownItem>test2</DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
