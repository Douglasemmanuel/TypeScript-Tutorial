import React, { useState } from 'react'



type UserType = {
    sessionId :number ,
    name:string,
}

function DisplayScreen() {
    const [username ,setUsername] = useState("")
    const [user , setUser] = useState<UserType | null >(null)

    const handlechange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setUsername(e.target.value)
    }
    const handleClick = (e:React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault()
        setUser({
            name:username,
            sessionId:Math.random()
        })
    }
  return (
    <div>
        {user? (`${user.name} logged in`):
        (
            <form>
        <input type='text'  placeholder='Username' onChange={handlechange}/>
        {/* <></> */}
        <button>Login</button>
    </form>
        )
    }
    {/* BE AWARE */}
    {user?.name}
    </div>
  )
}

export default DisplayScreen