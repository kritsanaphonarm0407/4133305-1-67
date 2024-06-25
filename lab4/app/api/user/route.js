import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

export async function GET() {
    const allUsers = await prisma.user.findMany();
    return Response.json(allUsers);
}

export async function POST(req, {parmams}) {
    try{
    const userId = Number(params.id);
    const {email, name} = req.json()
    const createUser = await prisma.user.create({
       where: {
        id:userId,
       },
        data: {
            email,
            name,
        },
    });
    return Response.json(updateUser, { status: 200 });
    } catch (err) {
    return Response.json(ree, { status: 500 });
    }
}