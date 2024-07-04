import React from 'react'
import Nav from './Nav'

function Navbar() {
  return (
    <div>
<nav class="bg-gray-800 flex justify-between items-center py-4 px-6">
  {/* Assuming Nav component is rendered here */}
  <Nav />

  <div class="InputContainer">
    <input placeholder="Search.." id="input" class="input" name="text" type="text" />
    <button class="button">
    <svg
      class="icon"
      stroke="currentColor"
      fill="none"
      stroke-width="2"
      viewBox="0 0 24 24"
      aria-hidden="true"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      ></path>
    </svg>
  </button>
  </div>
</nav>

    </div>
  )
}

export default Navbar
