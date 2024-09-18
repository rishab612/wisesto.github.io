const urlParams = new URLSearchParams(window.location.search);
const cardId = urlParams.get('id');

if (cardId) {
    const cardData = JSON.parse(localStorage.getItem(cardId));

    if (cardData) {
        document.getElementById('cardName').textContent = cardData.name;
        document.getElementById('cardAge').textContent = cardData.age;
        document.getElementById('cardMessage').textContent = cardData.message;

        document.getElementById('nextButton').addEventListener('click', function() {
            document.getElementById('greeting').classList.add('hidden');
            document.getElementById('cakeSection').classList.remove('hidden');
            // Play the birthday song immediately when entering the candle section
            document.getElementById('birthdaySong').play();
        });

        const candlesContainer = document.getElementById('candlesContainer');
        for (let i = 0; i < 10; i++) {
            const candle = document.createElement('div');
            candle.classList.add('candle');
            candlesContainer.appendChild(candle);
        }

        const candles = document.querySelectorAll('.candles .candle');
        let candlesBlown = 0;

        candles.forEach(candle => {
            candle.addEventListener('mouseover', function() {
                if (!candle.classList.contains('blown')) {
                    candle.classList.add('blown');
                    candlesBlown++;
                    if (candlesBlown === candles.length) {
                        setTimeout(() => {
                            document.getElementById('cakeSection').classList.add('hidden');
                            document.getElementById('finalMessage').classList.remove('hidden');
                            // Optionally, you could play the song again or another sound here
                        }, 500);
                    }
                }
            });
        });
    } else {
        document.body.innerHTML = '<h2>Card not found!</h2>';
    }
}

