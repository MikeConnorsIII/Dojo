// The import line will look different than what is in Faker's documentation
// because we are working with an express application
const express = require("express");
const app = express();
const port = 8000;


app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
});



const { faker } = require('@faker-js/faker');
// we can create a function to return a random / fake "Product"



const createUser = () => {
    const newUser = {
        password: faker.internet.password(),
        email: "$" + faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        id: faker.database.mongodbObjectId()
    };
    return newUser;
};
    
const newFakeUser = createUser();


const createCompany = () => {
    const newCompany = {
        id: faker.database.mongodbObjectId(),
    companyName:  faker.company.name(),
    address: {
         streetAddress: faker.address.streetAddress(),
         streetName: faker.address.streetName(),
         city: faker.address.city(),
         state: faker.address.state(),
         zip: faker.address.zipCode(),
         country: faker.address.country()
    }
}
return newCompany
}

const newFakeCompany = createCompany();


const users = [
    { firstName: "Reimu",  lastName: "Hakurei"    },
    { firstName: "Marisa", lastName: "Kirisame"   },
    { firstName: "Sanae",  lastName: "Kochiya"    },
    { firstName: "Sakuya", lastName: "Izayoi"     },
    { firstName: "Momiji", lastName: "Inubashiri" }
];

// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.get("/api/users/new", (req, res) => {
    const newFakeUser = createUser();
    res.json(newFakeUser)
    
});
app.get("/api/company/new", (req, res) => {
    const newFakeCompany = createCompany();
    res.json(newFakeCompany)
    
});
app.get("/api/both/new", (req, res) => {
    const newFakeCompany = createCompany();
    // res.json(newFakeCompany)
    const newFakeUser = createUser();
    res.json({"user": newFakeUser, "company": newFakeCompany})
    
});



// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );