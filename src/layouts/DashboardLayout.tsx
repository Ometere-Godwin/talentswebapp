import { useEffect, useState } from 'react';
import { NavigateFunction, Outlet, useLocation, useNavigate } from 'react-router-dom';
import NavigationBar from '../components/TopNavigation';
import Sidebar from '../components/Sidebar';


function AppLayout() {
  const location = useLocation();
  const [isSidebarOpen, setSidebarOpen] = useState(true);


  const currentPath = location.pathname;

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const navigate: NavigateFunction = useNavigate();
  // const { isAuthenticated } = useAuth(); // to be created

  const isAuthenticated = localStorage.getItem('talenvoJwToken');;
  
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/auth/signup");
    } else {
      if (currentPath === "/") {
        navigate("/dashboard");
      }
    }
  }, [isAuthenticated, navigate, currentPath])

  // redirect users from '/' to '/dashboard' once authenticated

  return (
    <div className="flex h-screen bg-white">
    {/* Sidebar */}
    <Sidebar isOpen={isSidebarOpen} />

    {/* Main Content */}
    <div className="flex flex-col flex-1 overflow-hidden">
      {/* Navbar */}
      <NavigationBar onToggleSidebar={toggleSidebar} />

      <div className='ml-64 p-4 overflow-y-auto bg-[#F7F7F7]'>
      <Outlet />
      </div>
    </div>
  </div>
  );
}

export default AppLayout;
