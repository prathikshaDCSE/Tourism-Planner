const mongoose = require('mongoose');

// Define Schemas
const UserSchema = new mongoose.Schema({
    userid: String,
    username: String,
    email: String,
    password: String
});

const ContactSchema = new mongoose.Schema({
    userid: String,
    name: String,
    email: String,
    message: String
});

const BlogSchema = new mongoose.Schema({
    userid: String,
    image: String,
    title: String,
    description: String,
    link: String
});

const ReviewSchema = new mongoose.Schema({
    userid: String,
    name: String,
    image_url: String,
    review: String,
});

const ActivitySchema = new mongoose.Schema({
    userid: String,
    image: String,
    title: String,
    description: String
});

const ExpenseSchema = new mongoose.Schema({
    userid: String,
    expensename: String,
    amount: String,
    category: String,
    Date: String,
    currency: String
});

const DestinationSchema = new mongoose.Schema({
    image: String,
    City: String,
    Ratings: Number,
    Ideal_duration: String,
    best_time_to_visit: String,
    City_desc: String,
});

const CartItemSchema = new mongoose.Schema({
    destinationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Destination' },
    quantity: { type: Number, default: 1 },
    image: String,
    City: String,
    Ratings: Number,
    Ideal_duration: String,
});




// Define Models
const UserModel = mongoose.model('User', UserSchema);
const ContactModel = mongoose.model('Contact', ContactSchema);
const BlogModel = mongoose.model('Blog', BlogSchema);
const ReviewModel = mongoose.model('Review', ReviewSchema);
const ActivityModel = mongoose.model('Activity', ActivitySchema);
const ExpenseModel = mongoose.model('Expense', ExpenseSchema);
const DestinationModel = mongoose.model('Destination', DestinationSchema);
const CartItem = mongoose.model('CartItem', CartItemSchema);
// Export Models
module.exports = { 
    UserModel, 
    ContactModel, 
    BlogModel, 
    ReviewModel, 
    ActivityModel, 
    ExpenseModel, 
    DestinationModel ,
    CartItem
};
