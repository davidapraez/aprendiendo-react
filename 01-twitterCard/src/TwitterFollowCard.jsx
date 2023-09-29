import { useState } from "react";
export function TwitterFollowCard({
  children,
  userName,
  name,
  formstatUserName,
}) {
  const [isFollowing, setisFollowing] = useState(false);
  const imageSrc = `https://unavatar.io/youtube/${userName}`;
  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";
  const changeState = () => {
    setisFollowing(!isFollowing);
  };

  return (
    <article className="tw-follow-card">
      <header className="tw-follow-card-header">
        <img className="tw-follow-card-avatar" src={imageSrc} alt="Avatar" />
        <div className="tw-follow-card-info">
          <strong>{children}</strong>
          <span className="tw-follow-card-userName">@{userName}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={changeState}>
          {text}
        </button>
      </aside>
    </article>
  );
}
