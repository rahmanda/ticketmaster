import React from 'react';
import { withRouter } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import Guides from '../components/Guides';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

class HomePage extends React.Component {
  onSubmit = (keyword) => {
    const { history } = this.props;
    history.push(`/search?keyword=${keyword}`);
  }

  render() {
    return (
      <React.Fragment>
        <Hero onSubmit={this.onSubmit} />
        <section className="flex overflow-y-auto mx-4 mb-6 pt-2 relative z-1">
          <div className="rounded border border-solid border-blue-600 text-blue-600 mr-4 px-4 py-1 font-bold text-sm flex-none">US Open Tickets</div>
          <div className="rounded border border-solid border-blue-600 text-blue-600 mr-4 px-4 py-1 font-bold text-sm flex-none">The Rolling Stones</div>
          <div className="rounded border border-solid border-blue-600 text-blue-600 mr-4 px-4 py-1 font-bold text-sm flex-none">2019 NFL Tickets</div>
          <div className="rounded border border-solid border-blue-600 text-blue-600 mr-4 px-4 py-1 font-bold text-sm flex-none">Monster Jam</div>
          <div className="rounded border border-solid border-blue-600 text-blue-600 mr-4 px-4 py-1 font-bold text-sm flex-none">WWE</div>
        </section>
        <Categories/>
        <Guides/>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default withRouter(HomePage);
