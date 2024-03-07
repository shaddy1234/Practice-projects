import { useState } from "react";
import './styles.css'

function Github() {
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);

  const fetchUser = async () => {
    const apiUrl = `https://api.github.com/users/${username}`;
    const res = await fetch(apiUrl);
    const data = await res.json();
    console.log(data)

    try {
      if (res.ok) {
        setProfile(data);
        setError(null);
      } else {
        setProfile(null);
        setError(data.message);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setProfile(null);
      setError("An error occurred while fetching data.",);
    }
  };

  return (
    <div className="App">
      <h1>Github Profile Finder</h1>
      <input 
        type="text"
        placeholder="Enter your username"
        value={username} 
        onChange={(e) => setUsername(e.target.value)}
        />

        <button onClick={fetchUser}>Search</button>


        {profile && (
        <div className="Profile">
          <img
            src={profile.avatar_url}
            alt={`${profile.login} avatar`}
            className="Avatar"
          />
          <h2>{profile.name}</h2>
          <p>{profile.bio || 'No bio available'}</p>
          <p>Followers: {profile.followers}</p>
          <p>Following: {profile.following}</p>
          <a href={profile.html_url} target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
      )}
    </div>
  );
}
export default Github;
