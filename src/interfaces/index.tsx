export type IconStates = "dashboard-icon"
  | "active-dot"
  | "open-book"
  | "challenges-icon"
  | "caution-circle"
  | "logout-icon"
  | "gear"
  | "rainbow-wave"
  | "pencil"
  | "alert"
  | "filter"
  | "star"
  | "user-icon"
  | "file-searching"
  | "pipe"
  | "verified-check"
  | "team-spirit"
  | "yellow-clipboard"
  | "trophy"
  | "github-icon"
  | "behance-icon"
  | "shieldedStar"
  | "orangeDollarIcon"
  | "dribble-icon"
  | "linkedIn"
  | "twitter-icon"
  | "suareTick"
  | "headerImage"
  | "tick"
  | "people"
  | "envelope"
  | "google-icon"
  | "circle-arrow-left"
  | "circle-arrow-right"
  | "blue-check"
  | "eye-icon"
  | "arrow-left"
  | "arrow-right"
  | "eye-icon-hidden"
  | "cancel"
  | "linkedIn-icon"
  | "timeline"
  | "dollar-circle"
  | "circle-arrow-left-black"
  | "circle-arrow-right-black"
  | "shield"
  | "fact-check"
  | "schedule"
  | "caret-down"
  | "caution";

export interface sidebarItem {
  title: string;
  icon: IconStates,
  path: string;
}

export interface userAuthPayload {
  email: string;
  password: string;
}

export interface googleAuthPayload {
  token: string;
}

export interface onboardingFormOneProps {
  selectedCountry: string;
  userPicture: File | null;
}
export interface onboardingFormTwoProps {
  primaryRole: string;
  currentCompany: string;
}

export interface onboardingFormThreeProps {
  skillsets: string[]; // you need a definite list of skillsets
  levelOfExperience: "Entry Level" | "Intermediate" | "Expert";
  areaOfInterests: string[]; // also need a definite list of areas of interest
}

export interface onboardingFormFourProps {
  about: string;
}

export type optionFormat = {
  label: string;
  value: string;
}

export type UserCategoryMapping = {
  1: 'AMBITIOUS';
  2: 'RISING STAR';
  3: 'EXPERT';
};

export type teamCardEngagementCategory = "join" | "submit" | "view";

export type TeamProjectCardThemes = 'teal' | 'green' | 'blue' | 'gold' | 'pink';