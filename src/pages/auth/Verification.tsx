import { useEffect, useState } from "react";
import styles from "../../styles/Auth.module.css";
import BaseButton from "../../components/BaseButton";
import networkInstance from "../../utils/network";
import { NavigateFunction, useNavigate } from "react-router-dom";
import useQuery from "../../hooks/UseQuery";
import { useAppDispatch } from "../../hooks/storeHook";
import { setAlert } from "../../store/reducers/mainReducer";

function Verification() {
  const { value: userToken, clearQueryParameter } = useQuery("token");

  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);
  const navigate: NavigateFunction = useNavigate();


  useEffect(() => {
    if (!userToken) {
      navigate("/auth/signup");
    } else {
      verifyToken();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const verifyToken = async () => {
    try {
      const payload = {
        token: userToken,
      };
      let { status, data } = await networkInstance.post(
        "/email-verification/verify",
        payload
      );
      console.log({ status, data });
      if (status === 201) {
        setLoading(false);
      }
    } catch (err: any) {
      const { data } = err.response;
      dispatch(
        setAlert({
          type: "warning",
          messageTitle: "Sorry! 🫠",
          messageBody: data?.message || "Something went wrong",
        })
      );
    //   navigate("/auth/login");
    } finally {
      clearQueryParameter();
    }
  };

  const handleFormButtonClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    navigate("/auth/login");
  };

  return (
    <div className="md:mx-auto md:w-1/2 w-full">
      <h6 className={styles.formTitle}>
        {loading ? `Please Wait... 🕑` : "Email Verified"}
      </h6>

      {!loading && (
        <p className={styles.formSupportText}>
          Your email address has been verified successfully
        </p>
      )}
      {!loading && (
        <>
          <BaseButton
            size="wide"
            text={"Back to Login"}
            handleEngagement={(e) => handleFormButtonClick(e)}
          />
        </>
      )}
    </div>
  );
}

export default Verification;
