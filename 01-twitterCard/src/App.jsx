import { TwitterFollowCard } from "./TwitterFollowCard";
import "./joder.css";
export function App() {
  const first = { isFollowing: false, userName: "mrbeast", name: "Mr Beast" };
  const seconds = { isFollowing: true, userName: "dualipa", name: "dua" };

  return (
    <section className="App">
      <TwitterFollowCard {...first}>APRAEZ</TwitterFollowCard>
      <TwitterFollowCard {...seconds}>OMAR </TwitterFollowCard>
      <TwitterFollowCard
        isFollowing={false}
        userName="ufc"
        name={"Rosa Ramirez"}
      >
        APRAEZ
      </TwitterFollowCard>
    </section>
  );
}
