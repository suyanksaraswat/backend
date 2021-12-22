const router = require("express").Router();
const Property = require("../model/Property");
const verify = require("./verifyToken");
const { propertyValidation } = require("../validation");

router.post("/new", verify, async (req, res) => {
  const { error } = propertyValidation(req.body);
  if (error) return res.status(400).send(error?.details[0].message);

  const property = new Property({
    postedBy: req.user._id,
    lookingTo: req.body.lookingTo,
    kindOfProperty: req.body.kindOfProperty,
    propertyType: req.body.propertyType,
    phoneNumber: req.body.phoneNumber,
    location: req.body.location,
    area: req.body.area,

    isRecommended: req.body.isRecommended || false,
    isFavorite: req.body.isFavorite || false,
  });

  try {
    const savedProperty = await property.save();
    res.send({ propertyId: savedProperty._id });
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/dashboard", verify, async (req, res) => {
  const recommendedProperties = await Property.find({ isRecommended: true });
  const favoriteProperties = await Property.find({ isFavorite: true });

  try {
    res.send({ recommendedProperties, favoriteProperties });
  } catch (err) {
    res.status(400).send(err);
  }
});


module.exports = router;
