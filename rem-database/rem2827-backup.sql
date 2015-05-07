-- phpMyAdmin SQL Dump
-- version 4.2.10
-- http://www.phpmyadmin.net
--
-- Host: localhost:8889
-- Generation Time: May 07, 2015 at 01:53 PM
-- Server version: 5.5.38
-- PHP Version: 5.6.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `reminva2827`
--

-- --------------------------------------------------------

--
-- Table structure for table `rev5285_category`
--

CREATE TABLE `rev5285_category` (
  `movies` int(10) unsigned NOT NULL,
  `games` int(10) unsigned NOT NULL,
  `books` int(10) unsigned NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `rev5285_items`
--

CREATE TABLE `rev5285_items` (
`id` int(10) unsigned NOT NULL COMMENT 'items id',
  `item_name` varchar(128) NOT NULL COMMENT 'items name',
  `progress` decimal(3,0) unsigned DEFAULT NULL COMMENT 'item progress percentage',
  `date_created` datetime NOT NULL COMMENT 'item date storage',
  `alert` datetime DEFAULT NULL,
  `start_date` int(10) unsigned DEFAULT NULL,
  `end date` int(10) unsigned DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `rev5285_users`
--

CREATE TABLE `rev5285_users` (
`id` int(10) unsigned NOT NULL COMMENT 'users id',
  `name` varchar(45) NOT NULL COMMENT 'users names ( first - last )',
  `email` varchar(128) NOT NULL COMMENT 'users email',
  `username` varchar(20) DEFAULT NULL COMMENT 'users alias ( optional )',
  `password` varchar(64) NOT NULL COMMENT 'users password ( hashed )'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `rev5285_category`
--
ALTER TABLE `rev5285_category`
 ADD KEY `movies` (`movies`), ADD KEY `games` (`games`), ADD KEY `books` (`books`);

--
-- Indexes for table `rev5285_items`
--
ALTER TABLE `rev5285_items`
 ADD PRIMARY KEY (`id`), ADD KEY `id_UNIQUE` (`id`), ADD KEY `id` (`id`);

--
-- Indexes for table `rev5285_users`
--
ALTER TABLE `rev5285_users`
 ADD PRIMARY KEY (`id`,`email`), ADD UNIQUE KEY `id_UNIQUE` (`id`), ADD UNIQUE KEY `email_UNIQUE` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `rev5285_items`
--
ALTER TABLE `rev5285_items`
MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT 'items id';
--
-- AUTO_INCREMENT for table `rev5285_users`
--
ALTER TABLE `rev5285_users`
MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT 'users id';
--
-- Constraints for dumped tables
--

--
-- Constraints for table `rev5285_category`
--
ALTER TABLE `rev5285_category`
ADD CONSTRAINT `books_id` FOREIGN KEY (`books`) REFERENCES `rev5285_items` (`id`),
ADD CONSTRAINT `games_id` FOREIGN KEY (`games`) REFERENCES `rev5285_items` (`id`),
ADD CONSTRAINT `movies_id` FOREIGN KEY (`movies`) REFERENCES `rev5285_items` (`id`);
