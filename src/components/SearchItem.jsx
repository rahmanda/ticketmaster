import React from 'react';

function getDate(dates) {
  let dateString = dates.start.localDate;
  if (dates.start.localTime) {
    dateString = `${dates.start.localDate}T${dates.start.localTime}Z`;
  }
  return new Date(dateString).toGMTString().replace(':00 GMT', '');
}

function SearchItem({ data }) {
  return (
    <div className="md:ml-4 rounded bg-white shadow overflow-hidden">
      <img
        className="w-full"
        src={data.images.filter(image => image.ratio ==="16_9" && image.width === 640 )[0].url}
        alt={data.name}
      />
      <div className="p-4 leading-tight">
        <p className="font-bold mb-2 md:h-10 overflow-hidden">{data.name}</p>
        <p className="text-sm mb-2">{data._embedded.venues[0].name}</p>
        <p className="text-sm text-gray-600">{getDate(data.dates)}</p>
      </div>
    </div>
  );
}

export default SearchItem;
