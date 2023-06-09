import { PORT, app } from "./express-config";
import { appRouter } from "./routes";

app.use("/", appRouter);

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
