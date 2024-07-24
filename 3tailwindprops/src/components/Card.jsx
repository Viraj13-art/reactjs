import React from 'react'

function Card({username,btnText}) {
  console.log(username);
    return (
      <div class="relative h-[400px] w-[400px] rounded-md">
      <img
        src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="AirMax Pro"
        class="z-0 h-full w-full rounded-md object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div class="absolute bottom-4 left-4 text-left">
        <h1 class="text-lg font-semibold text-white">{username}</h1>
        <p class="mt-2 text-sm text-gray-300">
        The Labrador Retriever or simply Labrador is a British breed of retriever gun dog.
        </p>
        <button class="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
          {btnText} →
        </button>
      </div>
    </div>
    
    )
}

export default Card
