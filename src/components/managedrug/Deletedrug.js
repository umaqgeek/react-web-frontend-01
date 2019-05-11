import React, { Component } from 'react';

import { deleteData } from '../../models/Query';

class Deletedrug extends Component {
  constructor(props) {
    super(props);

    this.onDelete = this.onDelete.bind(this);
  };

  componentDidMount() {
    this.onDelete();
  };

  onDelete() {
    var self = this;
    const id = this.props.match.params[0];
    deleteData('/drug/'+id, function(res) {
      console.log(res);
      self.props.history.push('/');
    }, function(err) {
      console.log(err);
    });
  };

  render() {
    return (
      <div>a</div>
    );
  }
};

export default Deletedrug;
