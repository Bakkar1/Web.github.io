//main variables

let theInput = document.querySelector('.get-repos input'),
    getButton = document.querySelector('.get-repos .get-button'),
    reposData = document.querySelector('.show-data');

getButton.onclick = function(){
    getRepos();
}

//get repos function
function getRepos(){
    if(theInput.value == ""){
        reposData.innerHTML = "<spna>Please write github Username</spna>";
    }
    else{
        reposData.innerHTML = "";

        fetch('https://api.github.com/users/Bakkar1/repos')

        .then(response => response.json())

        .then(repos => {
            //loob on repos
            repos.forEach(repo => {
                //creat the main div Elment
                let mainDiv = document.createElement('div');
                
                //creat repo name text
                let repName = document.createTextNode(repo.name);
                //append the text to main div
                mainDiv.appendChild(repName);

                //creat repo url anchor
                let repoUrl = document.createElement('a');
                repoUrl.textContent = "Visit";
                //add the href
                repoUrl.href = `https://${repo.owner.login}.github.io/${repo.name}`;
                //set attribute blank
                repoUrl.setAttribute('target','_blank');
                //appen the repourl to maindiv
                mainDiv.appendChild(repoUrl);

                //add the stargazers count
                let stargzersCount = document.createElement('span');
                stargzersCount.textContent = repo.stargazers_count;
                stargzersCount.style.marginLeft = "30px";
                mainDiv.appendChild(stargzersCount);

                //append the main div to container
                reposData.appendChild(mainDiv)
            });
        });
    }
}