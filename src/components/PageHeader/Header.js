import React from "react";
import classnames from "classnames";

// reactstrap components
import { 
    Container, 
    Row, 
    Col,
    UncontrolledTooltip,
    Button 

} from "reactstrap";

// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

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
                <h1 className="profile-title text-left">Mike Scheinder</h1>
                <h5 className="text-on-back">01</h5>
                <p className="profile-description">
                    Offices parties lasting outward nothing age few resolve.
                    Impression to discretion understood to we interested he
                    excellence. Him remarkably use projection collecting. Going
                    about eat forty world has round miles.
                </p>
                <div className="btn-wrapper profile pt-3">
                    <Button
                      className="btn-icon btn-round"
                      color="twitter"
                      href="https://twitter.com/creativetim"
                      id="tooltip639225725"
                      target="_blank"
                    >
                      <i className="fab fa-twitter" />
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip639225725">
                      Follow us
                    </UncontrolledTooltip>
                    <Button
                      className="btn-icon btn-round"
                      color="facebook"
                      href="https://www.facebook.com/creativetim"
                      id="tooltip982846143"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-square" />
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip982846143">
                      Like us
                    </UncontrolledTooltip>
                    <Button
                      className="btn-icon btn-round"
                      color="dribbble"
                      href="https://dribbble.com/creativetim"
                      id="tooltip951161185"
                      target="_blank"
                    >
                      <i className="fab fa-dribbble" />
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip951161185">
                      Follow us
                    </UncontrolledTooltip>
                  </div>
              </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Header;