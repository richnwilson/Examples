import mongoose from 'mongoose';

// New standars now use async instead or promises.
const connectDB = async (MONGODB_URI,DBNAME) => {
  try {
    const options = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      sslCA: require('fs').readFileSync(`${__dirname}/cert.pem`),
      ssl: true,
      promiseLibrary: global.Promise,
      poolSize: 10,
      autoIndex: false
    }
    mongoose.connect(MONGODB_URI, options);
    console.log(`Connected to MongoDB [ ${DBNAME} ] succesfully...`);
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
