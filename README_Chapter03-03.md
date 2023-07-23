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
