package app

import (
    "net/http"
    "appengine"
    "os"
)

func staticService(){
  http.HandleFunc("/", handlerStaticFile)
}

func handlerStaticFile(w http.ResponseWriter, r *http.Request) {
    c := appengine.NewContext(r);

    staticBase := "web"
    filePath := staticBase + r.URL.Path
    c.Debugf("respond %s", filePath)

    if isFileExist(filePath) {
        http.ServeFile(w, r, filePath)
        return
    }
    http.ServeFile(w, r, staticBase + "/index.html")
}

func isFileExist(filename string) bool {
    fi, err := os.Stat(filename)
    if err != nil {
        return false
    }
    if fi.IsDir() {
        return false
    }
    return true
}
