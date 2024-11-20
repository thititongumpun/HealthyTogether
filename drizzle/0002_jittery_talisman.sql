CREATE TABLE `exercise` (
	`id` text PRIMARY KEY NOT NULL,
	`subject` text,
	`qty` integer NOT NULL,
	`unit` text,
	`isFix` integer DEFAULT false,
	`createdAt` integer,
	`updatedAt` integer,
	`userId` text NOT NULL,
	FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);
