import express from "express";

import swaggerUi from "swagger-ui-express";
import userRoutes from "./user/user.routes";
import swaggerJsonFile from "../swagger/swagger.json"
// import { isAdminMiddleware } from "./common/middleware/isAdmin.middleware";


// routes
const router = express.Router();

router.use("/users" ,userRoutes);

router.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerJsonFile));

export default router;