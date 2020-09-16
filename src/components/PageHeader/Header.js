import React from "react";
import classnames from "classnames";

// reactstrap components
import { 
    Container, 
    Row, 
    Col,
    UncontrolledTooltip,
    Button, 
    Card,
    CardHeader,
    CardBody,
    Nav,
    NavItem,
    NavLink

} from "reactstrap";

// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

// import Mike from '../../assets/'

let ps = null;

class Header extends React.Component {

constructor(props) {
    super(props);
    this.state = {
        tabs: 1
    };
    }
    componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
        document.documentElement.className += " perfect-scrollbar-on";
        document.documentElement.classList.remove("perfect-scrollbar-off");
        let tables = document.querySelectorAll(".table-responsive");
        for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
        }
    }
    document.body.classList.toggle("profile-page");
    }
    componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.documentElement.className += " perfect-scrollbar-off";
        document.documentElement.classList.remove("perfect-scrollbar-on");
    }
    document.body.classList.toggle("profile-page");
    }
    toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    this.setState({
        [stateName]: index
    });
    };


  render() {
    return (
      <div className="page-header header-filter">
        <div className="squares square1" />
        <div className="squares square2" />
        <div className="squares square3" />
        <div className="squares square4" />
        <div className="squares square5" />
        <div className="squares square6" />
        <div className="squares square7" />
        <Container className="align-items-center">
          <Row>
              <Col  lg="6" md="6">
                <h1 className="profile-title text-left">Gautam Kumar</h1>
                <h5 className="text-on-back">G</h5>
                <p className="profile-description">
                    Seasoned full-stack web developer proficient in Javascript, ReactJS,
                    WordPress, AWS Amplify, AWS Lambda, CSS and PHP. I have built the 
                    enterprise-grade web-application from scratch and scaled effectively.
                    I enjoy working on the latest web technologies and how they can 
                    solve real-world problems. Looking to work at a place where I
                    challenged on a daily basis. So, I can learn and deliver better 
                    than I can. 
                </p>
                <div className="btn-wrapper profile pt-3">
                    <Button
                      className="btn-icon btn-round instagram"
                      
                      href="https://www.instagram.com/baliyangk/"
                      id="tooltip639225725"
                      target="_blank"
                    >
                      <i className="fab fa-instagram" />
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip639225725">
                      Follow me
                    </UncontrolledTooltip>
                    <Button
                      className="btn-icon btn-round"
                      color="facebook"
                      href="https://www.facebook.com/gautam.kumar.5030/"
                      id="tooltip982846143"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-square" />
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip982846143">
                      Like me
                    </UncontrolledTooltip>
                    <Button
                      className="btn-icon btn-round"
                      color="linkedin"
                      href="https://www.linkedin.com/in/gautam-baliyan-28345a163/"
                      id="tooltip951161185"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin" />
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip951161185">
                      Follow me
                    </UncontrolledTooltip>
                  </div>
              </Col>
              <Col className="ml-auto mr-auto" lg="4" md="6">
                <Card className="card-coin card-plain">
                    <CardHeader>
                    <img
                        alt="..."
                        className="img-center img-fluid rounded-circle"
                        src={require("../../assets/img/mike.jpg")}
                      />
                      <h4 className="title">Web Developer</h4>
                    </CardHeader>
                    <CardBody>
                    <Nav
                        className="nav-tabs-primary justify-content-center"
                        tabs
                      >
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.tabs === 1
                            })}
                            onClick={e => this.toggleTabs(e, "tabs", 1)}
                            href="#pablo"
                          >
                            Wallet
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.tabs === 2
                            })}
                            onClick={e => this.toggleTabs(e, "tabs", 2)}
                            href="#pablo"
                          >
                            Send
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.tabs === 3
                            })}
                            onClick={e => this.toggleTabs(e, "tabs", 3)}
                            href="#pablo"
                          >
                            News
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </CardBody>
                </Card>
              </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Header;