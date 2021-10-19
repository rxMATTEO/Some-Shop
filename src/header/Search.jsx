import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from "./SearchBar.jsx";
import Button from "../input/Button.jsx";
import ProductCatalog from "../pages/product-catalog/ProductCatalog.jsx";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.onScroll = this.onScroll.bind(this);
    this.onSearch = this.onSearch.bind(this);
    window.addEventListener('scroll', this.onScroll);
    this.state = { style: { top: "60px",marginTop: "", searchQuery: "" } };
  }

  onScroll(e){
    if(window.pageYOffset > 20){
      this.setState({ style: { top: 0, marginTop: 0, boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" } });
    }
    else this.setState({ style: { top: "60px", marginTop: "", boxShadow: "none" } })
  }

  onSearch(e){
    this.setState({searchQuery: e.target.value});
  }

  render() {
    return (
      //todo remove inline styles
      <div style={{display: "inline-block", height: "50px", width: "100%"}}>
        <div className="search" style={{ top: this.state.style.top, marginTop: this.state.style.marginTop, boxShadow: this.state.style.boxShadow }}>
          <div className="content" style={{display: "flex", justifyContent: "space-between", top: "10px", position: "relative", height: "10px"}}>
            <div>
              <a href="/">
                <img src="/./image.png" className="shop-logo"/>
              </a>
            </div>
            <SearchBar onSearch={this.onSearch}/>
            <Button className={"search-button"} text={"Найти"} onClick={ () => {
              ReactDOM.render(<ProductCatalog location={ {pathname: "/search?query=" + this.state.searchQuery } }/>, document.getElementById('root'))
            } } />
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
