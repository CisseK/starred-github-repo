import React from "react";

import './row.scss';

const Row = (props) => 
  <div className="row">
    <div className="avatar-container">
      <img className="repo-avatar" 
        alt="Repository Avatar" 
        src={props.avatar}
      />
    </div>
    <div className="content-container">
      <h2 className="title" children={props.title}/>
      {
        (props.description) && 
        <p className="text" children={props.description} />
      }
      <div className="bottom-info">
        <div className="info-badge stars">
          Stars: {props.stars}
        </div>
        <div className="info-badge issues">
          Issues: {props.issues}
        </div>
        <div className="submit-info">
          Submitted {props.date} by {props.owner}
        </div>
      </div>
    </div>
  </div>;

export default Row;