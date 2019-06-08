import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    }
  }

  onChange = (e) => {
    const { value } = e.target;
    this.setState({
      value: e.target.value,
    });
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(value);
    }
  }

  onSubmit = (e) => {
    if (typeof this.props.onSubmit === 'function') {
      this.props.onSubmit(this.state.value);
    }
  }

  onKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.onSubmit(e);
      e.target.blur();
    }
  }

  render() {
    return (
      <div className="bg-white p-4 flex items-center sticky top-0 shadow-b z-50">
        <a
          href="/"
          aria-label="Link to homepage"
          className="flex-none mr-2"
          onClick={this.props.onLogoClick}>
          <svg
            className="fill-current text-blue-500"
            focusable="false"
            width="34"
            height="34"
            viewBox="0 0 21 41"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M1.185 9.225h5.477l1.298-6.39L16.088 0l-1.863 9.225H21l-1.186 5.909H13.04L10.274 28.7c-.169.723-.339 1.81-.339 3.014 0 1.87 1.186 3.014 2.88 3.014 1.355 0 2.71-.3 3.67-.723l-1.3 6.27c-1.299.302-2.766.725-4.064.725-5.137 0-8.75-2.17-8.75-8.14 0-2.411.452-4.763.96-7.234l2.145-10.492H0l1.185-5.909"></path>
          </svg>
        </a>
        <div className="relative flex-1 flex items-center">
          <button
            className="flex-none absolute right-0 w-5 mr-3 text-gray-500"
            aria-label="search"
            type="button"
            onClick={this.onSubmit}>
            <svg
              className="fill-current"
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16">
              <g fill="none" fillRule="evenodd">
                <path d="M16 0H0v16h16z"></path>
                <path fill="currentColor" fillRule="nonzero" d="M12 6.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0zm-.564 4.229l4.418 4.417a.5.5 0 0 1-.708.708l-4.417-4.418a6.5 6.5 0 1 1 .707-.707z"></path>
              </g>
            </svg>
          </button>
          <input
            className="rounded pr-10 pl-3 py-1 w-full bg-gray-200 border border-solid border-gray-200 focus:border-gray-300 focus:bg-white focus:outline-none"
            value={this.state.value}
            onChange={this.onChange}
            onKeyDown={this.onKeyDown}
            placeholder="Find your next experience"
            aria-label="Find your next experience"
            type="text"/>
        </div>
      </div>
    );
  }
}

export default SearchBar;
