// if(process.env.NODE_ENV !="production"){
//     require('dotenv').config();
// }



// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const path = require('path');
// // const Listing = require(path.join(__dirname, '../models/listing.js'));
// const Listing = require("./models/listing.js");
// const methodOverride = require("method-override");
// const ejsMate = require("ejs-mate");
// const wrapAsync = require("./utils/wrapAsync.js");
// const ExpressError = require("./utils/ExpressError.js");
// const session = require("express-session");
// const MongoStore = require('connect-mongo');
// const flash = require("connect-flash");
// const passport = require("passport");
// const LocalStrategy = require("passport-local");
// const User = require("./models/user.js");



// app.use(express.json()); // Add this line
// app.use(express.urlencoded({ extended: true }));

// const listingRouter = require("./routes/listing.js");
// const reviewRouter =  require("./routes/review.js");
// const userRouter = require("./routes/user.js");

// // const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
// const dbUrl = process.env.ATLASDB_URL;


// const {listingSchema , reviewSchema} = require("./schema.js");
// const Review = require("./models/review.js");


// main()
// .then(()=>{
//     console.log("connected to DB");
// })
// .catch((err)=>{
//     console.log(err);
// });
// async function main(){
//     await mongoose.connect(dbUrl);
// }

// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));
// app.use(express.urlencoded({extended: true})); // taaki sara data parse ho paye.
// app.use(methodOverride("_method"));
// app.engine('ejs',ejsMate);
// app.use(express.static(path.join(__dirname,"/public")));



// const store = MongoStore.create({
//     mongoUrl: dbUrl,
//     crypto:{
//         secret:"mysupersceretcode"
//     },
//     touchAfter:24 * 3600,
// });


// store.on("error",()=>{
//     console.log("ERROR IN MONGO SESSION STORE",err);
// });


// const sessionOptions= {
//     store,
//     secret:"mysupersecretcode",
//     resave:false,
//     saveUninitialized: true,
//     cookie:{
//         expires: Date.now() + 7*24*60*1000,
//         maxAge:7*24*60*1000,
//         httpOnly: true,
//     },
// };


// // app.get("/", (req,res)=>{
// //     res.send("hi, i am root");
// // });



// app.use(session(sessionOptions));
// app.use(flash());


// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new LocalStrategy(User.authenticate()));

// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());



// app.use((req,res, next)=>{
//     res.locals.success = req.flash("success");
//     res.locals.error = req.flash("error");
//     res.locals.currUser = req.user;
//     next();
// });


// // app.get("/demouser",async(req,res)=>{
// //     let fakeUser = new User({
// //         email: "student@gmail.com",
// //         username:"delta-student"
// //     });

// //     let registeredUser = await User.register(fakeUser, "helloworld");
// //     res.send(registeredUser);
// // })





// app.use("/listings",listingRouter);
// app.use("/listings/:id/reviews",reviewRouter);
// app.use("/", userRouter);





// // app.get("/testListing",async (req,res)=>{
// //     let samplelisting = new Listing({
// //         title: "My Home",
// //         description:"by the beach",
// //         price: 1200,
// //         location: "calngute, goa",
// //         country: "india",
// //     });
// //     await samplelisting.save();
// //     console.log("sample was saved");
// //     res.send("successful testing");

// // });

// app.all(/(.*)/,(req,res,next)=>{
//     next(new ExpressError(404,"page not found!!"));
// });

// app.use((err, req, res, next)=>{
//     let {statusCode=500, message="something went wrong!"} = err;
//     res.status(statusCode).render("error.ejs" , {message});
//     // res.status(statusCode).send(message);
// });










// app.listen(8080, () =>{
//     console.log("server is running on the port");
// }); 






































// if(process.env.NODE_ENV !="production"){
//     require('dotenv').config();
// }

// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const path = require('path');
// const Listing = require("./models/listing.js");
// const methodOverride = require("method-override");
// const ejsMate = require("ejs-mate");
// const wrapAsync = require("./utils/wrapAsync.js");
// const ExpressError = require("./utils/ExpressError.js");
// const session = require("express-session");
// const MongoStore = require('connect-mongo');
// const flash = require("connect-flash");
// const passport = require("passport");
// const LocalStrategy = require("passport-local");
// const User = require("./models/user.js");

// // Middleware setup
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// const listingRouter = require("./routes/listing.js");
// const reviewRouter = require("./routes/review.js");
// const userRouter = require("./routes/user.js");

// const dbUrl = process.env.ATLASDB_URL;

// // Database connection
// main()
// .then(() => {
//     console.log("connected to DB");
// })
// .catch((err) => {
//     console.log(err);
// });

// async function main(){
//     await mongoose.connect(dbUrl);
// }

