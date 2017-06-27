module.exports = {
    portApi : process.env.PORT || 8080,
    adrFront : 'http://localhost:4200',
    db: {
        uri:'mongodb://localhost:27017/timesheet',
    },
}