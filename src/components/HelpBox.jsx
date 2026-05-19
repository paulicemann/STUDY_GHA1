import './HelpBox.css';

function HelpBox({ title, text }) {
  return (
    <article className="help-box">
      <h1>LOL</h1>
      <h2>{title}</h2>
      <p>{text}</p>
    </article>
  );
}

export default HelpBox;
