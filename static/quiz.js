// A. VERİ (Lütfen buraya tüm 1000 kelimeyi yukarıdaki formatta yapıştırın!)
const ALL_WORDS_DATA = [
    { id: '1', en: 'Abandon', tr_display: 'Terk etmek, bırakmak', tr_correct_meanings: ['terk etmek', 'bırakmak'] },
    { id: '2', en: 'Ability', tr_display: 'Yetenek, kabiliyet', tr_correct_meanings: ['yetenek', 'kabiliyet'] },
    { id: '3', en: 'Absorb', tr_display: 'Emmek, içine çekmek', tr_correct_meanings: ['emmek', 'içine çekmek'] },
    { id: '4', en: 'Accept', tr_display: 'Kabul etmek', tr_correct_meanings: ['kabul etmek'] },
    { id: '5', en: 'Accurate', tr_display: 'Doğru, kesin', tr_correct_meanings: ['doğru', 'kesin'] }
    // ... 1000 kelimenin tamamını buraya ekleyin
];

// Uygulama Durumu (State)
let quizState = {
    allWords: ALL_WORDS_DATA,
    wordMap: {}, // ID'ye göre hızlı erişim için harita
    quizWords: [], // Quiz için karıştırılmış kelime listesi
    errorWords: [], // Yanlış cevaplanan kelimeler
    score: 0,
    roundCount: 1,
    currentIndex: 0
};

// --- YARDIMCI FONKSİYONLAR ---

// Fisher-Yates shuffle algoritması
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function generateChoices(correctWord) {
    const allOtherWords = quizState.allWords.filter(w => w.en !== correctWord.en);
    const correctMeaning = correctWord.tr_display;
    let incorrectMeanings = [];

    // Yeterli yanlış kelime varsa rastgele 3 tane seç
    if (allOtherWords.length >= 3) {
        // Doğru anlamı içermeyen 3 farklı yanlış şık bulana kadar deneriz.
        let candidates = allOtherWords.slice();
        shuffleArray(candidates);
        
        let count = 0;
        for (const candidate of candidates) {
            if (!candidate.tr_display.toLowerCase().includes(correctMeaning.toLowerCase())) {
                incorrectMeanings.push(candidate.tr_display);
                count++;
                if (count === 3) break;
            }
        }
        // Hala 3 şık yoksa, kalanlardan ekleriz (genellikle olmaz)
        while (incorrectMeanings.length < 3 && candidates.length > 0) {
            if (!incorrectMeanings.includes(candidates[0].tr_display)) {
                 incorrectMeanings.push(candidates[0].tr_display);
            }
            candidates.shift(); 
        }
        incorrectMeanings = incorrectMeanings.slice(0, 3); // İlk 3'ü garantile
    }

    let choices = [correctMeaning, ...incorrectMeanings];
    shuffleArray(choices);
    return choices;
}


// --- LİSTENİN BAŞLATILMASI VE DEVAM ETTİRİLMESİ ---

function initializeQuiz() {
    // 1. Map oluşturma
    quizState.wordMap = quizState.allWords.reduce((map, word) => {
        map[word.id] = word;
        return map;
    }, {});

    // 2. LocalStorage'dan yükleme veya sıfırlama
    const savedState = localStorage.getItem('quizState');
    if (savedState) {
        quizState = JSON.parse(savedState);
        // Map'i yeniden oluştur (Local Storage sadece veriyi kaydeder, fonksiyonları değil)
        quizState.wordMap = quizState.allWords.reduce((map, word) => {
            map[word.id] = word;
            return map;
        }, {});
    } else {
        startNewRound(quizState.allWords);
    }
}

function saveState() {
    // wordMap'i kaydetmeye gerek yok, veriyi kaydetmek yeterli
    const stateToSave = { ...quizState, wordMap: undefined }; 
    localStorage.setItem('quizState', JSON.stringify(stateToSave));
}

function startNewRound(wordList) {
    shuffleArray(wordList);
    quizState.quizWords = wordList.map(w => w.id); // Sadece ID'leri tut
    quizState.currentIndex = 0;
    quizState.errorWords = [];
    quizState.score = 0;
    quizState.roundCount = 1; // Yeni bir round başlatırken
    saveState();
    renderQuestion();
}

function startErrorRound() {
    shuffleArray(quizState.errorWords);
    quizState.quizWords = quizState.errorWords;
    quizState.errorWords = [];
    quizState.currentIndex = 0;
    quizState.roundCount++;
    saveState();
    renderQuestion();
}

// --- HTML YANSITMA (RENDER) ---

