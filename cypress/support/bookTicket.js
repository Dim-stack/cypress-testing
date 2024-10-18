import './commands';
import selectors from '../selectors/selectors.js';

class bookTicket {
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

    setDate(dateInfo) {
        const dateSelect = selectors.dateSelectors;
        cy.getById(dateSelect.calendarOptions).click();
        this.setDay(dateInfo, dateSelect);
    }

    setDay(dateInfo, dateSelect) {
        cy.getByAria(dateSelect.departureDate)
            .contains(dateInfo.departureDay)
            .click();
    
        dateInfo.arrivalDay && cy.getByAria(dateSelect.arrivalDate)
            .contains(dateInfo.arrivalDay)
            .click();
    }


    setPassengers(passengerInfo) {
        const passengerSelect = selectors.passengerSelectors;
        cy.getById(passengerSelect.passengerOptions).click();
        this.setTypeOfPassenger(passengerInfo, passengerSelect);
        this.setSearch();
    }


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

        cy.getById(selectInfo.airlinesGroup)
            .select(info.airlines);
        cy.get(selectInfo.class)
            .select(info.class)
    }

    setSearch() {
        const buttonSelect = selectors.buttonSelectors;

        cy.getByClass(buttonSelect.searchButton).click();
    }

    setFilter(filterInfo) {
        const filterSelect = selectors.filterSelectors;
        const buttonSelect = selectors.buttonSelectors;

        cy.getByClass(filterSelect.sortingType,{ timeout: 10000 })
            .should('be.visible')
            .select(filterInfo.sortingType);
    }

    setCookies(){
        const buttonSelect = selectors.buttonSelectors;

        cy.getByAriaLabel(buttonSelect.cookiesButton).click()
    }


    verify(airportsInfo,dateInfo,passengerInfo,fitlerInfo){
        const airSelect = selectors.airportSelectors;
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

}

export default bookTicket