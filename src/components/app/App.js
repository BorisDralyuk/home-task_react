import React, { Component } from 'react';
import './App.css';
import withLibraryService from '../../hoc/withLibraryService';
import Table from '../table/Table';
import BookModal from '../BookModal/BookModal';
import { connect } from 'react-redux';
import { setLibrary } from '../../redux/library/actions';
import compose from '../../utils/compose';


class App extends Component {

  componentDidMount() {
    this.props.setLibrary(this.props.libraryService.getBooks());
  }

  render() {
    return (
      <main role="main" className="container">
        <div className="App">
          <BookModal/>
          <Table />
        </div>
      </main>
    );
  }
}

const mapDispatchToProps = {
  setLibrary
}

export default compose(
  withLibraryService(),
  connect(null, mapDispatchToProps)
)(App)
