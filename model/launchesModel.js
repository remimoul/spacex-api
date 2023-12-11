const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

let flightSchema = new Schema({
    flight_number: {type: Number},
    mission_name: {type: String},
    mission_id: [],
    upcoming: {type: Boolean},
    launch_year: {type: String},
    launch_date_unix: {type: Number},
    launch_date_utc: {type: String},
    launch_date_local: {type: String},
    is_tentative: {type: Boolean},
    tentative_max_precision: {type: String},
    tbd: {type: Boolean},
    launch_window: {type: Number},

});


module.exports = mongoose.model('Flight', flightSchema);

