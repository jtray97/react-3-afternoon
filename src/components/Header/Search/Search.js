import React, { Component } from 'react';

import './Search.css';

import SearchIcon from 'react-icons/lib/md/search';

//////////////////////////////////////////////////////// THIS COMPONENT IS BEING RENDERED IN THE *HEADER* COMPONENT

export default class Search extends Component {
  constructor(){
    super()
    this.state = {
      input:''
    }
  }
  handleSearch(val){
    this.setState({input:val})
    
  }
  handleClick(){
    this.props.searchFn(this.state.input)
    this.setState({input:''})

  }
  render() {
    return (
      <section className="Search__parent">

        <div className="Search__content">
          <input value={this.state.input} onChange={(e)=>{this.handleSearch(e.target.value)}} placeholder="Search Your Feed" />

          <SearchIcon onClick = {()=>{this.handleClick()}}  id="Search__icon" />
        </div>
        
      </section>
    )
  }
}