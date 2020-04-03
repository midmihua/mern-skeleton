const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const size = require('lodash.size');
const { hash, compare } = require('bcryptjs');
const { BCRYPT_WORK_FACTORY } = require('../config');

const userSchema = new Schema(
    {
        username:
        {
            type: String,
            max: [50, 'Username is too long'],
        },
        email:
        {
            type: String,
            unique: true,
            required: [true, 'Email is required'],
            max: [50, 'Email is too long'],
            set: v => v.toLowerCase()
        },
        password:
        {
            type: String,
            required: [true, 'Password is required'],
            min: [6, 'Password should be 6 symbols or more']
        }
    },
    {
        timestamps: true
    }
);

userSchema.methods.matchesPassword = function (password) {
    return compare(password, this.password);
};

userSchema.pre('save', async function () {

    if (this.isModified('password')) {
        this.password = await hash(this.password, BCRYPT_WORK_FACTORY);
    }

    if (!this.username || size(this.username) === 0) {
        this.username = this.email;
    }
});

userSchema.set('toJSON', {
    transform: (doc, { __v, password, ...rest }, options) => rest
});

module.exports = mongoose.model('User', userSchema);
