import React from "react";

export default async function Dynamic() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  const postsData = await posts.json();

  return (
    <div>
      {/* @ts-expect-error only for testing */}
      {postsData.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}
