import React from 'react';
import Header from './components/PageHeader/Header';

class App extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("index-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("index-page");
  }
  render() {
    return (
      <>
        {/* <IndexNavbar /> */}
        <div className="wrapper">
          <Header />
          {/* <div className="main">
            <Basics />
            <Navbars />
            <Tabs />
            <Pagination />
            <Notifications />
            <Typography />
            <JavaScript />
            <NucleoIcons />
            <Signup />
            <Examples />
            <Download />
          </div>
          <Footer /> */}
        </div>
      </>
    );
  }
}

export default App;
