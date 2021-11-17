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

4. Registration of New user & authentication:

        -create the router and add that router to the app.js
        -use of lodash for passing objects and values as param
        -using lodash helps us by writing less code.() lodash is imported as "_", use pick method to pick values and create an object an pass them as bla bla bla
        -_.pick(thedeadedObject,[array of key name <type:String>])