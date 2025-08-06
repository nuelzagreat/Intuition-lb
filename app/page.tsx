"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const mockData = [
  { username: "user1", score: 98 },
  { username: "user2", score: 87 },
  { username: "user3", score: 75 },
  // Add more static mock entries here
];

export default function LeaderboardPage() {
  const [timeframe, setTimeframe] = useState("all");

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Intuition Leaderboard</h1>

      <div className="flex gap-2 mb-4">
        {["24h", "7d", "30d", "all"].map((tf) => (
          <Button
            key={tf}
            variant={timeframe === tf ? "default" : "outline"}
            onClick={() => setTimeframe(tf)}
          >
            {tf.toUpperCase()}
          </Button>
        ))}
      </div>

      <div className="grid gap-2">
        {mockData.map((user, index) => (
          <Card key={user.username}>
            <CardContent className="flex justify-between p-4">
              <span>
                #{index + 1} — {user.username}
              </span>
              <span>{user.score}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
