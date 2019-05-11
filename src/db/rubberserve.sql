/*
Navicat MySQL Data Transfer

Source Server         : 本地
Source Server Version : 50528
Source Host           : localhost:3306
Source Database       : rubberserve

Target Server Type    : MYSQL
Target Server Version : 50528
File Encoding         : 65001

Date: 2019-05-11 09:05:24
*/

SET FOREIGN_KEY_CHECKS=0;

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
INSERT INTO `company_info` VALUES ('1', '南京丰固橡塑有限公司', 'NANJING FENGGU RUBBER&PLASTIC CO.,LTD', '', null, '563n.wang@12345.com', null, null, null, '200000', '上海水电路682号天虹商务大厦6、7、16、17F', '在科技创新领域，唯星集团分别与复旦大学、上海大学、华师大等知名院校达成战略伙伴关系，分别成立了云计算、大数据、智能营销等不同领域的产学研合作平台。2015年6月，唯星在美国硅谷成立研发中心，开拓海外科研基地；自成立至今唯星集团已取得60个软件著作权及1项发明专利；同时，经过多年在技术创新领域的探索与积累，唯星集团目前已获得虹口区科技小巨人企业、高新技术企业、双软认证企业、院士专家工作站、上海名牌企业等多项荣誉资质称号。', '在科技创新领域，唯星集团分别与复旦大学、上海大学、华师大等知名院校达成战略伙伴关系，分别成立了云计算、大数据、智能营销等不同领域的产学研合作平台。\r\n\r\n2015年6月，唯星在美国硅谷成立研发中心，开拓海外科研基地；自成立至今唯星集团已取得60个软件著作权及1项发明专利；同时，经过多年在技术创新领域的探索与积累，唯星集团目前已获得虹口区科技小巨人企业、高新技术企业、双软认证企业、院士专家工作站、上海名牌企业等多项荣誉资质称号。', null, null, 'In the field of scientific and technological innovation, Weixing Group has established strategic partnerships with well-known institutions such as Fudan University, Shanghai University and China Normal University, and established a platform for cooperation in production, research and research in different fields such as cloud computing, big data and intelligent marketing. In June 2015, Weixing established a research and development center in Silicon Valley, USA, and opened up overseas research bases. Since its establishment, Weixing Group has obtained 60 software copyrights and 1 invention patent. At the same time, after years of exploration and accumulation in the field of technological innovation, Weixing Group has obtained many honorary qualifications such as Hongkou District Science and Technology Small Giant Enterprise, High-tech Enterprise, Double Soft Certification Enterprise, Academician Expert Workstation and Shanghai Famous Brand Enterprise.\r\nIn the field of scientific and technological innovation, Weixing Group has established strategic partnerships with well-known institutions such as Fudan University, Shanghai University and China Normal University, and established a platform for cooperation in production, research and research in different fields such as cloud computing, big data and intelligent marketing. In June 2015, Weixing established a research and development center in Silicon Valley, USA, and opened up overseas research bases. Since its establishment, Weixing Group has obtained 60 software copyrights and 1 invention patent. At the same time, after years of exploration and accumulation in the field of technological innovation, Weixing Group has obtained many honorary qualifications such as Hongkou District Science and Technology Small Giant Enterprise, High-tech Enterprise, Double Soft Certification Enterprise, Academician Expert Workstation and Shanghai Famous Brand Enterprise.\r\nIn the field of scientific and technological innovation, Weixing Group has established strategic partnerships with well-known institutions such as Fudan University, Shanghai University and China Normal University, and established a platform for cooperation in production, research and research in different fields such as cloud computing, big data and intelligent marketing. In June 2015, Weixing established a research and development center in Silicon Valley, USA, and opened up overseas research bases. Since its establishment, Weixing Group has obtained 60 software copyrights and 1 invention patent. At the same time, after years of exploration and accumulation in the field of technological innovation, Weixing Group has obtained many honorary qualifications such as Hongkou District Science and Technology Small Giant Enterprise, High-tech Enterprise, Double Soft Certification Enterprise, Academician Expert Workstation and Shanghai Famous Brand Enterprise.\r\nIn the field of scientific and technological innovation, Weixing Group has established strategic partnerships with well-known institutions such as Fudan University, Shanghai University and China Normal University, and established a platform for cooperation in production, research and research in different fields such as cloud computing, big data and intelligent marketing. In June 2015, Weixing established a research and development center in Silicon Valley, USA, and opened up overseas research bases. Since its establishment, Weixing Group has obtained 60 software copyrights and 1 invention patent. At the same time, after years of exploration and accumulation in the field of technological innovation, Weixing Group has obtained many honorary qualifications such as Hongkou District Science and Technology Small Giant Enterprise, High-tech Enterprise, Double Soft Certification Enterprise, Academician Expert Workstation and Shanghai Famous Brand Enterprise.\r\nIn the field of scientific and technological innovation, Weixing Group has established strategic partnerships with well-known institutions such as Fudan University, Shanghai University and China Normal University, and established a platform for cooperation in production, research and research in different fields such as cloud computing, big data and intelligent marketing. In June 2015, Weixing established a research and development center in Silicon Valley, USA, and opened up overseas research bases. Since its establishment, Weixing Group has obtained 60 software copyrights and 1 invention patent. At the same time, after years of exploration and accumulation in the field of technological innovation, Weixing Group has obtained many honorary qualifications such as Hongkou District Science and Technology Small Giant Enterprise, High-tech Enterprise, Double Soft Certification Enterprise, Academician Expert Workstation and Shanghai Famous Brand Enterprise.\r\nIn the field of scientific and technological innovation, Weixing Group has established strategic partnerships with well-known institutions such as Fudan University, Shanghai University and China Normal University, and established a platform for cooperation in production, research and research in different fields such as cloud computing, big data and intelligent marketing. In June 2015, Weixing established a research and development center in Silicon Valley, USA, and opened up overseas research bases. Since its establishment, Weixing Group has obtained 60 software copyrights and 1 invention patent. At the same time, after years of exploration and accumulation in the field of technological innovation, Weixing Group has obtained many honorary qualifications such as Hongkou District Science and Technology Small Giant Enterprise, High-tech Enterprise, Double Soft Certification Enterprise, Academician Expert Workstation and Shanghai Famous Brand Enterprise.\r\n', 'Founded in 2005, Weixing adheres to the concept of “integrating digital resources and technology-driven marketing”, focusing on the innovation and integration of digital marketing technologies, products, resources and services, and providing comprehensive application support for all stages of traditional enterprise Internet business transformation.', '唯星成立于2005年，秉承\"整合数字资源,技术驱动营销\"的理念，专注于数字营销技术、产品、资源、服务的创新与整合，为传统企业互联网商业转型各个阶段提供全方位应用支撑。');

-- ----------------------------
-- Table structure for rubber_info
-- ----------------------------
DROP TABLE IF EXISTS `rubber_info`;
CREATE TABLE `rubber_info` (
  `ID` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `TYPE` int(11) DEFAULT '0' COMMENT '0 主页，\r\n1 关于我们，\r\n2 产品中心，\r\n3 新闻，\r\n4 设备 ， \r\n5 联系我们',
  `CN_CONTENT` varchar(1000) DEFAULT '' COMMENT '中文内容',
  `EN_CONTENT` varchar(1000) DEFAULT '' COMMENT '英文内容',
  `COVER` varchar(255) DEFAULT '' COMMENT '封面',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of rubber_info
-- ----------------------------

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
INSERT INTO `rubber_user` VALUES ('1', 'admin', '1234');
