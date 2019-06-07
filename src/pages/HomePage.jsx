import React from 'react';
import { withRouter } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import Guides from '../components/Guides';
import Hero from '../components/Hero';
import Promotions from '../components/Promotions';
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
        <Promotions/>
        <Categories onClick={this.onSubmit} />
        <Guides/>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default withRouter(HomePage);
