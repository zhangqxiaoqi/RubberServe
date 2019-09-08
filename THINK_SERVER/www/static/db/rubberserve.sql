/*
 Navicat MySQL Data Transfer

 Source Server         : 本地
 Source Server Type    : MySQL
 Source Server Version : 80016
 Source Host           : localhost:3306
 Source Schema         : rubberserve

 Target Server Type    : MySQL
 Target Server Version : 80016
 File Encoding         : 65001

 Date: 08/09/2019 09:24:22
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for company_info
-- ----------------------------
DROP TABLE IF EXISTS `company_info`;
CREATE TABLE `company_info` (
  `ID` int(11) NOT NULL COMMENT 'ID',
  `COMPANY_NAME_CN` text COMMENT '公司中文名称',
  `COMPANY_NAME_EN` text COMMENT '公司英文名称',
  `PHONE` varchar(20) DEFAULT NULL COMMENT '手机',
  `QQ` varchar(20) DEFAULT NULL COMMENT 'QQ',
  `EMAIL` varchar(40) DEFAULT NULL COMMENT '邮箱',
  `WECHART` varchar(20) DEFAULT NULL COMMENT '微信',
  `COMPANY_DES_CN` text COMMENT '公司描述',
  `MOBILE` varchar(20) DEFAULT NULL COMMENT '手机',
  `POSTCODE` varchar(10) DEFAULT NULL COMMENT '邮编',
  `ADDRESS_CN` varchar(255) DEFAULT NULL COMMENT '地址',
  `ABOUT_US` text COMMENT '关于我们',
  `COMPANY_BRIEF_DES_CN` text COMMENT '简介--放在首页',
  `ADDRESS_EN` varchar(255) DEFAULT NULL COMMENT '地址',
  `COMPANY_DES_EN` text COMMENT '公司描述',
  `COMPANY_BRIEF_DES_EN` text COMMENT '简介--放在首页',
  `PRODUCT_CENTER_EN` text COMMENT '产品中心简介-英',
  `PRODUCT_CENTER_CN` text COMMENT '产品中心简介-英',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of company_info
-- ----------------------------
BEGIN;
INSERT INTO `company_info` VALUES (1, '南京丰固橡塑有限公司', 'NANJING FENGGU RUBBER&PLASTIC CO.,LTD', '', NULL, '563n.wang@12345.com', NULL, NULL, '(025)95423', '200000', '上海水电路682号天虹商务大厦6、7、16、17F', '在科技创新领域，唯星集团分别与复旦大学、上海大学、华师大等知名院校达成战略伙伴关系，分别成立了云计算、大数据、智能营销等不同领域的产学研合作平台。2015年6月，唯星在美国硅谷成立研发中心，开拓海外科研基地；自成立至今唯星集团已取得60个软件著作权及1项发明专利；同时，经过多年在技术创新领域的探索与积累，唯星集团目前已获得虹口区科技小巨人企业、高新技术企业、双软认证企业、院士专家工作站、上海名牌企业等多项荣誉资质称号。', '在科技创新领域，唯星集团分别与复旦大学、上海大学、华师大等知名院校达成战略伙伴关系，分别成立了云计算、大数据、智能营销等不同领域的产学研合作平台。\r\n\r\n2015年6月，唯星在美国硅谷成立研发中心，开拓海外科研基地；自成立至今唯星集团已取得60个软件著作权及1项发明专利；同时，经过多年在技术创新领域的探索与积累，唯星集团目前已获得虹口区科技小巨人企业、高新技术企业、双软认证企业、院士专家工作站、上海名牌企业等多项荣誉资质称号。', NULL, NULL, 'In the field of scientific and technological innovation, Weixing Group has established strategic partnerships with well-known institutions such as Fudan University, Shanghai University and China Normal University, and established a platform for cooperation in production, research and research in different fields such as cloud computing, big data and intelligent marketing. In June 2015, Weixing established a research and development center in Silicon Valley, USA, and opened up overseas research bases. Since its establishment, Weixing Group has obtained 60 software copyrights and 1 invention patent. At the same time, after years of exploration and accumulation in the field of technological innovation, Weixing Group has obtained many honorary qualifications such as Hongkou District Science and Technology Small Giant Enterprise, High-tech Enterprise, Double Soft Certification Enterprise, Academician Expert Workstation and Shanghai Famous Brand Enterprise.\r\nIn the field of scientific and technological innovation, Weixing Group has established strategic partnerships with well-known institutions such as Fudan University, Shanghai University and China Normal University, and established a platform for cooperation in production, research and research in different fields such as cloud computing, big data and intelligent marketing. In June 2015, Weixing established a research and development center in Silicon Valley, USA, and opened up overseas research bases. Since its establishment, Weixing Group has obtained 60 software copyrights and 1 invention patent. At the same time, after years of exploration and accumulation in the field of technological innovation, Weixing Group has obtained many honorary qualifications such as Hongkou District Science and Technology Small Giant Enterprise, High-tech Enterprise, Double Soft Certification Enterprise, Academician Expert Workstation and Shanghai Famous Brand Enterprise.\r\nIn the field of scientific and technological innovation, Weixing Group has established strategic partnerships with well-known institutions such as Fudan University, Shanghai University and China Normal University, and established a platform for cooperation in production, research and research in different fields such as cloud computing, big data and intelligent marketing. In June 2015, Weixing established a research and development center in Silicon Valley, USA, and opened up overseas research bases. Since its establishment, Weixing Group has obtained 60 software copyrights and 1 invention patent. At the same time, after years of exploration and accumulation in the field of technological innovation, Weixing Group has obtained many honorary qualifications such as Hongkou District Science and Technology Small Giant Enterprise, High-tech Enterprise, Double Soft Certification Enterprise, Academician Expert Workstation and Shanghai Famous Brand Enterprise.\r\nIn the field of scientific and technological innovation, Weixing Group has established strategic partnerships with well-known institutions such as Fudan University, Shanghai University and China Normal University, and established a platform for cooperation in production, research and research in different fields such as cloud computing, big data and intelligent marketing. In June 2015, Weixing established a research and development center in Silicon Valley, USA, and opened up overseas research bases. Since its establishment, Weixing Group has obtained 60 software copyrights and 1 invention patent. At the same time, after years of exploration and accumulation in the field of technological innovation, Weixing Group has obtained many honorary qualifications such as Hongkou District Science and Technology Small Giant Enterprise, High-tech Enterprise, Double Soft Certification Enterprise, Academician Expert Workstation and Shanghai Famous Brand Enterprise.\r\nIn the field of scientific and technological innovation, Weixing Group has established strategic partnerships with well-known institutions such as Fudan University, Shanghai University and China Normal University, and established a platform for cooperation in production, research and research in different fields such as cloud computing, big data and intelligent marketing. In June 2015, Weixing established a research and development center in Silicon Valley, USA, and opened up overseas research bases. Since its establishment, Weixing Group has obtained 60 software copyrights and 1 invention patent. At the same time, after years of exploration and accumulation in the field of technological innovation, Weixing Group has obtained many honorary qualifications such as Hongkou District Science and Technology Small Giant Enterprise, High-tech Enterprise, Double Soft Certification Enterprise, Academician Expert Workstation and Shanghai Famous Brand Enterprise.\r\nIn the field of scientific and technological innovation, Weixing Group has established strategic partnerships with well-known institutions such as Fudan University, Shanghai University and China Normal University, and established a platform for cooperation in production, research and research in different fields such as cloud computing, big data and intelligent marketing. In June 2015, Weixing established a research and development center in Silicon Valley, USA, and opened up overseas research bases. Since its establishment, Weixing Group has obtained 60 software copyrights and 1 invention patent. At the same time, after years of exploration and accumulation in the field of technological innovation, Weixing Group has obtained many honorary qualifications such as Hongkou District Science and Technology Small Giant Enterprise, High-tech Enterprise, Double Soft Certification Enterprise, Academician Expert Workstation and Shanghai Famous Brand Enterprise.\r\n', 'Founded in 2005, Weixing adheres to the concept of “integrating digital resources and technology-driven marketing”, focusing on the innovation and integration of digital marketing technologies, products, resources and services, and providing comprehensive application support for all stages of traditional enterprise Internet business transformation.', '唯星成立于2005年，秉承\"整合数字资源,技术驱动营销\"的理念，专注于数字营销技术、产品、资源、服务的创新与整合，为传统企业互联网商业转型各个阶段提供全方位应用支撑。');
COMMIT;

-- ----------------------------
-- Table structure for rubber_device
-- ----------------------------
DROP TABLE IF EXISTS `rubber_device`;
CREATE TABLE `rubber_device` (
  `ID` int(11) NOT NULL COMMENT 'ID',
  `COVER` varchar(255) DEFAULT NULL COMMENT '封面',
  `CONTENT_CN` text COMMENT '中文内容',
  `CONTENT_EN` text COMMENT '英文内容',
  `DIGEST_CN` varchar(255) DEFAULT NULL COMMENT '中文摘要',
  `DIGEST_EN` varchar(255) DEFAULT NULL COMMENT '英文摘要',
  `TITLE_CN` varchar(255) DEFAULT NULL COMMENT '标题中文',
  `TITLE_EN` varchar(255) DEFAULT NULL COMMENT '标题英文',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of rubber_device
-- ----------------------------
BEGIN;
INSERT INTO `rubber_device` VALUES (1, 'http://img3.imgtn.bdimg.com/it/u=3987907653,720009510&fm=214&gp=0.jpg', '内容', 'content', '缩率表姐', 'asdas', '中文标题', 'en——titole');
COMMIT;

-- ----------------------------
-- Table structure for rubber_info
-- ----------------------------
DROP TABLE IF EXISTS `rubber_info`;
CREATE TABLE `rubber_info` (
  `ID` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `TYPE` int(11) DEFAULT '0' COMMENT '0 主页，\r\n1 关于我们，\r\n2 资质荣誉，\r\n3 企业文化，\r\n4 设备 ， \r\n5 联系我们',
  `CN_CONTENT` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '' COMMENT '中文内容',
  `EN_CONTENT` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '' COMMENT '英文内容',
  `COVER` varchar(255) DEFAULT '' COMMENT '封面',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of rubber_info
-- ----------------------------
BEGIN;
INSERT INTO `rubber_info` VALUES (1, 1, '公司简介', 'gongsijianjie', '');
INSERT INTO `rubber_info` VALUES (2, 2, '公司荣誉', 'gongsirongyu', '');
INSERT INTO `rubber_info` VALUES (3, 3, '公司文化', 'gongsiwenhua', '');
INSERT INTO `rubber_info` VALUES (4, 5, '在科技创新领域，唯星集团分别与复旦大学、上海大学、华师大等知名院校达成战略伙伴关系，分别成立了云计算、大数据、智能营销等不同领域的产学研合作平台。2015年6月，唯星在美国硅谷成立研发中心，开拓海外科研基地；自成立至今唯星集团已取得60个软件著作权及1项发明专利；同时，经过多年在技术创新领域的探索与积累，唯星集团目前已获得虹口区科技小巨人企业、高新技术企业、双软认证企业、院士专家工作站、上海名牌企业等多项荣誉资质称号。', 'lingyuxinasdasda', '');
COMMIT;

-- ----------------------------
-- Table structure for rubber_news
-- ----------------------------
DROP TABLE IF EXISTS `rubber_news`;
CREATE TABLE `rubber_news` (
  `ID` int(11) NOT NULL COMMENT 'ID',
  `TITLE_CN` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '中文标题',
  `COVER` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '封面',
  `CONTENT_CN` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '中文内容',
  `CREATE_TIME` datetime NOT NULL COMMENT '创建时间',
  `TYPE` int(11) NOT NULL COMMENT '类型（0公司新闻 1行业新闻）',
  `TITLE_EN` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '英文标题',
  `CONTENT_EN` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci COMMENT '英文内容',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of rubber_news
-- ----------------------------
BEGIN;
INSERT INTO `rubber_news` VALUES (1, '中文标题1', 'http://www.baidu.com', '中文内容', '2019-08-26 22:55:18', 0, 'englishtitle', 'englishconten');
INSERT INTO `rubber_news` VALUES (3, '中文标题2', 'http://www.baidu.com', '中文内容', '2019-08-26 22:55:18', 0, 'englishtitle', 'englishconten');
INSERT INTO `rubber_news` VALUES (4, '中文标题3', 'http://www.baidu.com', '中文内容', '2019-08-26 22:55:18', 0, 'englishtitle', 'englishconten');
INSERT INTO `rubber_news` VALUES (5, '中文标题4', 'http://www.baidu.com', '中文内容', '2019-08-26 22:55:18', 0, 'englishtitle', 'englishconten');
INSERT INTO `rubber_news` VALUES (6, '中文标题5', 'http://www.baidu.com', '中文内容', '2019-08-26 22:55:18', 0, 'englishtitle', 'englishconten');
INSERT INTO `rubber_news` VALUES (7, '中文标题6', 'http://www.baidu.com', '中文内容', '2019-08-26 22:55:18', 0, 'englishtitle', 'englishconten');
INSERT INTO `rubber_news` VALUES (8, '中文标题7', 'http://www.baidu.com', '中文内容', '2019-08-26 22:55:18', 0, 'englishtitle', 'englishconten');
INSERT INTO `rubber_news` VALUES (9, '中文标题8', 'http://www.baidu.com', '中文内容', '2019-08-26 22:55:18', 0, 'englishtitle', 'englishconten');
INSERT INTO `rubber_news` VALUES (10, '中文标题9', 'http://www.baidu.com', '中文内容', '2019-08-26 22:55:18', 0, 'englishtitle', 'englishconten');
INSERT INTO `rubber_news` VALUES (11, '中文标题10', 'http://img4.imgtn.bdimg.com/it/u=508387608,2848974022&fm=26&gp=0.jpg', '中文内容', '2019-08-26 22:55:18', 0, 'englishtitle', 'englishconten');
INSERT INTO `rubber_news` VALUES (22, '中文标题11', 'http://img4.imgtn.bdimg.com/it/u=508387608,2848974022&fm=26&gp=0.jpg', '中文内容', '2019-08-26 22:55:18', 1, 'englishtitle', 'englishconten');
INSERT INTO `rubber_news` VALUES (23, '中文标题11', 'http://img4.imgtn.bdimg.com/it/u=508387608,2848974022&fm=26&gp=0.jpg', '<div>中文内容</div>', '2019-08-26 22:55:18', 0, 'englishtitle', 'englishconten');
COMMIT;

-- ----------------------------
-- Table structure for rubber_product
-- ----------------------------
DROP TABLE IF EXISTS `rubber_product`;
CREATE TABLE `rubber_product` (
  `ID` int(11) NOT NULL COMMENT 'ID',
  `TITLE_CN` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '中文标题',
  `TITLE_EN` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '英文标题',
  `IMGS` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci COMMENT '图片',
  `CONTENT_CN` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci COMMENT '中文内容',
  `CONTENT_EN` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci COMMENT '英文内容',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of rubber_product
-- ----------------------------
BEGIN;
INSERT INTO `rubber_product` VALUES (1, 'qw', 'qwq', 'http://pic16.nipic.com/20111006/6239936_092702973000_2.jpg,http://pic16.nipic.com/20111006/6239936_092702973000_2.jpg,http://pic16.nipic.com/20111006/6239936_092702973000_2.jpg,http://pic16.nipic.com/20111006/6239936_092702973000_2.jpg', 'qwqw', 'qwqw');
COMMIT;

-- ----------------------------
-- Table structure for rubber_user
-- ----------------------------
DROP TABLE IF EXISTS `rubber_user`;
CREATE TABLE `rubber_user` (
  `ID` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `USER_NAME` varchar(255) DEFAULT NULL COMMENT '用户名',
  `PWD` varchar(255) DEFAULT NULL COMMENT '密码',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of rubber_user
-- ----------------------------
BEGIN;
INSERT INTO `rubber_user` VALUES (1, 'admin', '1234');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
