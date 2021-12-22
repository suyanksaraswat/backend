const Joi = require("joi");

//register validation
const registerValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(6).required(),
    phone: Joi.string().min(9).max(12).required(),
    email: Joi.string().min(6).email(),
    password: Joi.string().min(6).required(),
  });

  return schema.validate(data);
};

const loginValidation = (data) => {
  const schema = Joi.object({
    phone: Joi.string().min(9).max(12).required(),
    password: Joi.string().min(6).required(),
  });

  return schema.validate(data);
};

const propertyValidation = (data) => {
  const schema = Joi.object({
    postedBy: Joi.string().required(),
    lookingTo: Joi.string().valid("sell", "rent/lease").required(),
    kindOfProperty: Joi.string().valid("residential", "commercial").required(),
    propertyType: Joi.string()
      .valid("apartment", "independentHouse", "land", "farmHouse")
      .required(),
    phoneNumber: Joi.string().min(1).max(13).required(),
    location: Joi.object({
      city: Joi.string().required(),
      locality: Joi.string().required(),
    }),
    area: Joi.string().required(),

    isRecommended: Joi.boolean(),
    isFavorite: Joi.boolean(),
  });

  return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.propertyValidation = propertyValidation;
