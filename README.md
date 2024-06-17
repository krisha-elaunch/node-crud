Basics Crud in Node js..

###########################################################################################

==> Mongoose

it is ODM (object Database Modelling) library for node js that defines objects with a schema mapped to a MongoDB document.
the mongoose Schema define the structure and property of the document in the MongoDb collection ...

A Mongoose schema defines the document's properties, default values, types of data, validators, etc. In contrast, a Mongoose model provides an interface for the database to create, query, update, delete records, and so on.

Creating a Mongoose schema and models mainly consists of three parts:

1. Referencing Mongoose:

import mongoose, { Schema } from "mongoose";

2. Schema Definition:

const userSchema = new Schema(
{
email: {
type: String,
unique: true,
required: true,
},
password: {
type: String,
required: true,
},
},
{
timestamps: true,
}
);

Currently, 10 SchemaTypes are allowed in Mongoose:

Array
Boolean
Buffer
Date
Mixed (A generic/flexible data type)
Number
ObjectId
String
Decimal 128
Map

3. Creating and Exporting a Model:

mongoose.model(<CollectionName>, <CollectionSchema>) function.

const user = mongoose.model("Students", userSchema);

export default user;

#####################################################################################################

==> Express Router

The Router also provides route methods for all the other HTTP verbs, that are mostly used in exactly the same way:-

post(), put(), delete(), options(), trace(), copy(), lock(), mkcol(), move(), purge(), propfind(), proppatch(), unlock(), report(), mkactivity(), checkout(), merge(), m-search(), notify(), subscribe(), unsubscribe(), patch(), search(), and connect().


router.post("/about", (req, res) => {
  res.send("About this wiki");
});

A router behaves like middleware itself, so you can use it as an argument to app.use() or as the argument to another router’s use() method.