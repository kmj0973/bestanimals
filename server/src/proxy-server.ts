import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import https from "https";
import path from "path";
import fs from "fs";
import "dotenv/config";

const app = express();
const proxy_port = process.env.PROXY_PORT || 3002;

const apiProxyOptions = {
  target: process.env.INFO_TARGET_URL,
  changeOrigin: true,
  pathRewrite: {
    "/api": "",
  },
};

const apiProxy = createProxyMiddleware(apiProxyOptions);

app.use("/api", apiProxy);
console.log(__dirname);

const httpsOptions = {
  key: fs.readFileSync(path.resolve(__dirname, "../server.key")), // SSL 키 파일 경로
  cert: fs.readFileSync(path.resolve(__dirname, "../server.crt")), // SSL 인증서 파일 경로
};

https.createServer(httpsOptions, app).listen(process.env.PROXY_PORT, () => {
  console.log(
    `HTTPS Proxy server is running on https://localhost:${process.env.PROXY_PORT}`
  );
});
