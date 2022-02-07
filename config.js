import dotenv from "dotenv"

dotenv.config()


export default {
    PORT: process.env.PORT || 8080,
    TIPO_DE_PERSISTENCIA: process.env.TIPO_P || "MONGODB", // Tipo de persistencia entre los casos "MEM", "FILE" o "MONGODB"
    // STR_CNX = 'mongodb://localhost/ecommerce3', Esto es el mongoDB Local.
    STR_CNX: process.env.CNX || "mongodb+srv://Alejandra:nwJR8RrBGC2ytZE@cluster0.ghgj4.mongodb.net/ecommerce3?retryWrites=true&w=majority",
}