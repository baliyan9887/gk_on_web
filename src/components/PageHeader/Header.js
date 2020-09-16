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
    NavLink,
    UncontrolledCarousel,
    CardTitle

} from "reactstrap";

// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";


let ps = null;

// CrouselItems

const carouselItems = [
  {
    src: require("../../assets/img/denys.jpg"),
    altText: "Slide 1",
    caption: "Big City Life, United States"
  },
  {
    src: require("../../assets/img/fabien-bazanegue.jpg"),
    altText: "Slide 2",
    caption: "Somewhere Beyond, United States"
  },
  {
    src: require("../../assets/img/mark-finn.jpg"),
    altText: "Slide 3",
    caption: "Stocks, United States"
  }
];



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
      <>
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
      <div className="section">
        {/* <img
          alt="..."
          className="dots"
          src={require("../../assets/img/dots.png")}
        />
        <img
          alt="..."
          className="path"
          style={{maxWidth: "65% !important"}}
          src={require("../../assets/img/path4.png")}
        /> */}
        <Container>
          <Row className="justify-content-between">
            <Col md="6">
              <Row className="justify-content-between align-items-center">
                <UncontrolledCarousel items={carouselItems} />
              </Row>
            </Col>
            <Col md="5">
              <h1 className="profile-title text-left">Projects</h1>
              <h5 className="text-on-back">02</h5>
              <p className="profile-description text-left">
                An artist of considerable range, Ryan — the name taken by
                Melbourne-raised, Brooklyn-based Nick Murphy — writes,
                performs and records all of his own music, giving it a warm,
                intimate feel with a solid groove structure. An artist of
                considerable range.
              </p>
              <div className="btn-wrapper pt-3">
                <Button
                  className="btn-simple"
                  color="primary"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <i className="tim-icons icon-book-bookmark" /> Bookmark
                </Button>
                <Button
                  className="btn-simple"
                  color="info"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <i className="tim-icons icon-bulb-63" /> Check it!
                </Button>
              </div>
            </Col>
          </Row>
        </Container>

      </div>
      <section className="section section-lg">
            <section className="section">
              <img
                alt="..."
                className="path gksaw2"
                src={require("../../assets/img/path4.png")}
              />
              <Container>
                <Row className="row-grid justify-content-between">
                  <Col className="mt-lg-5" md="5">
                    <Row>
                      <Col className="px-2 py-2" lg="6" sm="12">
                        <Card className="card-stats">
                          <CardBody>
                            <Row>
                              <Col md="4" xs="5">
                                <div className="icon-big text-center icon-warning">
                                  <i className="tim-icons icon-trophy text-warning" />
                                </div>
                              </Col>
                              <Col md="8" xs="7">
                                <div className="numbers">
                                  <CardTitle tag="p">3,237</CardTitle>
                                  <p />
                                  <p className="card-category">Awards</p>
                                </div>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col className="px-2 py-2" lg="6" sm="12">
                        <Card className="card-stats upper bg-default">
                          <CardBody>
                            <Row>
                              <Col md="4" xs="5">
                                <div className="icon-big text-center icon-warning">
                                  <i className="tim-icons icon-coins text-white" />
                                </div>
                              </Col>
                              <Col md="8" xs="7">
                                <div className="numbers">
                                  <CardTitle tag="p">3,653</CardTitle>
                                  <p />
                                  <p className="card-category">Commits</p>
                                </div>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="px-2 py-2" lg="6" sm="12">
                        <Card className="card-stats">
                          <CardBody>
                            <Row>
                              <Col md="4" xs="5">
                                <div className="icon-big text-center icon-warning">
                                  <i className="tim-icons icon-gift-2 text-info" />
                                </div>
                              </Col>
                              <Col md="8" xs="7">
                                <div className="numbers">
                                  <CardTitle tag="p">593</CardTitle>
                                  <p />
                                  <p className="card-category">Presents</p>
                                </div>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col className="px-2 py-2" lg="6" sm="12">
                        <Card className="card-stats">
                          <CardBody>
                            <Row>
                              <Col md="4" xs="5">
                                <div className="icon-big text-center icon-warning">
                                  <i className="tim-icons icon-credit-card text-success" />
                                </div>
                              </Col>
                              <Col md="8" xs="7">
                                <div className="numbers">
                                  <CardTitle tag="p">10,783</CardTitle>
                                  <p />
                                  <p className="card-category">Forks</p>
                                </div>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </Col>
                  <Col></Col>
                  <Col md="5">
                    
                    <h1 className="profile-title text-left">Large Achivements</h1>
                    <h5 className="text-on-back">02</h5>
                      {/* <h1>
                        Large <br />
                        Achivements
                      </h1> */}
                      <div >
                      <p>
                        I should be capable of drawing a single stroke at the
                        present moment; and yet I feel that I never was a
                        greater artist than now.
                      </p>
                      <br />
                      <p>
                        When, while the lovely valley teems with vapour around
                        me, and the meridian sun strikes the upper surface of
                        the impenetrable foliage of my trees, and but a few
                        stray.
                      </p>
                      <br />
                      <a
                        className="font-weight-bold text-info mt-5"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Show all{" "}
                        <i className="tim-icons icon-minimal-right text-info" />
                      </a>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
          </section>
      </>
    );
  }
}

export default Header;