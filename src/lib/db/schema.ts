import { boolean, integer, pgEnum, pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const postTypeEnum = pgEnum('post_type_enum', ['text', 'image', 'video'])

export type Post = typeof posts.$inferSelect
export type ChatMessage = typeof message.$inferSelect

export const posts = pgTable("posts", {
    id: serial("id").primaryKey(),
    userId: varchar('user_id', {length:256}).notNull(),
    title: text('title').notNull(),
    description: text('description').notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    postType: postTypeEnum('post_type').notNull(),
    fileUrl: text('file_url').notNull(),
    likes: integer('likes').default(0).notNull(),
})

export const friends = pgTable("friends", {
    id: serial("id").primaryKey(),
    userId: varchar('user_id', {length:256}).notNull(),
    friendId: varchar('friend_id', {length:256}).notNull(),
    accepted: boolean('accepted').default(false)
})

export const chats = pgTable("chats", {
    id: serial("id").primaryKey(),
    user1_id: varchar('user1_id', {length:256}).notNull(),
    user2_id: varchar('user2_id', {length:256}).notNull()
})

export const message = pgTable("message", {
    id: serial("id").primaryKey(),
    chatId: integer('chat_id').references(()=>chats.id).notNull(),
    textMessage: text('text_message').notNull(),
    author: varchar('user_id', {length:256}).notNull()
})