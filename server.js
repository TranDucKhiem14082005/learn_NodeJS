const app = require("./src/app");
const appConstants = require("./src/constants/app.constant");

const port = appConstants.PORT;
console.log(port);
app.listen(port, () => {
console.log(`Example app listening on port ${port}`);
})


 