# 데이터베이스 시스템의 개념

1부 : 데이터베이스 시스템에서 어떻게 데이터를 저장하고 어떻게 원하는 데이터만 찾아내는지 알아본다.

# PART02 데이터베이스 프로그래머

### SQL 기초

1. 데이터베이스 생성 권한 부여하기
   MySQL에서 사용자에게 권한을 부여하려면 해당 작업을 수행할 수 있는 권한을 가진 사용자 (보통은 root 계정)이어야 한다.

```
mysql -u root -p
```

2. 'madang' 사용자에게 'testdb' 데이터베이스에 대한 생성 권한 부여하기

```
GRANT CREATE ON testdb.* TO 'madang'@'localhost';
```

3.권한 변경 사항을 즉시 적용하기 위해 FLUSH PRIVILEGES; 명령을 실행하기

```
FLUSH PRIVILEGES;
```

4.데이터베이스 확인하기

```
mysql> show databases
```
