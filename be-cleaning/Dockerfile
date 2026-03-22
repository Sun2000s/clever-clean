# ---------- build stage ----------
FROM maven:3.9.6-eclipse-temurin-21 AS build

WORKDIR /app

# copy pom ก่อน (ช่วย cache dependency)
COPY pom.xml .
RUN mvn dependency:go-offline

# copy code ทั้งหมด
COPY src ./src

# build jar
RUN mvn clean package -DskipTests

# ---------- run stage ----------
FROM eclipse-temurin:21-jdk-jammy

WORKDIR /app

# copy jar จาก build stage
COPY --from=build /app/target/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]