const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { 
    UserModel, 
    ContactModel, 
    BlogModel, 
    ReviewModel, 
    ActivityModel, 
    ExpenseModel, 
    DestinationModel,
    CartItem
} = require('./models/schema');

const app = express();
app.use(express.json());
app.use(cors());

const connectdb = async () => {
    try {
        await mongoose.connect("mongodb+srv://Prathi:prathi1234@tourism.5vzjazg.mongodb.net/Tour_Plan?retryWrites=true&w=majority&appName=Tourism", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("DB connection successful");
        const port = 4000;
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (err) {
        console.error("DB not connected: ", err);
    }
};

connectdb();

const handleRequest = (req, res, next, model, data) => {
    model.create(data)
        .then((doc) => res.status(201).json({ message: `${model.modelName} added successfully`, data: doc }))
        .catch((error) => res.status(500).json({ message: error.message }));
};

app.post('/adduser', (req, res, next) => {
    const { userid, username, email, password } = req.body;
    handleRequest(req, res, next, UserModel, { userid, username, email, password });
});

app.post('/addcontact', (req, res, next) => {
    const { name, email, message } = req.body;
    handleRequest(req, res, next, ContactModel, { name, email, message });
});

app.post('/addblog', (req, res, next) => {
    const { image, title, description, link } = req.body;
    handleRequest(req, res, next, BlogModel, { image, title, description, link });
});

app.post('/addreview', (req, res, next) => {
    const { name, image_url, review, rating, userprofile } = req.body;
    handleRequest(req, res, next, ReviewModel, { name, image_url, review, rating, userprofile });
});

app.post('/addactivity', (req, res, next) => {
    const { image, title, description } = req.body;
    handleRequest(req, res, next, ActivityModel, { image, title, description });
});

app.post('/addexpense', (req, res, next) => {
    const { userid, expensename, amount, category, date, currency } = req.body;
    handleRequest(req, res, next, ExpenseModel, { userid, expensename, amount, category, date, currency });
});

app.post('/adddestination', (req, res, next) => {
    const { image, City, Ratings, Ideal_duration, best_time_to_visit, city_desc } = req.body;
    handleRequest(req, res, next, DestinationModel, { image, City, Ratings, Ideal_duration, best_time_to_visit, city_desc });
});

app.get('/destinations', async (req, res) => {
    try {
        const destinations = await DestinationModel.find();
        res.status(200).json(destinations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.get('/blogs', async (req, res) => {
    try {
        const blogs = await BlogModel.find();
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.get('/reviews', async (req, res) => {
    try {
        const reviews = await ReviewModel.find();
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.post('/addtocart', async (req, res) => {
    const { destinationId } = req.body;

    try {
        console.log('Received request to add to cart:', destinationId);
        const destination = await DestinationModel.findById(destinationId);
        if (!destination) {
            console.error('Destination not found:', destinationId);
            return res.status(404).json({ message: 'Destination not found' });
        }

        const cartItem = await CartItem.create({
            destinationId,
            image: destination.image,
            City: destination.City,
            Ratings: destination.Ratings,
            Ideal_duration: destination.Ideal_duration,
        });

        res.status(201).json({ message: 'Item added to cart', data: cartItem });
    } catch (error) {
        console.error('Error adding to cart:', error);
        res.status(500).json({ message: error.message });
    }
});

app.get('/cart', async (req, res) => {
    try {
        const cartItems = await CartItem.find().populate('destinationId');
        res.status(200).json(cartItems);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.delete('/removefromcart/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await CartItem.findByIdAndDelete(id);
        res.status(200).json({ message: 'Item removed from cart' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});




module.exports = app;
