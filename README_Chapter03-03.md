# 데이터베이스 시스템의 개념

1부 : 데이터베이스 시스템에서 어떻게 데이터를 저장하고 어떻게 원하는 데이터만 찾아내는지 알아본다.

# PART02 데이터베이스 프로그래머

## SQL 기초 실습

3-1 모든 도서의 이름과 가격을 검색하시오
<br>
3-2-1 모든 도서의 도서번호, 도서이름, 출판사, 가격을 검색하시오.
<br>
3-2-2 3-2-1은 모든 열의 이름이므로,
<br>
\*(asterisk)만 써주면 열의 이름을 쓰지않고, 편리하게 사용할 수 있다.

```

select bookname,price from book;
select bookid,bookname,publisher,price from book;
select * from book;

```

3-3 도서 테이블에 있는 모든 출판사를 검색하시오.
<br> \*단 중복을 제거하시오.

```
select distinct publisher from book;
```

### WHERE조건

- 비교
  <br>
  3-4 가격이 20,000원 미만인 도서를 검색하시오.
  <br> \*숫자의 경우 천 단위를 표시하는 콤마(,) 기호를 사용하지 않는다.

```
select * from book where price <20000;
```

- 범위
  <br>
  3-5 가격이 10,000원 이상 20,000이하인 도서를 검색하시오.
  <br>
  (논리 연산자인 AND를 사용하여 다음과 같이 사용할 수 있다.)

```
select * from book where price between 10000 and 20000;
select * from book where price >=10000 and price <=20000;

```

- 집합
  <br>
  WHERE절에서 두 개 이상의 값을 비교하려면 IN, NOT IN 연산자를 사용한다.
  <br>
  IN : 집합의 원소인진 판단하는 연산자
  <br>
  3-6 출판사가 '굿스포츠' 혹은 '대한미디어'인 도서를 검색하시오.

```
select * from book where publisher IN('굿스포츠','대한미디어');
select * from book where publisher NOT IN('굿스포츠','대한미디어');
```

- 패턴
  <br>
  LIKE : 문자열 패턴을 비교할 때 사용하는 연산자
  <br> \*찾는 속성이 텍스트 혹은 날짜 데이터를 포함하면 비교 값에는 반드시 영문 작 따옴표(' ')로 둘러싸야한다.
  <br>한글의 작은 따옴표를 사용하면 오류가 난다.

---

##### 여기서 잠깐

### 문자열 비교 시 인용부호

일반 프로그래밍 언어에서 문자열은 " "(큰 따옴표)를 사용하지만,
<br>SQL 언어에서는 '' (작은 따옴표)를 사용한다.
<br>이유는, SQL 문 자체가 문자열로 인용이 되어 다른 프로그래밍언어에 삽입될 때 혼란이 있을 수 있기 때문이다.

---

3-7 '축구의 역사'를 출간한 출판사를 검색하시오.

```
select bookname,publisher from book where bookname LIKE '축구의 역사';
```

### 와일드 문자 사용하기

#### %임의의 문자열을 대신하는 기호%

3-8 도서이름에 '축구'가 포함된 출판사를 검색하시오.

```
select bookname,publisher from book where bookname LIKE '%축구%';
```

#### \_(밑줄기호) 특정 위치에 한 문자만 대신할 경우 사용

3-9 도서이름의 왼쪽 두 번째 위치에 '구'라는 문자열을 갖는 도서를 검색하시오.

```
select * from book where bookname LIKE '_구%';
```

### [표3-6] 와일드 문자 정리

| 와일드 문자 | 의미                          | 사용 예                                          |
| :---------: | ----------------------------- | ------------------------------------------------ |
|      +      | 문자열 연결                   | '골프' + '바이블' : '골프 바이블'                |
|      %      | 0개 이상의 문자열과 일치      | %축구% 축구를 포함하는 문자열                    |
|     []      | 1개의 문자와 일치             | '[0-5]%' : 0-5 사이 숫자로 시작하는 문자열       |
|     [^]     | 1개의 문자와 불일치           | '[^0-5]%' : 0-5 사이 숫자로 시작하지 않는 문자열 |
|     \_      | 특정 위치의 1개의 문자와 일치 | '\_구%' : 두 번째 위치에 '구'가 들어가는 문자열  |

- 복합조건
  <br>
  WHERE절 - AND, OR, NOT 복합조건 명시하기.

<br>
3-10 축구에 관한 도서 중 가격이 20,000원 이상인 도서를 검색하시오.

```
select * from book where bookname LIKE '%축구%' and price >=20000;
select * from book where price >=20000 and bookname LIKE '%축구%';

```

3-11 출판사가 '굿스포츠' 혹은 '대한미디어'인 도서를 검색하시오.

