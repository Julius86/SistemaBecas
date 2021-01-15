module.exports = {
    port: process.env.PORT || 3003,
    db: process.env.MONGODB || 'mongodb+srv://JulioLop:12345@solicitudesbeca.g8yei.mongodb.net/Solicitudes_Beca?retryWrites=true&w=majority',

    urlParser: {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    }
}