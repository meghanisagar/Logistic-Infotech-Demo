interface Player {
  userID: string;
  displayName: string;
  avatar: string;
  score: number;
}

const playerScoreList: Player[] = [
  { userID: "u-1", displayName: "Jone", avatar: "👦", score: 2000 },
  { userID: "u-2", displayName: "Victoria", avatar: "👨‍🦱", score: 3000 },
  { userID: "u-3", displayName: "Joy", avatar: "🐭", score: 4000 },
  { userID: "u-4", displayName: "Quinn", avatar: "🧑", score: 2500 },
  { userID: "u-5", displayName: "Sheenalo", avatar: "👩🏽‍🦰", score: 3500 },
  { userID: "u-6", displayName: "Charlene", avatar: "👱‍♂️", score: 3700 },
  { userID: "u-7", displayName: "LeonaBaby", avatar: "👩‍🦰", score: 2200 },
  { userID: "u-8", displayName: "ImWord", avatar: "🐭", score: 3100 },
  { userID: "u-9", displayName: "Sunny", avatar: "👨‍🦱", score: 4200 },
  { userID: "u-10", displayName: "Dophine", avatar: "👩🏽‍🦰", score: 5000 },
];

export { playerScoreList };    export type { Player };

