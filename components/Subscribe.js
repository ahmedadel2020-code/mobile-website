import subscribeStyles from "../styles/Subscribe.module.css";

const Subscribe = () => {
  return (
    <div className={subscribeStyles.subscribe}>
      <h1>Subscribe our newsletter to be notified when it’ll be live.</h1>
      <form className={subscribeStyles.form}>
        <input
          className={subscribeStyles.subscribe_input}
          placeholder="Email address"
          type="email"
        />
        <button className={subscribeStyles.subscribe_button}>Subscribe</button>
      </form>
    </div>
  );
};

export default Subscribe;
