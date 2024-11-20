CREATE TABLE `criteria` (
	`id` text PRIMARY KEY NOT NULL,
	`subject` text,
	`qty` integer NOT NULL,
	`unit` text,
	`isActive` integer NOT NULL,
	`isFix` integer NOT NULL,
	`createdAt` integer,
	`updatedAt` integer,
	`categoryId` text NOT NULL,
	FOREIGN KEY (`categoryId`) REFERENCES `category`(`id`) ON UPDATE no action ON DELETE cascade
);
