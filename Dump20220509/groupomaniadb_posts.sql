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
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `UserName` varchar(65) DEFAULT NULL,
  `title` varchar(100) DEFAULT NULL,
  `imageUrl` varchar(100) DEFAULT NULL,
  `content` varchar(3000) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=156 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (139,'1234567890','1234567890','http://localhost:3000/images/StudentOfTheMonthOpenClassrooms.jpg','1234567890','2022-04-24 21:43:14','2022-04-24 21:43:14'),(140,'zxcvbnm,','qwertyuiop','http://localhost:3000/images/19107.jpg','asdfghjkl','2022-04-25 21:36:51','2022-04-25 21:36:51'),(150,'\r\nREWQ','rewqaFDEWQ','http://localhost:3000/images/pexels-ivan-bertolazzi-2681319.jpg','EWQ','2022-04-26 01:53:46','2022-04-26 01:53:46'),(151,'ewq','trewq','http://localhost:3000/images/IMG-20220118-WA0003.jpg','rewq','2022-04-27 07:02:27','2022-04-27 07:02:27'),(152,'ewq','rewq','http://localhost:3000/images/deliverooQR.png','rewq','2022-04-27 07:04:15','2022-04-27 07:04:15'),(153,'TREWQ','iuytrewq','http://localhost:3000/images/cv-pp-oc-modified.png','YTREWQ','2022-05-05 20:18:07','2022-05-05 20:18:07'),(154,'wq','trewq','http://localhost:3000/images/AmazonPrime.jpeg','wq','2022-05-09 14:19:06','2022-05-09 14:19:06'),(155,'wq','trewq','http://localhost:3000/images/AmazonPrime.jpeg','wq','2022-05-09 14:20:48','2022-05-09 14:20:48');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
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
