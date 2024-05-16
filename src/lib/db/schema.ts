import { integer, pgEnum, pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const postTypeEnum = pgEnum('post_type_enum', ['text', 'image', 'video'])

export type Post = typeof posts.$inferSelect

export const posts = pgTable("posts", {
    id: serial("id").primaryKey(),
    userId: varchar('user_id', {length:256}).notNull(),
    creator: text('creator').notNull(),
    title: text('title').notNull(),
    description: text('description').notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    postType: postTypeEnum('post_type').notNull(),
    fileKey: text('file_key').notNull(),
    likes: integer('likes').default(0).notNull(),
})