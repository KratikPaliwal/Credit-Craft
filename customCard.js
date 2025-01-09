document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('img-path');

    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0]; // Get the selected file
        if (file) {
            // Convert the file to a Base64 string
            const reader = new FileReader();
            reader.onload = function(e) {
                const base64String = e.target.result;
                // Store the Base64 string in localStorage
                localStorage.setItem('selectedImage', base64String);
                console.log('File stored in localStorage:', base64String);
            };
            reader.readAsDataURL(file); // Read the file as a Data URL
        }
    });

    // Retrieve and display the stored image
    const storedImage = localStorage.getItem('selectedImage');
    if (storedImage) {
        const imgElement = document.getElementById('displayed-image');
        imgElement.innerHTML = '';
        imgElement.src = storedImage;
        document.getElementById('your-design').appendChild(imgElement);
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const selectElement = document.getElementById('font-select');
    const fontOptions = googlefont;
  
    for (let Fonts in fontOptions) {
      let newOption = document.createElement('option');
      newOption.innerHTML = fontOptions[Fonts];
      newOption.value = fontOptions[Fonts];
      selectElement.append(newOption);
    }
  
    selectElement.addEventListener('change', (ent) => {
      console.log('Selected font:', ent.target.value);
    });
  });