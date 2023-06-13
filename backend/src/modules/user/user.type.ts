import mongoose from "mongoose";

export interface User {
    _id: mongoose.Types.ObjectId
    email: string
    firstName: string
    lastName: string
    password?: string
    isActive?: boolean
    createdAt?: Date
    updatedAt?: Date
}