```
select * from book where publisher='굿스포츠' OR publisher='대한미디어';
```

### ORDER BY 정렬의 기본은 ASC 오름차순

3-12 도서를 이름순으로 검색하시오.

```
select * from book order by bookname;
```

3-13 도서를 가격순으로 검색하고, 가격이 같으면 이름순으로 검색하시오.

```
select * from book order by price,bookname;
```

### DESC 내림차순

3-14 도서의 가격을 내림차순으로 검색하시오. 만약 가격이 같다면 출판사의 이름을 오름차순으로 출력하시오.

```
select * from book order by price DESC, publisher ASC;
```

## 집계 함수와 GROUP BY

앞에서 고객이 필요로 하는 질의를 중심으로 살펴보았다면,
<br> '운영자'가 필요로 하는 질의를 중심으로 SQL 기능을 살펴보자.
<br> 도서 판매 총액, 일별 판매량 등 구체적인 집계 내용을 위한 집계함수 사용하기.

### 집계합수\_도서판매액의 합계를 알고 싶다.

3-15 고객이 주문한 도서의 총 판매액을 구하시오.

#### 결과 테이블이 별도의 이름 없이 'SUM(saleprice)'라고 출력된다.

```
select SUM(saleprice) from Orders;
```

3-16 2번 김연아 고객이 주문한 도서의 총 판매액을 구하시오.

#### AS 별칭을 지칭하는 'AS'키워드를 사용하여 열 이름을 부여한다.

```
select SUM(saleprice) AS 총매출 from Orders where custid=2;
```

---

- TIP
  - 최근 버전의 DBMS에서는 AS를 생략할 수 있다.
  - 속성이름의 별칭 중간에 공벡을 넣어야 할 경우 끈 따옴표를 사용한다.

```
select SUM(saleprice) 총매출 from Orders where custid=2;
select SUM(saleprice) "전체 매출" from Orders;
```

---

3-17 고객이 주문한 도서의 총 판매액, 평균값, 최저가, 최고가를 구하시오.

- 집계 함수는 여러 개를 혼합하여 쓸 수 있다.

```
select SUM(saleprice) Total,AVG(saleprice) Average,MIN(saleprice) min,MAX(saleprice) max from orders;
```

3-18 마당서점의 도서 판매 건수를 구하시오.

- 집계 함수 COUNT()는 행의 개수를 센다.
  <br>- () 속성의 이름이 사용되며, 투플의 개수를 센다. ( NULL 값 제외 )
  <br>- 예를들어, COUNT(\*) : 전체 투플의 수
  <br>COUNT(DISNINCT publisher) : 중복을 제거한 출판사의 수

```
select COUNT(*) AS "도서 판매 건수" from orders;
```

### [표3-7] 집계 함수의 종류

| 집계 함수 | 문법                                     | 사용 예    |
| :-------: | ---------------------------------------- | ---------- |
|    SUM    | SUM([ALL or DISTINCT] 속성이름)          | SUM(price) |
|    AVG    | AVG([ALL or DISTINCT] 속성이름)          | AVG(price) |
|   COUNT   | COUNT([ALL or DISTINCT] 속성이름 or \* ) | COUNT(\*)  |
|    MAX    | MAX([ALL or DISTINCT] 속성이름)          | MAX(price) |
|    MIN    | MIN([ALL or DISTINCT] 속성이름)          | MIN(price) |

### GROUP BY\_어느 고객이 얼마나 주문했는지 알고 싶다.

3-19 고객별로 도서의 총 수량과 총 판매액을 구하시오.

```
select custid, count(*) AS "총 도서수량", SUM(saleprice) AS "총 판매액" from orders group by custid order by custid;
```

### HAVING 절 GROUP BY 절의 결과 그룹을 제한하는 역할을 한다.

3-20 가격이 8,000원 이상인 도서를 구매한 고객에 대하여 고객별 주문 도서의 총 수량을 구하시오.
<br>단, 두권 이상 구매한 고객만 구하시오.

```
select custid,count(*) AS "총 도서수량"
from orders
where saleprice>=8000
group by custid
having count(*)>=2;
```

#### 여기서 잠깐

### GROUP BY 절이 포함된 SQL 문의 실행 순서

SQL 문은 실행 순서가 없는 비절차적인(non procedural)언어지만 SQL 문은 내부적으로 실행 순서가 있다.

- GROUP BY, HAVING, ORDER BY 절이 포함된 SQL문 실행 순서 이해하기.

```
5. select custid, count(*) AS 도서수량
1. from orders
2. where saleprice >= 8000
3. group by custid
4. having count(*) >1
6. order by custid;
```

