// const express = require("express");
// const router = express.Router();
// const wrapAsync = require("../utils/wrapAsync.js");
// const ExpressError = require("../utils/ExpressError.js");
// const {listingSchema , reviewSchema} = require("../schema.js");
// const Listing = require("../models/listing.js");




// const validateListing = (req,res,next)=>{
//     let{error} = listingSchema.validate(req.body);
//     if(error){
//         let errMsg = error.details.map((el)=> el.message).join(",");
//         throw new ExpressError(400,error);
//     }else {
//         next();
//     }

// };




// // index route
// router.get("/",wrapAsync(async (req,res)=>{
//     const allListings = await Listing.find({});
//     res.render("Listings/index.ejs", {allListings});
// }));

// // new route
// router.get("//new",(req,res)=>{
//     res.render("listings/new.ejs");
// })

// // show route
// router.get("//:id",wrapAsync(async (req,res)=>{
//     let {id} = req.params;
//     const listing = await Listing.findById(id).populate("reviews");
//     res.render("listings/show.ejs",{listing});
// }));

// // create route
// router.post("/",validateListing,
//     wrapAsync(async (req,res,next)=>{

//         const newListing = new Listing(req.body.listing);


//         // if (!req.body.listing.title) {
//         //     throw new ExpressError(400,"Title is missing");
//         // }
//         // if (!req.body.listing.description) {
//         //     throw new ExpressError(400,"Description is missing");
//         // }
//         // if (!req.body.listing.location) {
//         //     throw new ExpressError(400,"location is missing");
//         // }
//         // this above 'if' method is time taking so we use a tool named 'joi'.
//         await newListing.save();
//         res.redirect("/listings");
//         // let {title, description, image, price, country, location} = req.body;
//         // let listing = req.body.listing;  // this is the another way of doing above line.
//         // console.log(listing);
//         // new method
//     })
// );

// //edit route
// router.get("//:id/edit",wrapAsync(async(req,res)=>{
//     let {id} = req.params;
//     const listing = await Listing.findById(id);
//     res.render("listings/edit.ejs",{listing})
// }));

// // update route
// router.put("//:id",validateListing, wrapAsync(async(req,res)=>{
//     let {id} = req.params;
//     await Listing.findByIdAndUpdate(id, {...req.body.listing});
//     res.redirect(`/listings/${id}`);
// }));

// // DELETE ROUTE
// router.delete("//:id", wrapAsync(async (req,res)=>{
//     let {id} = req.params;
//     let deletedListing = await Listing.findByIdAndDelete(id);
//     console.log(deletedListing);
//     res.redirect("/listings");
// }));

// module.exports = router;
















// const express = require("express");
// const router = express.Router();
// const wrapAsync = require("../utils/wrapAsync.js");
// const Listing = require("../models/listing.js");
// const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");
// const User = require("../models/user.js");




// // Index route
// router.get("/", wrapAsync(async (req, res) => {
//     const allListings = await Listing.find({});
//     res.render("listings/index.ejs", { allListings });
// }));

// // New route
// router.get("/new", isLoggedIn,(req, res) => {

//     res.render("listings/new.ejs");
// });

// // Show route
// // router.get("/:id", wrapAsync(async (req, res) => {
// //     const { id } = req.params;
// //     const listing = await Listing.findById(id).populate("reviews").populate("owner");
// //     if (!listing) {
// //         // throw new ExpressError(404, "Listing not found!");
// //         req.flash("error","listing you requested for does not exist");
// //         res.redirect("/listings");
// //     }
// //     console.log(listing);
// //     res.render("listings/show.ejs", { listing });
// // }));



// // Show route - UPDATED with error handling
// router.get("/:id", wrapAsync(async (req, res) => {
//     const { id } = req.params;

//     try {
//         const listing = await Listing.findById(id)
//             .populate("reviews")
//             .populate("owner");

//         if (!listing) {
//             req.flash("error", "Listing you requested for does not exist");
//             return res.redirect("/listings");
//         }

//         console.log("Listing with populated owner:", listing);
//         res.render("listings/show.ejs", { listing });
//     } catch (error) {
//         console.error("Error populating owner:", error);

//         // Fallback: get listing without populating owner
//         const listing = await Listing.findById(id).populate("reviews");
//         if (!listing) {
//             req.flash("error", "Listing you requested for does not exist");
//             return res.redirect("/listings");
//         }
//         console.log(listing);
//         res.render("listings/show.ejs", { listing });
//     }
// }));





// // Create route
// router.post("/", isLoggedIn,isOwner,validateListing, wrapAsync(async (req, res) => {
//     const newListing = new Listing(req.body.listing);
//     console.log(req.user);
//     newListing.owner._id = req.user._id;
//     await newListing.save();
//     req.flash("success","new listing created!");
//     res.redirect("/listings");
// }));

// // Edit route
// router.get("/:id/edit", isLoggedIn,isOwner,wrapAsync(async (req, res) => {
//     const { id } = req.params;
//     const listing = await Listing.findById(id);
//     if (!listing) {
//         // throw new ExpressError(404, "Listing not found!");
//         req.flash("error","listing you requested for does not exist");
//         res.redirect("/listings");
//     }
//     // if (!listing) {
//     //     throw new ExpressError(404, "Listing not found!");
//     // }
//     res.render("listings/edit.ejs", { listing });
// }));

// // Update route
// router.put("/:id",isLoggedIn,isOwner, validateListing, wrapAsync(async (req, res) => {
//     const { id } = req.params;
//     let listing = await  Listing.findById(id);
//     await Listing.findByIdAndUpdate(id, { ...req.body.listing });
//     req.flash("success","Listing updated!");
//     res.redirect(`/listings/${id}`);
// }));

// // Delete route
// router.delete("/:id",isLoggedIn,isOwner,wrapAsync(async (req, res) => {
//     let { id } = req.params;
//     let deletedListing = await Listing.findByIdAndDelete(id);
//     console.log(deletedListing);
//     req.flash("success","listing Deleted!");
//     res.redirect("/listings");
// }));

// module.exports = router;

// 
















const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer = require('multer');
const {storage} = require("../cloudconfig.js");
const upload = multer({storage});






// NEW route - must come first
router.get("/new", isLoggedIn, listingController.renderNewForm);



// INDEX and CREATE routes
router.route("/")
    .get(wrapAsync(listingController.index))
    .post(isLoggedIn, validateListing,upload.single('listing[image]'), wrapAsync(listingController.createListing));
    






// SHOW, UPDATE, DELETE routes
router.route("/:id")
    .get(wrapAsync(listingController.showListing))
    .put(isLoggedIn, isOwner,upload.single('listing[image]'), validateListing, wrapAsync(listingController.updateListing))
    .delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));

// EDIT route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm));

module.exports = router;
