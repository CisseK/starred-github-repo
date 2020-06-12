import { connect } from 'react-redux';
import { fetchRepos } from '../../../actions/actions';
import React, {Component} from "react";
import Row from '../row/index';
import './list.scss';
import abbreviateNumber from './abbreviateNumber';
import getLinks from './getLinks';
import getDate from './getDate';
import optimizeHeadersTitle from './optimizeHeadersTitle';
var moment = require('moment');

const default_url = "https://api.github.com/search/repositories?q=created:>" + getDate() + "&sort=stars&order=desc";

class List extends Component {

  componentDidMount(url = default_url) {
    this.props.fetchRepos(url);
  }

  render() {
    return(
      <div className="list">
        {
          (this.props.repos.repos.repos !== undefined) &&
          this.props.repos.repos.repos.map((item, i) => 
            <Row 
              key={i}
              avatar={item.owner.avatar_url}
              title={item.name} 
              description={item.description}
              stars={abbreviateNumber(item.stargazers_count)}
              issues={abbreviateNumber(item.open_issues_count)}
              date={moment(item.created_at, "YYYYMMDD").fromNow()}
              owner={item.owner.login}
            />
          )
        }
        <div className="pagination">
          {
            (this.props.repos.repos.headers !== undefined) && 
            getLinks(this.props.repos.repos.headers.get('link')).map((item, i) => 
              <div onClick={e => this.props.fetchRepos(item.url)} key={i}>
                {optimizeHeadersTitle(item.title)}
              </div>
            )
          }
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, url = default_url) => ({
  fetchRepos: (url) => {
    dispatch(fetchRepos(url));
  }
})

const mapStateToProps = (state) => ({
  repos: state.repos,
})

export default connect(mapStateToProps, mapDispatchToProps)(List);