import './joder.css'
export function App () {
  return (
    <article className='tw-follow-card'>
    <header className='tw-follow-card-header'>
    <img className='tw-follow-card-avatar'  src="https://unavatar.io/twitter/kikobeats" alt="Avatar" />
    <div className='tw-follow-card-info'>
      <strong>El mejor dev</strong>
      <span className='tw-follow-card-userName'>@DavidApraez</span>
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