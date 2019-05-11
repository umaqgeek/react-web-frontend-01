import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NoPage extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <hr />
            <center>
              <br />
              <h2>Ops! Wrong page ..</h2>
              <br /><br />
              <Link to='/'>
                <button type='button' className='btn btn-primary'>BACK</button>
              </Link>
              <br /><br />
            </center>
            <hr />
          </div>
        </div>
      </div>
    );
  }
};

export default NoPage;
