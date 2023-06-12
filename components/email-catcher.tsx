import React, { useState } from "react";

// Define your styles as JavaScript objects
const styles = {
  form: {
    padding: "2px",
    background: "linear-gradient(140deg, #ff0000, #ff00ff)",
    borderRadius: "0.375rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    maxWidth: "24rem",
    margin: "0 auto",
    height: "3rem",
    color: "#4B5563"
  },
  emailInput: {
    width: "100%",
    boxShadow: 'none',
    border: 'none',
    height: "100%",
    padding: "1rem",
    color: "#FFFFFF",
    backgroundColor: "#000000",
    borderRadius: "0.375rem",
    borderTopRightRadius: "0",
    borderBottomRightRadius: "0",
    outline: "none"
  },
  submitButton: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    padding: "0 2rem",
    fontSize: "0.875rem",
    fontWeight: "600",
    letterSpacing: "0.025em",
    color: "#FFFFFF",
    outline: "none"
  }
};

// Define your React functional component
const FormPlugin = () => {
  const [email, setEmail] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    setEmail("");
  };

  return (
    <form onSubmit={handleFormSubmit} style={styles.form}>
      <input
        type="email"
        name="email"
        placeholder="Type your email…"
        style={styles.emailInput}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit" style={styles.submitButton}>
        <b className="button-text">Subscribe</b>
      </button>
    </form>
  );
};

export default FormPlugin;
