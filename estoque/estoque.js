function loadContent(page) {

    const contentDiv = document.getElementById('content');
    fetch(page)
    .then(response => {

        if(!ewaponse.ok) {

            throw new Error( ' Erro ao carregar a página');
        }return response.text();
        
    })
    .then(data => {
        contentDiv.innerHTML = data;
        document.getElementById('contentSection').style.display = 'block'
    })
    .catch(error => {

        contentDiv.innerHtml = '<p>' + error.message + '</p>'
    });

}