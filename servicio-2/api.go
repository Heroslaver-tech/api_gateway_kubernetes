package main

import (
  "net/http"

  "github.com/gin-gonic/gin"
)

func main() {
  gin.SetMode(gin.ReleaseMode)
  r := gin.Default()
  r.GET("/service-2", func(c *gin.Context) {
    c.JSON(http.StatusOK, gin.H{
      "res": "Hello there. I like k8s, I only know the basic concepts though",
    })
  })

  r.Run("0.0.0.0:8000")
}
