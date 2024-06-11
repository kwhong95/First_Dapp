# First Dapp

## Design

### Entire Structure

> 전체 웹 앱 접근 시 지갑 주소(메타 마스크)를 체크하여 관리자 권한 여부를 체크하고 관리자와 일반 유저를 나눠 웹 앱을 다르게 노출한다.

![image](https://github.com/kwhong95/First_Dapp/assets/70752848/d20e6285-f866-4ff0-95fc-7666dd844196)

### ICO - Sequence Diagram

> 관리자와 유저별로 웹앱, 메타마스크, 컨트랙트가 어떻게 상호작용하여 자금을 조달할지 정의한다.

`User`는 웹앱에서 `ERC20` 토큰을 `mint`하고 이벤트 로그를 체크해볼 수 있다.

![image](https://github.com/kwhong95/First_Dapp/assets/70752848/a674ce34-a8c6-4eec-ad3f-d46ca35c4ad7)

### NFT - Sequence Diagram

`NFT`를 `ERC20` 토큰으로 구매하고 구매내역을 확인할 수 있다.

![image](https://github.com/kwhong95/First_Dapp/assets/70752848/f67413e9-655a-4870-bca6-5834f7726da1)

### DAO - Sequence Diagram

![image](https://github.com/kwhong95/First_Dapp/assets/70752848/e329de06-6452-40e5-b328-35713da52396)

## Stack

- Frontend : Next.js