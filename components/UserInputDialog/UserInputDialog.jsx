import Image from "next/image";
import { useRef, useState } from "react";
import cancel from "../../public/icons/cancel.svg";
import styles from "./UserInputDialog.module.css";

// add seperate providers specific to layout here
function UserInputDialog({ refetch }) {
  const [showCancel, setShowCancel] = useState(false);
  const usernameRef = useRef(null);
  const [showError, setShowError] = useState(false);

  const handleInput = (e) => {
    if (e.target.value.length > 0) {
      setShowCancel(true);
    } else {
      setShowCancel(false);
    }
  };

  const handleClear = () => {
    if (usernameRef.current.value.length > 0) {
      usernameRef.current.value = "";
      setShowCancel(false);
    }
  };

  //take the username and save create a cookie with the username
  const handleSave = () => {
    const username = usernameRef.current.value;
    if (username.length === 0) {
      setShowError(true);
      return;
    }

    if (username.length > 0) {
      document.cookie = `username=${username}`;
      //   window.location.reload();
      refetch();
      setShowError(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.dialog}>
          <div className={styles.title}>Please enter your username.</div>
          <div className={styles.content}>
            <span>Note: </span>
            Your username will be your unique identifier.
            <div className={styles.input_container}>
              <input
                type="text"
                placeholder="Enter username..."
                id={styles.username}
                className={showError && styles.error}
                onInput={handleInput}
                ref={usernameRef}
              />
              {showCancel && (
                <span className={styles.cancel} onClick={handleClear}>
                  <Image src={cancel} />
                </span>
              )}
            </div>
            <div
              className={styles.error_message}
              style={{ display: showError ? "block" : "none" }}
            >
              Please enter username
            </div>
          </div>
          <div className={styles.action}>
            <button className={styles.saveBtn} onClick={handleSave}>
              Save
            </button>
          </div>
        </div>

        {/* <div className={styles.close}>
          <Image src={cancel} />
        </div> */}
      </div>
    </div>
  );
}

export default UserInputDialog;
