import express, {} from "express";
import apiRoutes from "./routes/index.js";
import { ServerConfig, Logger } from "./config/index.js";
const app = express();
// Middleware routes
app.use("/api", apiRoutes);
// Start server
app.listen(ServerConfig.PORT, () => {
    console.log(`Server is running on port ${ServerConfig.PORT}`);
    Logger.info(`Successfully started on port ${ServerConfig.PORT}`, "root", {});
});
//# sourceMappingURL=index.js.map