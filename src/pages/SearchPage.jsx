import React from 'react';
import SearchBar from '../components/SearchBar';
import SearchItem from '../components/SearchItem';
import Footer from '../components/Footer';
import events from '../data/events';

class HomePage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SearchBar className="sticky top-0" />
        <div className="bg-gray-100 py-4 pr-4 pl-4 md:pl-0 md:flex flex-wrap">
          {
            events._embedded.events.map(event => (
              <div className="md:flex-half mb-4" key={event.id}>
                <SearchItem data={event} />
              </div>
            ))
          }
        </div>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default HomePage;
