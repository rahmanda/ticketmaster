import React from 'react';
import categories from '../data/categories';

class Categories extends React.Component {
  backgroundImage(url) {
    return {
      backgroundImage: `url("${url}")`,
    };
  }

  render() {
    return (
      <section className="mb-6">
        <div className="flex px-4 mb-4">
          <h2 className="flex-1 font-bold">Categories</h2>
        </div>
        <div className="pr-4 pl-4 md:pl-0 md:flex flex-wrap">
          {
            categories.map(category => (
              <div
                className="md:flex-half"
                key={category.name}
                onClick={(e) => this.props.onClick(category.name)}>
                <div className="relative rounded overflow-hidden mb-4 md:ml-4">
                  <div className="bg-cover bg-center h-24" style={this.backgroundImage(category.image)}>
                  </div>
                  <div className="bg-black opacity-25 absolute top-0 left-0 w-full h-full">
                  </div>
                  <p className="absolute bottom-0 right-0 text-white mb-4 mr-4 font-bold text-xl">{category.name}</p>
                </div>
              </div>
            ))
          }
        </div>
      </section>
    );
  }
}

export default Categories;
