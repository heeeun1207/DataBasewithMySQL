# Chapter 03 SQL 기초

## 04 데이터 정의어

3절에서는 이미 만들어진 테이블을 이용하여 데이터를 검색하는 방법을 배웠다면,
<br> 4절에서는 테이블을 만드는 방법을 배운다.

### CREATE 문

테이블을 구성하고, 속성과 속성에 관한 제약을 정의하며, 기본키 및 왜래키를 정의하는 명령어이다.

```
CREATE TABLE 테이블이름
({ 속성이름  데이터 타입
  [NULL | NOT NULL | UNIQUE | DEFAULT 기본값 | CHECK 체크조건 ]
  }
  [PRIMART KEY 속성이름(들)]
  [FOREGIN KEY 속성이름 REFERENCES 테이블이름(속성이름)]
    [ON DELETE {CASECADE | SET NULL}]
)
```

3-34 다음과 같은 속성을 가진 NewBook 테이블을 생성하시오.
<br>
정수형은 INTEGER를 사용하며 문자형은 가변형 문자타입인 VARCHAR를 사용한다.
<br>
bookid(도서번호) - INTEGER
bookname(도서이름) - VARCHAR(20)
publisher(출판사) - VARCHAR(20)
price(가격) - INTEGER

```
CREATE TABLE NewBook (
  bookid INTEGER,
  bookname VARCHAR(20),
  publisher VARCHAR(20),
  price INTEGER);
```

---

#### 여기서 잠깐 => 문자형 데이터 타입 - CHAR, VARCHAR

CHAR(n)은 n바이트를 가진 문자형타입.
<br> 저장되는 문자의 길이가 n보다 작으면 나머지는 공백으로 채워서 n바이트를 만들어 저장한다.
<br>
<br>
VARCHAR 타입은 마찬가지로 n바이트를 가진 문자형타입이나,
<br>\*저장되는 문자의 길이만큼만 기억장소를 차지하는 가변형이다.

---
 