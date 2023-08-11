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

## 1. Table: posts 해당 테이블의 스키마를 수정하여 새로운 열을 정의

```
ALTER TABLE posts
ADD COLUMN created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP;

```

## 1-2 posts 테이블에서 'id' 열을 제거하고 대신 'post_id' 열을 PRIMARY KEY로 설정

```
ALTER TABLE posts
DROP PRIMARY KEY,
DROP COLUMN id,
ADD COLUMN post_id INT AUTO_INCREMENT PRIMARY KEY FIRST;

```

| Field      | Type         | Null | Key | Default           | Extra             |
| ---------- | ------------ | ---- | --- | ----------------- | ----------------- |
| id         | int          | NO   | PRI | NULL              | auto_increment    |
| title      | varchar(255) | NO   |     | NULL              |                   |
| content    | text         | NO   |     | NULL              |                   |
| created_at | timestamp    | YES  |     | CURRENT_TIMESTAMP | DEFAULT_GENERATED |

## 2. Table: users 외래 키 제약 조건(Foreign Key Constraints)은 참조하는 테이블 생성

```
CREATE TABLE users (
  user_id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

```

| Field      | Type         | Null | Key | Default           | Extra             |
| ---------- | ------------ | ---- | --- | ----------------- | ----------------- |
| user_id    | int          | NO   | PRI | NULL              | auto_increment    |
| username   | varchar(255) | NO   |     | NULL              |                   |
| created_at | timestamp    | YES  |     | CURRENT_TIMESTAMP | DEFAULT_GENERATED |

## 3. Table: comments 테이블 생성

```
CREATE TABLE comments (
  comment_id INT AUTO_INCREMENT PRIMARY KEY,
  content TEXT NOT NULL,
  post_id INT,
  user_id INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (post_id) REFERENCES posts(post_id) ON DELETE CASCADE,
  FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

```

해당 테이블 열 확인하기

```
SHOW COLUMNS FROM comments;
```

| Field      | Type      | Null | Key | Default           | Extra             |
| ---------- | --------- | ---- | --- | ----------------- | ----------------- |
| comment_id | int       | NO   | PRI | NULL              | auto_increment    |
| content    | text      | NO   |     | NULL              |                   |
| post_id    | int       | YES  | MUL | NULL              |                   |
| user_id    | int       | YES  | MUL | NULL              |                   |
| created_at | timestamp | YES  |     | CURRENT_TIMESTAMP | DEFAULT_GENERATED |

## 8/11 Table 수정

- 'posts' 테이블에 'user_id' 열 추가

```
ALTER TABLE posts
ADD COLUMN user_id INT;
```

- 'comments' 테이블의 외래 키 수정

```
ALTER TABLE comments
DROP FOREIGN KEY comments_ibfk_1; -- 기존의 외래 키 제거
ALTER TABLE comments
ADD FOREIGN KEY (post_id) REFERENCES posts(post_id) ON DELETE CASCADE; -- 수정된 외래 키 추가
```

- 'comments' 테이블과 'posts' 테이블의 조인 실행

```
SELECT comments.\*, posts.title
FROM comments
INNER JOIN posts ON comments.post_id = posts.post_id;
```

- 'comments' 테이블과 'users' 테이블의 조인 실행

```
SELECT comments.\*, users.username
FROM comments
INNER JOIN users ON comments.user_id = users.user_id;
```

## 02 Table 수정

```
ALTER TABLE users
ADD COLUMN password VARCHAR(255) NOT NULL AFTER username,
ADD COLUMN email VARCHAR(255) NOT NULL AFTER password;

```

```
- 이전에 존재하던 comments 테이블 삭제
DROP TABLE IF EXISTS comments;

- comments 테이블 재생성
CREATE TABLE comments (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name TEXT,
    user_id INT,
    post_id INT,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (post_id) REFERENCES posts(post_id)
);


```
