const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req,res)=> {
    res.status(200).json({
        message: "!Hola Mundo¡"
    })
})


if(require.main === module) {
    app.listen(port, () => {
        console.log(`Seridor escuchando en http://localhost:${port}`)
    })
}

module.exports = app;