const mongoose = require('mongoose');

// Define Schemas
const UserSchema = new mongoose.Schema({
    userid: String,
    username: String,
    email: String,
    password: String
});

const ContactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});

const BlogSchema = new mongoose.Schema({
    image: String,
    title: String,
    description: String,
    link: String
});

const ReviewSchema = new mongoose.Schema({
    name: String,
    image_url: String,
    review: String,

});

const ActivitySchema = new mongoose.Schema({
    image: String,
    title: String,
    description: String
});

const ExpenseSchema = new mongoose.Schema({
    expensename: String,
    amount: String,
    category: String,
    Date: String,
    currency: String
});

const DestinationSchema = new mongoose.Schema({
    image: String,
    title: String,
    description: String,
    link: String
});

// Define Models
const UserModel = mongoose.model('User', UserSchema);
const ContactModel = mongoose.model('Contact', ContactSchema);
const BlogModel = mongoose.model('Blog', BlogSchema);
const ReviewModel = mongoose.model('Review', ReviewSchema);
const ActivityModel = mongoose.model('Activity', ActivitySchema);
const ExpenseModel = mongoose.model('Expense', ExpenseSchema);
const DestinationModel = mongoose.model('Destination', DestinationSchema);

// Export Models
module.exports = { 
    UserModel, 
    ContactModel, 
    BlogModel, 
    ReviewModel, 
    ActivityModel, 
    ExpenseModel, 
    DestinationModel 
};
