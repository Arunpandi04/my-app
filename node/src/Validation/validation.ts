import * as Joi from "joi";
export class User {

  public validateUser(payload: any) {
    // create schema object
    const schema = Joi.object({
      id: Joi.string().optional(),
      firstName:Joi.string().required(),
      lastName: Joi.string().required(),
      dob: Joi.string().required(),
      gender:Joi.string().valid('Male','Female').required(),
      email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required()
    });
    // schema options
    const options = {
      abortEarly: false, // include all errors
      allowUnknown: true, // ignore unknown props
      stripUnknown: true // remove unknown props
    };
    // validate request body against schema
    const { error, value } = schema.validate(payload, options);
    if (error) {
      const err = {
        // on fail return comma separated errors
        message: `Validation error: ${error.details
          .map((x) => x.message)
          .join(", ")}`
      };
      return err;
    } else {
      return value;
    }
  }
  
}