import { useEffect } from "react";
import BaseText from "../components/BaseText";
import {
  Link,
  NavigateFunction,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { sidebarItem } from "../interfaces";

export default function SettingsLayout() {
  const navigate: NavigateFunction = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const activeClassName = (path: string) =>
    currentPath.startsWith(path) ? "active" : "";

  useEffect(() => {
    if (window.location.pathname === "/settings") {
      navigate("/settings/profile-settings");
    }
  }, [navigate]);

  const subSidebarItems: sidebarItem[] = [
    {
      title: "Profile Setting",
      icon: "caret-down",
      path: "/settings/profile-settings",
    },
    {
      title: "Social Integrations",
      icon: "caret-down",
      path: "/settings/socials",
    },
    {
      title: "Public Profile",
      icon: "caret-down",
      path: "/settings/public-profile",
    },
    {
      title: "Notification",
      icon: "caret-down",
      path: "/settings/notifications",
    },
    {
      title: "Password setting",
      icon: "caret-down",
      path: "/settings/password-settings",
    },
  ];

  // add user authentiocation check

  return (
    <div className="flex flex-col gap-4">
      <div
        id="welcome-text"
        className="flex items-center gap-4 justify-between"
      >
        <div>
          <BaseText weight="semibold" size="xx-large" extraClasses="pb-2">
            Settings
          </BaseText>
          <BaseText size="small" color="gray">
            Connect, collaborate, contribute to challenges
          </BaseText>
        </div>
      </div>
      <div className="flex pt-4 pl-8">
        <div id="settings-side" className="flex flex-col gap-4 border-r-2 border-gray-100 w-3/12">
          {subSidebarItems.map((item) => (
            <Link to={item.path} key={item.icon} className="mb-3">
              <BaseText
                weight={activeClassName(item.path) ? "bold" : "medium"}
                color={activeClassName(item.path) ? "blue" : "black"}
              >
                {item.title}
              </BaseText>
            </Link>
          ))}
        </div>
        <div
          id="settings-main"
          className=" w-full px-4 mr-16 overflow-y-auto h-screen overflow-y-auto "
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
}
