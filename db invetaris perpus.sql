-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: inventaris_perpus
-- ------------------------------------------------------
-- Server version	8.0.35

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
-- Table structure for table `data_buku`
--

DROP TABLE IF EXISTS `data_buku`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `data_buku` (
  `id` int NOT NULL AUTO_INCREMENT,
  `isbn` varchar(100) NOT NULL,
  `judul_buku` varchar(255) NOT NULL,
  `pengarang` varchar(255) DEFAULT NULL,
  `nama_penerbit` varchar(255) DEFAULT NULL,
  `tahun_buku` varchar(20) DEFAULT NULL,
  `stok_buku` varchar(45) DEFAULT NULL,
  `kategori_id` int DEFAULT NULL,
  `rak_id` int DEFAULT NULL,
  `sampul` varchar(255) DEFAULT NULL,
  `deskripsi` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `isbn_UNIQUE` (`isbn`),
  KEY `fk_data_buku_kategori` (`kategori_id`),
  KEY `fk_data_buku_rak` (`rak_id`),
  CONSTRAINT `fk_data_buku_kategori` FOREIGN KEY (`kategori_id`) REFERENCES `kategori` (`id`),
  CONSTRAINT `fk_data_buku_rak` FOREIGN KEY (`rak_id`) REFERENCES `rak` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `data_buku`
--

LOCK TABLES `data_buku` WRITE;
/*!40000 ALTER TABLE `data_buku` DISABLE KEYS */;
INSERT INTO `data_buku` VALUES (15,'20056','DILAN 1990','Pidi Baiq','Pastel Books (Mizan Group)','2015','30',56,9,'Noveldilan.jpg_1703057178765.jpg','Novel berjudul Dia Adalah Dilanku Tahun 1990 merupakan karya dari Pidi Baiq. Dilan Dia Adalan Dilanku menceritakan percintaan anak SMA yang cukup unik. Novel dengan tebal 348 halaman ini diterbitkan pada tahun 2014. Ada beberapa penerbit yang telah menerbitkan novel Dilan 1990, yakni penerbit Pastel Books pada 2014 dan penerbit Mizan Pustaka pada 2015. Baca selengkapnya di artikel Sinopsis Novel \'Dilan\' Dia Adalah Dilanku Tahun 1990 - Pidi Baiq.'),(16,'978-602-374-289-9','Kimia','A.Haris Watoni','Yrama Widya','2016','10',53,5,'kimia.jpeg_1703104813893.jpeg','Buku Kimia untuk Siswa SMA/MA Kelas X ini merupakan buku yang disesuaikan dengan Kurikulum 2013 Edisi Revisi 2016. Perubahan tersebut tercermin dalam kompetensi dasar yang harus dicapai pada masing-masing tingkatan kelas. Dengan adanya perubahan kompetensi dasar, cakupan materi yang harus diajarkan pun mengalami perubahan.'),(17,'978-602-427-117-6','Matematika XII','Abdur Rahman As’ari, Tjang','Kemendikbud','2018','5',55,9,'pkn.jpg_1703105307478.jpg','Buku Matematika Kelas XII'),(18,'-','Naruto Vol.1','Masashi Kishimoto','Elex Media Komputindo','2019','1',58,8,'naruto.jpg_1703105422253.jpg','Ini adalah Desa Konohaga... Naruto adalah salah satu murid di Akademi Ninja yang suka berbuat onar!! Impian Naruto adalah menjadi seorang Hokage. Tetapi, Naruto memiliki rahasia sejak lahir karena di dalam tubuhnya terdapat siluman rubah yang disegel! Inilah pertarungan Naruto untuk mewujudkan impiannya...'),(19,'978-602-427-109-1','Bahasa Inggris Kelas XII','Utami Widiati','Kemendikbud','2018','6',55,6,'Cover_Kelas_XII_B_Inggris_BS.png_1703107360877.png','Bahasa Inggris Kelas XII');
/*!40000 ALTER TABLE `data_buku` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `data_pengguna`
--

DROP TABLE IF EXISTS `data_pengguna`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `data_pengguna` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nama` varchar(30) NOT NULL,
  `nisn` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `tempat_lahir` varchar(20) DEFAULT NULL,
  `tanggal_lahir` date DEFAULT NULL,
  `level` enum('Admin','Siswa') DEFAULT NULL,
  `jenis_kelamin` enum('laki','perempuan') DEFAULT NULL,
  `no_telepon` varchar(15) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `alamat` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `password_UNIQUE` (`nisn`)
) ENGINE=InnoDB AUTO_INCREMENT=85 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `data_pengguna`
--

LOCK TABLES `data_pengguna` WRITE;
/*!40000 ALTER TABLE `data_pengguna` DISABLE KEYS */;
INSERT INTO `data_pengguna` VALUES (1,'Admin','admin','admin','Jakarta','1971-07-22','Admin','laki','0812121212','admin@gmail.com','admin.png_1703102735663.png','Jl admin'),(80,'Admin2','admina','admina','Aceh','1987-04-09','Admin','perempuan','0895123443','admina@gmail.com','admin2.jpg_1703102742124.jpg','jl admina'),(81,'Zahra','123456','123456','Bogor','2004-08-17','Siswa','perempuan','081212','zahra@gamicx.com','foto3x4.jpg_1703102610125.jpg','disana'),(83,'Reza','111111','111111','Medan','2000-03-21','Siswa','laki','0812121212','rezaafriansyah@yahoo.com','ejaa.jpg_1703103150263.jpg','disini'),(84,'senaa','98765','98765','Galaxy','2017-02-21','Siswa','perempuan','089999999','sena@sds.com','Godzilla.png_1703104283806.png','haloooooooo');
/*!40000 ALTER TABLE `data_pengguna` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kategori`
--

DROP TABLE IF EXISTS `kategori`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `kategori` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nama` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kategori`
--

LOCK TABLES `kategori` WRITE;
/*!40000 ALTER TABLE `kategori` DISABLE KEYS */;
INSERT INTO `kategori` VALUES (53,'Kelas X'),(54,'Kelas XI'),(55,'Kelas XII'),(56,'Novel'),(58,'Komik');
/*!40000 ALTER TABLE `kategori` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rak`
--

DROP TABLE IF EXISTS `rak`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rak` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nama` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rak`
--

LOCK TABLES `rak` WRITE;
/*!40000 ALTER TABLE `rak` DISABLE KEYS */;
INSERT INTO `rak` VALUES (5,'Rak 1'),(6,'Rak 2'),(8,'Rak 3'),(9,'Rak 4');
/*!40000 ALTER TABLE `rak` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-24  8:52:02
