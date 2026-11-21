export type MemberAchievement = {
  id: string;
  contributorName: string;
  image: string;
  achievementName: string;
  description: string;
  contactEmail?: string;
  contactPhone?: string;
  url?: string;
};

export const memberAchievementTemplate: MemberAchievement = {
  id: "unique-id",
  contributorName: "Contributor name",
  image: "/images/contributors/contributor-name.jpg",
  achievementName: "Achievement name",
  description: "A short description of the achievement and its community impact.",
  contactEmail: "",
  contactPhone: "",
  url: "",
};

export const memberAchievements: MemberAchievement[] = [];
