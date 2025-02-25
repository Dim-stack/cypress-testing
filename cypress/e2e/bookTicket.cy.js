import BookTicket from '../support/bookTicket.js'

describe('ticket reservation', () => {

  const bookTicket = new BookTicket()

  const airportsInfo = {
    cityDeparture: 'Αθήνα',
    airportDeparture: 'Αθήνα - Ελευθέριος Βενιζέλος',
    cityArrival: 'Θεσσαλονική',
    airportArrival: 'Θεσσαλονίκη - Μακεδονία'
  }

  const dateInfo = {
    departureDay: '19',
    arrivalDay: '22',
  }

  const passengerInfo = {
    passenger:{
      adults: {
        name: 'Ενήλικες',
        number: '1'
      },
      children: {
        name: 'Παιδιά',
        number: '0'
      }
    },
    airlines:'Όλες',
    class:'Οικονομική'
  }

  const fitlerInfo = {
    sortingType: 'price'
  }


  beforeEach(() => {
    cy.visit('https://www.airtickets.gr/')
    bookTicket.setCookies()

  });

  it('book ticket for flight', () => {
    
    bookTicket.setAirports(airportsInfo)
    bookTicket.setDate(dateInfo)
    bookTicket.setPassengers(passengerInfo)
    bookTicket.setFilter(fitlerInfo)
    bookTicket.verify(airportsInfo,dateInfo,passengerInfo,fitlerInfo)

  })


})