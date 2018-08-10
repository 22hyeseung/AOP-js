const TravelService = rawWebservice => {
  const conferenceAirport = "BOS";
  const maxArrival = new Date /* date */();
  const minDeparture = new Date /* date */();

  const cache = [];

  return {
    getSuggestedTicket: homeAirport => {
      let ticket;

      if (cache[homeAirport])
        return cache[homeAirport];

      ticket = rawWebService.getCheapestRoundTrip(
        homeAirport,
        conferenceAirport,
        maxArrival,
        minDeparture
      );

      cache[homeAirport] = ticket;

      return ticket;
    }
  };
};

TravelService.getSuggestedTicket(
  attendee.homeAirport
);
