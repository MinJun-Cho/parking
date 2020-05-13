# parking
html + css + javascript + node.js + mysql을 이용 간단한 입출차가 가능한 주차장 구현

<br>
<br>

## 개요

### **Front-end**

Html + css + Javascript

### **Back-end**

Node.js(express)

### **DataBase**

mysql


<br>
<br>

## 설계


### **시나리오설계**

![사본 -무인주차정산시스템 - 조민준](https://user-images.githubusercontent.com/61219367/81785648-7e212f80-9539-11ea-9d15-7b324b0be05c.jpg)

<br>
<br>

### **UML**


![UML](https://user-images.githubusercontent.com/61219367/81786172-4a92d500-953a-11ea-943b-b6337999a0e0.png)

<br>
<br>


### DB 설계**

```
CREATE TABLE `parking`.`guest_records` (   
  `id` INT(10) NOT NULL AUTO_INCREMENT,   
  `car_number` VARCHAR(45) NOT NULL,   
  `in_time` DATETIME   
  `out_time` DATETIME   
  PRIMARY KEY (`id`))   
ENGINE = InnoDB DEFAULT CHARSET=utf8;
```  


<BR>
<BR>   

## 설명
 
 ![메인화면](https://user-images.githubusercontent.com/61219367/81782601-09e48d00-9535-11ea-82de-5d039e361ddc.png)
 메인화면

 ![입차화면 1](https://user-images.githubusercontent.com/61219367/81782610-0f41d780-9535-11ea-8974-9eb04e021c22.png)

 ![입차화면3](https://user-images.githubusercontent.com/61219367/81782618-11a43180-9535-11ea-9b33-7a611ceb1406.png)

API를 통한 차량 입차 및 예외처리 기능 구현 

![mysql1](https://user-images.githubusercontent.com/61219367/81782638-1832a900-9535-11ea-8e29-c0409531a911.png)

DB에 저장된 차량번호

![출차화면2](https://user-images.githubusercontent.com/61219367/81782655-1d8ff380-9535-11ea-98b6-67e487d53f74.png)

![출차화면3](https://user-images.githubusercontent.com/61219367/81782661-1ec12080-9535-11ea-8e8e-8abfd6f6e2fa.png)


MODAL을 활용한 계산하기 및 출차 구현
