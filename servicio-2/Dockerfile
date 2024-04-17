FROM golang:1.22.2-alpine3.19
COPY api.go /app/
WORKDIR /app
RUN go mod init api
RUN go get -u github.com/gin-gonic/gin
CMD ["go", "run", "api.go"]