### 두 개 이상 테이블에서 SQL 질의

- 조인(join)
- 부속질의 (subquery)

### 조인\_2개의 테이블을 합체해보자.

- 두 테이블을 아무런 조건을 주지않고 select 시키면 관계대수가 카티전 프로덕트 연산이 된다.
  <br> - 카티전 프로덕트 : 조건이 없는 테이블 간의 조인

```
select *
from cunstomer,orders;
```

3-22 고객과 고객의 주문에 관한 데이터를 고객별로 정렬하여 보이시오.

```
select *
from customer,orders
where customer.custid=orders.custid
order by customer.custid;
```

3-23 고객의 이름과 고객이 주문한 도서의 판매가격을 검색하시오.

---

#### 여기서 잠깐 열 이름을 표기하는 방법

'테이블 이름: 열 이름' 형식의 표현으로 열 이름이 어느 테이블과 연관되는지 정확히 명시한다.

---

```
select name,saleprice
from customer, orders
where customer.custid=orders.custid;
```

3-24 고객별로 주문한 모든 도서의 총 판매액을 구하고, 고객별로 정렬하시오.

```
select name,SUM(saleprice) AS "총 판매액"
from customer,orders
where customer.custid=orders.custid
group by customer.name
order by customer.name;
```

3-25 고객의 이름과 고객이 주문한 도서의 이름을 구하시오.

```
select customer.name, book.bookname
from customer, orders, book
where customer.custid=orders.custid and orders.bookid=book.bookid;

```

3-26 가격이 20,000원인 도서를 주문한 고객의 이름과 도서의 이름을 구하시오.

```
select customer.name, book.bookname
from customer,orders,book
where customer.custid=orders.custid and orders.bookid=book.bookid and book.price=20000;
```

### 외부조인 (outer join)

3-27 도서를 구매하지 않은 고객을 포함하여 고객의 이름과 고객이 주문한 도서의 판매가격을 구하시오.

```
select customer.name, saleprice
from customer LEFT OUTER JOIN orders ON customer.custid=orders.custid;
```

### 부속질의\_SQL 문 내에 또 다른 SQL 문을 작성하기.

- 가격이 가장 비싼 도서의 가격은?
- 가격을 알고 있다면, 가격이 35,000원인 도서의 이름은?

```
select MAX(price) from book;
select bookname AS "가장 비싼 도서" from book where price=35000;
```

두 질의를 하나의 질의로 작성하기.

3-28 가장 비싼 도서의 이름을 보이시오.

```
select bookname AS "가장 비싼 도서"
from book
where price=(SELECT MAX(price) from book);
```

- 부속질의 : 또 다른 테이블 결과를 이용하기 위해서 다시 SELECT문을 괄호로 묶은 것
  <br>- 부속질의는 질의가 중첩되어 있다는 의미에서 중첩질의라고도 한다.

1. 부속질의를 먼저 처리하고,
   <br>
2. 전체질의를 처리한다.

3-29 도서를 구매한 적이 있는 고객의 이름을 검색하시오.

```
select custid from orders;
select name from customer where custid IN(1,2,3,4);
select name from customer where custid IN(select custid from orders);
```

### 세 개 이상의 중첩된 부속질의 처리하기.

3-30 대한미디어에서 출판한 도서를 구매한 고객의 이름을 보이시오.

```
select name from customer where custid IN
(select custid from orders where bookid IN
(select bookid from book where publisher='대한미디어'));
```

3-31 출판사별로 출판사의 평균 도서 가격보다 비싼 도서를 구하시오.

```
select b1.price as "평균 보다 비싼 값", b1.bookname as "평균 가격 보다 비싼 도서"
from book b1
where b1.price>(select avg(b2.price)
from book b2
where b2.publisher=b1.publisher);
```

---

#### 여기서 잠깐 투플 변수

투플변수(tuple variable) :
<br>
테이블 이름이 길거나 한 개의 테이블이 SQL문에 두 번 사용될 때 혼란을 피하기 위해
<br>
테이블의 별칭을 붙여 사용한다.

---

### UNION 과 UNION ALL

3-32 대한민국에서 거주하는 고객의 이름과 도서를 주문한 고객의 이름을 보이시오.

```
select name
from customer
where address LIKE '대한민국%'
UNION
select name
from customer
where custid IN(select custid from orders);
```

```
select name
from customer
where address LIKE '대한민국%'
UNION ALL
select name
from customer
where custid IN(select custid from orders);
```

3- 33 주문이 있는 고객의 이름과 주소를 보이시오.

```
select name AS "주문이 존재하는 고객의 이름",address
from customer cs
where EXISTS
(select * from orders od where cs.custid=od.custid);
```
