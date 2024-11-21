import React from "react"

function SearchBox(props) {
  return (
    <div className="col col-sm-4">
      <input value={props.value} onChange={(event) => props.setSearchValue(event.target.value)} type="text" className="from-control" placeholder="Type to search" />
    </div>
  )
}

export default SearchBox
