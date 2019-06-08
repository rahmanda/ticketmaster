import React from 'react';
import SearchBar from '../components/SearchBar';
import SearchItem from '../components/SearchItem';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import { Loads } from 'react-loads';
import api from '../api';

class SearchPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      keyword: this.getKeyword(),
    };
  }

  showDetail = (id) => {
    return () => {
      this.props.history.push(`/detail/${id}`);
    }
  }

  goHome = (e) => {
    e.preventDefault();
    this.props.history.push('/');
  }

  onChange = (keyword) => {
    this.setState({
      keyword: keyword,
    });
  }

  onSubmit = (callback) => {
    return (keyword) => {
      this.props.history.push(`/search?keyword=${keyword}`);
      if (typeof callback === 'function') {
        callback();
      }
    }
  }

  getEvents = () => {
    return api.get(`/discovery/v2/events.json`, { keyword: this.state.keyword });
  }

  getKeyword() {
    const params = new URLSearchParams(this.props.location.search);
    return params.get('keyword');
  }

  render() {
    return (
      <React.Fragment>
        <Loads load={this.getEvents}>
          {({response, error, load, isRejected, isPending, isResolved}) => (

            <React.Fragment>
              <SearchBar
                className="sticky top-0"
                value={this.state.keyword}
                onLogoClick={this.goHome}
                onChange={this.onChange}
                onSubmit={this.onSubmit(load)} />
              { isPending && (
                  <div className="bg-gray-100 px-4 min-h-screen flex justify-center">
                    <Loading/>
                  </div>
              ) }
              { isResolved && (
                <div className="bg-gray-100 py-4 pr-4 pl-4 md:pl-0 md:flex flex-wrap">
                  {
                    response.data._embedded.events.map(event => (
                      <div
                        className="md:flex-half mb-4"
                        key={event.id}
                        onClick={this.showDetail(event.id)}>
                        <SearchItem data={event} />
                      </div>
                    ))
                  }
                </div>
              ) }
              { isRejected && <div>Error</div> }
            </React.Fragment>
          )}
        </Loads>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default SearchPage;
