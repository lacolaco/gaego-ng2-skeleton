package app

import (
    "net/http"
)

func helloService(){
  http.HandleFunc("/api/hello", handlerHello)
}

func handlerHello(w http.ResponseWriter, r *http.Request) {
    w.Write([]byte("Hello"))
}
