CREATE TABLE IF NOT EXISTS `tasks` (
  `id` bigint unsigned NOT NULL,
  `uuid` varchar(36) NOT NULL,
  `title` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  `state` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
)