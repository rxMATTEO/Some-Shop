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
    this.onSearchBarFocus = this.onSearchBarFocus.bind(this);
    this.onSearchBarBlur = this.onSearchBarBlur.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    window.addEventListener('scroll', this.onScroll);

    this.state = { style: { top: "60px",marginTop: "", searchQuery: "" }};
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

  onSearchButtonClick(searchQuery){
    ReactDOM.render(<ProductCatalog header={"Поиск по запросу: " + searchQuery} location={ {pathname: "/search?query=" + searchQuery } }/>, document.getElementById('root'))
  }

  onSearchBarFocus(){
    document.addEventListener('keydown', this.handleEnter);
  }

  onSearchBarBlur(){
    document.removeEventListener('keydown', this.handleEnter);
  }

  handleEnter(e){
    if (e.key === 'Enter') {
      this.onSearchButtonClick(this.state.searchQuery);
    }
  }

  render() {
    const { searchQuery } = this.state;
    return (
      //todo remove inline styles
      <div style={{display: "inline-block", height: "50px", width: "100%"}}>
        <div className="search" style={{ top: this.state.style.top, marginTop: this.state.style.marginTop, boxShadow: this.state.style.boxShadow }}>
          <div className="content" style={{display: "flex", justifyContent: "space-between", top: "10px", position: "relative", height: "10px"}}>
            <div style={{display: "inline-block", height: "100%"}}>
              <a href="/" style={{display: "inline-block", height: "inherit"}}>
                <img src="/./image.png" className="shop-logo"/>
              </a>
            </div>
            <SearchBar onFocus={ this.onSearchBarFocus } onBlur={ this.onSearchBarBlur } onSearch={ this.onSearch }/>
            <Button className="search-button" text="Найти" onClick={ () => this.onSearchButtonClick(searchQuery) } />
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
