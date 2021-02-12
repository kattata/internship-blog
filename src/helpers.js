export function formatDateToDisplay(date) {

    const year = date.slice(0, 4);
    const month = date.slice(5, 7);
    const day = date.slice(8, 10);

    return `${day}/${month}/${year}`;
}

// februrary 7, 2021

export function formatDateToCalculate(date) {
    const year = date.slice(0, 4);
    const month = date.slice(5, 7);
    const day = date.slice(8, 10);
    
    const newDate = new Date(year, day, month);
    console.log(newDate);
}

