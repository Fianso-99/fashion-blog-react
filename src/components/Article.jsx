function Article({ date, title, image, alt, content }) {
  return (
    <article>
      <time dateTime={date}>{date}</time>
      <h3>{title}</h3>
      <img src={image} alt={alt} />
      <p>{content}</p>
      <a href="#" className="continue-link">Continues...</a>
    </article>
  );
}

export default Article;