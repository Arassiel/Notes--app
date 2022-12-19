const mongoose = require('mongoose');

//suprimir un warning
mongoose.set('strictQuery',true);

//configuracion del servidor
mongoose.connect('mongodb://localhost/notes--app', {
    /*useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    stricQuery: true*/
    
})

    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));