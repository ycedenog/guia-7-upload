let ejecutarCodigo = () => {
    let elemento = document.getElementById('titulo1');
    elemento.textContent = 'Album de fotos';

    let arreglo = document.getElementsByClassName('text-muted');
    elemento = arreglo[1];
    elemento.innerHTML = '<span> En este sitio encontrarás un album de fotos inspirado en el snippet de <a href="https://codepen.io/taj1uddin/pen/eYVrLKy">Codepen - Taj Uddin</a>.</span>';

    let arreglo2 = document.getElementsByTagName('p');
    elemento = arreglo[2];
    elemento.setAttribute('class', 'd-one');

    let arregloSVG = document.getElementsByTagName('svg');
    let photos = [{
            url: 'https://images.unsplash.com/photo-1653942786759-f3caff948222?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            alt: 'camino'
        },
        {
            url: 'https://images.unsplash.com/photo-1653988235129-842891001e10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            alt: 'energia'
        },
        {
            url: 'https://images.unsplash.com/photo-1648737963540-306235c8170e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            alt: 'papá'
        },
        {
            url: "https://images.unsplash.com/photo-1648737962619-16e5cd465d2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyOTF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            alt: 'imagen1'
        },
        {
            url: 'https://images.unsplash.com/photo-1578255321055-d9ed6a976af5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            alt: "imagen2"
        },
        {
            url: 'https://images.unsplash.com/photo-1578255321055-d9ed6a976af5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            alt: "imagen3"
        },
        {
            url: 'https://images.unsplash.com/photo-1654006018654-9f03ad2a02b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOTR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            alt: "imagen4"
        },
        {
            url: 'https://images.unsplash.com/photo-1654002300319-6c882ad161ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOTB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            alt: "imagen5"
        },
        {
            url: 'https://images.unsplash.com/photo-1653938245506-3203e63338b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNTd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            alt: "imagen6"
        }
    ]


    for (let i = 0; i < photos.length; i++) {
        let imgPhotos = document.createElement("img")
        imgPhotos.src = photos[i].url;
        imgPhotos.alt = photos[i].alt;
        imgPhotos.width = 250;
        imgPhotos.height = 250;
        arregloSVG[1].replaceWith(imgPhotos)
    }
}
ejecutarCodigo();