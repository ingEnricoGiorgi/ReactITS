// src/components/Article.jsx
export default function Article({ title, img, date, children }) {
  return (
    <article>
      <h3>{title}</h3>
      <img src={img} alt={title} style={{ maxWidth: "300px" }} />
      <p>{children}</p>
      <h4>{date}</h4>
    </article>
  );
}
