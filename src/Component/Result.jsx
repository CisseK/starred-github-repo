
import { fetchRepos } from './FetchRepo';
import React, {Component} from "react";
import { connect } from 'react-redux';
import Row from './Row';
import getLinks from './Liens';
import getDate from './Date';
import abrNumber from './abrNumber';
import optimizeHeadersTitle from './optTitle';
/*var moment = require('moment');*/

const default_url = "https://api.github.com/search/repositories?q=created:>" + getDate() + "&sort=stars&order=desc";

class Result extends Component {

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
              stars={abrNumber(item.stargazers_count)}
              issues={abrNumber(item.open_issues_count)}
              date={(item.created_at, "YYYYMMDD").fromNow()}
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

export default connect(mapStateToProps, mapDispatchToProps)(Result);

