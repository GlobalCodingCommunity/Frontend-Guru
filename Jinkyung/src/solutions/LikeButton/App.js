import { HeartIcon, SpinnerIcon } from "./icons";
import { useState } from "react";

export default function App() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("default");

  //state for button state
  //call api function
  //
  async function handleAction(action) {
    setStatus("loading");

    try {
      const response = await fetch(
        "https://questions.greatfrontend.com/api/questions/like-button",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ action }),
        },
      );
      const result = await response.json();

      if (response.ok) {
        setMessage("");
        setStatus(action === "like" ? "liked" : "default");
      } else {
        setMessage(result.message);
        setStatus("default");
      }
    } catch (error) {
      console.error(error);
      setMessage("Network error");
      setStatus("default");
    }
  }
  return (
    <div className="wrapper">
      <button
        onClick={() => handleAction(status === "liked" ? "unlike" : "like")}
        className={status === "default" ? "default-button" : "like-button"}
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          <div>
            <SpinnerIcon /> Like
          </div>
        ) : (
          <div>
            {status === "liked" ? (
              <>
                <HeartIcon />
                Liked
              </>
            ) : (
              <>
                <HeartIcon />
                Like
              </>
            )}
          </div>
        )}
      </button>
      {message}
    </div>
  );
}

/**
 * red - #f00, gray - #888
 * 1. default , clicked, loading, hover
 * 2. success -> Liked
 * 3. fail -> default/hovered error message below
 * 4. api 50% chance
 * 5. req POST body:{action :'like' or 'unlike'}
 * 6. resp.message / statuscode 200/500
 *
 *
 * 1. default, loading 상태 일때 아이콘 표시
 * 2. call api -> change state like(liked) or unlike(default)
 * 3. implement css
 */
