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
