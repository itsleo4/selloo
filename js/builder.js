document.getElementById('imageInput').addEventListener('change', async function () {
  const file = this.files[0];
  if (!file) return;

  const formData = new FormData();
  formData.append('image', file);

  const apiKey = '3d9938283c30118811221e08de59fd48'; // your imgbb API key

  const response = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
    method: 'POST',
    body: formData
  });

  const result = await response.json();
  const imageUrl = result.data.url;

  // Show preview
  const imgPreview = document.getElementById('previewImage');
  imgPreview.src = imageUrl;
  imgPreview.style.display = 'block';

  // Store or use this imageUrl for your product
  console.log('Uploaded image:', imageUrl);
});
