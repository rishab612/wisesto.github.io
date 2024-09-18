document.getElementById('birthdayForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const message = document.getElementById('message').value;

    const cardId = 'card-' + Math.random().toString(36).substr(2, 9);

    const cardData = {
        name: name,
        age: age,
        message: message
    };

    localStorage.setItem(cardId, JSON.stringify(cardData));

    const cardLink = `${window.location.origin}/card.html?id=${cardId}`;

    document.getElementById('result').style.display = 'block';
    document.getElementById('cardLink').value = cardLink;

    const whatsappMessage = `Check out this awesome birthday card: ${cardLink}`;
    document.getElementById('whatsappShare').href = `https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`;
});

document.getElementById('copyLink').addEventListener('click', function () {
    const copyText = document.getElementById('cardLink');
    copyText.select();
    document.execCommand('copy');
    alert('Link copied to clipboard!');
});
