import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from "./SearchBar.jsx";
import Button from "../input/Button.jsx";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.onScroll = this.onScroll.bind(this);
    window.addEventListener('scroll', this.onScroll);
    this.state = { style: { top: "60px",marginTop: "" } };
  }

  onScroll(e){
    if(window.pageYOffset > 20){
      this.setState({style: { top: 0, marginTop: 0, boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }});
    }
    else this.setState({style: { top: "60px", marginTop: "", boxShadow: "none" }})
  }

  render() {
    return (
      //todo remove inline styles
      <div style={{display: "inline-block", height: "50px", width: "100%"}}>
        <div className="search" style={{ top: this.state.style.top, marginTop: this.state.style.marginTop, boxShadow: this.state.style.boxShadow }}>
          <div className="content" style={{display: "flex", justifyContent: "space-between", top: "10px", position: "relative", height: "10px"}}>
            <div>
              <img src="../../image.png" className="shop-logo"/>
            </div>
            <SearchBar />
            <Button className={"search-button"} text={"Найти"}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
