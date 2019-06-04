import React from 'react';
import guides from '../data/guides';

function Guides(props) {
  return (
    <section className="mb-6">
      <div className="flex px-4 mb-4">
        <h2 className="flex-1 font-bold">Guides</h2>
        <a
          className="flex-none text-blue-600"
          href="https://www.ticketmaster.com/guides">
          See All
        </a>
      </div>
      <div className="mx-4 flex overflow-x-auto">
        {
          guides.map(guide => (
            <a
              href={guide.url}
              key={guide.url}
              className="w-40 mr-4 mb-4 flex-none">
              <img className="w-full rounded mb-3" src={guide.image}/>
              <p className="font-bold text-sm mb-2">{guide.name}</p>
              <p className="text-sm">{guide.description}</p>
            </a>
          ))
        }
      </div>
    </section>
  )
}

export default Guides;
