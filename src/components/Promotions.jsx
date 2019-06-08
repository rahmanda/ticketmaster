import React from 'react';
import promos from '../data/promos';

function Promotions(props) {
  return (
    <section className="flex overflow-y-auto mx-4 mb-6 pt-2 relative z-1">
      {
        promos.map(guide => (
          <a
            href={guide.url}
            key={guide.url}
            target="_blank"
            rel="noopener"
            className="rounded border border-solid border-blue-700 text-blue-700 mr-4 px-4 py-1 font-bold text-sm flex-none block">
            {guide.name}
          </a>
        ))
      }
    </section>
  )
}

export default Promotions;