function renderQuestion(feedback = null, selectedChoice = null) {
    const totalWords = quizState.allWords.length;
    const currentWordId = quizState.quizWords[quizState.currentIndex];
    const currentWord = quizState.wordMap[currentWordId];
    
    if (!currentWord) {
        // Quiz bittiyse (veya hata varsa)
        return renderEndScreen();
    }

    const choices = generateChoices(currentWord);
    
    // HTML Elementleri
    const container = document.getElementById('quiz-container');
    const wordDisplay = document.getElementById('word-display');
    const progressDisplay = document.getElementById('progress-display');
    const roundDisplay = document.getElementById('round-display');
    const choicesContainer = document.getElementById('choices-container');
    const feedbackPlaceholder = document.getElementById('feedback-placeholder');
    const nextButtonContainer = document.getElementById('next-button-container');

    // Başlık ve İlerleme
    roundDisplay.textContent = `TUR ${quizState.roundCount}`;
    progressDisplay.textContent = `Soru ${quizState.currentIndex + 1} / ${totalWords}`;
    wordDisplay.textContent = currentWord.en;
    
    // Seçenek Butonlarını Oluşturma
    choicesContainer.innerHTML = '';
    
    choices.forEach(choice => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'choice-button';
        button.textContent = choice;
        button.value = choice;
        
        if (feedback) {
            // Geri Bildirim Modu
            const isCorrectAnswer = choice === currentWord.tr_display;
            const isSelected = choice === selectedChoice;
            
            button.disabled = true;

            if (isCorrectAnswer) {
                button.classList.add('correct');
            } else if (isSelected) {
                button.classList.add('incorrect');
            }
        } else {
            // Soru Modu
            button.onclick = () => checkAnswer(choice, currentWord);
        }
        
        choicesContainer.appendChild(button);
    });
    
    // Geri Bildirim Alanı
    feedbackPlaceholder.innerHTML = '';
    if (feedback) {
        feedbackPlaceholder.innerHTML = `<div class="feedback-message ${feedback.class}">${feedback.message}</div>`;
        nextButtonContainer.style.display = 'block';
    } else {
        nextButtonContainer.style.display = 'none';
    }
}

// --- CEVAP KONTROL VE AKIŞ YÖNETİMİ ---

function checkAnswer(selectedChoice, currentWord) {
    let isCorrect = false;
    
    // Doğru cevapları kontrol et (CSV'deki gibi birden fazla anlamı destekler)
    const selectedParts = selectedChoice.split(',').map(p => p.trim().toLowerCase());
    for (const part of selectedParts) {
        if (currentWord.tr_correct_meanings.includes(part)) {
            isCorrect = true;
            break;
        }
    }

    let feedback = {};
    if (isCorrect) {
        quizState.score++;
        feedback.class = "correct";
        feedback.message = `✔ DOĞRU! <b>${currentWord.en}</b> = ${currentWord.tr_display}`;
    } else {
        quizState.errorWords.push(currentWord.id);
        feedback.class = "incorrect";
        feedback.message = `❌ YANLIŞ! Doğru karşılığı: <b>${currentWord.tr_display}</b>`;
    }
    
    // Geri bildirim modunda render et
    renderQuestion(feedback, selectedChoice);
    saveState();
}

function nextQuestion() {
    quizState.currentIndex++;
    
    // Quiz Bitti Kontrolü
    if (quizState.currentIndex >= quizState.quizWords.length) {
        if (quizState.errorWords.length > 0) {
            // Yeni Hata Turu Başlat
            startErrorRound();
        } else {
            // Tamamen Bitti
            renderEndScreen();
        }
    } else {
        // Yeni Soruyu Render Et
        renderQuestion();
        saveState();
    }
}

function renderEndScreen() {
    const totalWords = quizState.allWords.length;
    const endHTML = `
        <div class="container" id="quiz-container" style="text-align:center;">
            <h1>Quiz Bitti! 🎉</h1>
            <p style="font-size: 1.5em;">Toplam Puanınız:</p>
            <p style="font-size: 3em; color: #007bff; font-weight: bold;">${quizState.score} / ${totalWords}</p>
            <p style="margin-top: 30px;"><a href="#" onclick="localStorage.removeItem('quizState'); window.location.reload();" class="next-button" style="display:inline-block;">Yeni Quiz Başlat</a></p>
        </div>
    `;
    document.body.innerHTML = endHTML;
    localStorage.removeItem('quizState'); // State'i temizle
}

// Global scope'a ekle (HTML'den çağrılması için)
window.initializeQuiz = initializeQuiz;
window.nextQuestion = nextQuestion;

// Uygulama yüklendiğinde başlat
document.addEventListener('DOMContentLoaded', initializeQuiz);