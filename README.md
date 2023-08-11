# DB_prac

## 느낀점 : ERD 꼭 먼저 계획하기.

DBMS: MySQL

---

사용자 정보를 담는 테이블 작성 : users <br>
회원가입 페이지 생성 : sign.html <br>
users 테이블에 회원가입 정보를 데이터베이스에 저장

---

```
npm install bcrypt
npm install express-session

```

## 1. Table : posts 생성

```
CREATE TABLE posts (
  post_id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title varchar(255) NOT NULL,
  content text NOT NULL,
  user_id int,
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);
```

최종
| Field | Type | Null | Key | Default | Extra |
| ------- | ------------ | ---- | --- | ------- | -------------- |
| post_id | int | NO | PRI | NULL | auto_increment |
| title | varchar(255) | NO | | NULL | |
| content | text | NO | | NULL | |
| user_id | int | YES | | NULL | |

## 2. Table: users 외래 키 제약 조건(Foreign Key Constraints)은 참조하는 테이블 생성

```
CREATE TABLE users (
  user_id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username varchar(255) NOT NULL,
  password varchar(255) NOT NULL,
  email varchar(255) NOT NULL
);
```

최종
| Field | Type | Null | Key | Default | Extra |
|------------|--------------|------|-----|-------------------|-------------------|
| user_id | int | NO | PRI | NULL | auto_increment |
| username | varchar(255) | NO | | NULL | |
| password | varchar(255) | NO | | NULL | |
| email | varchar(255) | NO | | NULL | |

## 3. Table: comments 테이블 생성

```
CREATE TABLE comments (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name text,
  user_id int,
  post_id int,
  FOREIGN KEY (user_id) REFERENCES users(user_id),
  FOREIGN KEY (post_id) REFERENCES posts(post_id)
);
```

해당 테이블 열 확인하기

```
SHOW COLUMNS FROM comments;
```

최종
| Field | Type | Null | Key | Default | Extra |
|---------|--------------|------|-----|---------|----------------|
| id | int | NO | PRI | NULL | auto_increment |
| name | text | YES | | NULL | |
| user_id | int | YES | MUL | NULL | |
| post_id | int | YES | MUL | NULL | |
