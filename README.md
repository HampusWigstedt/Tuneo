# 🎵 Tuneo

**Tuneo** is a sleek and user-friendly music web application that leverages the [Spotify Web API](https://developer.spotify.com/documentation/web-api/) to enhance your listening experience. With Tuneo, you can discover personalized music recommendations, explore listening statistics, and dive deeper into your music habits.

---

## 🚀 Features

- 🔍 **Music Recommendations**  
  Get tailored music suggestions based on your listening history and top tracks.

- 📊 **User Statistics**  
  See visualizations of your listening trends, including your most-played artists, genres, and tracks.

- 🧠 **Smart Insights**  
  Tuneo uses Spotify data to surface hidden gems and reveal patterns in your musical taste.

---

## ⚠️ Important Notice

As of recently, **Spotify has closed access to their Recommendations API endpoint**, which was a core part of Tuneo's functionality.  
This means that **personalized recommendations are currently unavailable**.

We are actively exploring alternative features to continue delivering value while respecting Spotify’s updated API limitations.

---

## 🛠️ Tech Stack

- **Frontend:** React / Next.js  
- **Styling:** Tailwind CSS  
- **Backend:** Node.js / Express  
- **Authentication:** Spotify OAuth 2.0  
- **Data Source:** Spotify Web API

---

## 🔐 Requirements

To run Tuneo locally, you will need:

- A [Spotify Developer Account](https://developer.spotify.com/dashboard/)
- A registered Spotify App with appropriate scopes
- Node.js and npm installed

---

## 📦 Getting Started

```bash
# Clone the repository
git clone https://github.com/your-username/tuneo.git
cd tuneo

# Install dependencies
npm install

# Create an .env file and add your Spotify credentials
touch .env
