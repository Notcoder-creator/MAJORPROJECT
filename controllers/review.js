const Listing = require("../models/listing");
const Review = require("../models/review");

module.exports.createReview = async (req,res)=>{
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    console.log(newReview);
    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();
    req.flash("success","New review created!");
    res.redirect(`/listings/${listing._id}`);

};

module.exports.destroyReview =async (req, res) => {
    const { id, reviewId } = req.params;

    // Verify both operations succeed
    const [listingUpdate, reviewDelete] = await Promise.all([
      Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } }),
      Review.findByIdAndDelete(reviewId)
    ]);

    if (!listingUpdate || !reviewDelete) {
      throw new ExpressError("Review or listing not found", 404);
    }

    req.flash("success","Review Deleted!");

    res.redirect(`/listings/${id}`);
};