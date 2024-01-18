import { Outlet } from "react-router-dom";
import styles from "../styles/Auth.module.css";
import AuthImgCarousel from "../components/AuthCarousel";
import AppLogo from "../resources/app-logo-text.png";
import BaseAlert from "../components/BaseAlert";
import { useAppSelector } from "../hooks/storeHook";
import { showingAlert } from "../store/reducers/mainReducer";

function AuthLayout() {
  const showAlert = useAppSelector(showingAlert);

  return (
    <div className="h-screen">
      <div>
        <div className="flex justify-between h-screen">
          <div className="md:p-4 w-full  md:w-10/12">
            <div className="pl-8 pt-2">
              <img src={AppLogo} alt="TalentNest Logo" />
            </div>
            <div className="flex pt-10 p-8 md:p-1 md:pt-24 h-screen w-full">
              <Outlet />
            </div>
            <p className={styles.formLabel + " text-center pb-16"}>
              Copyright © 2023 Talentnest
            </p>
          </div>
          {showAlert && <BaseAlert />}
          <div className="p-4 h-full h-max-screen relative w-1/2 lg:block sm:hidden hidden">
            <AuthImgCarousel />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
