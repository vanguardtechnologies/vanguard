# Database Setup Guide

## Option 1: Neon (Recommended for Quick Setup)
Neon provides a free PostgreSQL database perfect for development.

1. Visit https://neon.tech and create a free account
2. Create a new project
3. Copy the connection string
4. Update `.env` file with the connection string

## Option 2: Supabase
Supabase provides PostgreSQL with additional features.

1. Visit https://supabase.com and create a free account
2. Create a new project
3. Go to Settings > Database
4. Copy the connection string
5. Update `.env` file

## Option 3: Local PostgreSQL
If you prefer local development:

1. Install PostgreSQL on Windows
2. Create a database named `vanguard_dev`
3. Update `.env` with local connection string

## Next Steps
After setting up the database:
1. Run `npx prisma db push` to create tables
2. Run `npx prisma generate` to update the client
3. Test the connection with `npx prisma studio`