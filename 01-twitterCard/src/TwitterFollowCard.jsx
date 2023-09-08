export function TwitterFollowCard({userName,name,isFollowing,formstatUserName}){
    const imageSrc=`https://unavatar.io/youtube/${userName}`
    return (
   <article className='tw-follow-card'>
   <header className='tw-follow-card-header'>
    <img className='tw-follow-card-avatar'  src={imageSrc} alt="Avatar" />
    <div className='tw-follow-card-info'>
      <strong>{name}</strong>
      <span className='tw-follow-card-userName'>{formstatUserName(userName)}</span>
    </div>
    </header>

    <aside>
      <button className='tw-followCard-button'>
        seguir
      </button>
    </aside>

    </article>
    )
}