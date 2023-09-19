import React, { useEffect, useRef } from 'react'

function Refhookscreen() {
    const inputRef = useRef<HTMLInputElement>(null)
    const usernameinputRef = useRef<HTMLInputElement>(null)

    useEffect(()=>{
        inputRef.current?.focus()
    } , [])

    const handleclick =()=>{
        console.log("username is:"+usernameinputRef.current?.value)
    }
  return (
    <div>
            <form>
            <input type='text'  placeholder='focus here'  ref={inputRef}/>
        <input type='text'  placeholder='Username' ref={usernameinputRef} />
        {/* <></> */}
        <button onClick={handleclick}>Login</button>
    </form>
    </div>
  )
}

export default Refhookscreen