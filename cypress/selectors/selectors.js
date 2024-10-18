import passengerType from "../support/bookTicket";

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
    monthDeparture: 'react-day-picker-1',
    monthArrival: 'react-day-picker-2',
    nextMonth: 'Go to next month',
    departureDate: 'react-day-picker-1',
    arrivalDate: 'react-day-picker-2'
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
    consentButton: 'fc-choice-dialog',
    cookiesButton: 'Αποδοχή όλων',
    accommondationButton: 'acommondation_switch',
}


export default {
    airportSelectors,
    dateSelectors,
    passengerSelectors,
    filterSelectors,
    buttonSelectors
};