"use client"

import { useState } from "react";

export default function Home() {
  const [image, setImage] = useState('')
  async function onClick() {
    const apiUrl = 'https://api.thecatapi.com/v1/images/search';

    fetch(apiUrl)
      .then(async response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const indexData = data[0];
        const url = indexData.url
        setImage(url);
      })
      .catch(error => {
        console.error('Error: ', error);
      });
  }
  return <div><div>Dog API Showcase of Frontend - Backend Connection</div>
  <button onClick={onClick}>Call Function</button><img src={image}></img></div>
}
