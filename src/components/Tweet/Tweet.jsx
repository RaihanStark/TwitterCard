import React from "react";
import WebsiteCard from "./WebsiteCard/WebsiteCard";
import "./Tweet.scss";

function Tweet(props) {
  return (
    <div className="socialcard mb-3">
      <div className="profile mr-2">
        <img src="https://placeimg.com/64/64/any" alt="" srcset="" />
      </div>
      <div className="content">
        <div className="header">
          <div className="title">
            <span className="font-weight-bold text-dark ">{props.title}</span>
            <span className="username ml-1">@{props.username} · </span>
            <span className="date">5mnt</span>
          </div>

          <div className="action">
            <svg
              viewBox="0 0 24 24"
              class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
            >
              <g>
                <path d="M19.39 14.882c-1.58 0-2.862-1.283-2.862-2.86s1.283-2.862 2.86-2.862 2.862 1.283 2.862 2.86-1.284 2.862-2.86 2.862zm0-4.223c-.75 0-1.362.61-1.362 1.36s.61 1.36 1.36 1.36 1.362-.61 1.362-1.36-.61-1.36-1.36-1.36zM12 14.882c-1.578 0-2.86-1.283-2.86-2.86S10.42 9.158 12 9.158s2.86 1.282 2.86 2.86S13.578 14.88 12 14.88zm0-4.223c-.75 0-1.36.61-1.36 1.36s.61 1.362 1.36 1.362 1.36-.61 1.36-1.36-.61-1.363-1.36-1.363zm-7.39 4.223c-1.577 0-2.86-1.283-2.86-2.86S3.034 9.16 4.61 9.16s2.862 1.283 2.862 2.86-1.283 2.862-2.86 2.862zm0-4.223c-.75 0-1.36.61-1.36 1.36s.61 1.36 1.36 1.36 1.362-.61 1.362-1.36-.61-1.36-1.36-1.36z"></path>
              </g>
            </svg>
          </div>
        </div>
        <div className="tweet">
          {props.tweet}
          <WebsiteCard title={props.cardTitle} desc={props.cardDesc} />
        </div>
      </div>
    </div>
  );
}

export default Tweet;
