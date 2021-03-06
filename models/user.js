var express = require('express');
var mongoose = require('mongoose');
var app = express();

var Schema = mongoose.Schema;

var userInfoSchema = new Schema({
	username: { type: String, required: true },
	coordinates: {
		long : { type: Number, required: false },
		lat : { type : Number, required: false }
	},
	subscribers : [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
});

module.exports = mongoose.model("User", userInfoSchema);