// // View engine setup
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));
// app.use(express.urlencoded({extended: true}));
// app.use(methodOverride("_method"));
// app.engine('ejs', ejsMate);
// app.use(express.static(path.join(__dirname,"/public")));

// // Session store setup
// const store = MongoStore.create({
//     mongoUrl: dbUrl,
//     crypto: {
//         secret: process.env.SESSION_SECRET || "mysupersceretcode"
//     },
//     touchAfter: 24 * 3600,
// });

// store.on("error", (err) => {
//     console.log("ERROR IN MONGO SESSION STORE", err);
// });

// // Session configuration
// const sessionOptions = {
//     store,
//     secret: process.env.SESSION_SECRET || "mysupersecretcode",
//     resave: false,
//     saveUninitialized: false, // Changed to false for security
//     cookie: {
//         expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
//         maxAge: 7 * 24 * 60 * 60 * 1000,
//         httpOnly: true,
//         secure: process.env.NODE_ENV === "production" // Secure in production
//     },
// };

// // Session middleware
// app.use(session(sessionOptions));
// app.use(flash());

// // Passport initialization
// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// // CRITICAL: This middleware must come AFTER passport but BEFORE routes
// app.use((req, res, next) => {
//     console.log("Session ID:", req.sessionID);
//     console.log("Authenticated:", req.isAuthenticated());
//     console.log("User:", req.user ? req.user.username : "No user");

//     res.locals.success = req.flash("success");
//     res.locals.error = req.flash("error");
//     res.locals.currUser = req.user; // This makes currUser available in templates
//     next();
// });

// // Routes
// app.use("/listings", listingRouter);
// app.use("/listings/:id/reviews", reviewRouter);
// app.use("/", userRouter);

// // Error handling
// app.all(/(.*)/, (req, res, next) => {
//     next(new ExpressError(404, "page not found!!"));
// });

// app.use((err, req, res, next) => {
//     let {statusCode = 500, message = "something went wrong!"} = err;
//     res.status(statusCode).render("error.ejs", {message});
// });

// app.listen(8080, () => {
//     console.log("server is running on port 8080");
// });

















// if (process.env.NODE_ENV != "production") {
//     require('dotenv').config();
// }

// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const path = require('path');
// const Listing = require("./models/listing.js");
// const methodOverride = require("method-override");
// const ejsMate = require("ejs-mate");
// const wrapAsync = require("./utils/wrapAsync.js");
// const ExpressError = require("./utils/ExpressError.js");
// const session = require("express-session");
// const MongoStore = require('connect-mongo');
// const flash = require("connect-flash");
// const passport = require("passport");
// const LocalStrategy = require("passport-local");
// const User = require("./models/user.js");

// // Middleware setup
// app.set('trust proxy', 1);
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// const listingRouter = require("./routes/listing.js");
// const reviewRouter = require("./routes/review.js");
// const userRouter = require("./routes/user.js");

// // FIX: Add fallback to local MongoDB if Atlas fails
// const dbUrl = process.env.ATLASDB_URL || "mongodb://127.0.0.1:27017/wanderlust";

// // Database connection with proper error handling
// async function main() {
//     try {
//         await mongoose.connect(dbUrl, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//             serverSelectionTimeoutMS: 10000,
//             socketTimeoutMS: 45000,
//         });
//         console.log("Connected to MongoDB successfully");
//     } catch (err) {
//         console.log("MongoDB connection error:", err.message);

//         // Fallback to local MongoDB if Atlas fails
//         try {
//             const localUrl = "mongodb://127.0.0.1:27017/wanderlust";
//             await mongoose.connect(localUrl);
//             console.log("Connected to local MongoDB as fallback");
//             // Add this after mongoose.connect in your main() function
//             console.log("NODE_ENV:", process.env.NODE_ENV);
//             console.log("Database connected to:", mongoose.connection.host);
//         } catch (localErr) {
//             console.log("Local MongoDB also failed:", localErr.message);
//             process.exit(1); // Exit if no database connection
//         }
//     }
// }

// main();

// // View engine setup
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));
// app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride("_method"));
// app.engine('ejs', ejsMate);
// app.use(express.static(path.join(__dirname, "/public")));

// // Session store setup - use local MongoDB if Atlas fails
// const store = MongoStore.create({
//     mongoUrl: dbUrl,
//     crypto: {
//         secret: process.env.SECRET,
//     },
//     touchAfter: 24 * 3600,
// });

// store.on("error", (err) => {
//     console.log("ERROR IN MONGO SESSION STORE", err);
// });

// // Session configuration
// // const sessionOptions = {
// //     store,
// //     secret: process.env.SECRET ,
// //     resave: false,
// //     saveUninitialized: false,
// //     cookie: {
// //         expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
// //         maxAge: 7 * 24 * 60 * 60 * 1000,
// //         httpOnly: true,
// //         secure: process.env.NODE_ENV === "production"
// //     },
// // };


