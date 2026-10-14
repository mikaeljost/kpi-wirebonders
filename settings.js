module.exports = {
    flowFile: 'flows.json',
    uiPort: process.env.PORT || 1880,
    adminAuth: {
        type: "credentials",
        users: [{ username: "admin", password: "$2a$08$BsAAU6Ut.AQQqvexylraFOMNVCUQ2wAMxMPxa5yd3A7yZA.UM6RXG", permissions: "*" }]
    },
    httpNodeAuth: { user: "operador", pass: "$2a$08$BsAAU6Ut.AQQqvexylraFOMNVCUQ2wAMxMPxa5yd3A7yZA.UM6RXG" },
    credentialSecret: "chave-kpi-htmicron",
};
