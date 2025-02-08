import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Home",
};

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const HomePage = async () => {
  await delay(2000);
  return <p>Bart Store</p>;
};

export default HomePage;
