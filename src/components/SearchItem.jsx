import React from 'react';

function SearchItem({ data }) {
  return (
    <div className="md:ml-4 rounded bg-white shadow overflow-hidden">
      <img
        className="w-full"
        src={data.images.filter(image => image.ratio ==="16_9" && image.width === 640 )[0].url}
      />
      <div className="p-4 leading-tight">
        <p className="font-bold mb-2 md:h-10 overflow-hidden">{data.name}</p>
        <p className="text-sm mb-2">{data._embedded.venues[0].name}</p>
        <p className="text-sm text-gray-600">June 10 - {data.dates.start.localTime}</p>
      </div>
    </div>
  );
}

export default SearchItem;
