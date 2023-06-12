import { PORT, app } from "./config/express-config";
import { appRouter } from "../presentation/controllers/routes";

app.use("/", appRouter);

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
