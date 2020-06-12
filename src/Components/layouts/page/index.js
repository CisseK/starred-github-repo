import React, { Component } from 'react';
import List from '../list/index';
import './page.scss';

class Page extends Component {
  render() {
    return (
      <div className="page">
        <h1 className="page-title">GitHub Most Starred Repos</h1>
        <List />
      </div>
    )
  }
}

export default Page;