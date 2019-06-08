import React from 'react';
import Loading from '../components/Loading';
import { Loads } from 'react-loads';
import api from '../api';

class DetailPage extends React.Component {
  getId() {
    const currentPath = this.props.location.pathname;
    return currentPath.replace('/detail', '');
  }

  getDetail(id) {
    return function getDetailApi() {
      return api.get(`/discovery/v2/events/${id}.json`);
    }
  }

  getImage(images) {
    return images.filter(image => image.ratio ==="16_9" && image.width === 640 )[0].url;
  }

  getVenue(venues) {
    const { name, city, state, country, address } = venues[0];
    const query = state ?
                  `${name} ${city.name} ${state.stateCode}` :
                  `${name} ${city.name} ${country.name}`;
    const completeAddress = state ?
                            `${address.line1} - ${city.name}, ${state.stateCode}` :
                            `${address.line1} - ${city.name}, ${country.name}`;
    return (
      <React.Fragment>
        <a
          className="text-blue-700 focus:text-blue-800"
          href={`https://www.google.com/maps/search/?api=1&query=${query}`}
          target="_blank"
          rel="noopener">
          {name}
        </a>
        <div>{completeAddress}</div>
      </React.Fragment>
    );
  }

  getDate(dates) {
    let dateString = dates.start.localDate;
    if (dates.start.localTime) {
      dateString = `${dates.start.localDate}T${dates.start.localTime}Z`;
    }
    return new Date(dateString).toGMTString().replace(':00 GMT', '');
  }

  getCategory(categories) {
    const { segment } = categories[0];
    return segment.name;
  }

  getPrice(ranges) {
    const { currency, min, max } = ranges[0];
    return `${currency} ${min} - ${max}`;
  }

  render() {
    const id = this.getId();
    return (
      <div className="relative min-h-screen pb-20">
        <div className="absolute top-0 left-0 flex items-center w-full p-4 overlay-header">
          <button
            className="flex-none text-white"
            type="button"
            aria-label="Go to previous page"
            onClick={this.props.history.goBack}>
					  <svg
              className="fill-current"
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 18 18">
              <path d="M15 8.25H5.87l4.19-4.19L9 3 3 9l6 6 1.06-1.06-4.19-4.19H15v-1.5z"></path>
            </svg>
          </button>
        </div>
        <Loads load={this.getDetail(id)}>
          {({ response, error, isRejected, isPending, isResolved }) => (
            <React.Fragment>
              { isPending && (
                  <div className="bg-white px-4 min-h-screen flex justify-center">
                    <Loading/>
                  </div>
              ) }
              { isResolved && (
                <div>
                  <img className="mb-4" alt={response.data.name} src={this.getImage(response.data.images)} />
                  <span className="text-sm uppercase block text-gray-600 px-4 mb-1">
                    {this.getCategory(response.data.classifications)}
                  </span>
                  <div className="mb-4">
                    <h1 className="font-bold px-4 mb-2">{response.data.name}</h1>
                    { response.data.priceRanges && (
                        <div className="font-bold px-4 text-lg text-blue-700">
                          {this.getPrice(response.data.priceRanges)}
                        </div>
                    )}
                  </div>
                  <div className="px-4 mb-2 flex items-start text-sm">
                    <svg
                      className="fill-current text-gray-500 flex-none mr-3 my-1"
                      focusable="false"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 512 512">
                      <path d="M256,0C161.896,0,85.333,76.563,85.333,170.667c0,28.25,7.063,56.26,20.49,81.104L246.667,506.5
                        c1.875,3.396,5.448,5.5,9.333,5.5s7.458-2.104,9.333-5.5l140.896-254.813c13.375-24.76,20.438-52.771,20.438-81.021
                        C426.667,76.563,350.104,0,256,0z M256,256c-47.052,0-85.333-38.281-85.333-85.333c0-47.052,38.281-85.333,85.333-85.333
                        s85.333,38.281,85.333,85.333C341.333,217.719,303.052,256,256,256z"></path>
                    </svg>
                    <div>{this.getVenue(response.data._embedded.venues)}</div>
                  </div>
                  <div className="px-4 mb-2 flex items-center text-sm">
                    <svg
                      className="fill-current text-gray-500 flex-none mr-3"
                      focusable="false"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 511.634 511.634">
                      <path d="M482.513,83.942c-7.225-7.233-15.797-10.85-25.694-10.85h-36.541v-27.41c0-12.56-4.477-23.315-13.422-32.261
                        C397.906,4.475,387.157,0,374.591,0h-18.268c-12.565,0-23.318,4.475-32.264,13.422c-8.949,8.945-13.422,19.701-13.422,32.261v27.41
                        h-109.63v-27.41c0-12.56-4.475-23.315-13.422-32.261C178.64,4.475,167.886,0,155.321,0H137.05
                        c-12.562,0-23.317,4.475-32.264,13.422c-8.945,8.945-13.421,19.701-13.421,32.261v27.41H54.823c-9.9,0-18.464,3.617-25.697,10.85
                        c-7.233,7.232-10.85,15.8-10.85,25.697v365.453c0,9.89,3.617,18.456,10.85,25.693c7.232,7.231,15.796,10.849,25.697,10.849h401.989
                        c9.897,0,18.47-3.617,25.694-10.849c7.234-7.234,10.852-15.804,10.852-25.693V109.639
                        C493.357,99.739,489.743,91.175,482.513,83.942z M347.187,45.686c0-2.667,0.849-4.858,2.56-6.567
                        c1.711-1.711,3.901-2.568,6.57-2.568h18.268c2.67,0,4.853,0.854,6.57,2.568c1.712,1.712,2.567,3.903,2.567,6.567v82.224
                        c0,2.666-0.855,4.853-2.567,6.567c-1.718,1.709-3.9,2.568-6.57,2.568h-18.268c-2.669,0-4.859-0.855-6.57-2.568
                        c-1.711-1.715-2.56-3.901-2.56-6.567V45.686z M127.915,45.686c0-2.667,0.855-4.858,2.568-6.567
                        c1.714-1.711,3.901-2.568,6.567-2.568h18.271c2.667,0,4.858,0.854,6.567,2.568c1.711,1.712,2.57,3.903,2.57,6.567v82.224
                        c0,2.666-0.855,4.856-2.57,6.567c-1.713,1.709-3.9,2.568-6.567,2.568H137.05c-2.666,0-4.856-0.855-6.567-2.568
                        c-1.709-1.715-2.568-3.901-2.568-6.567V45.686z M456.812,475.088H54.823v-292.36h401.989V475.088z"></path>
                    </svg>
                    <div>{this.getDate(response.data.dates)}</div>
                  </div>
                  <div className="fixed max-w-md bottom-0 mx-auto w-full p-4 bg-white">
                    <a
                      className="block text-center bg-blue-600 font-bold rounded w-full text-white px-4 py-2 focus:bg-blue-700"
                      rel="noopener"
                      href={response.data.url}
                      target="_blank">
                      Buy Ticket
                    </a>
                  </div>
                </div>
              ) }
              { isRejected && <div>Error</div> }
            </React.Fragment>
          )}
        </Loads>
      </div>
    );
  }
}

export default DetailPage;
