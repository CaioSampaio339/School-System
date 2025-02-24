import express from "express";
import "reflect-metadata";
import { AppDataSource } from "../data-source";
import cors from "cors";

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

AppDataSource.initialize()
  .then(() => {
    console.log("✅ Banco de dados conectado!");
    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((error) =>
    console.log("❌ Erro ao conectar ao banco de dados:", error),
  );
