const motelCustomer = {
    customerAttributes: ["John Smith",new Date('12-05-1989'), "Male", "Family room", "room service", "kingsize bed", "188cm tall"],
    paymentMethod: "Credit Card",
    mailingAddress: {
        StAdd: "123 Elm Street",
        City : "Mount Pearl",
        Province: "NL",
        postalCode: "A1A1A1"
    },
    Stay: {
        checkIn:  "2023-01-01",
        checkOut:  "2023-12-31"
    }
}


//to calculate the customers age
const currentDate = new Date();
const birthYear = motelCustomer.customerAttributes[1].getFullYear();
const currentYear = currentDate.getFullYear();
const age = currentYear-birthYear;

//to calculate the length of the stay
const arrivalDate = new Date(motelCustomer.Stay.checkIn);
const departureDate = new Date(motelCustomer.Stay.checkOut);
const lengthStayMS = departureDate - arrivalDate;
const lengthStayDays = Math.ceil(lengthStayMS/(1000*60*60*24))


html = "a man walked into a motel by the name of " + motelCustomer.customerAttributes[0] + 
". He was " + age + " years old. They said they wanted to rent a room for " + lengthStayDays
+ " nights. They were " + motelCustomer.customerAttributes[6] + " so they wanted a " + 
motelCustomer.customerAttributes[5] + ". This seemed strange because they declined to have " + 
motelCustomer.customerAttributes[4] + ". They paid with a " + motelCustomer.paymentMethod + 
". The clerk at the desk asked them why they were staying for so long and the man replied they were currently living at " +
 motelCustomer.mailingAddress.StAdd + " and it was giving them nightmares. "

document.body.innerHTML = html