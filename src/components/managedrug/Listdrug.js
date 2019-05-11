import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { getData } from '../../models/Query';

class Listdrug extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: '',
      drugs: [],
      drugsView: null,
      searchText: '',
    };

    this.onGetDrugs = this.onGetDrugs.bind(this);
    this.onSearch = this.onSearch.bind(this);
  };

  componentDidMount() {
    this.onGetDrugs();
  };

  onGetDrugs() {
    this.setState({
      ...this.state,
      loading: 'Loading ..',
    });
    var self = this;
    getData('/drugs', {}, function(res) {
      self.setState({
        ...self.state,
        loading: '',
        drugs: res,
        drugsView: res.length > 0 ? res.map(function(drug) {
          return (
            <tr key={drug.id}>
              <td>{drug.id}</td>
              <td>{drug.name.toUpperCase()}</td>
              <td>{drug.category.toUpperCase()}</td>
              <td>{drug.status === 1 ? 'AVAILABLE' : 'NOT AVAILABLE'}</td>
              <td>
                <Link to={'/view-drug/'+drug.id}>
                  <button type="button" className="btn btn-success">VIEW</button>
                </Link>
                &nbsp;
                <Link to={'/edit-drug/'+drug.id}>
                  <button type="button" className="btn btn-primary">EDIT</button>
                </Link>
                &nbsp;
                <Link to={'/delete-drug/'+drug.id}>
                  <button type="button" className="btn btn-danger">DELETE</button>
                </Link>
              </td>
            </tr>
          )
        }) : (<tr><td colSpan="5"><center>.. No Data ..</center></td></tr>),
      });
    }, function(err) {
      self.setState({
        ...self.state,
        loading: 'Server Error!',
      });
      console.log(err);
    });
  };

  onSearch(obj) {
    var self = this;
    this.setState({
      ...this.state,
      searchText: obj.target.value,
    }, function() {
      const searchText = self.state.searchText.toLowerCase();
      const drugs = self.state.drugs.filter(function(drug) {
        return drug.id === searchText
                || drug.name.toLowerCase().includes(searchText)
                || drug.category.toLowerCase().includes(searchText)
                || (drug.status === 1 && 'available'.includes(searchText))
                || (drug.status === 0 && 'not'.includes(searchText))
      });
      self.setState({
        ...self.state,
        drugsView: drugs.length > 0 ? drugs.map(function(drug) {
          return (
            <tr key={drug.id}>
              <td>{drug.id}</td>
              <td>{drug.name.toUpperCase()}</td>
              <td>{drug.category.toUpperCase()}</td>
              <td>{drug.status === 1 ? 'AVAILABLE' : 'NOT AVAILABLE'}</td>
              <td>
                <Link to={'/view-drug/'+drug.id}>
                  <button type="button" className="btn btn-success">VIEW</button>
                </Link>
                &nbsp;
                <Link to={'/edit-drug/'+drug.id}>
                  <button type="button" className="btn btn-primary">EDIT</button>
                </Link>
                &nbsp;
                <Link to={'/delete-drug/'+drug.id}>
                  <button type="button" className="btn btn-danger">DELETE</button>
                </Link>
              </td>
            </tr>
          )
        }) : (<tr><td colSpan="5"><center>.. No Data ..</center></td></tr>),
      });
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <br />
            <center>
              <h2>Manage Drug</h2>
            </center>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <Link to="/add-drug">
              <button type="button" className="btn btn-primary">ADD DRUG</button>
            </Link>
            &nbsp;&nbsp;{this.state.loading}
          </div>
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Search here"
              value={this.state.searchText}
              onChange={this.onSearch}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <br />
            <table className="table table-bordered">
              <thead>
                <tr>
                  <td><strong>ID</strong></td>
                  <td><strong>Name</strong></td>
                  <td><strong>Category</strong></td>
                  <td><strong>Status</strong></td>
                  <td><strong>Action</strong></td>
                </tr>
              </thead>
              <tbody>
                {this.state.drugsView}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };
};

export default Listdrug;
