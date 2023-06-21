import { PORT, app } from "./config/express-config";
import { appRouter } from "./routes/routes";

app.use("/", appRouter);

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
