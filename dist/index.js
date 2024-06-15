"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// * Create
function insertUser(email, password, firstName, lastName) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.create({
            data: {
                email,
                password,
                firstName,
                lastName,
            },
            select: {
                email: true,
                password: true,
            },
        });
        console.log(res);
    });
}
// ^ Update User
function updateUser(email, firstName, lastName, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.update({
            where: {
                email,
            },
            data: {
                firstName,
                lastName,
                password,
            },
        });
        console.log(res);
    });
}
// ! Get User
function getUser(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.findUnique({
            where: { email },
            select: {
                firstName: true,
                lastName: true,
            },
        });
        console.log(res);
    });
}
// & Delete User
function deleteUser(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.delete({
            where: {
                email,
            },
        });
        console.log(res);
    });
}
// insertUser("nivaash@gmail.com", "test@123", "Nivaash", "Bengal");
updateUser("kingjai156@gmail.com", "Sarvesh", "P", "test@123");
getUser("kingjai156@gmail.com");
// deleteUser("nivaash@gmail.com");
