import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { deleteData } from '../../models/Query';

class Deletedrug extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: '',
    };

    this.onDelete = this.onDelete.bind(this);
  };

  componentDidMount() {
    this.onDelete();
  };

  onDelete() {
    this.setState({
      ...this.state,
      loading: 'Loading ..',
    });
    var self = this;
    const id = this.props.match.params[0];
    deleteData('/drug/'+id, function(res) {
      self.setState({
        ...self.state,
        loading: '',
      });
      self.props.history.push('/');
    }, function(err) {
      self.setState({
        ...self.state,
        loading: 'Server Error!',
      });
      console.log(err);
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <br />
            <center>
              <h2>Delete Drug</h2>
            </center>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Link to='/'>
              <button type='button' className='btn btn-dark'>BACK</button>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 offset-md-3">

            <br />{this.state.loading}<br />

          </div>
        </div>
      </div>
    );
  }
};

export default Deletedrug;
