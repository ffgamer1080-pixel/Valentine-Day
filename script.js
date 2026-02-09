body {
  margin: 0;
  padding: 20px;
  font-family: Arial, sans-serif;
  text-align: center;
  background: linear-gradient(135deg, #ff9a9e, #fad0c4);
  color: white;
}

h1 {
  margin-top: 10px;
}

.book-container {
  perspective: 1200px;
  margin-top: 30px;
}

.book {
  position: relative;
  width: 260px;
  height: 360px;
  margin: auto;
}

.page {
  position: absolute;
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 15px;
  box-shadow: 0 15px 40px rgba(0,0,0,0.3);
  transform-origin: left;
  transition: transform 1s;
  backface-visibility: hidden;
}

.page img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
}

.page.flipped {
  transform: rotateY(-180deg);
}

button {
  margin-top: 25px;
  padding: 12px 25px;
  font-size: 16px;
  border: none;
  border-radius: 25px;
  background: #ff4d6d;
  color: white;
  cursor: pointer;
}
