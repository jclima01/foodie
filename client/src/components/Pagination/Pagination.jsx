import React from 'react'

const Pagination = ({setIndexPage, indexPage}) => {

    
  return (
    <div>
        <button onClick={()=>setIndexPage(indexPage-1)}>{"<"}</button>
        <span>1</span>
        <button onClick={()=>setIndexPage(indexPage+1)}>{">"}</button>
    </div>
  )
}

export default Pagination