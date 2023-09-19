import React from 'react'
function SearchButton() {
    const handleClick =(e:React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault()
        console.log("bhiii")
    }
    const handlechange =( e:React.ChangeEvent<HTMLInputElement>)=>{
        console.log(e.target.value)
    }
    const handleDelete = (e:React.MouseEvent<HTMLButtonElement>, id:number)=>{
        e.preventDefault()
        console.log(`POST${id} has been deleted!`);
    }
  return (
    <div className='searchbutton'>
        <form>
        <input type='text'  placeholder="search for anything....." onChange={handlechange} />
            <button onClick={handleClick}>search</button>
        </form>
        <form className='post'>
        <h1>Loremvbvvbvfjdhbfchjncbbsjskjbdjjcbc  </h1>
        <p> GGGGGGGGGGGGGGGGGGGGGGGGGGGGGG</p>
        <button onClick={(e)=>handleDelete(e,1)}>Delete</button>
        </form>
        <form className='post'>
        <h1>Loremvbvvbvfjdhbfchjncbbsjskjbdjjcbc  </h1>
        <p> GGGGGGGGGGGGGGGGGGGGGGGGGGGGGG</p>
        <button  onClick={(e)=>handleDelete(e,2)}>Delete</button>
        </form>
    </div>
  )
}

export default SearchButton