// const sessionOptions = {
//     store,
//     secret: process.env.SECRET,
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//         expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
//         maxAge: 7 * 24 * 60 * 60 * 1000,
//         httpOnly: true,
//         // Trust the reverse proxy (Render) to handle HTTPS
//         secure: process.env.NODE_ENV === "production",
//         // Add this line for production environments
//         sameSite: process.env.NODE_ENV === "production" ? "none" : "lax"
//     },
// };

// // Session middleware
// app.use(session(sessionOptions));
// app.use(flash());


// // Passport initialization
// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// // CRITICAL: This middleware must come AFTER passport but BEFORE routes
// app.use((req, res, next) => {
//     console.log("Session ID:", req.sessionID);
//     console.log("Authenticated:", req.isAuthenticated());
//     console.log("User:", req.user ? req.user.username : "No user");

//     res.locals.success = req.flash("success");
//     res.locals.error = req.flash("error");
//     res.locals.currUser = req.user; // This makes currUser available in templates
//     next();
// });

// // Routes
// app.use("/listings", listingRouter);
// app.use("/listings/:id/reviews", reviewRouter);
// app.use("/", userRouter);

// // Error handling
// app.all(/(.*)/, (req, res, next) => {
//     next(new ExpressError(404, "page not found!!"));
// });

// app.use((err, req, res, next) => {
//     let { statusCode = 500, message = "something went wrong!" } = err;
//     res.status(statusCode).render("error.ejs", { message });
// });

// // app.listen(8080, () => {
// //     console.log("server is running on port 8080");
// // });

// const port = process.env.PORT || 8080;  // 3000 for local, Render will replace it
// app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });








if (process.env.NODE_ENV != "production") {
    require('dotenv').config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require('path');
const Listing = require("./models/listing.js");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const MongoStore = require('connect-mongo');
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const { saveRedirectUrl } = require("./middleware.js"); // ADD THIS

// Middleware setup
app.set('trust proxy', 1);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");

const dbUrl = process.env.ATLASDB_URL || "mongodb://127.0.0.1:27017/wanderlust";

// Database connection with proper error handling
async function main() {
    try {
        await mongoose.connect(dbUrl, {
            // REMOVE DEPRECATED OPTIONS:
            serverSelectionTimeoutMS: 10000,
            socketTimeoutMS: 45000,
        });
        console.log("=== DATABASE CONNECTION SUCCESS ===");
        console.log("NODE_ENV:", process.env.NODE_ENV);
        console.log("Database host:", mongoose.connection.host);
        console.log("Database name:", mongoose.connection.name);
        console.log("================================");
    } catch (err) {
        console.log("MongoDB Atlas connection error:", err.message);
        try {
            const localUrl = "mongodb://127.0.0.1:27017/wanderlust";
            await mongoose.connect(localUrl);
            console.log("=== FALLBACK TO LOCAL DATABASE ===");
            console.log("Connected to local MongoDB as fallback");
            console.log("NODE_ENV:", process.env.NODE_ENV);
            console.log("================================");
        } catch (localErr) {
            console.log("Local MongoDB also failed:", localErr.message);
            process.exit(1);
        }
    }
}

// View engine setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

// Session store setup
const store = MongoStore.create({
    mongoUrl: dbUrl,
    crypto: {
        secret: process.env.SECRET,
    },
    touchAfter: 24 * 3600,
});

store.on("error", (err) => {
    console.log("ERROR IN MONGO SESSION STORE", err);
});

// Session configuration - FIXED
const sessionOptions = {
    store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false, // CHANGED from true to false
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: true, // FORCE true in production
        sameSite: 'none' // REQUIRED for cross-site
    },
};

// Session middleware
app.use(session(sessionOptions));
app.use(flash());

// Passport initialization
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Custom middleware - ADD SESSION DEBUGGING
app.use((req, res, next) => {
    console.log("=== SESSION DEBUG ===");
    console.log("Path:", req.path);
    console.log("Session ID:", req.sessionID);
    console.log("Authenticated:", req.isAuthenticated());
    console.log("User:", req.user ? req.user.username : "No user");
    console.log("=====================");
    
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
});

// ADD THIS MIDDLEWARE - CRITICAL FOR REDIRECTS
app.use(saveRedirectUrl);

// Routes
app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/", userRouter);

// Error handling
app.all(/(.*)/, (req, res, next) => {
    next(new ExpressError(404, "page not found!!"));
});

app.use((err, req, res, next) => {
    let { statusCode = 500, message = "something went wrong!" } = err;
    res.status(statusCode).render("error.ejs", { message });
});

// START SERVER ONLY AFTER DATABASE CONNECTION
main()
    .then(() => {
        const port = process.env.PORT || 8080;
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    })
    .catch(err => {
        console.log("Failed to start application:", err);
    });