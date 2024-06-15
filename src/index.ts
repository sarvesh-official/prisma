import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// * Create

async function insertUser(
  email: string,
  password: string,
  firstName: string,
  lastName: string
) {
  const res = await prisma.user.create({
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
}

// ^ Update User
async function updateUser(
  email: string,
  firstName: string,
  lastName: string,
  password: string
) {
  const res = await prisma.user.update({
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
}

// ! Get User

async function getUser(email: string) {
  const res = await prisma.user.findUnique({
    where: { email },

    select: {
      firstName: true,
      lastName: true,
    },
  });

  console.log(res);
}

// & Delete User

async function deleteUser(email: string) {
  const res = await prisma.user.delete({
    where: {
      email,
    },
  });

  console.log(res);
}

updateUser("kingjai156@gmail.com", "Sarvesh", "P", "test@123");
insertUser("nivaash@gmail.com", "test@123", "Nivaash", "Bengal");

getUser("kingjai156@gmail.com");
deleteUser("nivaash@gmail.com");
