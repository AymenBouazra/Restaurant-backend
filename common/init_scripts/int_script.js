const Role = require("../../models/role");
const User = require("../../models/auth")


Role.countDocuments().then(async (rolesCount) => {
    if (rolesCount === 0) {
        const rolesToInsert = [
            {
                name: "SUPER_ADMIN",
                nameText: "Super Administrateur",
            },
            {
                name: "ADMIN",
                nameText: "Administrateur",
            },
            {
                name: "CLIENT",
                nameText: "Client",
            }
        ];
        await Role.insertMany(rolesToInsert);
    }
});

// Users section
let rolesToAffect = [];
Role.find({ name: "SUPER_ADMIN" }).then(allRoles => {
    if (allRoles.length > 0) {
        rolesToAffect = allRoles.map((role) => role._id);
    }
});

User.countDocuments().then(async (usersCount) => {
    if (usersCount === 0) {
        const usersToInsert = [
            {
                userName: "Aymen Bouazra",
                email: "aymenbouazra994@gmail.com",
                password: "$2a$10$MDIRedaQqMwEzx78OdnOR.8ve5/W42.qDXm/GgQYkTsYfeioKmBkG",
                roles: rolesToAffect,
                photo: 'https://i.imgur.com/lh8Sd5C.png'
            },
            {
                userName: "Karim kenzizi",
                email: "Kkenzizi@gmail.com",
                password: "$2a$10$MDIRedaQqMwEzx78OdnOR.8ve5/W42.qDXm/GgQYkTsYfeioKmBkG",
                roles: rolesToAffect,
                photo: 'https://i.imgur.com/lh8Sd5C.png'
            },
        ]
        await User.insertMany(usersToInsert);
    }
});


console.log(`=> All collections has been seeded successfully!`);