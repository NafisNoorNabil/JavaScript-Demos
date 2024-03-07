const apiKey = "uWYYiWommNBxLdS0WnmB6cv4R8hCQ277ZXuttHViDN3AFFRtDnyQFRON";
const perPage = 15;
let currentPage = 1;
let searchTerm = null;

const imageList = document.getElementById('imageList');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const loadMoreButton = document.getElementById('loadMoreButton');

// Function to fetch images from Pexels API
const getImages = async (url) => {
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: apiKey
      }
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching images:', error);
  }
};

// Function to render images on the page
const renderImages = (images) => {
  images.forEach(image => {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = image.src.large; // Use large size image
    img.alt = image.url;
    li.appendChild(img);
    imageList.appendChild(li);
  });
};

// Function to load more images
const loadMoreImages = async () => {
  currentPage++;
  let apiUrl = `https://api.pexels.com/v1/curated?page=${currentPage}&per_page=${perPage}`;
  apiUrl = searchTerm ? `https://api.pexels.com/v1/search?query=${searchTerm}&page=${currentPage}&per_page=${perPage}` : apiUrl;
  const data = await getImages(apiUrl);
  renderImages(data.photos);
};

// Event listener for search button
searchButton.addEventListener('click', async () => {
  searchTerm = searchInput.value;
  currentPage = 1;
  imageList.innerHTML = ''; // Clear previous search results
  let apiUrl = `https://api.pexels.com/v1/search?query=${searchTerm}&page=${currentPage}&per_page=${perPage}`;
  const data = await getImages(apiUrl);
  renderImages(data.photos);
});

// Event listener for load more button
loadMoreButton.addEventListener('click', loadMoreImages);

// Initial load of images
window.onload = async () => {
  let apiUrl = `https://api.pexels.com/v1/curated?page=${currentPage}&per_page=${perPage}`;
  const data = await getImages(apiUrl);
  renderImages(data.photos);
};
