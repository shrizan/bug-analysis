import React from "react";

// ISSUE-10: deeply nested JSX structure — 7+ levels deep (Medium)
function Dashboard({ user, posts }) {
  return (
    <div className="dashboard">
      <section className="content">
        <article className="feed">
          <div className="post-list">
            <ul className="items">
              {posts.map((post) => (
                <li key={post.id} className="item">
                  <div className="inner">
                    <span className="label">{post.title}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </section>
    </div>
  );
}

export default Dashboard;
