const Homepage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "500px",
      }}
    >
      <h1>Welcome to the E-Commerce Admin Dashboard</h1>
      <div>
        <button
          style={{
            padding: "16px",
            background: "#008080",
            outline: "none",
            marginTop: "15px",
            border: "none",
            fontSize: "18px",
            color: "white",
            cursor: "pointer",
          }}
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
};

export default Homepage;
