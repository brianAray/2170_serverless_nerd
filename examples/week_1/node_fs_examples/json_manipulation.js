const fs = require('fs');

// reading data from a json file
const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));

// console.log(data);

// update data from a json file

let newItem = {
    name: "Banana",
    price: 4.00,
    purchased: true
};

data.grocery_list.push(newItem);

fs.writeFileSync('data.json', JSON.stringify(data), 'utf8', (err) => {
    if(err){
        console.error(err);
        return;
    }
    console.log("data updated");
})