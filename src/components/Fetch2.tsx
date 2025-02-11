"use client";
import { useEffect, useState } from "react";

export default function Fetch2() {
  const [posts, setPosts] = useState<{ id: number; name: string }[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  console.log(posts);

  const [counter, setCounter] = useState<number>(0);

  return (
    <>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
      {posts.map((p, index) => {
        return <p key={index}>{p.name}</p>;
      })}
    </>
  );
}
