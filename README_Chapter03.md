# 데이터베이스 시스템의 개념

1부 : 데이터베이스 시스템에서 어떻게 데이터를 저장하고 어떻게 원하는 데이터만 찾아내는지 알아본다.

# PART02 데이터베이스 프로그래머

### SQL 기초 실습

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
  IN => 집합의 원소인진 판단하는 연산자
  <br>
  3-6 출판사가 '굿스포츠' 혹은 '대한미디어'인 도서를 검색하시오.

```
select * from book where publisher IN('굿스포츠','대한미디어');
select * from book where publisher NOT IN('굿스포츠','대한미디어');
```
