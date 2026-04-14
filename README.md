## Tecnologias Usadas
- Express
- Prisma
- Cors
- Helmet
- Morgan
- Winston
- ZOD
- bcrypt
- Rate Limit
- TypeScript
- JWT
- PostgreSQL
- Docker

## Pastas
src/
 ├── config/         # Configurações de logs (Winston) e segurança
 ├── controllers/    # Lógica das rotas
 ├── routes/         # Rotas
 ├── middlewares/    # Auth (JWT), Rate Limit, Erros
 ├── schemas/        # Validações Zod
 ├── services/       # Regras de negócio e chamadas ao Prisma
 ├── server.ts       # Ponto de entrada

