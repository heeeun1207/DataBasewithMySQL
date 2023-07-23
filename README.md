# 데이터베이스 시스템의 개념

1부 : 데이터베이스 시스템에서 어떻게 데이터를 저장하고 어떻게 원하는 데이터만 찾아내는지 알아본다.

# PART02 데이터베이스 프로그래머

### SQL 기초

1. 데이터베이스 생성 권한 부여하기
   MySQL에서 사용자에게 권한을 부여하려면 해당 작업을 수행할 수 있는 권한을 가진 사용자 (보통은 root 계정)이어야 한다.

```
mysql -u root -p
```

2. 'madang' 사용자에게 'testdb' 데이터베이스에 대한 생성 권한 부여하기

```
GRANT CREATE ON testdb.* TO 'madang'@'localhost';
```

3. 권한 변경 사항을 즉시 적용하기 위해 FLUSH PRIVILEGES; 명령을 실행하기

```
FLUSH PRIVILEGES;
```

3-1. 모든 권한 주기
보안상의 이유로 모든 권한을 부여하는 것은 권장되지 않는다.대신 필요한 권한만 부여하는 것이 좋다.

```
GRANT ALL PRIVILEGES ON *.* TO 'madang'@'localhost';
```

4. 데이터베이스 확인하기

```
mysql> show databases
```

5. MySQL에서는 AUTO_INCREMENT로 설정된 컬럼은 PRIMARY KEY 또는 UNIQUE KEY와 함께 정의해야 합니다.
   이러한 제약 때문에 오류가 발생한 것입니다.

```
CREATE TABLE test (
  id smallint unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name varchar(20) NOT NULL
);
```

표 3-3 기본 명령어

```
mysql -u [username] -p;
use [database];
show databases;
show tables;
exit;
```

/_ 이름: demo_madang.sql _/
/_ 설명 _/

/_ root 계정으로 접속, madang 데이터베이스 생성, madang 계정 생성 _/
/_ MySQL Workbench에서 초기화면에서 +를 눌러 root connection을 만들어 접속한다. _/
DROP DATABASE IF EXISTS madang;
DROP USER IF EXISTS madang@localhost;
create user madang@localhost identified WITH mysql_native_password by 'madang';
create database madang;
grant all privileges on madang.\* to madang@localhost with grant option;
commit;

/_ madang DB 자료 생성 _/
/_ 이후 실습은 MySQL Workbench에서 초기화면에서 +를 눌러 madang connection을 만들어 접속하여 사용한다. _/

USE madang;

CREATE TABLE Book (
bookid INTEGER PRIMARY KEY,
bookname VARCHAR(40),
publisher VARCHAR(40),
price INTEGER
);

CREATE TABLE Customer (
custid INTEGER PRIMARY KEY,  
 name VARCHAR(40),
address VARCHAR(50),
phone VARCHAR(20)
);

CREATE TABLE Orders (
orderid INTEGER PRIMARY KEY,
custid INTEGER ,
bookid INTEGER ,
saleprice INTEGER ,
orderdate DATE,
FOREIGN KEY (custid) REFERENCES Customer(custid),
FOREIGN KEY (bookid) REFERENCES Book(bookid)
);

INSERT INTO Book VALUES(1, '축구의 역사', '굿스포츠', 7000);
INSERT INTO Book VALUES(2, '축구아는 여자', '나무수', 13000);
INSERT INTO Book VALUES(3, '축구의 이해', '대한미디어', 22000);
INSERT INTO Book VALUES(4, '골프 바이블', '대한미디어', 35000);
INSERT INTO Book VALUES(5, '피겨 교본', '굿스포츠', 8000);
INSERT INTO Book VALUES(6, '역도 단계별기술', '굿스포츠', 6000);
INSERT INTO Book VALUES(7, '야구의 추억', '이상미디어', 20000);
INSERT INTO Book VALUES(8, '야구를 부탁해', '이상미디어', 13000);
INSERT INTO Book VALUES(9, '올림픽 이야기', '삼성당', 7500);
INSERT INTO Book VALUES(10, 'Olympic Champions', 'Pearson', 13000);

INSERT INTO Customer VALUES (1, '박지성', '영국 맨체스타', '000-5000-0001');
INSERT INTO Customer VALUES (2, '김연아', '대한민국 서울', '000-6000-0001');  
INSERT INTO Customer VALUES (3, '장미란', '대한민국 강원도', '000-7000-0001');
INSERT INTO Customer VALUES (4, '추신수', '미국 클리블랜드', '000-8000-0001');
INSERT INTO Customer VALUES (5, '박세리', '대한민국 대전', NULL);

INSERT INTO Orders VALUES (1, 1, 1, 6000, STR_TO_DATE('2014-07-01','%Y-%m-%d'));
INSERT INTO Orders VALUES (2, 1, 3, 21000, STR_TO_DATE('2014-07-03','%Y-%m-%d'));
INSERT INTO Orders VALUES (3, 2, 5, 8000, STR_TO_DATE('2014-07-03','%Y-%m-%d'));
INSERT INTO Orders VALUES (4, 3, 6, 6000, STR_TO_DATE('2014-07-04','%Y-%m-%d'));
INSERT INTO Orders VALUES (5, 4, 7, 20000, STR_TO_DATE('2014-07-05','%Y-%m-%d'));
INSERT INTO Orders VALUES (6, 1, 2, 12000, STR_TO_DATE('2014-07-07','%Y-%m-%d'));
INSERT INTO Orders VALUES (7, 4, 8, 13000, STR_TO_DATE( '2014-07-07','%Y-%m-%d'));
INSERT INTO Orders VALUES (8, 3, 10, 12000, STR_TO_DATE('2014-07-08','%Y-%m-%d'));
INSERT INTO Orders VALUES (9, 2, 10, 7000, STR_TO_DATE('2014-07-09','%Y-%m-%d'));
INSERT INTO Orders VALUES (10, 3, 8, 13000, STR_TO_DATE('2014-07-10','%Y-%m-%d'));

-- 여기는 3장에서 사용되는 Imported_book 테이블
CREATE TABLE Imported_Book (
bookid INTEGER,
bookname VARCHAR(40),
publisher VARCHAR(40),
price INTEGER
);

INSERT INTO Imported_Book VALUES(21, 'Zen Golf', 'Pearson', 12000);
INSERT INTO Imported_Book VALUES(22, 'Soccer Skills', 'Human Kinetics', 15000);
commit;
