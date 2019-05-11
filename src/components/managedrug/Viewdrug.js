import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { getData } from '../../models/Query';

class Viewdrug extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: '',
      data: {
        id: 0,
        name: '',
        category: '',
        status: -1,
      },
    };

    this.onViewData = this.onViewData.bind(this);
  };

  componentDidMount() {
    this.onViewData();
  };

  onViewData() {
    this.setState({
      ...this.state,
      loading: 'Loading ..',
    });
    var self = this;
    const id = this.props.match.params[0];
    getData('/drug/'+id, {}, function(res) {
      self.setState({
        ...self.state,
        loading: '',
        data: res[0],
      });
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
              <h2>View Drug</h2>
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

            <table className='table table-bordered'>
              <tr>
                <td>Name</td>
                <td>:</td>
                <td><strong>{this.state.data.name.toUpperCase()}</strong></td>
              </tr>
              <tr>
                <td>Category</td>
                <td>:</td>
                <td><strong>{this.state.data.category.toUpperCase()}</strong></td>
              </tr>
              <tr>
                <td>Status</td>
                <td>:</td>
                <td><strong>{this.state.data.status === 1 ? 'AVAILABLE' : 'NOT AVAILABLE'}</strong></td>
              </tr>
            </table>

          </div>
        </div>
      </div>
    );
  };
};

export default Viewdrug;
