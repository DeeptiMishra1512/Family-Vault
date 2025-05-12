import React, { useState, useEffect } from "react";

const SearchByText = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [firstTweetWidth, setFirstTweetWidth] = useState(200); // Default width

  // Dynamically get the width of the first tweet
  useEffect(() => {
    const firstTweet = document.querySelector(".tweet"); // Assumes .tweet is the class for tweets
    if (firstTweet) {
      setFirstTweetWidth(firstTweet.offsetWidth);
    }
  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
    onSearch(value); // Trigger search with the entered text
  };

  return (
    <div
      style={{
        ...styles.searchContainer,
        width: isHovered ? `${firstTweetWidth}px` : "30px",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={styles.searchWrapper}>
        <span style={styles.icon}>🔍</span>
        {isHovered && (
          <input
            type="text"
            value={searchText}
            onChange={handleSearchChange}
            placeholder="Search tweets..."
            style={{
              ...styles.searchInput,
              width: `${firstTweetWidth - 40}px`, // Input size slightly smaller
            }}
          />
        )}
      </div>
    </div>
  );
};

const styles = {
  searchContainer: {
    position: "absolute",
    top: "10px",
    right: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    height: "40px",
    backgroundColor: "#000",
    borderRadius: "20px",
    overflow: "hidden",
    transition: "width 0.3s ease-in-out",
    zIndex: 10, // Ensure it overlaps tweets
  },
  searchWrapper: {
    display: "flex",
    alignItems: "center",
    height: "100%",
  },
  icon: {
    fontSize: "20px",
    cursor: "pointer",
    color: "#fff",
    margin: "0 8px",
  },
  searchInput: {
    height: "100%",
    padding: "8px",
    border: "none",
    outline: "none",
    color: "#fff",
    backgroundColor: "#000",
    fontSize: "14px",
  },
};

export default SearchByText;
