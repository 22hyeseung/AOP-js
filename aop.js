const TravelService = rawWebservice => {
  const conferenceAirport = "BOS";
  const maxArrival = new Date /* date */();
  const minDeparture = new Date /* date */();

  return {
    getSuggestedTicket: homeAirport =>
      rawWebService.getCheapestRoundTrip(
        homeAirport,
        conferenceAirport,
        maxArrival,
        minDeparture
      )
  };
};

TravelService.getSuggestedTicket(
  attendee.homeAirport
);
