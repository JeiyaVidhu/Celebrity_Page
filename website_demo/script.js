function redirect(){
    let celebrityname = document.getElementById('celebrity_name').value;
    switch(celebrityname){
        case 'Zayn Malik':
            location.href='zaynmalik.html';
            break;
        case 'Ben Barnes':
            location.href='BenBarnes.html';
            break;
        case 'Taylor Swift':
            location.href='taylorswift.html';
            break;
        default:
            location.href='404.html';
            break;
    }
}