const initiativestatus = "Open";


let status = initiativestatus.toLowerCase();

const states = {
    draft: false,
    submitted: false,
    rejected: false
};

console.log(status in states ? states[status] :(!!approvedDate))