import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { postData } from '../../models/Query';

class Adddrug extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        name: '',
        category: '',
        status: -1,
      },
    };

    this.onHandler = this.onHandler.bind(this);
    this.onSave = this.onSave.bind(this);
  };

  onHandler(obj) {
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        [obj.target.name]: obj.target.value,
      },
    });
  };

  onSave() {
    var self = this;
    postData('/drug', this.state.data, function(res) {
      self.props.history.push('/');
    }, function(err) {
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
              <h2>Add Drug</h2>
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

            <br />

            <input
              type='text'
              name='name'
              value={this.state.data.name}
              className='form-control'
              placeholder='Type drug name here'
              onChange={this.onHandler}
            />
            <br />

            <select
              name='category'
              className='form-control'
              onChange={this.onHandler}
              value={this.state.data.category}
            >
              <option value=''>- Choose category here -</option>
              <option value='vitamin'>VITAMIN</option>
              <option value='medicine'>MEDICINE</option>
              <option value='others'>OTHERS</option>
            </select>
            <br />

            <select
              name='status'
              className='form-control'
              onChange={this.onHandler}
              value={this.state.data.status}
            >
              <option value={-1}>- Choose status here -</option>
              <option value={0}>NOT AVAILABLE</option>
              <option value={1}>AVAILABLE</option>
            </select>
            <br />

            <button type='button' className='btn btn-success' onClick={this.onSave}>SAVE</button>

          </div>
        </div>
      </div>
    );
  }
};

export default Adddrug;
