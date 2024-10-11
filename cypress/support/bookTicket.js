import './commands';
import selectors from '../selectors/selectors.js';

class bookTicket {
    // Set airports (departure and arrival)
    setAirports(airportsInfo) {
        const airSelect = selectors.airportSelectors;

        cy.getByAria(airSelect.cityDeparture)
            .type(airportsInfo.cityDeparture);
        cy.getById(airSelect.airportDeparture)
            .contains(airportsInfo.airportDeparture)
            .click();

        cy.getByAria(airSelect.cityArrival)
            .type(airportsInfo.cityArrival);
        cy.getById(airSelect.airportArrival)
            .contains(airportsInfo.airportArrival)
            .click();
    }

    // Set departure and return dates
    setDate(dateInfo) {
        const dateSelect = selectors.dateSelectors;
        cy.getById(dateSelect.calendarOptions).click();
        this.setDay(dateInfo, dateSelect);
    }

    // Set specific days for departure and arrival
    setDay(dateInfo, dateSelect) {
        cy.getByAria(dateSelect.departureDate)
            .contains(dateInfo.departureDay)
            .click();

        if (dateInfo.arrivalDay) {
            cy.getByAria(dateSelect.arrivalDate)
                .contains(dateInfo.arrivalDay)
                .click();
        }
    }

    // Set the type of passengers and number
    setPassengers(passengerInfo) {
        const passengerSelect = selectors.passengerSelectors;
        cy.getById(passengerSelect.passengerOptions).click();

        this.setTypeOfPassenger(passengerInfo, passengerSelect);
        this.setSearch();
    }

    // Helper method to set passenger types and counts
    setTypeOfPassenger(info, selectInfo) {
        Object.keys(info.passenger).forEach(type => {
            const passengerType = info.passenger[type];
            cy.getByAria(selectInfo.passengerType)
                .contains(passengerType.name)
                .parent()
                .find('.icon-e-add-1')
                .then(($icon) => {
                    for (let i = 0; i < passengerType.number; i++) {
                        cy.wrap($icon).click();
                    }
                });
        });

        // Select Airlines    
        cy.getById(selectInfo.airlinesGroup)
            .select(info.airlines);

        

        // Select Class
        cy.get(selectInfo.class)
            .select(info.class)

    }

    // Perform the search
    setSearch() {
        const buttonSelect = selectors.buttonSelectors;
        cy.getByClass(buttonSelect.searchButton).click();
    }

    // Set filter options
    setFilter(filterInfo) {
        const filterSelect = selectors.filterSelectors;
        cy.getByClass(filterSelect.sortingType)
            .should('be.visible')
            .select(filterInfo.sortingType);
    }

    setCookies(){
        const buttonSelect = selectors.buttonSelectors;
        cy.getByAriaLabel(buttonSelect.cookiesButton).click()
    }


    verify(airportsInfo,dateInfo,passengerInfo,fitlerInfo){
        const airSelect = selectors.airportSelectors;
        const dateSelect = selectors.dateSelectors;
        const passengerSelect = selectors.passengerSelectors;
        const buttonSelect = selectors.buttonSelectors;
        const filterSelect = selectors.filterSelectors
    



        cy.getByClass(buttonSelect.searchButton)
        .should('be.visible');

        cy.getByAria(airSelect.cityDeparture)
          .should('be.visible')

        cy.getByAria(airSelect.cityArrival)
          .should('be.visible')

         cy.getByClass(filterSelect.sortingType)
          .should('have.value',fitlerInfo.sortingType)


    }


////////////////////////




}

export default bookTicket