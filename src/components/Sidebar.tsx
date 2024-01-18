// src/components/Sidebar.js

import { NavigateFunction, useLocation, useNavigate } from "react-router-dom";
import SideNavItem from "./Nav/SideNavItem";
import { sidebarItem } from "../interfaces";
import BaseText from "./BaseText";
import BaseButton from "./BaseButton";
import { MouseEvent } from "react";
import SvgComponent from "./SVGShape";
import { useAppDispatch } from "../hooks/storeHook";
import { updateTokenStatus } from "../store/reducers/mainReducer";
import { googleLogout } from "@react-oauth/google";


interface SidebarProps {
    isOpen: boolean;
  }

const Sidebar = ({ isOpen }: SidebarProps) => {
  const location = useLocation();
  const dispatch = useAppDispatch();

  const currentPath = location.pathname;


    const sidebarWidth = isOpen ? 'w-64' : 'w-16'; // Adjust the width as needed
    const sidebarItems:sidebarItem[]  = [
      {
        title: 'Dashboard',
        icon: 'dashboard-icon',
        path: '/dashboard'
      },
      {
        title: 'Assessments',
        icon: 'open-book',
        path: '/assessments'
      },
      {
        title: 'Challenges',
        icon: 'challenges-icon',
        path: '/challenges'
      },
      {
        title: 'Achievements',
        icon: 'trophy',
        path: '/achievements'
      },
      {
        title: 'Teams',
        icon: 'people',
        path: '/teams'
      },
      {
        title: 'Messages',
        icon: 'envelope',
        path: '/Messages'
      },
    ]

    const activeClassName = (path:string) => (currentPath.startsWith(path) ? 'active' : '');

    const navigate: NavigateFunction = useNavigate();


    const handleLogout = (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      dispatch(updateTokenStatus(null));
      navigate('/auth/login')
      try {
        googleLogout();
      } catch (err) {
        console.log(err);
      }
    }

  return (
    <nav
    id='side-navigation'
      className={`bg-white h-screen w-64 border-r-2 border-gray-100 pt-20 pb-10 fixed flex flex-col items-center justify-between overflow-y-auto ease-in-out transition-all duration-300 ${
        sidebarWidth
      }`}
    >
      <div>
      {
        sidebarItems.map((item) => <SideNavItem key={item.title} title={item.title} icon={item.icon} isActive={Boolean(activeClassName(item.path))} handleBtnClick={(e) => {
          navigate(item.path);
         }}/>)
      }
      </div>

      
      <div className="py-15 border-t-2 border-gray-200 w-full flex flex-col items-center justify-end gap-2">
        <div className="pl-4">
        <SideNavItem title={"Settings"} icon={'gear'} isActive={Boolean(activeClassName('/settings'))} handleBtnClick={(e) => {
          navigate('/settings')
         }}/>
        </div>
    
      <BaseButton
            size="small"
            handleEngagement={(e) => handleLogout(e)}
          >
            <div className="flex items-center gap-4 justify-center">
            <span>
              <SvgComponent icon="logout-icon"/>
            </span>
            <BaseText weight="semibold" size="small">
            Logout
            </BaseText>
            </div>
          
          </BaseButton>
      </div>
    </nav>
  );
};


export default Sidebar;
