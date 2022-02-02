const button = document.querySelector('.btn');
const image = document.querySelector('.img');
const url = 'http://aws.random.cat/meow';

async function getCatImage() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        image.src = data.file;

    } catch(error) {
        console.log(error);
    }
}

button.addEventListener('click', () => {
    let isComplited = image.complete;

    if (isComplited) {
        getCatImage();
    }
});
