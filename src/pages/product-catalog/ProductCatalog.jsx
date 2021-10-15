import React from 'react';
import NavMenu from "../../nav-menu/NavMenu.jsx";
import Header from "../../header/Header.jsx";
import * as ReactDOM from "react-dom";
import NotFound from "../not-found/NotFound.jsx";
import Footer from "../../footer/Footer.jsx";

class ProductCatalog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {products: {}};
    this.fetchData();
  }

  fetchData(){
    fetch(`http://localhost:3000/${this.props.match.params.subcategory}/${this.props.match.params.brand}`, {
      method: "GET"
    }).then( res => {
      if(res.status === 404){
        ReactDOM.render(<NotFound />, document.getElementById('root'));
        return;
      }
      return res.json();
    }).then( (res) => { // todo fix duplicate, remove api to methods
      if(!res.length) ReactDOM.render(<NotFound />, document.getElementById('root'));
      this.setState({products: res});
    });
  }

  render() {
    return (
      <div>
        <Header />
        <NavMenu />
        <Footer />
      </div>
    );
  }
}

export default ProductCatalog;
