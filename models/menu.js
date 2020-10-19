const mongoose = require('mongoose');
const schema = mongoose.Schema;

const MenuSchema = new mongoose.Schema({
    menuname: {
        type: String,
        required: [true, "Menu name field is required"]
    },
    drinksList: {
        type: Array
    }
});

const Menu = mongoose.model("usermenu", MenuSchema);
module.exports = Menu;