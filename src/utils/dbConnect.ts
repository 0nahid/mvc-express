export const dbConnect = async (): Promise<void> => {
  try {
    console.log("Connecting to database...");
    console.log("Trying to connect to MongoDB");
    for (let i = 1; i <= 3; i++) {
      console.log(`⏲  Trying to connect to MongoDB... ${i}`);
    }
    await console.log("Connected to database 🔥");
  } catch (error) {
    console.log(`Error connecting to database: ${error}`);
  }
};
