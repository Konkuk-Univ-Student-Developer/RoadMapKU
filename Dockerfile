# React 애플리케이션 빌드 단계
FROM node:22 AS build

# 작업 디렉토리 설정
WORKDIR /RoadMapKU

# package.json 및 package-lock.json 복사
COPY package*.json ./

# 의존성 설치
RUN yarn install

# 애플리케이션 소스 복사
COPY . .

# 빌드 실행
RUN yarn build

# 정적 파일을 제공하는 서버 이미지 생성
FROM node:22-alpine AS serve
WORKDIR /app

# 빌드된 파일 복사
COPY --from=build /RoadMapKU/build ./build

# serve 설치
RUN yarn global add serve

# 포트 설정
EXPOSE 3000

# 정적 파일 제공
CMD ["serve", "-s", "build", "-l", "3000"]
