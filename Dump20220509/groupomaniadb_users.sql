-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: groupomaniadb
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `UserName` varchar(45) DEFAULT NULL,
  `UserEmail` varchar(65) DEFAULT NULL,
  `password` varchar(300) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (27,'Test','Test1@test.com','$2b$10$uJdu3k1jpdDuqxM9nDCePecKDa1HLPrMcDY5lB2CWSxjjMKoFGdK.','2022-04-19 15:33:23','2022-04-19 15:33:23'),(28,'tes','test2@test.com','$2b$10$5jY/iWIYoZsNjebpjUklR.xt6RIR6hal.NxQUL0Nutgqse3L17euq','2022-04-25 21:40:14','2022-04-25 21:40:14'),(29,'TestTwo','test2@test.com','$2b$10$OSHYu4j26xNSLsTs5see8uy/cKYh9/tjaoqQuDHnHHz2ffL7P9ply','2022-05-09 09:48:36','2022-05-09 09:48:36'),(30,'TestThree','Test3@test.com','$2b$10$Y3UXglJhpVXGvkzJPUY6n.RIqgqx41iHpZupXyU9gA7m6HJZ1Dxwy','2022-05-09 09:54:12','2022-05-09 09:54:12'),(31,'testFour','Test4@gmail.com','$2b$10$1NxU53RQ0pCFv.5TAe6WM.XJ0OgTh2ZVMA7Uyk.bdHBffnrxXeXDe','2022-05-09 10:56:13','2022-05-09 10:56:13');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-09 15:42:41
