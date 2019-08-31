import React from "react";

export default function PostItem({ post }) {
  console.log(post);
  return (
    <div className="post">
      <div className="user">
        <img src={post.author.avatar} />
        <div className="details">
          <span>{post.author.name}</span>
          <span>{post.date}</span>
        </div>
      </div>

      <p>{post.content}</p>

      <div className="line" />

      <div className="comments">
        {post.comments.map(comments => (
          <div key={comments.id} className="user">
            <img src={comments.author.avatar} />
            <div className="comment">
              <a>{comments.author.name}</a> <a>{comments.content}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
