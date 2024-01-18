import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/storeHook";
import { alertData, hideAlert, showingAlert } from "../store/reducers/mainReducer";

function BaseAlert() {
  const data = useAppSelector(alertData);
  const showAlert = useAppSelector(showingAlert);

  
  const dispatch = useAppDispatch();

  const computedStyles = () => {
    switch (data.type) {
      case "success":
        return "text-green-200 bg-green-800 shadow-green-200/25";
      case "warning":
        return "text-red-200 bg-red-800 shadow-red-200/25";
      default:
        return "text-blue-200 bg-blue-800 shadow-blue-200/25";
    }
  };

  useEffect(() => {
    if(showAlert) {
      setTimeout(() => {
        dispatch(hideAlert())
      }, 6000)
    }
  }, [dispatch, showAlert])

  return (
    <div
      className={`${computedStyles()} shadow-lg text-white px-4 py-3 rounded fixed top-10 z-50 right-10 w-96`}
      role="alert"
    >
      <strong className="font-bold">{data.messageTitle}</strong>
      <br />
      <span className="block sm:inline">{data.messageBody}</span>
      <span
        onClick={() => dispatch(hideAlert())}
        className="absolute top-0 bottom-0 cursor-pointer right-0 px-4 px-3 mt-2"
      >
        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none">
          <path
            d="M8.46967 8.46972C8.76256 8.17683 9.23744 8.17683 9.53033 8.46972L12 10.9394L14.4697 8.46973C14.7626 8.17684 15.2374 8.17684 15.5303 8.46973C15.8232 8.76262 15.8232 9.2375 15.5303 9.53039L13.0607 12.0001L15.5303 14.4697C15.8232 14.7626 15.8232 15.2375 15.5303 15.5304C15.2374 15.8233 14.7626 15.8233 14.4697 15.5304L12 13.0607L9.53034 15.5304C9.23744 15.8233 8.76257 15.8233 8.46968 15.5304C8.17678 15.2375 8.17678 14.7626 8.46968 14.4697L10.9393 12.0001L8.46967 9.53038C8.17678 9.23749 8.17678 8.76262 8.46967 8.46972Z"
            fill="#000000"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.31673 3.76882C10.4043 3.42374 13.5957 3.42374 16.6832 3.76882C18.5096 3.97294 19.9845 5.41159 20.1994 7.24855C20.5686 10.4055 20.5686 13.5947 20.1994 16.7516C19.9845 18.5885 18.5096 20.0272 16.6832 20.2313C13.5957 20.5764 10.4043 20.5764 7.31673 20.2313C5.49035 20.0272 4.01545 18.5885 3.8006 16.7516C3.43137 13.5947 3.43137 10.4055 3.8006 7.24855C4.01545 5.41159 5.49035 3.97294 7.31673 3.76882ZM16.5166 5.25954C13.5398 4.92683 10.4602 4.92683 7.48334 5.25954C6.33891 5.38744 5.42286 6.29069 5.29045 7.4228C4.93476 10.4639 4.93476 13.5362 5.29045 16.5773C5.42286 17.7094 6.33891 18.6127 7.48334 18.7406C10.4602 19.0733 13.5398 19.0733 16.5166 18.7406C17.6611 18.6127 18.5771 17.7094 18.7095 16.5773C19.0652 13.5362 19.0652 10.4639 18.7095 7.4228C18.5771 6.29069 17.6611 5.38744 16.5166 5.25954Z"
            fill="#000000"
          />
        </svg>
      </span>
    </div>
  );
}

export default BaseAlert;
