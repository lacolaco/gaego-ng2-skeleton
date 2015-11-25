package app

import (
  "net/http"
  "fmt"
  "time"
)

func helloService() {
  http.HandleFunc("/api/data", handlerGetData)
}

func handlerGetData(w http.ResponseWriter, r *http.Request) {
  w.Write([]byte(fmt.Sprintf(`{"time": %v}`, time.Now().Unix() * 1000)))
}
