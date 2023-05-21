document.getElementById('account-dropDown').addEventListener('click', (event) => {
    document.getElementById('account-ul').classList.toggle('show');
    document.getElementById('currency-ul').classList.remove('show');
    document.getElementById('language-ul').classList.remove('show');
});
document.getElementById('currency-dropDown').addEventListener('click', (event) => {
    document.getElementById('currency-ul').classList.toggle('show');
    document.getElementById('account-ul').classList.remove('show');
    document.getElementById('language-ul').classList.remove('show');
});
document.getElementById('language-dropDown').addEventListener('click', (event) => {
    document.getElementById('language-ul').classList.toggle('show');
    document.getElementById('currency-ul').classList.remove('show');
    document.getElementById('account-ul').classList.remove('show');
});
document.getElementById('categories').addEventListener('click', (event) => {
    document.getElementById('categories-ul').classList.toggle('show');
});