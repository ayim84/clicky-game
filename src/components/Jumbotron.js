import React from "react";

const Jumbotron = (props) =>
{
    return (
        <div className="jumbotron jumbotron-fluid text-center">
            <div className="container-fluid">
                <div className="row">
                    <div className="col"><h3 className="font-weight-bold">{props.status}</h3></div>
                    <div className="col"><h1 className="display-4 font-weight-bold">{props.title}</h1><h5>{props.description}</h5></div>
                    <div className="col font-weight-bold"><h3>Score: {props.score}</h3><h3>Top Score: {props.topScore}</h3></div>
                </div> 
            </div>
        </div>
    );
}

export default Jumbotron;