const container = document.querySelector('.container');
const baseUrl = 'https://source.unsplash.com/random/';
const rows = 10;
const randomSize = () => {
      return `${randomNumber()}x${randomNumber()}`;
}
const randomNumber = () => {
      return Math.floor(Math.random() * 1000);
}
for (let i = 0; i < rows * 3; i++) {
      const img = document.createElement('img');
      img.src = `${baseUrl}${randomSize()}`;
      container.appendChild(img);
}