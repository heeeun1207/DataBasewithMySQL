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

3-3 도서 테이블에 있는 모든 출판사를 검색하시오
<br> \*단 중복을 제거하시오.

```
select distinct publisher from book;
```
