import { defineConfig } from 'drizzle-kit'
import * as dotenv from 'dotenv'
dotenv.config({path: ".env"})

export default defineConfig({
    dialect: "postgresql",
    schema: "./src/lib/db/schema.ts",
    dbCredentials:{
        url: process.env.NEXT_PUBLIC_DATABASE_URL!,
    },

})