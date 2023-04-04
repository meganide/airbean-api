import mongoose from "mongoose";
const Schema = mongoose.Schema;

const menuSchema = new Schema({
    title: { type : String, required: true},
    desc: { type : String, required: true},
    price: { type : Number, required: true},
})

const Menu = mongoose.model('menuItem', menuSchema)

export default  Menu;