function changeKitty(mood) {
    var kittyImg = document.getElementById('kittyImg');
    if (mood === 'happy') {
      kittyImg.src = 'https://usagif.com/wp-content/uploads/gifs/dancing-cat-33.gif';
    } else if (mood === 'sad') {
      kittyImg.src = 'https://media.tenor.com/PGnGqfkIuLYAAAAM/cat-head.gif';
    }
  }
  