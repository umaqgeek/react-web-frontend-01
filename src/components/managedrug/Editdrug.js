import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { getData, putData } from '../../models/Query';

class Editdrug extends Component {
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
    this.onHandler = this.onHandler.bind(this);
    this.onSave = this.onSave.bind(this);
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
    this.setState({
      ...this.state,
      loading: 'Loading ..',
    });
    var self = this;
    const id = this.props.match.params[0];
    putData('/drug/'+id, this.state.data, function(res) {
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
              <h2>Edit Drug</h2>
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

            <button type='button' className='btn btn-success' onClick={this.onSave}>UPDATE</button>
            &nbsp;&nbsp;{this.state.loading}

          </div>
        </div>
      </div>
    );
  }
};

export default Editdrug;
