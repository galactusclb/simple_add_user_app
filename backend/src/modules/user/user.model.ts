import mongoose from "mongoose";

import { User } from "./user.type";

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    firstName: { type: String, required: true, unique: true },
    lastName: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: false },
    isActive: { type: Boolean, required: false }
}, {
    timestamps: true,
    toObject: { transform: function (doc, ret) { delete ret.password; delete ret.__v; } },
    toJSON: { transform: function (doc, ret) { delete ret.password; delete ret.__v; } }
})

export const UserModel = mongoose.model<User>('User', UserSchema)