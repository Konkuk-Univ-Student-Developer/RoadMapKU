# React 애플리케이션 빌드 단계
FROM node:22 AS build

# 작업 디렉토리 설정
WORKDIR /RoadMapKU

# package.json 및 package-lock.json 복사
COPY package*.json ./

# 의존성 설치
RUN yarn install

RUN yarn add serve

# 빌드 실행
RUN yarn build

RUN yarn serve -s build

# 애플리케이션 소스 복사
COPY . .

# 빌드 결과를 기본 출력 디렉토리에 저장
VOLUME ["/app/build"]