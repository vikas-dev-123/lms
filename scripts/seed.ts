const { PrismaClient } = require('@prisma/client');

const database = new PrismaClient();

async function main() {
    const categories = [
        { name: "Computer Science" },
        { name: "Music" },
        { name: "Fitness" },
        { name: "Photography" },
        { name: "Data Science" },
        { name: "Dbms" },
        { name: "Filming" }
    ];

    try {
        for (const category of categories) {
            await database.category.upsert({
                where: { name: category.name },
                update: {}, // No need to update anything if it exists
                create: category
            });
        }

        console.log("Success");
    } catch (error) {
        console.log("Error seeding the database categories", error);
    } finally {
        await database.$disconnect();
    }
}

main();
