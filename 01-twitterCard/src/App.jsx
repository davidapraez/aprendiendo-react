import { TwitterFollowCard } from './TwitterFollowCard'
import './joder.css'
export function App () {
  const formstatUserName=(userName)=>`@${userName}`

  return (
    <div className='App'>
    <TwitterFollowCard 
    formstatUserName={formstatUserName} 
    isFollowing userName="casey" 
    name={"David Apraez"}/>
    <TwitterFollowCard formstatUserName={formstatUserName} isFollowing={false} userName="willsmith" name={"David Apraez"}/>
    <TwitterFollowCard formstatUserName={formstatUserName} isFollowing userName="karolg" name={"David Apraez"}/>
    </div>
    
  )
}