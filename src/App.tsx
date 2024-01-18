import { Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/404";
import AuthLayout from "./layouts/AuthLayout";
import SignUp from "./pages/auth/SignUp";
import Login from "./pages/auth/SignIn";
import ForgotPassword from "./pages/auth/ForgotPassword";
import UpdatePassword from "./pages/auth/UpdatePassword";
import AppLayout from "./layouts/DashboardLayout";
import DashboardPage from "./pages/Dashboard";
import Onboarding from "./pages/onboarding/onboarding";
import ProfileSettings from "./pages/usersettings/ProfileSettings";
import SocialIntegrations from "./pages/usersettings/Socials";
import SettingsLayout from "./layouts/SettingsLayout";
import PasswordSettings from "./pages/usersettings/PasswordSettings";
import NotificationsSettings from "./pages/usersettings/Notifications";
import PublicProfileSettings from "./pages/usersettings/PublicProfile";
import AllChallenges from "./pages/challenges/AllChallenges";
import SingleChallenge from "./pages/challenges/SingleChallenge";
import ChallengeTeams from "./pages/challenges/ChallengeTeams";
import Verification from "./pages/auth/Verification";
import PublicProfile from "./components/PublicProfile/PublicProfile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<AppLayout />}>
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="challenges" element={<AllChallenges />} />
          <Route path="challenges/:challengeId" element={<SingleChallenge />} />
          <Route path="challenges/:challengeId/teams" element={<ChallengeTeams />} />
          <Route path="settings/*" element={<SettingsLayout />}>
            <Route index path="profile-settings" element={<ProfileSettings />} />
            <Route index path="password-settings" element={<PasswordSettings />} />
            <Route index path="public-profile" element={<PublicProfileSettings />} />
            <Route index path="notifications" element={<NotificationsSettings />} />
            <Route index path="socials" element={<SocialIntegrations />} />
          </Route>
        </Route>
        <Route path="auth/*" element={<AuthLayout />}>
          <Route path="signup" element={<SignUp />} />
          <Route path="verification" element={<Verification />} />
          <Route path="login" element={<Login />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="update-password" element={<UpdatePassword />} />
        </Route>
        <Route path="onboarding/*" element={<AuthLayout />}>
          <Route index path="setup" element={<Onboarding />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
        <Route path="public-profile" element={< PublicProfile />} />

      </Routes>
    </>
  );
}

export default App;
