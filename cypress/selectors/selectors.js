import passengerType from "../support/passenger";

const airportSelectors = {

    cityDeparture: 'react-autowhatever-departure',
    airportDeparture: 'react-autowhatever-departure[role="listbox"]',
    cityArrival: 'react-autowhatever-arrival',
    airportArrival: 'react-autowhatever-arrival[role="listbox"]'

}


const dateSelectors = {
    calendarOptions: 'transportable-input[aria-label ="calendar options"]',
    oneWay: '[name = "isRoundtrip"][value = "0"]',
    twoWay: '[name = "isRoundtrip"][value = "1"]',
    MonthYear: 'react-day-picker-1',
    nextMonth: 'Go to next month',
    departureDate: 'react-day-picker-1',
    arrivalDate: 'react-day-picker-1'
}


const passengerSelectors = {
    passengerOptions: 'transportable-input[aria-label ="passenger and vehicle options"]',
    passengerType: 'passengerSelection',
    airlinesGroup: 'airlinesGroup',
    class: ':nth-child(2) > .form-control'
}

const filterSelectors = {
    sortingType : 'ml-auto > .form-control'
}


const buttonSelectors = {
    searchButton: 'btn-search',
    consentButton: 'Consent',
    cookiesButton: 'Αποδοχή όλων'
}



export default {
    airportSelectors, // Exporting as an object
    dateSelectors,
    passengerSelectors,
    filterSelectors,
    buttonSelectors
};