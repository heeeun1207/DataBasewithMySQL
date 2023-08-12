## ERD 계획 단계

- 개념적 데이터 모델링<br>
- 논리적 데이터 모델링

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
   ![이미지 설명](/Users/heeeun/Desktop/DataBasewithMySQL/230812/dormant_relationship.png)

- dormant는 author에게 의존하고있다.<br>
  혼자서도 잘 지낼 수있는 테이블 : 부모테이블 <br>
  의존하는 테이블 : 자식테이블<br>
  그런 맥락에서, 저자테이블의 PK / 휴면테이블 FK 를 설정하자.<br>

3. N : N 관계<br>
