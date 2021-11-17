# Burger Builder Api

This is a learning project from a tutorial series by `bohubrihi`.

## Stacks Used:
    Node.js (environment:local,version:16.9.1 )
    npm (environment:local,version:7.21.1)
    express.js
    mongodb with mongoose

## Packages installed

    -dotenv, express, morgan, bcrypt,jasonwebtoken, joi, lodash, cors and mongoose

### Day 1: (17-11-2021)
1. while working with mongoose v6 useNewUrlParser, useUnifiedTopology, useFindAndModify, and useCreateIndex are no longer supported options. Mongoose 6 always behaves as if useNewUrlParser, useUnifiedTopology, and useCreateIndex are true, and useFindAndModify is false
passing them in mongoose.connect function as param will result in errors and not connecting to database

        await mongoose.connect('mongodb://localhost:27017/test', {
        useNewUrlParser: true, // <-- no longer necessary
        useUnifiedTopology: true // <-- no longer necessary
        });

2. Creation of  user model from userSchema with a method for generation jwt token; this model this aimed to use for creation of new user and logging in existing user.

3. Validation of the data that being send via http by use of joi. "Joi" is similar to "Yup" that i used in fornt-end with formik for from validation. 
         useless link:  https://stackoverflow.com/questions/66009560/yup-vs-joi-for-frontend-validation

4. (&5) Registration of New user & authentication:

        -create the router and add that router to the app.js
        -use of lodash for passing objects and values as param
        -using lodash helps us by writing less code.() lodash is imported as "_", use pick method to pick values and create an object an pass them as bla bla bla
        -_.pick(thedeadedObject,[array of key name <type:String>])
    
6. Creating Order Schema and Order List

          -create a model for storing order data. the model it self is bit complex as one of the field of database contains a array of objects.
          
          -simplest way is to define the data model as it is like:

                const orderschema = new schema({
                    ingredient: [ type: { type:String }, amount: Number]  // <-- array

                    //rest of the code 
                }) 
                or create a subScheme  and pass it in the array(recommended for complex model) like

                const ingredientSchema = .....{
                    type: {...},
                    amount: Number
                } ; then pass it as 

                const orderschema = new schema({
                    ingredient: ingredientSchema, amount: Number]  // <-- array

                    //rest of the code 
                })
        
         - Because we have a simple object model we will follow 1st precesses.
            useless link https://mongoosejs.com/docs/schematypes.html#arrays 
         - Reference of another Model/collection can be stored in a field of a document just like relational database.
            example:
                const someSchema = .....({
                    user: Schema.Types.ObjectId
                }) 
            useless link: 

7. New Order and OrderList: 
        -creation of order router for posting an order and getting the order history of a user.
        - authoraization is checked via moddleware;
        - after successful authorization vai token; user details decoded from token and stored in req.user.
        - next function calls the controller takes userId from req.user finds the orders of that id via filter(....findOne({id:req.user._id})) and is send as response object