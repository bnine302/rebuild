const express = require("express");
const path = require("path");
const app = express();
const port = 8080;

// 정적 파일 제공 (build 폴더)
app.use(express.static(path.join(__dirname, "build")));

// 모든 요청을 React 앱으로 라우팅
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
