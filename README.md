## ERD 계획 단계

- 업무파악<br>
- 개념적 데이터 모델링<br>
- 논리적 데이터 모델링<br>
- 물리적 데이터 모델링<br>

### 230812

### Eclipse - ERMster - mysql

---

[ 이클립스 ERMaster 플러그인 사용하기 ]

- 테이블 컬럼 생성하기.<br>

  1. .erm 설정하기<br>
     제약조건 설정하기 = 컬럼에대한 "도메인"을 설정한다. 즉, 어떤 데이터타입 범위를 사용하겠다는 경계를 지어준다.
  2. 테이블 생성하기<br>
     1)author : id int (NN), name vc(15)(NN), profile vc(100)(NN), created datetime(NN)<br>
     2)topic : id int (NN), title vc(30)(NN), description test (NN), created datetime(NN)<br>
     3)comments: id int (NN),description test (NN), created datetime(NN)<br>
     4)dormant : author_id (NN), created datetime(NN)<br>
     - 휴면자 ( 1:1 데이터 관계의 처리를 위해서 테이블을 추가 생성함 ) <br>
     - author_id 와 동일하게 id값 생성

---

## 관계의 처리 방법

### Relationship -> PK, FK

1. 1 : N 관계<br>
2. 1 : 1 관계<br>
   ![1:1 관계](dormant_relationship.png)

- dormant는 author에게 의존하고있다.<br>
  혼자서도 잘 지낼 수있는 테이블 : 부모테이블 <br>
  의존하는 테이블 : 자식테이블<br>
  그런 맥락에서, 저자테이블의 PK / 휴면테이블 FK 를 설정하자.<br>

3. N : M 관계<br>
   Mapping table

---

![ERD](ERD230812.png)

### 230813

## First Normal Form 제 1 정규화

## Automatic columns

즉, 각 컬럼의 값들이 원자적이여야한다. = 중복된 값을 제거하고, 각 값을 하나만 가져라

---

## Second Normal Form 제 2 정규화

## No partial dependencies

부분 종속성이 없어야 한다. = 표의 기본키 중에서 중복키가 없어야한다.

---

## Third Normal Form 제 3 정규화

## No transitive dependencies

이행적 종속성<br>
같은 성격의 컬럼을 어떻게 분류할 지 전략을 짜야한다.
![Third Normal Form](Thrid_normal_form.png)
