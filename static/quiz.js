// A. VERİ (Lütfen buraya tüm 1000 kelimeyi yukarıdaki formatta yapıştırın!)
const ALL_WORDS_DATA = [
    {
        "id": "1",
        "en": "I",
        "tr_display": "ben",
        "tr_correct_meanings": [
            "ben"
        ]
    },
    {
        "id": "2",
        "en": "you",
        "tr_display": "sen",
        "tr_correct_meanings": [
            "sen"
        ]
    },
    {
        "id": "3",
        "en": "he",
        "tr_display": "o (erkek)",
        "tr_correct_meanings": [
            "o (erkek)"
        ]
    },
    {
        "id": "4",
        "en": "she",
        "tr_display": "o (kadın)",
        "tr_correct_meanings": [
            "o (kadın)"
        ]
    },
    {
        "id": "5",
        "en": "it",
        "tr_display": "o (cansız/hayvan)",
        "tr_correct_meanings": [
            "o (cansız/hayvan)"
        ]
    },
    {
        "id": "6",
        "en": "we",
        "tr_display": "biz",
        "tr_correct_meanings": [
            "biz"
        ]
    },
    {
        "id": "7",
        "en": "they",
        "tr_display": "onlar",
        "tr_correct_meanings": [
            "onlar"
        ]
    },
    {
        "id": "8",
        "en": "my",
        "tr_display": "benim",
        "tr_correct_meanings": [
            "benim"
        ]
    },
    {
        "id": "9",
        "en": "your",
        "tr_display": "senin",
        "tr_correct_meanings": [
            "senin"
        ]
    },
    {
        "id": "10",
        "en": "his",
        "tr_display": "onun (erkek)",
        "tr_correct_meanings": [
            "onun (erkek)"
        ]
    },
    {
        "id": "11",
        "en": "her",
        "tr_display": "onun (kadın)",
        "tr_correct_meanings": [
            "onun (kadın)"
        ]
    },
    {
        "id": "12",
        "en": "their",
        "tr_display": "onların",
        "tr_correct_meanings": [
            "onların"
        ]
    },
    {
        "id": "13",
        "en": "our",
        "tr_display": "bizim",
        "tr_correct_meanings": [
            "bizim"
        ]
    },
    {
        "id": "14",
        "en": "this",
        "tr_display": "bu",
        "tr_correct_meanings": [
            "bu"
        ]
    },
    {
        "id": "15",
        "en": "that",
        "tr_display": "şu",
        "tr_correct_meanings": [
            "şu"
        ]
    },
    {
        "id": "16",
        "en": "these",
        "tr_display": "bunlar",
        "tr_correct_meanings": [
            "bunlar"
        ]
    },
    {
        "id": "17",
        "en": "those",
        "tr_display": "şunlar",
        "tr_correct_meanings": [
            "şunlar"
        ]
    },
    {
        "id": "18",
        "en": "mother",
        "tr_display": "anne",
        "tr_correct_meanings": [
            "anne"
        ]
    },
    {
        "id": "19",
        "en": "father",
        "tr_display": "baba",
        "tr_correct_meanings": [
            "baba"
        ]
    },
    {
        "id": "20",
        "en": "sister",
        "tr_display": "kız kardeş",
        "tr_correct_meanings": [
            "kız kardeş"
        ]
    },
    {
        "id": "21",
        "en": "brother",
        "tr_display": "erkek kardeş",
        "tr_correct_meanings": [
            "erkek kardeş"
        ]
    },
    {
        "id": "22",
        "en": "uncle",
        "tr_display": "amca, dayı",
        "tr_correct_meanings": [
            "amca",
            "dayı"
        ]
    },
    {
        "id": "23",
        "en": "aunt",
        "tr_display": "teyze, hala",
        "tr_correct_meanings": [
            "teyze",
            "hala"
        ]
    },
    {
        "id": "24",
        "en": "cousin",
        "tr_display": "kuzen",
        "tr_correct_meanings": [
            "kuzen"
        ]
    },
    {
        "id": "25",
        "en": "grandfather",
        "tr_display": "büyükbaba",
        "tr_correct_meanings": [
            "büyükbaba"
        ]
    },
    {
        "id": "26",
        "en": "grandmother",
        "tr_display": "büyükanne",
        "tr_correct_meanings": [
            "büyükanne"
        ]
    },
    {
        "id": "27",
        "en": "baby",
        "tr_display": "bebek",
        "tr_correct_meanings": [
            "bebek"
        ]
    },
    {
        "id": "28",
        "en": "child",
        "tr_display": "çocuk, evlat",
        "tr_correct_meanings": [
            "çocuk",
            "evlat"
        ]
    },
    {
        "id": "29",
        "en": "children",
        "tr_display": "çocuklar",
        "tr_correct_meanings": [
            "çocuklar"
        ]
    },
    {
        "id": "30",
        "en": "kid",
        "tr_display": "çocuk, ufaklık",
        "tr_correct_meanings": [
            "çocuk",
            "ufaklık"
        ]
    },
    {
        "id": "31",
        "en": "son",
        "tr_display": "oğul",
        "tr_correct_meanings": [
            "oğul"
        ]
    },
    {
        "id": "32",
        "en": "friend",
        "tr_display": "arkadaş",
        "tr_correct_meanings": [
            "arkadaş"
        ]
    },
    {
        "id": "33",
        "en": "boy",
        "tr_display": "erkek çocuk",
        "tr_correct_meanings": [
            "erkek çocuk"
        ]
    },
    {
        "id": "34",
        "en": "girl",
        "tr_display": "kız çocuk",
        "tr_correct_meanings": [
            "kız çocuk"
        ]
    },
    {
        "id": "35",
        "en": "man",
        "tr_display": "erkek",
        "tr_correct_meanings": [
            "erkek"
        ]
    },
    {
        "id": "36",
        "en": "woman",
        "tr_display": "kadın",
        "tr_correct_meanings": [
            "kadın"
        ]
    },
    {
        "id": "37",
        "en": "men",
        "tr_display": "erkekler",
        "tr_correct_meanings": [
            "erkekler"
        ]
    },
    {
        "id": "38",
        "en": "women",
        "tr_display": "kadınlar",
        "tr_correct_meanings": [
            "kadınlar"
        ]
    },
    {
        "id": "39",
        "en": "girlfriend",
        "tr_display": "kız arkadaş",
        "tr_correct_meanings": [
            "kız arkadaş"
        ]
    },
    {
        "id": "40",
        "en": "boyfriend",
        "tr_display": "erkek arkadaş",
        "tr_correct_meanings": [
            "erkek arkadaş"
        ]
    },
    {
        "id": "41",
        "en": "lover, beloved",
        "tr_display": "sevgili, aşık",
        "tr_correct_meanings": [
            "sevgili",
            "aşık"
        ]
    },
    {
        "id": "42",
        "en": "classmate",
        "tr_display": "sınıf arkadaşı",
        "tr_correct_meanings": [
            "sınıf arkadaşı"
        ]
    },
    {
        "id": "43",
        "en": "bestfriend",
        "tr_display": "en iyi arkadaş",
        "tr_correct_meanings": [
            "en iyi arkadaş"
        ]
    },
    {
        "id": "44",
        "en": "married",
        "tr_display": "evli",
        "tr_correct_meanings": [
            "evli"
        ]
    },
    {
        "id": "45",
        "en": "engaged",
        "tr_display": "nişanlı",
        "tr_correct_meanings": [
            "nişanlı"
        ]
    },
    {
        "id": "46",
        "en": "single",
        "tr_display": "bekar",
        "tr_correct_meanings": [
            "bekar"
        ]
    },
    {
        "id": "47",
        "en": "wife",
        "tr_display": "kadın eş (karı)",
        "tr_correct_meanings": [
            "kadın eş (karı)"
        ]
    },
    {
        "id": "48",
        "en": "husband",
        "tr_display": "erkek eş (koca)",
        "tr_correct_meanings": [
            "erkek eş (koca)"
        ]
    },
    {
        "id": "49",
        "en": "book",
        "tr_display": "kitap",
        "tr_correct_meanings": [
            "kitap"
        ]
    },
    {
        "id": "50",
        "en": "notebook",
        "tr_display": "not defteri",
        "tr_correct_meanings": [
            "not defteri"
        ]
    },
    {
        "id": "51",
        "en": "pencil",
        "tr_display": "kalem",
        "tr_correct_meanings": [
            "kalem"
        ]
    },
    {
        "id": "52",
        "en": "eraser",
        "tr_display": "silgi",
        "tr_correct_meanings": [
            "silgi"
        ]
    },
    {
        "id": "53",
        "en": "paper",
        "tr_display": "kağıt",
        "tr_correct_meanings": [
            "kağıt"
        ]
    },
    {
        "id": "54",
        "en": "school",
        "tr_display": "okul",
        "tr_correct_meanings": [
            "okul"
        ]
    },
    {
        "id": "55",
        "en": "classroom",
        "tr_display": "sınıf",
        "tr_correct_meanings": [
            "sınıf"
        ]
    },
    {
        "id": "56",
        "en": "student",
        "tr_display": "öğrenci",
        "tr_correct_meanings": [
            "öğrenci"
        ]
    },
    {
        "id": "57",
        "en": "teacher",
        "tr_display": "öğretmen",
        "tr_correct_meanings": [
            "öğretmen"
        ]
    },
    {
        "id": "58",
        "en": "desk",
        "tr_display": "masa (sıra)",
        "tr_correct_meanings": [
            "masa (sıra)"
        ]
    },
    {
        "id": "59",
        "en": "table",
        "tr_display": "masa",
        "tr_correct_meanings": [
            "masa"
        ]
    },
    {
        "id": "60",
        "en": "lesson",
        "tr_display": "ders",
        "tr_correct_meanings": [
            "ders"
        ]
    },
    {
        "id": "61",
        "en": "break",
        "tr_display": "teneffüs",
        "tr_correct_meanings": [
            "teneffüs"
        ]
    },
    {
        "id": "62",
        "en": "blackboard",
        "tr_display": "tahta",
        "tr_correct_meanings": [
            "tahta"
        ]
    },
    {
        "id": "63",
        "en": "homework",
        "tr_display": "ödev",
        "tr_correct_meanings": [
            "ödev"
        ]
    },
    {
        "id": "64",
        "en": "exam",
        "tr_display": "sınav",
        "tr_correct_meanings": [
            "sınav"
        ]
    },
    {
        "id": "65",
        "en": "note",
        "tr_display": "not",
        "tr_correct_meanings": [
            "not"
        ]
    },
    {
        "id": "66",
        "en": "university",
        "tr_display": "üniversite",
        "tr_correct_meanings": [
            "üniversite"
        ]
    },
    {
        "id": "67",
        "en": "high school",
        "tr_display": "lise",
        "tr_correct_meanings": [
            "lise"
        ]
    },
    {
        "id": "68",
        "en": "primary school",
        "tr_display": "ilkokul",
        "tr_correct_meanings": [
            "ilkokul"
        ]
    },
    {
        "id": "69",
        "en": "kindergarden",
        "tr_display": "anaokulu",
        "tr_correct_meanings": [
            "anaokulu"
        ]
    },
    {
        "id": "70",
        "en": "house",
        "tr_display": "ev",
        "tr_correct_meanings": [
            "ev"
        ]
    },
    {
        "id": "71",
        "en": "home",
        "tr_display": "ev (yuva)",
        "tr_correct_meanings": [
            "ev (yuva)"
        ]
    },
    {
        "id": "72",
        "en": "room",
        "tr_display": "oda",
        "tr_correct_meanings": [
            "oda"
        ]
    },
    {
        "id": "73",
        "en": "bedroom",
        "tr_display": "yatak odası",
        "tr_correct_meanings": [
            "yatak odası"
        ]
    },
    {
        "id": "74",
        "en": "kitchen",
        "tr_display": "mutfak",
        "tr_correct_meanings": [
            "mutfak"
        ]
    },
    {
        "id": "75",
        "en": "bathroom",
        "tr_display": "banyo",
        "tr_correct_meanings": [
            "banyo"
        ]
    },
    {
        "id": "76",
        "en": "door",
        "tr_display": "kapı",
        "tr_correct_meanings": [
            "kapı"
        ]
    },
    {
        "id": "77",
        "en": "toilet",
        "tr_display": "tuvalet",
        "tr_correct_meanings": [
            "tuvalet"
        ]
    },
    {
        "id": "78",
        "en": "floor",
        "tr_display": "zemin",
        "tr_correct_meanings": [
            "zemin"
        ]
    },
    {
        "id": "79",
        "en": "window",
        "tr_display": "pencere",
        "tr_correct_meanings": [
            "pencere"
        ]
    },
    {
        "id": "80",
        "en": "cabinet",
        "tr_display": "dolap",
        "tr_correct_meanings": [
            "dolap"
        ]
    },
    {
        "id": "81",
        "en": "elevator",
        "tr_display": "asansör",
        "tr_correct_meanings": [
            "asansör"
        ]
    },
    {
        "id": "82",
        "en": "wardrobe",
        "tr_display": "gardırop",
        "tr_correct_meanings": [
            "gardırop"
        ]
    },
    {
        "id": "83",
        "en": "key",
        "tr_display": "anahtar",
        "tr_correct_meanings": [
            "anahtar"
        ]
    },
    {
        "id": "84",
        "en": "carpet",
        "tr_display": "halı",
        "tr_correct_meanings": [
            "halı"
        ]
    },
    {
        "id": "85",
        "en": "chair",
        "tr_display": "koltuk, sandalye",
        "tr_correct_meanings": [
            "koltuk",
            "sandalye"
        ]
    },
    {
        "id": "86",
        "en": "go",
        "tr_display": "gitmek",
        "tr_correct_meanings": [
            "gitmek"
        ]
    },
    {
        "id": "87",
        "en": "come",
        "tr_display": "gelmek",
        "tr_correct_meanings": [
            "gelmek"
        ]
    },
    {
        "id": "88",
        "en": "swim",
        "tr_display": "yüzmek",
        "tr_correct_meanings": [
            "yüzmek"
        ]
    },
    {
        "id": "89",
        "en": "play",
        "tr_display": "oynamak",
        "tr_correct_meanings": [
            "oynamak"
        ]
    },
    {
        "id": "90",
        "en": "dance",
        "tr_display": "dans etmek",
        "tr_correct_meanings": [
            "dans etmek"
        ]
    },
    {
        "id": "91",
        "en": "sit (sit down)",
        "tr_display": "oturmak",
        "tr_correct_meanings": [
            "oturmak"
        ]
    },
    {
        "id": "92",
        "en": "speak",
        "tr_display": "konuşmak",
        "tr_correct_meanings": [
            "konuşmak"
        ]
    },
    {
        "id": "93",
        "en": "talk",
        "tr_display": "konuşmak",
        "tr_correct_meanings": [
            "konuşmak"
        ]
    },
    {
        "id": "94",
        "en": "say",
        "tr_display": "söylemek",
        "tr_correct_meanings": [
            "söylemek"
        ]
    },
    {
        "id": "95",
        "en": "study",
        "tr_display": "ders çalışmak",
        "tr_correct_meanings": [
            "ders çalışmak"
        ]
    },
    {
        "id": "96",
        "en": "work",
        "tr_display": "çalışmak",
        "tr_correct_meanings": [
            "çalışmak"
        ]
    },
    {
        "id": "97",
        "en": "help",
        "tr_display": "yardım etmek",
        "tr_correct_meanings": [
            "yardım etmek"
        ]
    },
    {
        "id": "98",
        "en": "stop",
        "tr_display": "durmak",
        "tr_correct_meanings": [
            "durmak"
        ]
    },
    {
        "id": "99",
        "en": "start",
        "tr_display": "başlamak",
        "tr_correct_meanings": [
            "başlamak"
        ]
    },
    {
        "id": "100",
        "en": "begin",
        "tr_display": "başlamak",
        "tr_correct_meanings": [
            "başlamak"
        ]
    },
    {
        "id": "101",
        "en": "finish",
        "tr_display": "bitirmek",
        "tr_correct_meanings": [
            "bitirmek"
        ]
    },
    {
        "id": "102",
        "en": "show",
        "tr_display": "göstermek",
        "tr_correct_meanings": [
            "göstermek"
        ]
    },
    {
        "id": "103",
        "en": "change",
        "tr_display": "değiştirmek, değişiklik",
        "tr_correct_meanings": [
            "değiştirmek",
            "değişiklik"
        ]
    },
    {
        "id": "104",
        "en": "invite",
        "tr_display": "davet etmek, çağırmak",
        "tr_correct_meanings": [
            "davet etmek",
            "çağırmak"
        ]
    },
    {
        "id": "105",
        "en": "do",
        "tr_display": "yapmak",
        "tr_correct_meanings": [
            "yapmak"
        ]
    },
    {
        "id": "106",
        "en": "make",
        "tr_display": "yapmak",
        "tr_correct_meanings": [
            "yapmak"
        ]
    },
    {
        "id": "107",
        "en": "look",
        "tr_display": "bakmak",
        "tr_correct_meanings": [
            "bakmak"
        ]
    },
    {
        "id": "108",
        "en": "cry",
        "tr_display": "ağlamak",
        "tr_correct_meanings": [
            "ağlamak"
        ]
    },
    {
        "id": "109",
        "en": "fly",
        "tr_display": "uçmak",
        "tr_correct_meanings": [
            "uçmak"
        ]
    },
    {
        "id": "110",
        "en": "see",
        "tr_display": "görmek",
        "tr_correct_meanings": [
            "görmek"
        ]
    },
    {
        "id": "111",
        "en": "call",
        "tr_display": "çağırmak, telefon etmek",
        "tr_correct_meanings": [
            "çağırmak",
            "telefon etmek"
        ]
    },
    {
        "id": "112",
        "en": "win",
        "tr_display": "kazanmak",
        "tr_correct_meanings": [
            "kazanmak"
        ]
    },
    {
        "id": "113",
        "en": "give",
        "tr_display": "vermek",
        "tr_correct_meanings": [
            "vermek"
        ]
    },
    {
        "id": "114",
        "en": "take",
        "tr_display": "almak",
        "tr_correct_meanings": [
            "almak"
        ]
    },
    {
        "id": "115",
        "en": "get",
        "tr_display": "almak, edinmek",
        "tr_correct_meanings": [
            "almak",
            "edinmek"
        ]
    },
    {
        "id": "116",
        "en": "buy",
        "tr_display": "satın almak",
        "tr_correct_meanings": [
            "satın almak"
        ]
    },
    {
        "id": "117",
        "en": "sell",
        "tr_display": "satmak",
        "tr_correct_meanings": [
            "satmak"
        ]
    },
    {
        "id": "118",
        "en": "send",
        "tr_display": "göndermek",
        "tr_correct_meanings": [
            "göndermek"
        ]
    },
    {
        "id": "119",
        "en": "garden",
        "tr_display": "bahçe",
        "tr_correct_meanings": [
            "bahçe"
        ]
    },
    {
        "id": "120",
        "en": "flower",
        "tr_display": "çiçek",
        "tr_correct_meanings": [
            "çiçek"
        ]
    },
    {
        "id": "121",
        "en": "tree",
        "tr_display": "ağaç",
        "tr_correct_meanings": [
            "ağaç"
        ]
    },
    {
        "id": "122",
        "en": "forest",
        "tr_display": "orman",
        "tr_correct_meanings": [
            "orman"
        ]
    },
    {
        "id": "123",
        "en": "roof",
        "tr_display": "çatı",
        "tr_correct_meanings": [
            "çatı"
        ]
    },
    {
        "id": "124",
        "en": "soap",
        "tr_display": "sabun",
        "tr_correct_meanings": [
            "sabun"
        ]
    },
    {
        "id": "125",
        "en": "towel",
        "tr_display": "havlu",
        "tr_correct_meanings": [
            "havlu"
        ]
    },
    {
        "id": "126",
        "en": "car",
        "tr_display": "araba",
        "tr_correct_meanings": [
            "araba"
        ]
    },
    {
        "id": "127",
        "en": "bus",
        "tr_display": "otobüs",
        "tr_correct_meanings": [
            "otobüs"
        ]
    },
    {
        "id": "128",
        "en": "bus stop",
        "tr_display": "otobüs durağı",
        "tr_correct_meanings": [
            "otobüs durağı"
        ]
    },
    {
        "id": "129",
        "en": "accident",
        "tr_display": "kaza",
        "tr_correct_meanings": [
            "kaza"
        ]
    },
    {
        "id": "130",
        "en": "bicycle",
        "tr_display": "bisiklet",
        "tr_correct_meanings": [
            "bisiklet"
        ]
    },
    {
        "id": "131",
        "en": "bike",
        "tr_display": "bisiklet",
        "tr_correct_meanings": [
            "bisiklet"
        ]
    },
    {
        "id": "132",
        "en": "motorbike",
        "tr_display": "motosiklet",
        "tr_correct_meanings": [
            "motosiklet"
        ]
    },
    {
        "id": "133",
        "en": "airplane",
        "tr_display": "uçak",
        "tr_correct_meanings": [
            "uçak"
        ]
    },
    {
        "id": "134",
        "en": "doctor",
        "tr_display": "doktor",
        "tr_correct_meanings": [
            "doktor"
        ]
    },
    {
        "id": "135",
        "en": "nurse",
        "tr_display": "hemşire",
        "tr_correct_meanings": [
            "hemşire"
        ]
    },
    {
        "id": "136",
        "en": "dentist",
        "tr_display": "dişçi",
        "tr_correct_meanings": [
            "dişçi"
        ]
    },
    {
        "id": "137",
        "en": "engineer",
        "tr_display": "mühendis",
        "tr_correct_meanings": [
            "mühendis"
        ]
    },
    {
        "id": "138",
        "en": "lawyer",
        "tr_display": "avukat",
        "tr_correct_meanings": [
            "avukat"
        ]
    },
    {
        "id": "139",
        "en": "soldier",
        "tr_display": "asker",
        "tr_correct_meanings": [
            "asker"
        ]
    },
    {
        "id": "140",
        "en": "policeman",
        "tr_display": "polis",
        "tr_correct_meanings": [
            "polis"
        ]
    },
    {
        "id": "141",
        "en": "waiter",
        "tr_display": "garson",
        "tr_correct_meanings": [
            "garson"
        ]
    },
    {
        "id": "142",
        "en": "cook (fryer)",
        "tr_display": "aşçı",
        "tr_correct_meanings": [
            "aşçı"
        ]
    },
    {
        "id": "143",
        "en": "staff",
        "tr_display": "görevli",
        "tr_correct_meanings": [
            "görevli"
        ]
    },
    {
        "id": "144",
        "en": "security staff",
        "tr_display": "güvenlik görevlisi",
        "tr_correct_meanings": [
            "güvenlik görevlisi"
        ]
    },
    {
        "id": "145",
        "en": "manager (director)",
        "tr_display": "müdür",
        "tr_correct_meanings": [
            "müdür"
        ]
    },
    {
        "id": "146",
        "en": "assistant",
        "tr_display": "yardımcı",
        "tr_correct_meanings": [
            "yardımcı"
        ]
    },
    {
        "id": "147",
        "en": "executive assistant",
        "tr_display": "müdür yardımcısı",
        "tr_correct_meanings": [
            "müdür yardımcısı"
        ]
    },
    {
        "id": "148",
        "en": "officer",
        "tr_display": "subay, memur",
        "tr_correct_meanings": [
            "subay",
            "memur"
        ]
    },
    {
        "id": "149",
        "en": "civil",
        "tr_display": "sivil",
        "tr_correct_meanings": [
            "sivil"
        ]
    },
    {
        "id": "150",
        "en": "civil servant",
        "tr_display": "memur, devlet memuru",
        "tr_correct_meanings": [
            "memur",
            "devlet memuru"
        ]
    },
    {
        "id": "151",
        "en": "athlete",
        "tr_display": "sporcu, atlet",
        "tr_correct_meanings": [
            "sporcu",
            "atlet"
        ]
    },
    {
        "id": "152",
        "en": "idea",
        "tr_display": "fikir, düşünce",
        "tr_correct_meanings": [
            "fikir",
            "düşünce"
        ]
    },
    {
        "id": "153",
        "en": "guess",
        "tr_display": "tahmin",
        "tr_correct_meanings": [
            "tahmin"
        ]
    },
    {
        "id": "154",
        "en": "guest",
        "tr_display": "konuk, misafir",
        "tr_correct_meanings": [
            "konuk",
            "misafir"
        ]
    },
    {
        "id": "155",
        "en": "love",
        "tr_display": "aşk",
        "tr_correct_meanings": [
            "aşk"
        ]
    },
    {
        "id": "156",
        "en": "fall in love",
        "tr_display": "aşık olmak",
        "tr_correct_meanings": [
            "aşık olmak"
        ]
    },
    {
        "id": "157",
        "en": "desire",
        "tr_display": "arzu etmek",
        "tr_correct_meanings": [
            "arzu etmek"
        ]
    },
    {
        "id": "158",
        "en": "like",
        "tr_display": "hoşlanmak",
        "tr_correct_meanings": [
            "hoşlanmak"
        ]
    },
    {
        "id": "159",
        "en": "enjoy",
        "tr_display": "keyif almak",
        "tr_correct_meanings": [
            "keyif almak"
        ]
    },
    {
        "id": "160",
        "en": "want",
        "tr_display": "istemek",
        "tr_correct_meanings": [
            "istemek"
        ]
    },
    {
        "id": "161",
        "en": "grow",
        "tr_display": "büyümek",
        "tr_correct_meanings": [
            "büyümek"
        ]
    },
    {
        "id": "162",
        "en": "eat",
        "tr_display": "yemek",
        "tr_correct_meanings": [
            "yemek"
        ]
    },
    {
        "id": "163",
        "en": "read",
        "tr_display": "okumak",
        "tr_correct_meanings": [
            "okumak"
        ]
    },
    {
        "id": "164",
        "en": "write",
        "tr_display": "yazmak",
        "tr_correct_meanings": [
            "yazmak"
        ]
    },
    {
        "id": "165",
        "en": "answer",
        "tr_display": "cevap, cevap vermek",
        "tr_correct_meanings": [
            "cevap",
            "cevap vermek"
        ]
    },
    {
        "id": "166",
        "en": "question",
        "tr_display": "soru, soru sormak",
        "tr_correct_meanings": [
            "soru",
            "soru sormak"
        ]
    },
    {
        "id": "167",
        "en": "ask",
        "tr_display": "sormak",
        "tr_correct_meanings": [
            "sormak"
        ]
    },
    {
        "id": "168",
        "en": "stay",
        "tr_display": "kalmak",
        "tr_correct_meanings": [
            "kalmak"
        ]
    },
    {
        "id": "169",
        "en": "teach",
        "tr_display": "öğretmek",
        "tr_correct_meanings": [
            "öğretmek"
        ]
    },
    {
        "id": "170",
        "en": "learn",
        "tr_display": "öğrenmek",
        "tr_correct_meanings": [
            "öğrenmek"
        ]
    },
    {
        "id": "171",
        "en": "walk",
        "tr_display": "yürümek",
        "tr_correct_meanings": [
            "yürümek"
        ]
    },
    {
        "id": "172",
        "en": "run",
        "tr_display": "koşmak",
        "tr_correct_meanings": [
            "koşmak"
        ]
    },
    {
        "id": "173",
        "en": "feel",
        "tr_display": "hissetmek",
        "tr_correct_meanings": [
            "hissetmek"
        ]
    },
    {
        "id": "174",
        "en": "feel bad",
        "tr_display": "kötü hissetmek",
        "tr_correct_meanings": [
            "kötü hissetmek"
        ]
    },
    {
        "id": "175",
        "en": "make a plan",
        "tr_display": "plan yapmak",
        "tr_correct_meanings": [
            "plan yapmak"
        ]
    },
    {
        "id": "176",
        "en": "watch",
        "tr_display": "izlemek",
        "tr_correct_meanings": [
            "izlemek"
        ]
    },
    {
        "id": "177",
        "en": "wait",
        "tr_display": "beklemek",
        "tr_correct_meanings": [
            "beklemek"
        ]
    },
    {
        "id": "178",
        "en": "visit",
        "tr_display": "ziyaret etmek",
        "tr_correct_meanings": [
            "ziyaret etmek"
        ]
    },
    {
        "id": "179",
        "en": "listen",
        "tr_display": "dinlemek",
        "tr_correct_meanings": [
            "dinlemek"
        ]
    },
    {
        "id": "180",
        "en": "know",
        "tr_display": "bilmek",
        "tr_correct_meanings": [
            "bilmek"
        ]
    },
    {
        "id": "181",
        "en": "open",
        "tr_display": "açmak",
        "tr_correct_meanings": [
            "açmak"
        ]
    },
    {
        "id": "182",
        "en": "shut",
        "tr_display": "kapamak",
        "tr_correct_meanings": [
            "kapamak"
        ]
    },
    {
        "id": "183",
        "en": "shout",
        "tr_display": "bağırmak",
        "tr_correct_meanings": [
            "bağırmak"
        ]
    },
    {
        "id": "184",
        "en": "yell",
        "tr_display": "bağırma, seslenme",
        "tr_correct_meanings": [
            "bağırma",
            "seslenme"
        ]
    },
    {
        "id": "185",
        "en": "use",
        "tr_display": "kullanmak",
        "tr_correct_meanings": [
            "kullanmak"
        ]
    },
    {
        "id": "186",
        "en": "understand",
        "tr_display": "anlamak",
        "tr_correct_meanings": [
            "anlamak"
        ]
    },
    {
        "id": "187",
        "en": "smile",
        "tr_display": "gülümsemek",
        "tr_correct_meanings": [
            "gülümsemek"
        ]
    },
    {
        "id": "188",
        "en": "miss",
        "tr_display": "özlemek",
        "tr_correct_meanings": [
            "özlemek"
        ]
    },
    {
        "id": "189",
        "en": "forget",
        "tr_display": "unutmak",
        "tr_correct_meanings": [
            "unutmak"
        ]
    },
    {
        "id": "190",
        "en": "remember",
        "tr_display": "hatırlamak",
        "tr_correct_meanings": [
            "hatırlamak"
        ]
    },
    {
        "id": "191",
        "en": "think",
        "tr_display": "düşünmek",
        "tr_correct_meanings": [
            "düşünmek"
        ]
    },
    {
        "id": "192",
        "en": "take a photo",
        "tr_display": "fotoğraf çekmek",
        "tr_correct_meanings": [
            "fotoğraf çekmek"
        ]
    },
    {
        "id": "193",
        "en": "animal",
        "tr_display": "hayvan",
        "tr_correct_meanings": [
            "hayvan"
        ]
    },
    {
        "id": "194",
        "en": "pet",
        "tr_display": "evcil hayvan",
        "tr_correct_meanings": [
            "evcil hayvan"
        ]
    },
    {
        "id": "195",
        "en": "dog",
        "tr_display": "köpek",
        "tr_correct_meanings": [
            "köpek"
        ]
    },
    {
        "id": "196",
        "en": "cat",
        "tr_display": "kedi",
        "tr_correct_meanings": [
            "kedi"
        ]
    },
    {
        "id": "197",
        "en": "fish",
        "tr_display": "balık",
        "tr_correct_meanings": [
            "balık"
        ]
    },
    {
        "id": "198",
        "en": "bird",
        "tr_display": "kuş",
        "tr_correct_meanings": [
            "kuş"
        ]
    },
    {
        "id": "199",
        "en": "camel",
        "tr_display": "deve",
        "tr_correct_meanings": [
            "deve"
        ]
    },
    {
        "id": "200",
        "en": "elephant",
        "tr_display": "fil",
        "tr_correct_meanings": [
            "fil"
        ]
    },
    {
        "id": "201",
        "en": "mouse",
        "tr_display": "fare",
        "tr_correct_meanings": [
            "fare"
        ]
    },
    {
        "id": "202",
        "en": "horse",
        "tr_display": "at",
        "tr_correct_meanings": [
            "at"
        ]
    },
    {
        "id": "203",
        "en": "donkey",
        "tr_display": "eşek",
        "tr_correct_meanings": [
            "eşek"
        ]
    },
    {
        "id": "204",
        "en": "chicken",
        "tr_display": "tavuk",
        "tr_correct_meanings": [
            "tavuk"
        ]
    },
    {
        "id": "205",
        "en": "snake",
        "tr_display": "yılan",
        "tr_correct_meanings": [
            "yılan"
        ]
    },
    {
        "id": "206",
        "en": "rabbit",
        "tr_display": "tavşan",
        "tr_correct_meanings": [
            "tavşan"
        ]
    },
    {
        "id": "207",
        "en": "pig",
        "tr_display": "domuz",
        "tr_correct_meanings": [
            "domuz"
        ]
    },
    {
        "id": "208",
        "en": "fly",
        "tr_display": "sinek",
        "tr_correct_meanings": [
            "sinek"
        ]
    },
    {
        "id": "209",
        "en": "lion",
        "tr_display": "aslan",
        "tr_correct_meanings": [
            "aslan"
        ]
    },
    {
        "id": "210",
        "en": "fox",
        "tr_display": "tilki",
        "tr_correct_meanings": [
            "tilki"
        ]
    },
    {
        "id": "211",
        "en": "spider",
        "tr_display": "örümcek",
        "tr_correct_meanings": [
            "örümcek"
        ]
    },
    {
        "id": "212",
        "en": "bee",
        "tr_display": "arı",
        "tr_correct_meanings": [
            "arı"
        ]
    },
    {
        "id": "213",
        "en": "bear",
        "tr_display": "ayı",
        "tr_correct_meanings": [
            "ayı"
        ]
    },
    {
        "id": "214",
        "en": "chick",
        "tr_display": "civciv",
        "tr_correct_meanings": [
            "civciv"
        ]
    },
    {
        "id": "215",
        "en": "ox",
        "tr_display": "öküz",
        "tr_correct_meanings": [
            "öküz"
        ]
    },
    {
        "id": "216",
        "en": "cow",
        "tr_display": "inek",
        "tr_correct_meanings": [
            "inek"
        ]
    },
    {
        "id": "217",
        "en": "bull",
        "tr_display": "boğa",
        "tr_correct_meanings": [
            "boğa"
        ]
    },
    {
        "id": "218",
        "en": "sheep",
        "tr_display": "koyun",
        "tr_correct_meanings": [
            "koyun"
        ]
    },
    {
        "id": "219",
        "en": "rooster",
        "tr_display": "horoz",
        "tr_correct_meanings": [
            "horoz"
        ]
    },
    {
        "id": "220",
        "en": "cockroach",
        "tr_display": "hamam böceği",
        "tr_correct_meanings": [
            "hamam böceği"
        ]
    },
    {
        "id": "221",
        "en": "face",
        "tr_display": "yüz",
        "tr_correct_meanings": [
            "yüz"
        ]
    },
    {
        "id": "222",
        "en": "head",
        "tr_display": "kafa",
        "tr_correct_meanings": [
            "kafa"
        ]
    },
    {
        "id": "223",
        "en": "nose",
        "tr_display": "burun",
        "tr_correct_meanings": [
            "burun"
        ]
    },
    {
        "id": "224",
        "en": "lip",
        "tr_display": "dudak",
        "tr_correct_meanings": [
            "dudak"
        ]
    },
    {
        "id": "225",
        "en": "eye",
        "tr_display": "göz",
        "tr_correct_meanings": [
            "göz"
        ]
    },
    {
        "id": "226",
        "en": "ear",
        "tr_display": "kulak",
        "tr_correct_meanings": [
            "kulak"
        ]
    },
    {
        "id": "227",
        "en": "teeth",
        "tr_display": "diş",
        "tr_correct_meanings": [
            "diş"
        ]
    },
    {
        "id": "228",
        "en": "foot",
        "tr_display": "ayak",
        "tr_correct_meanings": [
            "ayak"
        ]
    },
    {
        "id": "229",
        "en": "arm",
        "tr_display": "kol",
        "tr_correct_meanings": [
            "kol"
        ]
    },
    {
        "id": "230",
        "en": "hand",
        "tr_display": "el",
        "tr_correct_meanings": [
            "el"
        ]
    },
    {
        "id": "231",
        "en": "finger",
        "tr_display": "parmak",
        "tr_correct_meanings": [
            "parmak"
        ]
    },
    {
        "id": "232",
        "en": "skin",
        "tr_display": "deri",
        "tr_correct_meanings": [
            "deri"
        ]
    },
    {
        "id": "233",
        "en": "glasses",
        "tr_display": "gözlük",
        "tr_correct_meanings": [
            "gözlük"
        ]
    },
    {
        "id": "234",
        "en": "dress",
        "tr_display": "elbise",
        "tr_correct_meanings": [
            "elbise"
        ]
    },
    {
        "id": "235",
        "en": "jacket",
        "tr_display": "ceket",
        "tr_correct_meanings": [
            "ceket"
        ]
    },
    {
        "id": "236",
        "en": "sweater",
        "tr_display": "kazak",
        "tr_correct_meanings": [
            "kazak"
        ]
    },
    {
        "id": "237",
        "en": "shorts",
        "tr_display": "şort",
        "tr_correct_meanings": [
            "şort"
        ]
    },
    {
        "id": "238",
        "en": "pants",
        "tr_display": "pantolon",
        "tr_correct_meanings": [
            "pantolon"
        ]
    },
    {
        "id": "239",
        "en": "shoe",
        "tr_display": "ayakkabı",
        "tr_correct_meanings": [
            "ayakkabı"
        ]
    },
    {
        "id": "240",
        "en": "blouse",
        "tr_display": "bluz",
        "tr_correct_meanings": [
            "bluz"
        ]
    },
    {
        "id": "241",
        "en": "shirt",
        "tr_display": "gömlek",
        "tr_correct_meanings": [
            "gömlek"
        ]
    },
    {
        "id": "242",
        "en": "tshirt",
        "tr_display": "tişört",
        "tr_correct_meanings": [
            "tişört"
        ]
    },
    {
        "id": "243",
        "en": "slipper",
        "tr_display": "terlik",
        "tr_correct_meanings": [
            "terlik"
        ]
    },
    {
        "id": "244",
        "en": "hat",
        "tr_display": "şapka",
        "tr_correct_meanings": [
            "şapka"
        ]
    },
    {
        "id": "245",
        "en": "worker",
        "tr_display": "işçi",
        "tr_correct_meanings": [
            "işçi"
        ]
    },
    {
        "id": "246",
        "en": "food",
        "tr_display": "yiyecek",
        "tr_correct_meanings": [
            "yiyecek"
        ]
    },
    {
        "id": "247",
        "en": "water",
        "tr_display": "su",
        "tr_correct_meanings": [
            "su"
        ]
    },
    {
        "id": "248",
        "en": "milk",
        "tr_display": "süt",
        "tr_correct_meanings": [
            "süt"
        ]
    },
    {
        "id": "249",
        "en": "tea",
        "tr_display": "çay",
        "tr_correct_meanings": [
            "çay"
        ]
    },
    {
        "id": "250",
        "en": "coffee",
        "tr_display": "kahve",
        "tr_correct_meanings": [
            "kahve"
        ]
    },
    {
        "id": "251",
        "en": "butter",
        "tr_display": "tereyağ",
        "tr_correct_meanings": [
            "tereyağ"
        ]
    },
    {
        "id": "252",
        "en": "fruit",
        "tr_display": "meyve",
        "tr_correct_meanings": [
            "meyve"
        ]
    },
    {
        "id": "253",
        "en": "juice",
        "tr_display": "meyve suyu",
        "tr_correct_meanings": [
            "meyve suyu"
        ]
    },
    {
        "id": "254",
        "en": "buttermilk",
        "tr_display": "ayran",
        "tr_correct_meanings": [
            "ayran"
        ]
    },
    {
        "id": "255",
        "en": "drink",
        "tr_display": "içki",
        "tr_correct_meanings": [
            "içki"
        ]
    },
    {
        "id": "256",
        "en": "beer",
        "tr_display": "bira",
        "tr_correct_meanings": [
            "bira"
        ]
    },
    {
        "id": "257",
        "en": "wine",
        "tr_display": "şarap",
        "tr_correct_meanings": [
            "şarap"
        ]
    },
    {
        "id": "258",
        "en": "bread",
        "tr_display": "ekmek",
        "tr_correct_meanings": [
            "ekmek"
        ]
    },
    {
        "id": "259",
        "en": "vegetables",
        "tr_display": "sebze",
        "tr_correct_meanings": [
            "sebze"
        ]
    },
    {
        "id": "260",
        "en": "soup",
        "tr_display": "çorba",
        "tr_correct_meanings": [
            "çorba"
        ]
    },
    {
        "id": "261",
        "en": "meat",
        "tr_display": "et",
        "tr_correct_meanings": [
            "et"
        ]
    },
    {
        "id": "262",
        "en": "veal",
        "tr_display": "dana eti",
        "tr_correct_meanings": [
            "dana eti"
        ]
    },
    {
        "id": "263",
        "en": "pork",
        "tr_display": "domuz eti",
        "tr_correct_meanings": [
            "domuz eti"
        ]
    },
    {
        "id": "264",
        "en": "meatball",
        "tr_display": "köfte",
        "tr_correct_meanings": [
            "köfte"
        ]
    },
    {
        "id": "265",
        "en": "chop",
        "tr_display": "pirzola",
        "tr_correct_meanings": [
            "pirzola"
        ]
    },
    {
        "id": "266",
        "en": "potato",
        "tr_display": "patates",
        "tr_correct_meanings": [
            "patates"
        ]
    },
    {
        "id": "267",
        "en": "grill",
        "tr_display": "ızgara",
        "tr_correct_meanings": [
            "ızgara"
        ]
    },
    {
        "id": "268",
        "en": "kebab",
        "tr_display": "kebap",
        "tr_correct_meanings": [
            "kebap"
        ]
    },
    {
        "id": "269",
        "en": "oil",
        "tr_display": "yağ",
        "tr_correct_meanings": [
            "yağ"
        ]
    },
    {
        "id": "270",
        "en": "olive",
        "tr_display": "zeytin",
        "tr_correct_meanings": [
            "zeytin"
        ]
    },
    {
        "id": "271",
        "en": "olive oil",
        "tr_display": "zeytin yağı",
        "tr_correct_meanings": [
            "zeytin yağı"
        ]
    },
    {
        "id": "272",
        "en": "sunflower",
        "tr_display": "ayçiçek",
        "tr_correct_meanings": [
            "ayçiçek"
        ]
    },
    {
        "id": "273",
        "en": "sunflower oil",
        "tr_display": "ayçiçek yağı",
        "tr_correct_meanings": [
            "ayçiçek yağı"
        ]
    },
    {
        "id": "274",
        "en": "salt",
        "tr_display": "tuz",
        "tr_correct_meanings": [
            "tuz"
        ]
    },
    {
        "id": "275",
        "en": "salad",
        "tr_display": "salata",
        "tr_correct_meanings": [
            "salata"
        ]
    },
    {
        "id": "276",
        "en": "pepper",
        "tr_display": "biber",
        "tr_correct_meanings": [
            "biber"
        ]
    },
    {
        "id": "277",
        "en": "black pepper",
        "tr_display": "karabiber",
        "tr_correct_meanings": [
            "karabiber"
        ]
    },
    {
        "id": "278",
        "en": "chili",
        "tr_display": "kırmızı biber",
        "tr_correct_meanings": [
            "kırmızı biber"
        ]
    },
    {
        "id": "279",
        "en": "thyme",
        "tr_display": "kekik",
        "tr_correct_meanings": [
            "kekik"
        ]
    },
    {
        "id": "280",
        "en": "garlic",
        "tr_display": "sarımsak",
        "tr_correct_meanings": [
            "sarımsak"
        ]
    },
    {
        "id": "281",
        "en": "dessert",
        "tr_display": "tatlı",
        "tr_correct_meanings": [
            "tatlı"
        ]
    },
    {
        "id": "282",
        "en": "delight",
        "tr_display": "lokum",
        "tr_correct_meanings": [
            "lokum"
        ]
    },
    {
        "id": "283",
        "en": "baklava",
        "tr_display": "baklava",
        "tr_correct_meanings": [
            "baklava"
        ]
    },
    {
        "id": "284",
        "en": "cake",
        "tr_display": "pasta",
        "tr_correct_meanings": [
            "pasta"
        ]
    },
    {
        "id": "285",
        "en": "pastry",
        "tr_display": "poğaça, hamur işi",
        "tr_correct_meanings": [
            "poğaça",
            "hamur işi"
        ]
    },
    {
        "id": "286",
        "en": "onion",
        "tr_display": "soğan",
        "tr_correct_meanings": [
            "soğan"
        ]
    },
    {
        "id": "287",
        "en": "cookie",
        "tr_display": "kurabiye",
        "tr_correct_meanings": [
            "kurabiye"
        ]
    },
    {
        "id": "288",
        "en": "hazelnut",
        "tr_display": "fındık",
        "tr_correct_meanings": [
            "fındık"
        ]
    },
    {
        "id": "289",
        "en": "peanut",
        "tr_display": "fıstık",
        "tr_correct_meanings": [
            "fıstık"
        ]
    },
    {
        "id": "290",
        "en": "walnut",
        "tr_display": "ceviz",
        "tr_correct_meanings": [
            "ceviz"
        ]
    },
    {
        "id": "291",
        "en": "delicious",
        "tr_display": "lezzetli",
        "tr_correct_meanings": [
            "lezzetli"
        ]
    },
    {
        "id": "292",
        "en": "watermelon",
        "tr_display": "karpuz",
        "tr_correct_meanings": [
            "karpuz"
        ]
    },
    {
        "id": "293",
        "en": "melon",
        "tr_display": "kavun",
        "tr_correct_meanings": [
            "kavun"
        ]
    },
    {
        "id": "294",
        "en": "apple",
        "tr_display": "elma",
        "tr_correct_meanings": [
            "elma"
        ]
    },
    {
        "id": "295",
        "en": "orange",
        "tr_display": "portakal",
        "tr_correct_meanings": [
            "portakal"
        ]
    },
    {
        "id": "296",
        "en": "mandarin",
        "tr_display": "mandalina",
        "tr_correct_meanings": [
            "mandalina"
        ]
    },
    {
        "id": "297",
        "en": "banana",
        "tr_display": "muz",
        "tr_correct_meanings": [
            "muz"
        ]
    },
    {
        "id": "298",
        "en": "cherry",
        "tr_display": "kiraz, vişne",
        "tr_correct_meanings": [
            "kiraz",
            "vişne"
        ]
    },
    {
        "id": "299",
        "en": "grape",
        "tr_display": "üzüm",
        "tr_correct_meanings": [
            "üzüm"
        ]
    },
    {
        "id": "300",
        "en": "apricot",
        "tr_display": "kayısı",
        "tr_correct_meanings": [
            "kayısı"
        ]
    },
    {
        "id": "301",
        "en": "peach",
        "tr_display": "şeftali",
        "tr_correct_meanings": [
            "şeftali"
        ]
    },
    {
        "id": "302",
        "en": "fig",
        "tr_display": "incir",
        "tr_correct_meanings": [
            "incir"
        ]
    },
    {
        "id": "303",
        "en": "carrot",
        "tr_display": "havuç",
        "tr_correct_meanings": [
            "havuç"
        ]
    },
    {
        "id": "304",
        "en": "kiwi",
        "tr_display": "kivi",
        "tr_correct_meanings": [
            "kivi"
        ]
    },
    {
        "id": "305",
        "en": "dinner",
        "tr_display": "akşam yemeği",
        "tr_correct_meanings": [
            "akşam yemeği"
        ]
    },
    {
        "id": "306",
        "en": "lunch",
        "tr_display": "öğle yemeği",
        "tr_correct_meanings": [
            "öğle yemeği"
        ]
    },
    {
        "id": "307",
        "en": "breakfast",
        "tr_display": "kahvaltı",
        "tr_correct_meanings": [
            "kahvaltı"
        ]
    },
    {
        "id": "308",
        "en": "cheese",
        "tr_display": "peynir",
        "tr_correct_meanings": [
            "peynir"
        ]
    },
    {
        "id": "309",
        "en": "honey",
        "tr_display": "bal",
        "tr_correct_meanings": [
            "bal"
        ]
    },
    {
        "id": "310",
        "en": "jam",
        "tr_display": "reçel",
        "tr_correct_meanings": [
            "reçel"
        ]
    },
    {
        "id": "311",
        "en": "egg",
        "tr_display": "yumurta",
        "tr_correct_meanings": [
            "yumurta"
        ]
    },
    {
        "id": "312",
        "en": "glass",
        "tr_display": "bardak",
        "tr_correct_meanings": [
            "bardak"
        ]
    },
    {
        "id": "313",
        "en": "cup",
        "tr_display": "fincan",
        "tr_correct_meanings": [
            "fincan"
        ]
    },
    {
        "id": "314",
        "en": "knife",
        "tr_display": "bıçak",
        "tr_correct_meanings": [
            "bıçak"
        ]
    },
    {
        "id": "315",
        "en": "fork",
        "tr_display": "çatal",
        "tr_correct_meanings": [
            "çatal"
        ]
    },
    {
        "id": "316",
        "en": "spoon",
        "tr_display": "kaşık",
        "tr_correct_meanings": [
            "kaşık"
        ]
    },
    {
        "id": "317",
        "en": "plate",
        "tr_display": "tabak",
        "tr_correct_meanings": [
            "tabak"
        ]
    },
    {
        "id": "318",
        "en": "bottle",
        "tr_display": "şişe",
        "tr_correct_meanings": [
            "şişe"
        ]
    },
    {
        "id": "319",
        "en": "taste",
        "tr_display": "tat, lezzet",
        "tr_correct_meanings": [
            "tat",
            "lezzet"
        ]
    },
    {
        "id": "320",
        "en": "hunger",
        "tr_display": "açlık",
        "tr_correct_meanings": [
            "açlık"
        ]
    },
    {
        "id": "321",
        "en": "hungry",
        "tr_display": "acıkmış, karnı aç",
        "tr_correct_meanings": [
            "acıkmış",
            "karnı aç"
        ]
    },
    {
        "id": "322",
        "en": "name",
        "tr_display": "isim",
        "tr_correct_meanings": [
            "isim"
        ]
    },
    {
        "id": "323",
        "en": "surname",
        "tr_display": "soyadı",
        "tr_correct_meanings": [
            "soyadı"
        ]
    },
    {
        "id": "324",
        "en": "identity",
        "tr_display": "kimlik, kişilik",
        "tr_correct_meanings": [
            "kimlik",
            "kişilik"
        ]
    },
    {
        "id": "325",
        "en": "identity card",
        "tr_display": "kimlik kartı",
        "tr_correct_meanings": [
            "kimlik kartı"
        ]
    },
    {
        "id": "326",
        "en": "passport",
        "tr_display": "pasaport",
        "tr_correct_meanings": [
            "pasaport"
        ]
    },
    {
        "id": "327",
        "en": "driver licence",
        "tr_display": "ehliyet",
        "tr_correct_meanings": [
            "ehliyet"
        ]
    },
    {
        "id": "328",
        "en": "address",
        "tr_display": "adres",
        "tr_correct_meanings": [
            "adres"
        ]
    },
    {
        "id": "329",
        "en": "number",
        "tr_display": "numara",
        "tr_correct_meanings": [
            "numara"
        ]
    },
    {
        "id": "330",
        "en": "phone number",
        "tr_display": "telefon numarası",
        "tr_correct_meanings": [
            "telefon numarası"
        ]
    },
    {
        "id": "331",
        "en": "signature",
        "tr_display": "imza",
        "tr_correct_meanings": [
            "imza"
        ]
    },
    {
        "id": "332",
        "en": "country",
        "tr_display": "ülke",
        "tr_correct_meanings": [
            "ülke"
        ]
    },
    {
        "id": "333",
        "en": "capital",
        "tr_display": "başkent",
        "tr_correct_meanings": [
            "başkent"
        ]
    },
    {
        "id": "334",
        "en": "international",
        "tr_display": "uluslararası",
        "tr_correct_meanings": [
            "uluslararası"
        ]
    },
    {
        "id": "335",
        "en": "nation",
        "tr_display": "millet",
        "tr_correct_meanings": [
            "millet"
        ]
    },
    {
        "id": "336",
        "en": "homeland",
        "tr_display": "anavatan",
        "tr_correct_meanings": [
            "anavatan"
        ]
    },
    {
        "id": "337",
        "en": "city",
        "tr_display": "şehir",
        "tr_correct_meanings": [
            "şehir"
        ]
    },
    {
        "id": "338",
        "en": "district",
        "tr_display": "ilçe",
        "tr_correct_meanings": [
            "ilçe"
        ]
    },
    {
        "id": "339",
        "en": "state",
        "tr_display": "eyalet",
        "tr_correct_meanings": [
            "eyalet"
        ]
    },
    {
        "id": "340",
        "en": "downtown",
        "tr_display": "şehir merkezi",
        "tr_correct_meanings": [
            "şehir merkezi"
        ]
    },
    {
        "id": "341",
        "en": "building",
        "tr_display": "bina",
        "tr_correct_meanings": [
            "bina"
        ]
    },
    {
        "id": "342",
        "en": "build, construction",
        "tr_display": "inşaat",
        "tr_correct_meanings": [
            "inşaat"
        ]
    },
    {
        "id": "343",
        "en": "bridge",
        "tr_display": "köprü",
        "tr_correct_meanings": [
            "köprü"
        ]
    },
    {
        "id": "344",
        "en": "street",
        "tr_display": "sokak, cadde",
        "tr_correct_meanings": [
            "sokak",
            "cadde"
        ]
    },
    {
        "id": "345",
        "en": "village",
        "tr_display": "köy",
        "tr_correct_meanings": [
            "köy"
        ]
    },
    {
        "id": "346",
        "en": "port",
        "tr_display": "liman",
        "tr_correct_meanings": [
            "liman"
        ]
    },
    {
        "id": "347",
        "en": "beach",
        "tr_display": "sahil, plaj",
        "tr_correct_meanings": [
            "sahil",
            "plaj"
        ]
    },
    {
        "id": "348",
        "en": "seaside",
        "tr_display": "sahil",
        "tr_correct_meanings": [
            "sahil"
        ]
    },
    {
        "id": "349",
        "en": "coast",
        "tr_display": "kıyı, sahil",
        "tr_correct_meanings": [
            "kıyı",
            "sahil"
        ]
    },
    {
        "id": "350",
        "en": "sea coast",
        "tr_display": "deniz kıyısı",
        "tr_correct_meanings": [
            "deniz kıyısı"
        ]
    },
    {
        "id": "351",
        "en": "coastline",
        "tr_display": "kıyı şeridi",
        "tr_correct_meanings": [
            "kıyı şeridi"
        ]
    },
    {
        "id": "352",
        "en": "souvenir",
        "tr_display": "hediyelik eşya",
        "tr_correct_meanings": [
            "hediyelik eşya"
        ]
    },
    {
        "id": "353",
        "en": "square",
        "tr_display": "meydan",
        "tr_correct_meanings": [
            "meydan"
        ]
    },
    {
        "id": "354",
        "en": "airport",
        "tr_display": "havalimanı",
        "tr_correct_meanings": [
            "havalimanı"
        ]
    },
    {
        "id": "355",
        "en": "train station",
        "tr_display": "tren istasyonu",
        "tr_correct_meanings": [
            "tren istasyonu"
        ]
    },
    {
        "id": "356",
        "en": "store",
        "tr_display": "mağaza",
        "tr_correct_meanings": [
            "mağaza"
        ]
    },
    {
        "id": "357",
        "en": "shopping",
        "tr_display": "alışveriş yapmak",
        "tr_correct_meanings": [
            "alışveriş yapmak"
        ]
    },
    {
        "id": "358",
        "en": "shopping center",
        "tr_display": "alışveriş merkezi",
        "tr_correct_meanings": [
            "alışveriş merkezi"
        ]
    },
    {
        "id": "359",
        "en": "bookstore",
        "tr_display": "kitapçı",
        "tr_correct_meanings": [
            "kitapçı"
        ]
    },
    {
        "id": "360",
        "en": "enter",
        "tr_display": "giriş, girmek",
        "tr_correct_meanings": [
            "giriş",
            "girmek"
        ]
    },
    {
        "id": "361",
        "en": "exit",
        "tr_display": "çıkış, çıkmak",
        "tr_correct_meanings": [
            "çıkış",
            "çıkmak"
        ]
    },
    {
        "id": "362",
        "en": "hospital",
        "tr_display": "hastane",
        "tr_correct_meanings": [
            "hastane"
        ]
    },
    {
        "id": "363",
        "en": "emergency",
        "tr_display": "acil durum",
        "tr_correct_meanings": [
            "acil durum"
        ]
    },
    {
        "id": "364",
        "en": "patient",
        "tr_display": "hasta",
        "tr_correct_meanings": [
            "hasta"
        ]
    },
    {
        "id": "365",
        "en": "tired",
        "tr_display": "yorgun",
        "tr_correct_meanings": [
            "yorgun"
        ]
    },
    {
        "id": "366",
        "en": "sick",
        "tr_display": "hasta",
        "tr_correct_meanings": [
            "hasta"
        ]
    },
    {
        "id": "367",
        "en": "pharmacy",
        "tr_display": "eczane",
        "tr_correct_meanings": [
            "eczane"
        ]
    },
    {
        "id": "368",
        "en": "bank",
        "tr_display": "banka",
        "tr_correct_meanings": [
            "banka"
        ]
    },
    {
        "id": "369",
        "en": "east",
        "tr_display": "doğu",
        "tr_correct_meanings": [
            "doğu"
        ]
    },
    {
        "id": "370",
        "en": "west",
        "tr_display": "batı",
        "tr_correct_meanings": [
            "batı"
        ]
    },
    {
        "id": "371",
        "en": "north",
        "tr_display": "kuzey",
        "tr_correct_meanings": [
            "kuzey"
        ]
    },
    {
        "id": "372",
        "en": "south",
        "tr_display": "güney",
        "tr_correct_meanings": [
            "güney"
        ]
    },
    {
        "id": "373",
        "en": "northeast (west)",
        "tr_display": "kuzeydoğu (batı)",
        "tr_correct_meanings": [
            "kuzeydoğu (batı)"
        ]
    },
    {
        "id": "374",
        "en": "southeast (west)",
        "tr_display": "güneydoğu (batı)",
        "tr_correct_meanings": [
            "güneydoğu (batı)"
        ]
    },
    {
        "id": "375",
        "en": "right",
        "tr_display": "sağ",
        "tr_correct_meanings": [
            "sağ"
        ]
    },
    {
        "id": "376",
        "en": "left",
        "tr_display": "sol, ayrılmak",
        "tr_correct_meanings": [
            "sol",
            "ayrılmak"
        ]
    },
    {
        "id": "377",
        "en": "mosque",
        "tr_display": "cami",
        "tr_correct_meanings": [
            "cami"
        ]
    },
    {
        "id": "378",
        "en": "Islam",
        "tr_display": "İslam",
        "tr_correct_meanings": [
            "i̇slam"
        ]
    },
    {
        "id": "379",
        "en": "church",
        "tr_display": "kilise",
        "tr_correct_meanings": [
            "kilise"
        ]
    },
    {
        "id": "380",
        "en": "synagogue",
        "tr_display": "sinagog",
        "tr_correct_meanings": [
            "sinagog"
        ]
    },
    {
        "id": "381",
        "en": "muslim",
        "tr_display": "müslüman",
        "tr_correct_meanings": [
            "müslüman"
        ]
    },
    {
        "id": "382",
        "en": "christian",
        "tr_display": "hristiyan",
        "tr_correct_meanings": [
            "hristiyan"
        ]
    },
    {
        "id": "383",
        "en": "christmas",
        "tr_display": "noel",
        "tr_correct_meanings": [
            "noel"
        ]
    },
    {
        "id": "384",
        "en": "christianity",
        "tr_display": "hristiyanlık",
        "tr_correct_meanings": [
            "hristiyanlık"
        ]
    },
    {
        "id": "385",
        "en": "jew",
        "tr_display": "yahudi",
        "tr_correct_meanings": [
            "yahudi"
        ]
    },
    {
        "id": "386",
        "en": "god",
        "tr_display": "tanrı",
        "tr_correct_meanings": [
            "tanrı"
        ]
    },
    {
        "id": "387",
        "en": "pray",
        "tr_display": "dua",
        "tr_correct_meanings": [
            "dua"
        ]
    },
    {
        "id": "388",
        "en": "atheist",
        "tr_display": "ateist",
        "tr_correct_meanings": [
            "ateist"
        ]
    },
    {
        "id": "389",
        "en": "buddhist",
        "tr_display": "budist",
        "tr_correct_meanings": [
            "budist"
        ]
    },
    {
        "id": "390",
        "en": "Qur'an",
        "tr_display": "Kur'an",
        "tr_correct_meanings": [
            "kur'an"
        ]
    },
    {
        "id": "391",
        "en": "bible",
        "tr_display": "incil",
        "tr_correct_meanings": [
            "incil"
        ]
    },
    {
        "id": "392",
        "en": "superstition",
        "tr_display": "batıl inanç",
        "tr_correct_meanings": [
            "batıl inanç"
        ]
    },
    {
        "id": "393",
        "en": "religion",
        "tr_display": "din",
        "tr_correct_meanings": [
            "din"
        ]
    },
    {
        "id": "394",
        "en": "religious",
        "tr_display": "dindar",
        "tr_correct_meanings": [
            "dindar"
        ]
    },
    {
        "id": "395",
        "en": "torah",
        "tr_display": "tevrat",
        "tr_correct_meanings": [
            "tevrat"
        ]
    },
    {
        "id": "396",
        "en": "priest",
        "tr_display": "papaz",
        "tr_correct_meanings": [
            "papaz"
        ]
    },
    {
        "id": "397",
        "en": "imam",
        "tr_display": "imam",
        "tr_correct_meanings": [
            "imam"
        ]
    },
    {
        "id": "398",
        "en": "angel",
        "tr_display": "melek",
        "tr_correct_meanings": [
            "melek"
        ]
    },
    {
        "id": "399",
        "en": "devil",
        "tr_display": "şeytan",
        "tr_correct_meanings": [
            "şeytan"
        ]
    },
    {
        "id": "400",
        "en": "sacred",
        "tr_display": "kutsal",
        "tr_correct_meanings": [
            "kutsal"
        ]
    },
    {
        "id": "401",
        "en": "paradise",
        "tr_display": "cennet",
        "tr_correct_meanings": [
            "cennet"
        ]
    },
    {
        "id": "402",
        "en": "inferno",
        "tr_display": "cehennem",
        "tr_correct_meanings": [
            "cehennem"
        ]
    },
    {
        "id": "403",
        "en": "infinite",
        "tr_display": "sonsuzluk",
        "tr_correct_meanings": [
            "sonsuzluk"
        ]
    },
    {
        "id": "404",
        "en": "eden",
        "tr_display": "cennet",
        "tr_correct_meanings": [
            "cennet"
        ]
    },
    {
        "id": "405",
        "en": "satan",
        "tr_display": "şeytan",
        "tr_correct_meanings": [
            "şeytan"
        ]
    },
    {
        "id": "406",
        "en": "satanist",
        "tr_display": "satanist",
        "tr_correct_meanings": [
            "satanist"
        ]
    },
    {
        "id": "407",
        "en": "hell",
        "tr_display": "cehennem",
        "tr_correct_meanings": [
            "cehennem"
        ]
    },
    {
        "id": "408",
        "en": "prophet",
        "tr_display": "peygamber",
        "tr_correct_meanings": [
            "peygamber"
        ]
    },
    {
        "id": "409",
        "en": "location",
        "tr_display": "lokasyon",
        "tr_correct_meanings": [
            "lokasyon"
        ]
    },
    {
        "id": "410",
        "en": "colour",
        "tr_display": "renk",
        "tr_correct_meanings": [
            "renk"
        ]
    },
    {
        "id": "411",
        "en": "red",
        "tr_display": "kırmızı",
        "tr_correct_meanings": [
            "kırmızı"
        ]
    },
    {
        "id": "412",
        "en": "yellow",
        "tr_display": "sarı",
        "tr_correct_meanings": [
            "sarı"
        ]
    },
    {
        "id": "413",
        "en": "blue",
        "tr_display": "mavi",
        "tr_correct_meanings": [
            "mavi"
        ]
    },
    {
        "id": "414",
        "en": "green",
        "tr_display": "yeşil",
        "tr_correct_meanings": [
            "yeşil"
        ]
    },
    {
        "id": "415",
        "en": "brown",
        "tr_display": "kahverengi",
        "tr_correct_meanings": [
            "kahverengi"
        ]
    },
    {
        "id": "416",
        "en": "black",
        "tr_display": "siyah",
        "tr_correct_meanings": [
            "siyah"
        ]
    },
    {
        "id": "417",
        "en": "white",
        "tr_display": "beyaz",
        "tr_correct_meanings": [
            "beyaz"
        ]
    },
    {
        "id": "418",
        "en": "orange",
        "tr_display": "turuncu",
        "tr_correct_meanings": [
            "turuncu"
        ]
    },
    {
        "id": "419",
        "en": "purple",
        "tr_display": "mor",
        "tr_correct_meanings": [
            "mor"
        ]
    },
    {
        "id": "420",
        "en": "money",
        "tr_display": "para",
        "tr_correct_meanings": [
            "para"
        ]
    },
    {
        "id": "421",
        "en": "cash",
        "tr_display": "nakit",
        "tr_correct_meanings": [
            "nakit"
        ]
    },
    {
        "id": "422",
        "en": "currency",
        "tr_display": "döviz, kur",
        "tr_correct_meanings": [
            "döviz",
            "kur"
        ]
    },
    {
        "id": "423",
        "en": "rent",
        "tr_display": "kiralık",
        "tr_correct_meanings": [
            "kiralık"
        ]
    },
    {
        "id": "424",
        "en": "sale",
        "tr_display": "satılık",
        "tr_correct_meanings": [
            "satılık"
        ]
    },
    {
        "id": "425",
        "en": "discount",
        "tr_display": "indirim",
        "tr_correct_meanings": [
            "indirim"
        ]
    },
    {
        "id": "426",
        "en": "fee",
        "tr_display": "ücret",
        "tr_correct_meanings": [
            "ücret"
        ]
    },
    {
        "id": "427",
        "en": "free",
        "tr_display": "ücretsiz",
        "tr_correct_meanings": [
            "ücretsiz"
        ]
    },
    {
        "id": "428",
        "en": "expensive",
        "tr_display": "pahalı",
        "tr_correct_meanings": [
            "pahalı"
        ]
    },
    {
        "id": "429",
        "en": "cheap",
        "tr_display": "ucuz",
        "tr_correct_meanings": [
            "ucuz"
        ]
    },
    {
        "id": "430",
        "en": "export",
        "tr_display": "ihracat",
        "tr_correct_meanings": [
            "ihracat"
        ]
    },
    {
        "id": "431",
        "en": "import",
        "tr_display": "ithalat",
        "tr_correct_meanings": [
            "ithalat"
        ]
    },
    {
        "id": "432",
        "en": "gold",
        "tr_display": "altın",
        "tr_correct_meanings": [
            "altın"
        ]
    },
    {
        "id": "433",
        "en": "silver",
        "tr_display": "gümüş",
        "tr_correct_meanings": [
            "gümüş"
        ]
    },
    {
        "id": "434",
        "en": "newspaper",
        "tr_display": "gazete",
        "tr_correct_meanings": [
            "gazete"
        ]
    },
    {
        "id": "435",
        "en": "magazine",
        "tr_display": "dergi",
        "tr_correct_meanings": [
            "dergi"
        ]
    },
    {
        "id": "436",
        "en": "what",
        "tr_display": "ne",
        "tr_correct_meanings": [
            "ne"
        ]
    },
    {
        "id": "437",
        "en": "who",
        "tr_display": "kim",
        "tr_correct_meanings": [
            "kim"
        ]
    },
    {
        "id": "438",
        "en": "whose",
        "tr_display": "kimin",
        "tr_correct_meanings": [
            "kimin"
        ]
    },
    {
        "id": "439",
        "en": "where",
        "tr_display": "nerede",
        "tr_correct_meanings": [
            "nerede"
        ]
    },
    {
        "id": "440",
        "en": "how",
        "tr_display": "nasıl",
        "tr_correct_meanings": [
            "nasıl"
        ]
    },
    {
        "id": "441",
        "en": "when",
        "tr_display": "ne zaman",
        "tr_correct_meanings": [
            "ne zaman"
        ]
    },
    {
        "id": "442",
        "en": "which",
        "tr_display": "hangi",
        "tr_correct_meanings": [
            "hangi"
        ]
    },
    {
        "id": "443",
        "en": "time",
        "tr_display": "zaman",
        "tr_correct_meanings": [
            "zaman"
        ]
    },
    {
        "id": "444",
        "en": "clock",
        "tr_display": "saat",
        "tr_correct_meanings": [
            "saat"
        ]
    },
    {
        "id": "445",
        "en": "minute",
        "tr_display": "dakika",
        "tr_correct_meanings": [
            "dakika"
        ]
    },
    {
        "id": "446",
        "en": "week",
        "tr_display": "hafta",
        "tr_correct_meanings": [
            "hafta"
        ]
    },
    {
        "id": "447",
        "en": "month",
        "tr_display": "ay",
        "tr_correct_meanings": [
            "ay"
        ]
    },
    {
        "id": "448",
        "en": "year",
        "tr_display": "yıl",
        "tr_correct_meanings": [
            "yıl"
        ]
    },
    {
        "id": "449",
        "en": "morning",
        "tr_display": "gündüz (sabah)",
        "tr_correct_meanings": [
            "gündüz (sabah)"
        ]
    },
    {
        "id": "450",
        "en": "night",
        "tr_display": "gece",
        "tr_correct_meanings": [
            "gece"
        ]
    },
    {
        "id": "451",
        "en": "midnight",
        "tr_display": "gece yarısı",
        "tr_correct_meanings": [
            "gece yarısı"
        ]
    },
    {
        "id": "452",
        "en": "tomorrow",
        "tr_display": "yarın",
        "tr_correct_meanings": [
            "yarın"
        ]
    },
    {
        "id": "453",
        "en": "yesterday",
        "tr_display": "dün",
        "tr_correct_meanings": [
            "dün"
        ]
    },
    {
        "id": "454",
        "en": "late",
        "tr_display": "geç",
        "tr_correct_meanings": [
            "geç"
        ]
    },
    {
        "id": "455",
        "en": "early",
        "tr_display": "erken",
        "tr_correct_meanings": [
            "erken"
        ]
    },
    {
        "id": "456",
        "en": "noon",
        "tr_display": "öğlen",
        "tr_correct_meanings": [
            "öğlen"
        ]
    },
    {
        "id": "457",
        "en": "afternoon",
        "tr_display": "öğleden sonra",
        "tr_correct_meanings": [
            "öğleden sonra"
        ]
    },
    {
        "id": "458",
        "en": "new",
        "tr_display": "yeni",
        "tr_correct_meanings": [
            "yeni"
        ]
    },
    {
        "id": "459",
        "en": "after",
        "tr_display": "sonra",
        "tr_correct_meanings": [
            "sonra"
        ]
    },
    {
        "id": "460",
        "en": "before",
        "tr_display": "önce",
        "tr_correct_meanings": [
            "önce"
        ]
    },
    {
        "id": "461",
        "en": "monday",
        "tr_display": "pazartesi",
        "tr_correct_meanings": [
            "pazartesi"
        ]
    },
    {
        "id": "462",
        "en": "tuesday",
        "tr_display": "salı",
        "tr_correct_meanings": [
            "salı"
        ]
    },
    {
        "id": "463",
        "en": "wednesday",
        "tr_display": "çarşamba",
        "tr_correct_meanings": [
            "çarşamba"
        ]
    },
    {
        "id": "464",
        "en": "thursday",
        "tr_display": "perşembe",
        "tr_correct_meanings": [
            "perşembe"
        ]
    },
    {
        "id": "465",
        "en": "friday",
        "tr_display": "cuma",
        "tr_correct_meanings": [
            "cuma"
        ]
    },
    {
        "id": "466",
        "en": "saturday",
        "tr_display": "cumartesi",
        "tr_correct_meanings": [
            "cumartesi"
        ]
    },
    {
        "id": "467",
        "en": "sunday",
        "tr_display": "pazar",
        "tr_correct_meanings": [
            "pazar"
        ]
    },
    {
        "id": "468",
        "en": "january",
        "tr_display": "ocak",
        "tr_correct_meanings": [
            "ocak"
        ]
    },
    {
        "id": "469",
        "en": "february",
        "tr_display": "şubat",
        "tr_correct_meanings": [
            "şubat"
        ]
    },
    {
        "id": "470",
        "en": "march",
        "tr_display": "mart",
        "tr_correct_meanings": [
            "mart"
        ]
    },
    {
        "id": "471",
        "en": "april",
        "tr_display": "nisan",
        "tr_correct_meanings": [
            "nisan"
        ]
    },
    {
        "id": "472",
        "en": "may",
        "tr_display": "mayıs",
        "tr_correct_meanings": [
            "mayıs"
        ]
    },
    {
        "id": "473",
        "en": "june",
        "tr_display": "haziran",
        "tr_correct_meanings": [
            "haziran"
        ]
    },
    {
        "id": "474",
        "en": "july",
        "tr_display": "temmuz",
        "tr_correct_meanings": [
            "temmuz"
        ]
    },
    {
        "id": "475",
        "en": "august",
        "tr_display": "ağustos",
        "tr_correct_meanings": [
            "ağustos"
        ]
    },
    {
        "id": "476",
        "en": "september",
        "tr_display": "eylül",
        "tr_correct_meanings": [
            "eylül"
        ]
    },
    {
        "id": "477",
        "en": "october",
        "tr_display": "ekim",
        "tr_correct_meanings": [
            "ekim"
        ]
    },
    {
        "id": "478",
        "en": "november",
        "tr_display": "kasım",
        "tr_correct_meanings": [
            "kasım"
        ]
    },
    {
        "id": "479",
        "en": "december",
        "tr_display": "aralık",
        "tr_correct_meanings": [
            "aralık"
        ]
    },
    {
        "id": "480",
        "en": "past",
        "tr_display": "geçmiş",
        "tr_correct_meanings": [
            "geçmiş"
        ]
    },
    {
        "id": "481",
        "en": "future",
        "tr_display": "gelecek",
        "tr_correct_meanings": [
            "gelecek"
        ]
    },
    {
        "id": "482",
        "en": "now",
        "tr_display": "şimdi",
        "tr_correct_meanings": [
            "şimdi"
        ]
    },
    {
        "id": "483",
        "en": "leave",
        "tr_display": "çıkmak, ayrılmak",
        "tr_correct_meanings": [
            "çıkmak",
            "ayrılmak"
        ]
    },
    {
        "id": "484",
        "en": "hope",
        "tr_display": "umut, ummak",
        "tr_correct_meanings": [
            "umut",
            "ummak"
        ]
    },
    {
        "id": "485",
        "en": "expect",
        "tr_display": "ummak, beklemek",
        "tr_correct_meanings": [
            "ummak",
            "beklemek"
        ]
    },
    {
        "id": "486",
        "en": "depend",
        "tr_display": "güvenmek, bağlı olmak",
        "tr_correct_meanings": [
            "güvenmek",
            "bağlı olmak"
        ]
    },
    {
        "id": "487",
        "en": "hate",
        "tr_display": "nefret, nefret etmek",
        "tr_correct_meanings": [
            "nefret",
            "nefret etmek"
        ]
    },
    {
        "id": "488",
        "en": "revenge",
        "tr_display": "intikam",
        "tr_correct_meanings": [
            "intikam"
        ]
    },
    {
        "id": "489",
        "en": "affect",
        "tr_display": "etkilemek",
        "tr_correct_meanings": [
            "etkilemek"
        ]
    },
    {
        "id": "490",
        "en": "lose",
        "tr_display": "kaybetmek",
        "tr_correct_meanings": [
            "kaybetmek"
        ]
    },
    {
        "id": "491",
        "en": "need",
        "tr_display": "ihtiyaç duymak",
        "tr_correct_meanings": [
            "ihtiyaç duymak"
        ]
    },
    {
        "id": "492",
        "en": "find",
        "tr_display": "bulmak",
        "tr_correct_meanings": [
            "bulmak"
        ]
    },
    {
        "id": "493",
        "en": "tell",
        "tr_display": "söylemek",
        "tr_correct_meanings": [
            "söylemek"
        ]
    },
    {
        "id": "494",
        "en": "put",
        "tr_display": "koymak",
        "tr_correct_meanings": [
            "koymak"
        ]
    },
    {
        "id": "495",
        "en": "drive",
        "tr_display": "sürmek",
        "tr_correct_meanings": [
            "sürmek"
        ]
    },
    {
        "id": "496",
        "en": "hold",
        "tr_display": "tutmak",
        "tr_correct_meanings": [
            "tutmak"
        ]
    },
    {
        "id": "497",
        "en": "prefer",
        "tr_display": "tercih etmek",
        "tr_correct_meanings": [
            "tercih etmek"
        ]
    },
    {
        "id": "498",
        "en": "translate",
        "tr_display": "tercüme etmek",
        "tr_correct_meanings": [
            "tercüme etmek"
        ]
    },
    {
        "id": "499",
        "en": "repeat",
        "tr_display": "tekrar etmek",
        "tr_correct_meanings": [
            "tekrar etmek"
        ]
    },
    {
        "id": "500",
        "en": "repair",
        "tr_display": "tamir etmek",
        "tr_correct_meanings": [
            "tamir etmek"
        ]
    },
    {
        "id": "501",
        "en": "fill",
        "tr_display": "doldurmak",
        "tr_correct_meanings": [
            "doldurmak"
        ]
    },
    {
        "id": "502",
        "en": "explain",
        "tr_display": "açıklamak",
        "tr_correct_meanings": [
            "açıklamak"
        ]
    },
    {
        "id": "503",
        "en": "relax",
        "tr_display": "rahatlamak",
        "tr_correct_meanings": [
            "rahatlamak"
        ]
    },
    {
        "id": "504",
        "en": "refuse",
        "tr_display": "reddetmek",
        "tr_correct_meanings": [
            "reddetmek"
        ]
    },
    {
        "id": "505",
        "en": "trust",
        "tr_display": "güvenmek",
        "tr_correct_meanings": [
            "güvenmek"
        ]
    },
    {
        "id": "506",
        "en": "believe",
        "tr_display": "inanmak",
        "tr_correct_meanings": [
            "inanmak"
        ]
    },
    {
        "id": "507",
        "en": "decide",
        "tr_display": "karar vermek",
        "tr_correct_meanings": [
            "karar vermek"
        ]
    },
    {
        "id": "508",
        "en": "die",
        "tr_display": "ölmek",
        "tr_correct_meanings": [
            "ölmek"
        ]
    },
    {
        "id": "509",
        "en": "arrive",
        "tr_display": "ulaşmak",
        "tr_correct_meanings": [
            "ulaşmak"
        ]
    },
    {
        "id": "510",
        "en": "seek",
        "tr_display": "aramak, istemek",
        "tr_correct_meanings": [
            "aramak",
            "istemek"
        ]
    },
    {
        "id": "511",
        "en": "hire",
        "tr_display": "kiralamak",
        "tr_correct_meanings": [
            "kiralamak"
        ]
    },
    {
        "id": "512",
        "en": "rent",
        "tr_display": "kiralamak",
        "tr_correct_meanings": [
            "kiralamak"
        ]
    },
    {
        "id": "513",
        "en": "beg",
        "tr_display": "yalvarmak",
        "tr_correct_meanings": [
            "yalvarmak"
        ]
    },
    {
        "id": "514",
        "en": "search",
        "tr_display": "aramak, araştırmak",
        "tr_correct_meanings": [
            "aramak",
            "araştırmak"
        ]
    },
    {
        "id": "515",
        "en": "victory",
        "tr_display": "zafer",
        "tr_correct_meanings": [
            "zafer"
        ]
    },
    {
        "id": "516",
        "en": "first",
        "tr_display": "birinci",
        "tr_correct_meanings": [
            "birinci"
        ]
    },
    {
        "id": "517",
        "en": "second",
        "tr_display": "ikinci",
        "tr_correct_meanings": [
            "ikinci"
        ]
    },
    {
        "id": "518",
        "en": "third",
        "tr_display": "üçüncü",
        "tr_correct_meanings": [
            "üçüncü"
        ]
    },
    {
        "id": "519",
        "en": "island",
        "tr_display": "ada",
        "tr_correct_meanings": [
            "ada"
        ]
    },
    {
        "id": "520",
        "en": "peninsula",
        "tr_display": "yarımada",
        "tr_correct_meanings": [
            "yarımada"
        ]
    },
    {
        "id": "521",
        "en": "mountain",
        "tr_display": "dağ",
        "tr_correct_meanings": [
            "dağ"
        ]
    },
    {
        "id": "522",
        "en": "climb",
        "tr_display": "tırmanış",
        "tr_correct_meanings": [
            "tırmanış"
        ]
    },
    {
        "id": "523",
        "en": "history",
        "tr_display": "tarih",
        "tr_correct_meanings": [
            "tarih"
        ]
    },
    {
        "id": "524",
        "en": "story",
        "tr_display": "hikaye",
        "tr_correct_meanings": [
            "hikaye"
        ]
    },
    {
        "id": "525",
        "en": "tale",
        "tr_display": "masal",
        "tr_correct_meanings": [
            "masal"
        ]
    },
    {
        "id": "526",
        "en": "journey",
        "tr_display": "seyahat",
        "tr_correct_meanings": [
            "seyahat"
        ]
    },
    {
        "id": "527",
        "en": "culture",
        "tr_display": "kültür",
        "tr_correct_meanings": [
            "kültür"
        ]
    },
    {
        "id": "528",
        "en": "cultural",
        "tr_display": "kültürel",
        "tr_correct_meanings": [
            "kültürel"
        ]
    },
    {
        "id": "529",
        "en": "art",
        "tr_display": "sanat",
        "tr_correct_meanings": [
            "sanat"
        ]
    },
    {
        "id": "530",
        "en": "fine arts",
        "tr_display": "güzel sanatlar",
        "tr_correct_meanings": [
            "güzel sanatlar"
        ]
    },
    {
        "id": "531",
        "en": "air",
        "tr_display": "hava",
        "tr_correct_meanings": [
            "hava"
        ]
    },
    {
        "id": "532",
        "en": "climate",
        "tr_display": "iklim",
        "tr_correct_meanings": [
            "iklim"
        ]
    },
    {
        "id": "533",
        "en": "air conditioner",
        "tr_display": "klima",
        "tr_correct_meanings": [
            "klima"
        ]
    },
    {
        "id": "534",
        "en": "cloud",
        "tr_display": "bulut",
        "tr_correct_meanings": [
            "bulut"
        ]
    },
    {
        "id": "535",
        "en": "cloudy",
        "tr_display": "bulutlu",
        "tr_correct_meanings": [
            "bulutlu"
        ]
    },
    {
        "id": "536",
        "en": "rain",
        "tr_display": "yağmur",
        "tr_correct_meanings": [
            "yağmur"
        ]
    },
    {
        "id": "537",
        "en": "rainy",
        "tr_display": "yağmurlu",
        "tr_correct_meanings": [
            "yağmurlu"
        ]
    },
    {
        "id": "538",
        "en": "snow",
        "tr_display": "kar",
        "tr_correct_meanings": [
            "kar"
        ]
    },
    {
        "id": "539",
        "en": "snowy",
        "tr_display": "karlı",
        "tr_correct_meanings": [
            "karlı"
        ]
    },
    {
        "id": "540",
        "en": "chill",
        "tr_display": "soğuk",
        "tr_correct_meanings": [
            "soğuk"
        ]
    },
    {
        "id": "541",
        "en": "chilly",
        "tr_display": "serin",
        "tr_correct_meanings": [
            "serin"
        ]
    },
    {
        "id": "542",
        "en": "sun",
        "tr_display": "güneş",
        "tr_correct_meanings": [
            "güneş"
        ]
    },
    {
        "id": "543",
        "en": "sunny",
        "tr_display": "güneşli",
        "tr_correct_meanings": [
            "güneşli"
        ]
    },
    {
        "id": "544",
        "en": "sky",
        "tr_display": "gökyüzü",
        "tr_correct_meanings": [
            "gökyüzü"
        ]
    },
    {
        "id": "545",
        "en": "rainbow",
        "tr_display": "gökkuşağı",
        "tr_correct_meanings": [
            "gökkuşağı"
        ]
    },
    {
        "id": "546",
        "en": "space",
        "tr_display": "uzay",
        "tr_correct_meanings": [
            "uzay"
        ]
    },
    {
        "id": "547",
        "en": "moon",
        "tr_display": "ay",
        "tr_correct_meanings": [
            "ay"
        ]
    },
    {
        "id": "548",
        "en": "hot",
        "tr_display": "sıcak",
        "tr_correct_meanings": [
            "sıcak"
        ]
    },
    {
        "id": "549",
        "en": "cold",
        "tr_display": "soğuk",
        "tr_correct_meanings": [
            "soğuk"
        ]
    },
    {
        "id": "550",
        "en": "warm",
        "tr_display": "ılık",
        "tr_correct_meanings": [
            "ılık"
        ]
    },
    {
        "id": "551",
        "en": "sea",
        "tr_display": "deniz",
        "tr_correct_meanings": [
            "deniz"
        ]
    },
    {
        "id": "552",
        "en": "lake",
        "tr_display": "göl",
        "tr_correct_meanings": [
            "göl"
        ]
    },
    {
        "id": "553",
        "en": "river",
        "tr_display": "ırmak",
        "tr_correct_meanings": [
            "ırmak"
        ]
    },
    {
        "id": "554",
        "en": "pool",
        "tr_display": "havuz",
        "tr_correct_meanings": [
            "havuz"
        ]
    },
    {
        "id": "555",
        "en": "beauty",
        "tr_display": "güzellik",
        "tr_correct_meanings": [
            "güzellik"
        ]
    },
    {
        "id": "556",
        "en": "beautiful",
        "tr_display": "güzel",
        "tr_correct_meanings": [
            "güzel"
        ]
    },
    {
        "id": "557",
        "en": "nice",
        "tr_display": "güzel",
        "tr_correct_meanings": [
            "güzel"
        ]
    },
    {
        "id": "558",
        "en": "lovely",
        "tr_display": "hoş, güzel",
        "tr_correct_meanings": [
            "hoş",
            "güzel"
        ]
    },
    {
        "id": "559",
        "en": "pretty",
        "tr_display": "güzel, cici",
        "tr_correct_meanings": [
            "güzel",
            "cici"
        ]
    },
    {
        "id": "560",
        "en": "elegant",
        "tr_display": "zarif",
        "tr_correct_meanings": [
            "zarif"
        ]
    },
    {
        "id": "561",
        "en": "good",
        "tr_display": "iyi, sağlam",
        "tr_correct_meanings": [
            "iyi",
            "sağlam"
        ]
    },
    {
        "id": "562",
        "en": "fine",
        "tr_display": "iyi, mükemmel",
        "tr_correct_meanings": [
            "iyi",
            "mükemmel"
        ]
    },
    {
        "id": "563",
        "en": "adorable",
        "tr_display": "çok güzel",
        "tr_correct_meanings": [
            "çok güzel"
        ]
    },
    {
        "id": "564",
        "en": "handsome",
        "tr_display": "yakışıklı",
        "tr_correct_meanings": [
            "yakışıklı"
        ]
    },
    {
        "id": "565",
        "en": "ugly",
        "tr_display": "çirkin",
        "tr_correct_meanings": [
            "çirkin"
        ]
    },
    {
        "id": "566",
        "en": "sweet",
        "tr_display": "tatlı",
        "tr_correct_meanings": [
            "tatlı"
        ]
    },
    {
        "id": "567",
        "en": "cute",
        "tr_display": "şirin",
        "tr_correct_meanings": [
            "şirin"
        ]
    },
    {
        "id": "568",
        "en": "sympathetic",
        "tr_display": "sempatik",
        "tr_correct_meanings": [
            "sempatik"
        ]
    },
    {
        "id": "569",
        "en": "attractive",
        "tr_display": "çekici",
        "tr_correct_meanings": [
            "çekici"
        ]
    },
    {
        "id": "570",
        "en": "cheerful",
        "tr_display": "neşeli",
        "tr_correct_meanings": [
            "neşeli"
        ]
    },
    {
        "id": "571",
        "en": "funny",
        "tr_display": "komik",
        "tr_correct_meanings": [
            "komik"
        ]
    },
    {
        "id": "572",
        "en": "polite",
        "tr_display": "kibar",
        "tr_correct_meanings": [
            "kibar"
        ]
    },
    {
        "id": "573",
        "en": "kind",
        "tr_display": "nazik",
        "tr_correct_meanings": [
            "nazik"
        ]
    },
    {
        "id": "574",
        "en": "gentle",
        "tr_display": "kibar, nazik",
        "tr_correct_meanings": [
            "kibar",
            "nazik"
        ]
    },
    {
        "id": "575",
        "en": "friendly",
        "tr_display": "arkadaş canlısı",
        "tr_correct_meanings": [
            "arkadaş canlısı"
        ]
    },
    {
        "id": "576",
        "en": "sincere",
        "tr_display": "samimi, içten",
        "tr_correct_meanings": [
            "samimi",
            "içten"
        ]
    },
    {
        "id": "577",
        "en": "emotional",
        "tr_display": "duygusal",
        "tr_correct_meanings": [
            "duygusal"
        ]
    },
    {
        "id": "578",
        "en": "understanding",
        "tr_display": "anlayışlı",
        "tr_correct_meanings": [
            "anlayışlı"
        ]
    },
    {
        "id": "579",
        "en": "chatty",
        "tr_display": "konuşkan, geveze",
        "tr_correct_meanings": [
            "konuşkan",
            "geveze"
        ]
    },
    {
        "id": "580",
        "en": "crazy",
        "tr_display": "çılgın",
        "tr_correct_meanings": [
            "çılgın"
        ]
    },
    {
        "id": "581",
        "en": "lunatic",
        "tr_display": "çılgın, deli, delice",
        "tr_correct_meanings": [
            "çılgın",
            "deli",
            "delice"
        ]
    },
    {
        "id": "582",
        "en": "honest",
        "tr_display": "dürüst",
        "tr_correct_meanings": [
            "dürüst"
        ]
    },
    {
        "id": "583",
        "en": "dishonest",
        "tr_display": "sahtekar, şerefsiz",
        "tr_correct_meanings": [
            "sahtekar",
            "şerefsiz"
        ]
    },
    {
        "id": "584",
        "en": "helpful",
        "tr_display": "yardımsever, faydalı",
        "tr_correct_meanings": [
            "yardımsever",
            "faydalı"
        ]
    },
    {
        "id": "585",
        "en": "creative",
        "tr_display": "yaratıcı",
        "tr_correct_meanings": [
            "yaratıcı"
        ]
    },
    {
        "id": "586",
        "en": "reasonable",
        "tr_display": "mantıklı",
        "tr_correct_meanings": [
            "mantıklı"
        ]
    },
    {
        "id": "587",
        "en": "sensitive",
        "tr_display": "hassas",
        "tr_correct_meanings": [
            "hassas"
        ]
    },
    {
        "id": "588",
        "en": "social",
        "tr_display": "sosyal",
        "tr_correct_meanings": [
            "sosyal"
        ]
    },
    {
        "id": "589",
        "en": "modest",
        "tr_display": "mütevazi",
        "tr_correct_meanings": [
            "mütevazi"
        ]
    },
    {
        "id": "590",
        "en": "reliable",
        "tr_display": "dürüst, güvenilir",
        "tr_correct_meanings": [
            "dürüst",
            "güvenilir"
        ]
    },
    {
        "id": "591",
        "en": "successful",
        "tr_display": "başarılı",
        "tr_correct_meanings": [
            "başarılı"
        ]
    },
    {
        "id": "592",
        "en": "outgoing",
        "tr_display": "açık yürekli",
        "tr_correct_meanings": [
            "açık yürekli"
        ]
    },
    {
        "id": "593",
        "en": "sociable",
        "tr_display": "arkadaş canlısı, girişken",
        "tr_correct_meanings": [
            "arkadaş canlısı",
            "girişken"
        ]
    },
    {
        "id": "594",
        "en": "sensible",
        "tr_display": "mantıklı, makul",
        "tr_correct_meanings": [
            "mantıklı",
            "makul"
        ]
    },
    {
        "id": "595",
        "en": "patient",
        "tr_display": "sabırlı, hoşgörülü",
        "tr_correct_meanings": [
            "sabırlı",
            "hoşgörülü"
        ]
    },
    {
        "id": "596",
        "en": "impatient",
        "tr_display": "sabırsız",
        "tr_correct_meanings": [
            "sabırsız"
        ]
    },
    {
        "id": "597",
        "en": "serious",
        "tr_display": "ciddi",
        "tr_correct_meanings": [
            "ciddi"
        ]
    },
    {
        "id": "598",
        "en": "rumor",
        "tr_display": "dedikodu, söylenti",
        "tr_correct_meanings": [
            "dedikodu",
            "söylenti"
        ]
    },
    {
        "id": "599",
        "en": "gossipy",
        "tr_display": "dedikoducu",
        "tr_correct_meanings": [
            "dedikoducu"
        ]
    },
    {
        "id": "600",
        "en": "lazy",
        "tr_display": "tembel, uyuşuk",
        "tr_correct_meanings": [
            "tembel",
            "uyuşuk"
        ]
    },
    {
        "id": "601",
        "en": "hardworking",
        "tr_display": "çalışkan",
        "tr_correct_meanings": [
            "çalışkan"
        ]
    },
    {
        "id": "602",
        "en": "diligent",
        "tr_display": "gayretli",
        "tr_correct_meanings": [
            "gayretli"
        ]
    },
    {
        "id": "603",
        "en": "angry",
        "tr_display": "sinirli",
        "tr_correct_meanings": [
            "sinirli"
        ]
    },
    {
        "id": "604",
        "en": "nervous",
        "tr_display": "gergin, asabi",
        "tr_correct_meanings": [
            "gergin",
            "asabi"
        ]
    },
    {
        "id": "605",
        "en": "aggressive",
        "tr_display": "agresif, saldırgan",
        "tr_correct_meanings": [
            "agresif",
            "saldırgan"
        ]
    },
    {
        "id": "606",
        "en": "jealous",
        "tr_display": "kıskanç",
        "tr_correct_meanings": [
            "kıskanç"
        ]
    },
    {
        "id": "607",
        "en": "selfish",
        "tr_display": "bencil, kendini düşünen",
        "tr_correct_meanings": [
            "bencil",
            "kendini düşünen"
        ]
    },
    {
        "id": "608",
        "en": "shy",
        "tr_display": "utangaç, çekingen",
        "tr_correct_meanings": [
            "utangaç",
            "çekingen"
        ]
    },
    {
        "id": "609",
        "en": "stubborn",
        "tr_display": "inatçı, aksi",
        "tr_correct_meanings": [
            "inatçı",
            "aksi"
        ]
    },
    {
        "id": "610",
        "en": "rude",
        "tr_display": "kaba, saygısız",
        "tr_correct_meanings": [
            "kaba",
            "saygısız"
        ]
    },
    {
        "id": "611",
        "en": "boring",
        "tr_display": "sıkıcı",
        "tr_correct_meanings": [
            "sıkıcı"
        ]
    },
    {
        "id": "612",
        "en": "stingy",
        "tr_display": "cimri, pinti, paragöz",
        "tr_correct_meanings": [
            "cimri",
            "pinti",
            "paragöz"
        ]
    },
    {
        "id": "613",
        "en": "generous",
        "tr_display": "cömert, eli açık",
        "tr_correct_meanings": [
            "cömert",
            "eli açık"
        ]
    },
    {
        "id": "614",
        "en": "brave",
        "tr_display": "cesur",
        "tr_correct_meanings": [
            "cesur"
        ]
    },
    {
        "id": "615",
        "en": "coward",
        "tr_display": "korkak",
        "tr_correct_meanings": [
            "korkak"
        ]
    },
    {
        "id": "616",
        "en": "smart",
        "tr_display": "akıllı",
        "tr_correct_meanings": [
            "akıllı"
        ]
    },
    {
        "id": "617",
        "en": "clever",
        "tr_display": "zeki",
        "tr_correct_meanings": [
            "zeki"
        ]
    },
    {
        "id": "618",
        "en": "intelligent",
        "tr_display": "akıllı, kabiliyetli",
        "tr_correct_meanings": [
            "akıllı",
            "kabiliyetli"
        ]
    },
    {
        "id": "619",
        "en": "witless",
        "tr_display": "akılsız, düşüncesiz",
        "tr_correct_meanings": [
            "akılsız",
            "düşüncesiz"
        ]
    },
    {
        "id": "620",
        "en": "silly",
        "tr_display": "aptal, sersem",
        "tr_correct_meanings": [
            "aptal",
            "sersem"
        ]
    },
    {
        "id": "621",
        "en": "fool",
        "tr_display": "aptal, budala, aptalca",
        "tr_correct_meanings": [
            "aptal",
            "budala",
            "aptalca"
        ]
    },
    {
        "id": "622",
        "en": "idiot",
        "tr_display": "salak",
        "tr_correct_meanings": [
            "salak"
        ]
    },
    {
        "id": "623",
        "en": "arrogant",
        "tr_display": "kibirli",
        "tr_correct_meanings": [
            "kibirli"
        ]
    },
    {
        "id": "624",
        "en": "optimist",
        "tr_display": "iyimser",
        "tr_correct_meanings": [
            "iyimser"
        ]
    },
    {
        "id": "625",
        "en": "pessimist",
        "tr_display": "kötümser, karamsar",
        "tr_correct_meanings": [
            "kötümser",
            "karamsar"
        ]
    },
    {
        "id": "626",
        "en": "confident",
        "tr_display": "kendinden emin",
        "tr_correct_meanings": [
            "kendinden emin"
        ]
    },
    {
        "id": "627",
        "en": "grumpy",
        "tr_display": "huysuz, somurtkan",
        "tr_correct_meanings": [
            "huysuz",
            "somurtkan"
        ]
    },
    {
        "id": "628",
        "en": "messy",
        "tr_display": "dağınık, pasaklı",
        "tr_correct_meanings": [
            "dağınık",
            "pasaklı"
        ]
    },
    {
        "id": "629",
        "en": "dirty",
        "tr_display": "kirli",
        "tr_correct_meanings": [
            "kirli"
        ]
    },
    {
        "id": "630",
        "en": "exclusive",
        "tr_display": "özel, seçkin",
        "tr_correct_meanings": [
            "özel",
            "seçkin"
        ]
    },
    {
        "id": "631",
        "en": "liar",
        "tr_display": "yalancı",
        "tr_correct_meanings": [
            "yalancı"
        ]
    },
    {
        "id": "632",
        "en": "cruel",
        "tr_display": "zalim",
        "tr_correct_meanings": [
            "zalim"
        ]
    },
    {
        "id": "633",
        "en": "tolerant",
        "tr_display": "hoşgörülü",
        "tr_correct_meanings": [
            "hoşgörülü"
        ]
    },
    {
        "id": "634",
        "en": "traitor",
        "tr_display": "hain",
        "tr_correct_meanings": [
            "hain"
        ]
    },
    {
        "id": "635",
        "en": "patriot",
        "tr_display": "vatansever",
        "tr_correct_meanings": [
            "vatansever"
        ]
    },
    {
        "id": "636",
        "en": "perverted",
        "tr_display": "sapık",
        "tr_correct_meanings": [
            "sapık"
        ]
    },
    {
        "id": "637",
        "en": "immoral",
        "tr_display": "ahlaksız",
        "tr_correct_meanings": [
            "ahlaksız"
        ]
    },
    {
        "id": "638",
        "en": "shameless",
        "tr_display": "utanmaz",
        "tr_correct_meanings": [
            "utanmaz"
        ]
    },
    {
        "id": "639",
        "en": "confused",
        "tr_display": "şaşkın, karmakarışık",
        "tr_correct_meanings": [
            "şaşkın",
            "karmakarışık"
        ]
    },
    {
        "id": "640",
        "en": "bonafide",
        "tr_display": "iyi niyetli",
        "tr_correct_meanings": [
            "iyi niyetli"
        ]
    },
    {
        "id": "641",
        "en": "stupid",
        "tr_display": "aptal",
        "tr_correct_meanings": [
            "aptal"
        ]
    },
    {
        "id": "642",
        "en": "moron",
        "tr_display": "moron, geri zekalı",
        "tr_correct_meanings": [
            "moron",
            "geri zekalı"
        ]
    },
    {
        "id": "643",
        "en": "type",
        "tr_display": "tip, tür, model, cins",
        "tr_correct_meanings": [
            "tip",
            "tür",
            "model",
            "cins"
        ]
    },
    {
        "id": "644",
        "en": "tall",
        "tr_display": "uzun",
        "tr_correct_meanings": [
            "uzun"
        ]
    },
    {
        "id": "645",
        "en": "short",
        "tr_display": "kısa",
        "tr_correct_meanings": [
            "kısa"
        ]
    },
    {
        "id": "646",
        "en": "medium height",
        "tr_display": "orta boy",
        "tr_correct_meanings": [
            "orta boy"
        ]
    },
    {
        "id": "647",
        "en": "fat",
        "tr_display": "şişman",
        "tr_correct_meanings": [
            "şişman"
        ]
    },
    {
        "id": "648",
        "en": "overweight",
        "tr_display": "fazla kilolu",
        "tr_correct_meanings": [
            "fazla kilolu"
        ]
    },
    {
        "id": "649",
        "en": "thin",
        "tr_display": "zayıf",
        "tr_correct_meanings": [
            "zayıf"
        ]
    },
    {
        "id": "650",
        "en": "skinny",
        "tr_display": "çok zayıf",
        "tr_correct_meanings": [
            "çok zayıf"
        ]
    },
    {
        "id": "651",
        "en": "slim",
        "tr_display": "ince",
        "tr_correct_meanings": [
            "ince"
        ]
    },
    {
        "id": "652",
        "en": "old",
        "tr_display": "yaşlı",
        "tr_correct_meanings": [
            "yaşlı"
        ]
    },
    {
        "id": "653",
        "en": "young",
        "tr_display": "genç",
        "tr_correct_meanings": [
            "genç"
        ]
    },
    {
        "id": "654",
        "en": "middle age",
        "tr_display": "orta yaşlı",
        "tr_correct_meanings": [
            "orta yaşlı"
        ]
    },
    {
        "id": "655",
        "en": "bald",
        "tr_display": "kel",
        "tr_correct_meanings": [
            "kel"
        ]
    },
    {
        "id": "656",
        "en": "beard",
        "tr_display": "sakal",
        "tr_correct_meanings": [
            "sakal"
        ]
    },
    {
        "id": "657",
        "en": "mustache",
        "tr_display": "bıyık",
        "tr_correct_meanings": [
            "bıyık"
        ]
    },
    {
        "id": "658",
        "en": "hair",
        "tr_display": "saç",
        "tr_correct_meanings": [
            "saç"
        ]
    },
    {
        "id": "659",
        "en": "long hair",
        "tr_display": "uzun saç",
        "tr_correct_meanings": [
            "uzun saç"
        ]
    },
    {
        "id": "660",
        "en": "short hair",
        "tr_display": "kısa saç",
        "tr_correct_meanings": [
            "kısa saç"
        ]
    },
    {
        "id": "661",
        "en": "straight hair",
        "tr_display": "düz saç",
        "tr_correct_meanings": [
            "düz saç"
        ]
    },
    {
        "id": "662",
        "en": "curly hair",
        "tr_display": "kıvırcık saç",
        "tr_correct_meanings": [
            "kıvırcık saç"
        ]
    },
    {
        "id": "663",
        "en": "blonde",
        "tr_display": "sarışın",
        "tr_correct_meanings": [
            "sarışın"
        ]
    },
    {
        "id": "664",
        "en": "brunette",
        "tr_display": "esmer",
        "tr_correct_meanings": [
            "esmer"
        ]
    },
    {
        "id": "665",
        "en": "blond haired",
        "tr_display": "sarı saçlı",
        "tr_correct_meanings": [
            "sarı saçlı"
        ]
    },
    {
        "id": "666",
        "en": "black haired",
        "tr_display": "siyah saçlı",
        "tr_correct_meanings": [
            "siyah saçlı"
        ]
    },
    {
        "id": "667",
        "en": "brown haired",
        "tr_display": "kahverengi saçlı",
        "tr_correct_meanings": [
            "kahverengi saçlı"
        ]
    },
    {
        "id": "668",
        "en": "dark haired",
        "tr_display": "siyah saçlı",
        "tr_correct_meanings": [
            "siyah saçlı"
        ]
    },
    {
        "id": "669",
        "en": "ginger haired",
        "tr_display": "kızıl saçlı",
        "tr_correct_meanings": [
            "kızıl saçlı"
        ]
    },
    {
        "id": "670",
        "en": "attention",
        "tr_display": "dikkat",
        "tr_correct_meanings": [
            "dikkat"
        ]
    },
    {
        "id": "671",
        "en": "careful",
        "tr_display": "dikkatli",
        "tr_correct_meanings": [
            "dikkatli"
        ]
    },
    {
        "id": "672",
        "en": "danger",
        "tr_display": "tehlike",
        "tr_correct_meanings": [
            "tehlike"
        ]
    },
    {
        "id": "673",
        "en": "dangerous",
        "tr_display": "tehlikeli",
        "tr_correct_meanings": [
            "tehlikeli"
        ]
    },
    {
        "id": "674",
        "en": "gambling",
        "tr_display": "kumar",
        "tr_correct_meanings": [
            "kumar"
        ]
    },
    {
        "id": "675",
        "en": "gambler",
        "tr_display": "kumarbaz",
        "tr_correct_meanings": [
            "kumarbaz"
        ]
    },
    {
        "id": "676",
        "en": "luck",
        "tr_display": "şans",
        "tr_correct_meanings": [
            "şans"
        ]
    },
    {
        "id": "677",
        "en": "peace",
        "tr_display": "barış",
        "tr_correct_meanings": [
            "barış"
        ]
    },
    {
        "id": "678",
        "en": "war",
        "tr_display": "savaş",
        "tr_correct_meanings": [
            "savaş"
        ]
    },
    {
        "id": "679",
        "en": "army",
        "tr_display": "ordu",
        "tr_correct_meanings": [
            "ordu"
        ]
    },
    {
        "id": "680",
        "en": "legion",
        "tr_display": "lejyon, birlik, ordu",
        "tr_correct_meanings": [
            "lejyon",
            "birlik",
            "ordu"
        ]
    },
    {
        "id": "681",
        "en": "weapon",
        "tr_display": "silah",
        "tr_correct_meanings": [
            "silah"
        ]
    },
    {
        "id": "682",
        "en": "gun",
        "tr_display": "tabanca",
        "tr_correct_meanings": [
            "tabanca"
        ]
    },
    {
        "id": "683",
        "en": "attack",
        "tr_display": "atak",
        "tr_correct_meanings": [
            "atak"
        ]
    },
    {
        "id": "684",
        "en": "defense",
        "tr_display": "defans",
        "tr_correct_meanings": [
            "defans"
        ]
    },
    {
        "id": "685",
        "en": "murder",
        "tr_display": "cinayet",
        "tr_correct_meanings": [
            "cinayet"
        ]
    },
    {
        "id": "686",
        "en": "murderer",
        "tr_display": "katil",
        "tr_correct_meanings": [
            "katil"
        ]
    },
    {
        "id": "687",
        "en": "hit",
        "tr_display": "vurmak",
        "tr_correct_meanings": [
            "vurmak"
        ]
    },
    {
        "id": "688",
        "en": "kill",
        "tr_display": "öldürmek",
        "tr_correct_meanings": [
            "öldürmek"
        ]
    },
    {
        "id": "689",
        "en": "killer",
        "tr_display": "katil",
        "tr_correct_meanings": [
            "katil"
        ]
    },
    {
        "id": "690",
        "en": "suffer",
        "tr_display": "acı çekmek",
        "tr_correct_meanings": [
            "acı çekmek"
        ]
    },
    {
        "id": "691",
        "en": "pain",
        "tr_display": "ağrı",
        "tr_correct_meanings": [
            "ağrı"
        ]
    },
    {
        "id": "692",
        "en": "headache",
        "tr_display": "baş ağrısı, migren",
        "tr_correct_meanings": [
            "baş ağrısı",
            "migren"
        ]
    },
    {
        "id": "693",
        "en": "punish",
        "tr_display": "cezalandırmak",
        "tr_correct_meanings": [
            "cezalandırmak"
        ]
    },
    {
        "id": "694",
        "en": "death",
        "tr_display": "ölüm",
        "tr_correct_meanings": [
            "ölüm"
        ]
    },
    {
        "id": "695",
        "en": "live",
        "tr_display": "canlı, yaşayan",
        "tr_correct_meanings": [
            "canlı",
            "yaşayan"
        ]
    },
    {
        "id": "696",
        "en": "life",
        "tr_display": "yaşam, hayat",
        "tr_correct_meanings": [
            "yaşam",
            "hayat"
        ]
    },
    {
        "id": "697",
        "en": "immortal",
        "tr_display": "ölümsüz",
        "tr_correct_meanings": [
            "ölümsüz"
        ]
    },
    {
        "id": "698",
        "en": "important",
        "tr_display": "önemli",
        "tr_correct_meanings": [
            "önemli"
        ]
    },
    {
        "id": "699",
        "en": "nature",
        "tr_display": "doğa",
        "tr_correct_meanings": [
            "doğa"
        ]
    },
    {
        "id": "700",
        "en": "natural",
        "tr_display": "doğal",
        "tr_correct_meanings": [
            "doğal"
        ]
    },
    {
        "id": "701",
        "en": "wild",
        "tr_display": "vahşi",
        "tr_correct_meanings": [
            "vahşi"
        ]
    },
    {
        "id": "702",
        "en": "tolerance",
        "tr_display": "tolerans",
        "tr_correct_meanings": [
            "tolerans"
        ]
    },
    {
        "id": "703",
        "en": "pleasant",
        "tr_display": "keyifli, hoş",
        "tr_correct_meanings": [
            "keyifli",
            "hoş"
        ]
    },
    {
        "id": "704",
        "en": "cozy",
        "tr_display": "rahat, keyifli",
        "tr_correct_meanings": [
            "rahat",
            "keyifli"
        ]
    },
    {
        "id": "705",
        "en": "lie",
        "tr_display": "yalan",
        "tr_correct_meanings": [
            "yalan"
        ]
    },
    {
        "id": "706",
        "en": "strong",
        "tr_display": "güçlü",
        "tr_correct_meanings": [
            "güçlü"
        ]
    },
    {
        "id": "707",
        "en": "weak",
        "tr_display": "zayıf",
        "tr_correct_meanings": [
            "zayıf"
        ]
    },
    {
        "id": "708",
        "en": "terrifying",
        "tr_display": "dehşet verici",
        "tr_correct_meanings": [
            "dehşet verici"
        ]
    },
    {
        "id": "709",
        "en": "horrible",
        "tr_display": "korkunç",
        "tr_correct_meanings": [
            "korkunç"
        ]
    },
    {
        "id": "710",
        "en": "wonderful",
        "tr_display": "harika",
        "tr_correct_meanings": [
            "harika"
        ]
    },
    {
        "id": "711",
        "en": "goodwill",
        "tr_display": "iyi niyet",
        "tr_correct_meanings": [
            "iyi niyet"
        ]
    },
    {
        "id": "712",
        "en": "unjust",
        "tr_display": "haksız",
        "tr_correct_meanings": [
            "haksız"
        ]
    },
    {
        "id": "713",
        "en": "innocent",
        "tr_display": "masum",
        "tr_correct_meanings": [
            "masum"
        ]
    },
    {
        "id": "714",
        "en": "guilt",
        "tr_display": "suç",
        "tr_correct_meanings": [
            "suç"
        ]
    },
    {
        "id": "715",
        "en": "guiltless",
        "tr_display": "suçsuz",
        "tr_correct_meanings": [
            "suçsuz"
        ]
    },
    {
        "id": "716",
        "en": "guilty",
        "tr_display": "suçlu",
        "tr_correct_meanings": [
            "suçlu"
        ]
    },
    {
        "id": "717",
        "en": "lamp",
        "tr_display": "lamba",
        "tr_correct_meanings": [
            "lamba"
        ]
    },
    {
        "id": "718",
        "en": "light",
        "tr_display": "ışık, hafif",
        "tr_correct_meanings": [
            "ışık",
            "hafif"
        ]
    },
    {
        "id": "719",
        "en": "candle",
        "tr_display": "mum",
        "tr_correct_meanings": [
            "mum"
        ]
    },
    {
        "id": "720",
        "en": "president",
        "tr_display": "devlet başkanı",
        "tr_correct_meanings": [
            "devlet başkanı"
        ]
    },
    {
        "id": "721",
        "en": "vice president",
        "tr_display": "başkan yardımcısı",
        "tr_correct_meanings": [
            "başkan yardımcısı"
        ]
    },
    {
        "id": "722",
        "en": "prime minister",
        "tr_display": "başbakan",
        "tr_correct_meanings": [
            "başbakan"
        ]
    },
    {
        "id": "723",
        "en": "minister",
        "tr_display": "bakan",
        "tr_correct_meanings": [
            "bakan"
        ]
    },
    {
        "id": "724",
        "en": "ministry",
        "tr_display": "bakanlık",
        "tr_correct_meanings": [
            "bakanlık"
        ]
    },
    {
        "id": "725",
        "en": "king",
        "tr_display": "kral",
        "tr_correct_meanings": [
            "kral"
        ]
    },
    {
        "id": "726",
        "en": "dictator",
        "tr_display": "diktatör",
        "tr_correct_meanings": [
            "diktatör"
        ]
    },
    {
        "id": "727",
        "en": "steal",
        "tr_display": "çalmak",
        "tr_correct_meanings": [
            "çalmak"
        ]
    },
    {
        "id": "728",
        "en": "thief",
        "tr_display": "hırsız",
        "tr_correct_meanings": [
            "hırsız"
        ]
    },
    {
        "id": "729",
        "en": "theft",
        "tr_display": "hırsızlık",
        "tr_correct_meanings": [
            "hırsızlık"
        ]
    },
    {
        "id": "730",
        "en": "rich",
        "tr_display": "zengin",
        "tr_correct_meanings": [
            "zengin"
        ]
    },
    {
        "id": "731",
        "en": "poor",
        "tr_display": "fakir",
        "tr_correct_meanings": [
            "fakir"
        ]
    },
    {
        "id": "732",
        "en": "happy",
        "tr_display": "mutlu",
        "tr_correct_meanings": [
            "mutlu"
        ]
    },
    {
        "id": "733",
        "en": "happiness",
        "tr_display": "mutluluk",
        "tr_correct_meanings": [
            "mutluluk"
        ]
    },
    {
        "id": "734",
        "en": "unhappy",
        "tr_display": "mutsuz",
        "tr_correct_meanings": [
            "mutsuz"
        ]
    },
    {
        "id": "735",
        "en": "sad",
        "tr_display": "üzgün, hüzünlü",
        "tr_correct_meanings": [
            "üzgün",
            "hüzünlü"
        ]
    },
    {
        "id": "736",
        "en": "sorry",
        "tr_display": "üzgün, pişman",
        "tr_correct_meanings": [
            "üzgün",
            "pişman"
        ]
    },
    {
        "id": "737",
        "en": "alone",
        "tr_display": "yalnız",
        "tr_correct_meanings": [
            "yalnız"
        ]
    },
    {
        "id": "738",
        "en": "difficult",
        "tr_display": "zor, çetin",
        "tr_correct_meanings": [
            "zor",
            "çetin"
        ]
    },
    {
        "id": "739",
        "en": "easy",
        "tr_display": "kolay",
        "tr_correct_meanings": [
            "kolay"
        ]
    },
    {
        "id": "740",
        "en": "hard",
        "tr_display": "zor",
        "tr_correct_meanings": [
            "zor"
        ]
    },
    {
        "id": "741",
        "en": "soft",
        "tr_display": "yumuşak",
        "tr_correct_meanings": [
            "yumuşak"
        ]
    },
    {
        "id": "742",
        "en": "clear",
        "tr_display": "temiz",
        "tr_correct_meanings": [
            "temiz"
        ]
    },
    {
        "id": "743",
        "en": "bad",
        "tr_display": "kötü",
        "tr_correct_meanings": [
            "kötü"
        ]
    },
    {
        "id": "744",
        "en": "bully",
        "tr_display": "zorba",
        "tr_correct_meanings": [
            "zorba"
        ]
    },
    {
        "id": "745",
        "en": "far",
        "tr_display": "uzak",
        "tr_correct_meanings": [
            "uzak"
        ]
    },
    {
        "id": "746",
        "en": "near",
        "tr_display": "yakın",
        "tr_correct_meanings": [
            "yakın"
        ]
    },
    {
        "id": "747",
        "en": "close",
        "tr_display": "yakın",
        "tr_correct_meanings": [
            "yakın"
        ]
    },
    {
        "id": "748",
        "en": "up",
        "tr_display": "yukarı",
        "tr_correct_meanings": [
            "yukarı"
        ]
    },
    {
        "id": "749",
        "en": "down",
        "tr_display": "aşağı",
        "tr_correct_meanings": [
            "aşağı"
        ]
    },
    {
        "id": "750",
        "en": "rise",
        "tr_display": "yükselmek",
        "tr_correct_meanings": [
            "yükselmek"
        ]
    },
    {
        "id": "751",
        "en": "fall",
        "tr_display": "düşmek",
        "tr_correct_meanings": [
            "düşmek"
        ]
    },
    {
        "id": "752",
        "en": "holiday, vacation",
        "tr_display": "tatil",
        "tr_correct_meanings": [
            "tatil"
        ]
    },
    {
        "id": "753",
        "en": "summer",
        "tr_display": "yaz",
        "tr_correct_meanings": [
            "yaz"
        ]
    },
    {
        "id": "754",
        "en": "winter",
        "tr_display": "kış",
        "tr_correct_meanings": [
            "kış"
        ]
    },
    {
        "id": "755",
        "en": "spring",
        "tr_display": "ilkbahar",
        "tr_correct_meanings": [
            "ilkbahar"
        ]
    },
    {
        "id": "756",
        "en": "zoo",
        "tr_display": "hayvanat bahçesi",
        "tr_correct_meanings": [
            "hayvanat bahçesi"
        ]
    },
    {
        "id": "757",
        "en": "heart",
        "tr_display": "kalp",
        "tr_correct_meanings": [
            "kalp"
        ]
    },
    {
        "id": "758",
        "en": "hearty",
        "tr_display": "candan",
        "tr_correct_meanings": [
            "candan"
        ]
    },
    {
        "id": "759",
        "en": "hello",
        "tr_display": "merhaba",
        "tr_correct_meanings": [
            "merhaba"
        ]
    },
    {
        "id": "760",
        "en": "freedom",
        "tr_display": "özgürlük",
        "tr_correct_meanings": [
            "özgürlük"
        ]
    },
    {
        "id": "761",
        "en": "person",
        "tr_display": "kişi, şahıs",
        "tr_correct_meanings": [
            "kişi",
            "şahıs"
        ]
    },
    {
        "id": "762",
        "en": "people",
        "tr_display": "insanlar, halk",
        "tr_correct_meanings": [
            "insanlar",
            "halk"
        ]
    },
    {
        "id": "763",
        "en": "human",
        "tr_display": "insan, beşeri",
        "tr_correct_meanings": [
            "insan",
            "beşeri"
        ]
    },
    {
        "id": "764",
        "en": "ready",
        "tr_display": "hazır",
        "tr_correct_meanings": [
            "hazır"
        ]
    },
    {
        "id": "765",
        "en": "Mr.",
        "tr_display": "bay",
        "tr_correct_meanings": [
            "bay"
        ]
    },
    {
        "id": "766",
        "en": "Mrs.",
        "tr_display": "bayan",
        "tr_correct_meanings": [
            "bayan"
        ]
    },
    {
        "id": "767",
        "en": "Ms.",
        "tr_display": "bayan",
        "tr_correct_meanings": [
            "bayan"
        ]
    },
    {
        "id": "768",
        "en": "Miss",
        "tr_display": "genç kız",
        "tr_correct_meanings": [
            "genç kız"
        ]
    },
    {
        "id": "769",
        "en": "miss",
        "tr_display": "matmazel",
        "tr_correct_meanings": [
            "matmazel"
        ]
    },
    {
        "id": "770",
        "en": "mistake",
        "tr_display": "hata, yanlışlık",
        "tr_correct_meanings": [
            "hata",
            "yanlışlık"
        ]
    },
    {
        "id": "771",
        "en": "error",
        "tr_display": "yanlış, hata",
        "tr_correct_meanings": [
            "yanlış",
            "hata"
        ]
    },
    {
        "id": "772",
        "en": "enemy",
        "tr_display": "düşman",
        "tr_correct_meanings": [
            "düşman"
        ]
    },
    {
        "id": "773",
        "en": "bribe",
        "tr_display": "rüşvet vermek",
        "tr_correct_meanings": [
            "rüşvet vermek"
        ]
    },
    {
        "id": "774",
        "en": "page",
        "tr_display": "sayfa",
        "tr_correct_meanings": [
            "sayfa"
        ]
    },
    {
        "id": "775",
        "en": "news",
        "tr_display": "haber",
        "tr_correct_meanings": [
            "haber"
        ]
    },
    {
        "id": "776",
        "en": "journalist",
        "tr_display": "gazeteci",
        "tr_correct_meanings": [
            "gazeteci"
        ]
    },
    {
        "id": "777",
        "en": "embassy",
        "tr_display": "elçilik",
        "tr_correct_meanings": [
            "elçilik"
        ]
    },
    {
        "id": "778",
        "en": "consulate",
        "tr_display": "konsolosluk",
        "tr_correct_meanings": [
            "konsolosluk"
        ]
    },
    {
        "id": "779",
        "en": "casual",
        "tr_display": "gündelik",
        "tr_correct_meanings": [
            "gündelik"
        ]
    },
    {
        "id": "780",
        "en": "cotton",
        "tr_display": "pamuk",
        "tr_correct_meanings": [
            "pamuk"
        ]
    },
    {
        "id": "781",
        "en": "in danger",
        "tr_display": "tehlikede",
        "tr_correct_meanings": [
            "tehlikede"
        ]
    },
    {
        "id": "782",
        "en": "tops",
        "tr_display": "en iyi",
        "tr_correct_meanings": [
            "en iyi"
        ]
    },
    {
        "id": "783",
        "en": "dream",
        "tr_display": "rüya",
        "tr_correct_meanings": [
            "rüya"
        ]
    },
    {
        "id": "784",
        "en": "villager",
        "tr_display": "köylü",
        "tr_correct_meanings": [
            "köylü"
        ]
    },
    {
        "id": "785",
        "en": "vase",
        "tr_display": "vazo",
        "tr_correct_meanings": [
            "vazo"
        ]
    },
    {
        "id": "786",
        "en": "song",
        "tr_display": "şarkı",
        "tr_correct_meanings": [
            "şarkı"
        ]
    },
    {
        "id": "787",
        "en": "sing a song",
        "tr_display": "şarkı söylemek",
        "tr_correct_meanings": [
            "şarkı söylemek"
        ]
    },
    {
        "id": "788",
        "en": "glass",
        "tr_display": "cam",
        "tr_correct_meanings": [
            "cam"
        ]
    },
    {
        "id": "789",
        "en": "mirror",
        "tr_display": "ayna",
        "tr_correct_meanings": [
            "ayna"
        ]
    },
    {
        "id": "790",
        "en": "earth - world",
        "tr_display": "dünya",
        "tr_correct_meanings": [
            "dünya"
        ]
    },
    {
        "id": "791",
        "en": "earthquake",
        "tr_display": "deprem",
        "tr_correct_meanings": [
            "deprem"
        ]
    },
    {
        "id": "792",
        "en": "Europe",
        "tr_display": "Avrupa",
        "tr_correct_meanings": [
            "avrupa"
        ]
    },
    {
        "id": "793",
        "en": "European",
        "tr_display": "Avrupalı",
        "tr_correct_meanings": [
            "avrupalı"
        ]
    },
    {
        "id": "794",
        "en": "America",
        "tr_display": "Amerika",
        "tr_correct_meanings": [
            "amerika"
        ]
    },
    {
        "id": "795",
        "en": "American",
        "tr_display": "Amerikalı",
        "tr_correct_meanings": [
            "amerikalı"
        ]
    },
    {
        "id": "796",
        "en": "England",
        "tr_display": "İngiltere",
        "tr_correct_meanings": [
            "i̇ngiltere"
        ]
    },
    {
        "id": "797",
        "en": "English",
        "tr_display": "İngiltereli, İngilizce",
        "tr_correct_meanings": [
            "i̇ngiltereli",
            "i̇ngilizce"
        ]
    },
    {
        "id": "798",
        "en": "greek",
        "tr_display": "yunan",
        "tr_correct_meanings": [
            "yunan"
        ]
    },
    {
        "id": "799",
        "en": "Arab",
        "tr_display": "Arap",
        "tr_correct_meanings": [
            "arap"
        ]
    },
    {
        "id": "800",
        "en": "Arabian",
        "tr_display": "Arap halkı",
        "tr_correct_meanings": [
            "arap halkı"
        ]
    },
    {
        "id": "801",
        "en": "Asia",
        "tr_display": "Asya",
        "tr_correct_meanings": [
            "asya"
        ]
    },
    {
        "id": "802",
        "en": "bed",
        "tr_display": "yatak",
        "tr_correct_meanings": [
            "yatak"
        ]
    },
    {
        "id": "803",
        "en": "bedtime",
        "tr_display": "yatma zamanı",
        "tr_correct_meanings": [
            "yatma zamanı"
        ]
    },
    {
        "id": "804",
        "en": "breaktime",
        "tr_display": "tenefüs, ara",
        "tr_correct_meanings": [
            "tenefüs",
            "ara"
        ]
    },
    {
        "id": "805",
        "en": "land",
        "tr_display": "arazi, kara, arsa",
        "tr_correct_meanings": [
            "arazi",
            "kara",
            "arsa"
        ]
    },
    {
        "id": "806",
        "en": "discover",
        "tr_display": "keşfetmek",
        "tr_correct_meanings": [
            "keşfetmek"
        ]
    },
    {
        "id": "807",
        "en": "discovery",
        "tr_display": "keşif",
        "tr_correct_meanings": [
            "keşif"
        ]
    },
    {
        "id": "808",
        "en": "forbid",
        "tr_display": "yasaklamak",
        "tr_correct_meanings": [
            "yasaklamak"
        ]
    },
    {
        "id": "809",
        "en": "neck",
        "tr_display": "boyun",
        "tr_correct_meanings": [
            "boyun"
        ]
    },
    {
        "id": "810",
        "en": "tie",
        "tr_display": "kravat",
        "tr_correct_meanings": [
            "kravat"
        ]
    },
    {
        "id": "811",
        "en": "necklace",
        "tr_display": "kolye",
        "tr_correct_meanings": [
            "kolye"
        ]
    },
    {
        "id": "812",
        "en": "fun",
        "tr_display": "eğlence",
        "tr_correct_meanings": [
            "eğlence"
        ]
    },
    {
        "id": "813",
        "en": "richly",
        "tr_display": "fazlasıyla",
        "tr_correct_meanings": [
            "fazlasıyla"
        ]
    },
    {
        "id": "814",
        "en": "the rich",
        "tr_display": "zenginler",
        "tr_correct_meanings": [
            "zenginler"
        ]
    },
    {
        "id": "815",
        "en": "example",
        "tr_display": "örnek",
        "tr_correct_meanings": [
            "örnek"
        ]
    },
    {
        "id": "816",
        "en": "large",
        "tr_display": "geniş",
        "tr_correct_meanings": [
            "geniş"
        ]
    },
    {
        "id": "817",
        "en": "small",
        "tr_display": "dar",
        "tr_correct_meanings": [
            "dar"
        ]
    },
    {
        "id": "818",
        "en": "fast",
        "tr_display": "çabuk",
        "tr_correct_meanings": [
            "çabuk"
        ]
    },
    {
        "id": "819",
        "en": "fight",
        "tr_display": "kavga",
        "tr_correct_meanings": [
            "kavga"
        ]
    },
    {
        "id": "820",
        "en": "fighter",
        "tr_display": "savaşçı",
        "tr_correct_meanings": [
            "savaşçı"
        ]
    },
    {
        "id": "821",
        "en": "chief",
        "tr_display": "reis, şef",
        "tr_correct_meanings": [
            "reis",
            "şef"
        ]
    },
    {
        "id": "822",
        "en": "follow",
        "tr_display": "takip etmek",
        "tr_correct_meanings": [
            "takip etmek"
        ]
    },
    {
        "id": "823",
        "en": "library",
        "tr_display": "kütüphane",
        "tr_correct_meanings": [
            "kütüphane"
        ]
    },
    {
        "id": "824",
        "en": "simple",
        "tr_display": "basit",
        "tr_correct_meanings": [
            "basit"
        ]
    },
    {
        "id": "825",
        "en": "perfect",
        "tr_display": "mükemmel",
        "tr_correct_meanings": [
            "mükemmel"
        ]
    },
    {
        "id": "826",
        "en": "toy",
        "tr_display": "oyuncak",
        "tr_correct_meanings": [
            "oyuncak"
        ]
    },
    {
        "id": "827",
        "en": "loud",
        "tr_display": "gürültülü",
        "tr_correct_meanings": [
            "gürültülü"
        ]
    },
    {
        "id": "828",
        "en": "loudly",
        "tr_display": "yüksek ses",
        "tr_correct_meanings": [
            "yüksek ses"
        ]
    },
    {
        "id": "829",
        "en": "loud speaker",
        "tr_display": "hoparlör",
        "tr_correct_meanings": [
            "hoparlör"
        ]
    },
    {
        "id": "830",
        "en": "silent",
        "tr_display": "sessiz",
        "tr_correct_meanings": [
            "sessiz"
        ]
    },
    {
        "id": "831",
        "en": "quiet",
        "tr_display": "sessiz",
        "tr_correct_meanings": [
            "sessiz"
        ]
    },
    {
        "id": "832",
        "en": "be quiet",
        "tr_display": "sessiz ol",
        "tr_correct_meanings": [
            "sessiz ol"
        ]
    },
    {
        "id": "833",
        "en": "pine",
        "tr_display": "çam",
        "tr_correct_meanings": [
            "çam"
        ]
    },
    {
        "id": "834",
        "en": "waterfall",
        "tr_display": "şelale",
        "tr_correct_meanings": [
            "şelale"
        ]
    },
    {
        "id": "835",
        "en": "bride",
        "tr_display": "gelin",
        "tr_correct_meanings": [
            "gelin"
        ]
    },
    {
        "id": "836",
        "en": "map",
        "tr_display": "harita",
        "tr_correct_meanings": [
            "harita"
        ]
    },
    {
        "id": "837",
        "en": "torture",
        "tr_display": "işkence",
        "tr_correct_meanings": [
            "işkence"
        ]
    },
    {
        "id": "838",
        "en": "vote",
        "tr_display": "oy",
        "tr_correct_meanings": [
            "oy"
        ]
    },
    {
        "id": "839",
        "en": "planet",
        "tr_display": "gezegen",
        "tr_correct_meanings": [
            "gezegen"
        ]
    },
    {
        "id": "840",
        "en": "luggage, trunk",
        "tr_display": "bagaj",
        "tr_correct_meanings": [
            "bagaj"
        ]
    },
    {
        "id": "841",
        "en": "incredible",
        "tr_display": "inanılmaz",
        "tr_correct_meanings": [
            "inanılmaz"
        ]
    },
    {
        "id": "842",
        "en": "boss",
        "tr_display": "patron",
        "tr_correct_meanings": [
            "patron"
        ]
    },
    {
        "id": "843",
        "en": "company",
        "tr_display": "şirket",
        "tr_correct_meanings": [
            "şirket"
        ]
    },
    {
        "id": "844",
        "en": "produce",
        "tr_display": "üretmek",
        "tr_correct_meanings": [
            "üretmek"
        ]
    },
    {
        "id": "845",
        "en": "income",
        "tr_display": "gelir",
        "tr_correct_meanings": [
            "gelir"
        ]
    },
    {
        "id": "846",
        "en": "spend",
        "tr_display": "harcamak",
        "tr_correct_meanings": [
            "harcamak"
        ]
    },
    {
        "id": "847",
        "en": "pay",
        "tr_display": "ödemek",
        "tr_correct_meanings": [
            "ödemek"
        ]
    },
    {
        "id": "848",
        "en": "deal",
        "tr_display": "anlaşmak",
        "tr_correct_meanings": [
            "anlaşmak"
        ]
    },
    {
        "id": "849",
        "en": "apply",
        "tr_display": "uygulamak, başvurmak",
        "tr_correct_meanings": [
            "uygulamak",
            "başvurmak"
        ]
    },
    {
        "id": "850",
        "en": "all",
        "tr_display": "bütün",
        "tr_correct_meanings": [
            "bütün"
        ]
    },
    {
        "id": "851",
        "en": "often",
        "tr_display": "sık sık",
        "tr_correct_meanings": [
            "sık sık"
        ]
    },
    {
        "id": "852",
        "en": "usually",
        "tr_display": "genellikle",
        "tr_correct_meanings": [
            "genellikle"
        ]
    },
    {
        "id": "853",
        "en": "always",
        "tr_display": "her zaman",
        "tr_correct_meanings": [
            "her zaman"
        ]
    },
    {
        "id": "854",
        "en": "never",
        "tr_display": "asla",
        "tr_correct_meanings": [
            "asla"
        ]
    },
    {
        "id": "855",
        "en": "outlook",
        "tr_display": "görünüş",
        "tr_correct_meanings": [
            "görünüş"
        ]
    },
    {
        "id": "856",
        "en": "purpose",
        "tr_display": "amaç",
        "tr_correct_meanings": [
            "amaç"
        ]
    },
    {
        "id": "857",
        "en": "aim",
        "tr_display": "hedef, amaç",
        "tr_correct_meanings": [
            "hedef",
            "amaç"
        ]
    },
    {
        "id": "858",
        "en": "aimless",
        "tr_display": "amaçsız",
        "tr_correct_meanings": [
            "amaçsız"
        ]
    },
    {
        "id": "859",
        "en": "young",
        "tr_display": "çocuk",
        "tr_correct_meanings": [
            "çocuk"
        ]
    },
    {
        "id": "860",
        "en": "earring",
        "tr_display": "küpe",
        "tr_correct_meanings": [
            "küpe"
        ]
    },
    {
        "id": "861",
        "en": "client",
        "tr_display": "alıcı, müşteri",
        "tr_correct_meanings": [
            "alıcı",
            "müşteri"
        ]
    },
    {
        "id": "862",
        "en": "cliff",
        "tr_display": "uçurum",
        "tr_correct_meanings": [
            "uçurum"
        ]
    },
    {
        "id": "863",
        "en": "farm",
        "tr_display": "çiftlik",
        "tr_correct_meanings": [
            "çiftlik"
        ]
    },
    {
        "id": "864",
        "en": "farmer",
        "tr_display": "çiftçi",
        "tr_correct_meanings": [
            "çiftçi"
        ]
    },
    {
        "id": "865",
        "en": "fashion",
        "tr_display": "moda",
        "tr_correct_meanings": [
            "moda"
        ]
    },
    {
        "id": "866",
        "en": "fashionable",
        "tr_display": "modaya uygun",
        "tr_correct_meanings": [
            "modaya uygun"
        ]
    },
    {
        "id": "867",
        "en": "fascinating",
        "tr_display": "büyüleyici",
        "tr_correct_meanings": [
            "büyüleyici"
        ]
    },
    {
        "id": "868",
        "en": "feasible",
        "tr_display": "mümkün",
        "tr_correct_meanings": [
            "mümkün"
        ]
    },
    {
        "id": "869",
        "en": "felonious",
        "tr_display": "suçlu",
        "tr_correct_meanings": [
            "suçlu"
        ]
    },
    {
        "id": "870",
        "en": "order",
        "tr_display": "emir, sipariş",
        "tr_correct_meanings": [
            "emir",
            "sipariş"
        ]
    },
    {
        "id": "871",
        "en": "first aid",
        "tr_display": "ilk yardım",
        "tr_correct_meanings": [
            "ilk yardım"
        ]
    },
    {
        "id": "872",
        "en": "at first",
        "tr_display": "ilk önce",
        "tr_correct_meanings": [
            "ilk önce"
        ]
    },
    {
        "id": "873",
        "en": "firsthand",
        "tr_display": "doğrudan",
        "tr_correct_meanings": [
            "doğrudan"
        ]
    },
    {
        "id": "874",
        "en": "resume",
        "tr_display": "devam etmek",
        "tr_correct_meanings": [
            "devam etmek"
        ]
    },
    {
        "id": "875",
        "en": "research",
        "tr_display": "araştırma",
        "tr_correct_meanings": [
            "araştırma"
        ]
    },
    {
        "id": "876",
        "en": "select",
        "tr_display": "seçmek",
        "tr_correct_meanings": [
            "seçmek"
        ]
    },
    {
        "id": "877",
        "en": "file",
        "tr_display": "dosya",
        "tr_correct_meanings": [
            "dosya"
        ]
    },
    {
        "id": "878",
        "en": "install",
        "tr_display": "yerleştirme",
        "tr_correct_meanings": [
            "yerleştirme"
        ]
    },
    {
        "id": "879",
        "en": "delete",
        "tr_display": "silmek",
        "tr_correct_meanings": [
            "silmek"
        ]
    },
    {
        "id": "880",
        "en": "save",
        "tr_display": "kurtarmak",
        "tr_correct_meanings": [
            "kurtarmak"
        ]
    },
    {
        "id": "881",
        "en": "cancel",
        "tr_display": "iptal etmek",
        "tr_correct_meanings": [
            "iptal etmek"
        ]
    },
    {
        "id": "882",
        "en": "load",
        "tr_display": "yüklemek",
        "tr_correct_meanings": [
            "yüklemek"
        ]
    },
    {
        "id": "883",
        "en": "correct",
        "tr_display": "DOĞRU",
        "tr_correct_meanings": [
            "doğru"
        ]
    },
    {
        "id": "884",
        "en": "accept",
        "tr_display": "kabul etmek",
        "tr_correct_meanings": [
            "kabul etmek"
        ]
    },
    {
        "id": "885",
        "en": "present",
        "tr_display": "sunmak",
        "tr_correct_meanings": [
            "sunmak"
        ]
    },
    {
        "id": "886",
        "en": "gift, present",
        "tr_display": "hediye",
        "tr_correct_meanings": [
            "hediye"
        ]
    },
    {
        "id": "887",
        "en": "high class",
        "tr_display": "kaliteli",
        "tr_correct_meanings": [
            "kaliteli"
        ]
    },
    {
        "id": "888",
        "en": "highland",
        "tr_display": "dağlık yer",
        "tr_correct_meanings": [
            "dağlık yer"
        ]
    },
    {
        "id": "889",
        "en": "highway",
        "tr_display": "anayol",
        "tr_correct_meanings": [
            "anayol"
        ]
    },
    {
        "id": "890",
        "en": "weakly",
        "tr_display": "güçsüz",
        "tr_correct_meanings": [
            "güçsüz"
        ]
    },
    {
        "id": "891",
        "en": "weaken",
        "tr_display": "zayıf",
        "tr_correct_meanings": [
            "zayıf"
        ]
    },
    {
        "id": "892",
        "en": "weakling",
        "tr_display": "cılız",
        "tr_correct_meanings": [
            "cılız"
        ]
    },
    {
        "id": "893",
        "en": "whatever",
        "tr_display": "her neyse",
        "tr_correct_meanings": [
            "her neyse"
        ]
    },
    {
        "id": "894",
        "en": "ever",
        "tr_display": "asla",
        "tr_correct_meanings": [
            "asla"
        ]
    },
    {
        "id": "895",
        "en": "every",
        "tr_display": "her",
        "tr_correct_meanings": [
            "her"
        ]
    },
    {
        "id": "896",
        "en": "everybody",
        "tr_display": "herkes",
        "tr_correct_meanings": [
            "herkes"
        ]
    },
    {
        "id": "897",
        "en": "everyone",
        "tr_display": "herkes",
        "tr_correct_meanings": [
            "herkes"
        ]
    },
    {
        "id": "898",
        "en": "everything",
        "tr_display": "her şey",
        "tr_correct_meanings": [
            "her şey"
        ]
    },
    {
        "id": "899",
        "en": "nothing",
        "tr_display": "hiçbir şey",
        "tr_correct_meanings": [
            "hiçbir şey"
        ]
    },
    {
        "id": "900",
        "en": "movie",
        "tr_display": "sinema",
        "tr_correct_meanings": [
            "sinema"
        ]
    },
    {
        "id": "901",
        "en": "ball",
        "tr_display": "top",
        "tr_correct_meanings": [
            "top"
        ]
    },
    {
        "id": "902",
        "en": "playball",
        "tr_display": "top oynamak",
        "tr_correct_meanings": [
            "top oynamak"
        ]
    },
    {
        "id": "903",
        "en": "Maybe",
        "tr_display": "olabilir",
        "tr_correct_meanings": [
            "olabilir"
        ]
    },
    {
        "id": "904",
        "en": "perhaps",
        "tr_display": "belki",
        "tr_correct_meanings": [
            "belki"
        ]
    },
    {
        "id": "905",
        "en": "mayor",
        "tr_display": "belediye başkanı",
        "tr_correct_meanings": [
            "belediye başkanı"
        ]
    },
    {
        "id": "906",
        "en": "govern",
        "tr_display": "yönetmek",
        "tr_correct_meanings": [
            "yönetmek"
        ]
    },
    {
        "id": "907",
        "en": "governor",
        "tr_display": "vali",
        "tr_correct_meanings": [
            "vali"
        ]
    },
    {
        "id": "908",
        "en": "government",
        "tr_display": "hükümet",
        "tr_correct_meanings": [
            "hükümet"
        ]
    },
    {
        "id": "909",
        "en": "tip",
        "tr_display": "bahşiş",
        "tr_correct_meanings": [
            "bahşiş"
        ]
    },
    {
        "id": "910",
        "en": "diction",
        "tr_display": "diksiyon",
        "tr_correct_meanings": [
            "diksiyon"
        ]
    },
    {
        "id": "911",
        "en": "top",
        "tr_display": "üst, tepe",
        "tr_correct_meanings": [
            "üst",
            "tepe"
        ]
    },
    {
        "id": "912",
        "en": "secret",
        "tr_display": "gizli",
        "tr_correct_meanings": [
            "gizli"
        ]
    },
    {
        "id": "913",
        "en": "grisly",
        "tr_display": "korkunç",
        "tr_correct_meanings": [
            "korkunç"
        ]
    },
    {
        "id": "914",
        "en": "gym",
        "tr_display": "spor salonu",
        "tr_correct_meanings": [
            "spor salonu"
        ]
    },
    {
        "id": "915",
        "en": "gymnasium",
        "tr_display": "beden eğitimi",
        "tr_correct_meanings": [
            "beden eğitimi"
        ]
    },
    {
        "id": "916",
        "en": "half",
        "tr_display": "yarım",
        "tr_correct_meanings": [
            "yarım"
        ]
    },
    {
        "id": "917",
        "en": "empire",
        "tr_display": "imparatorluk",
        "tr_correct_meanings": [
            "imparatorluk"
        ]
    },
    {
        "id": "918",
        "en": "emperor",
        "tr_display": "imparator",
        "tr_correct_meanings": [
            "imparator"
        ]
    },
    {
        "id": "919",
        "en": "imposing",
        "tr_display": "görkemli, heybetli, etkileyici",
        "tr_correct_meanings": [
            "görkemli",
            "heybetli",
            "etkileyici"
        ]
    },
    {
        "id": "920",
        "en": "emotion",
        "tr_display": "heyecan",
        "tr_correct_meanings": [
            "heyecan"
        ]
    },
    {
        "id": "921",
        "en": "mate",
        "tr_display": "yakın arkadaş",
        "tr_correct_meanings": [
            "yakın arkadaş"
        ]
    },
    {
        "id": "922",
        "en": "body",
        "tr_display": "beden",
        "tr_correct_meanings": [
            "beden"
        ]
    },
    {
        "id": "923",
        "en": "bodyguard",
        "tr_display": "muhafız, koruma",
        "tr_correct_meanings": [
            "muhafız",
            "koruma"
        ]
    },
    {
        "id": "924",
        "en": "only",
        "tr_display": "bir tek",
        "tr_correct_meanings": [
            "bir tek"
        ]
    },
    {
        "id": "925",
        "en": "second",
        "tr_display": "saniye",
        "tr_correct_meanings": [
            "saniye"
        ]
    },
    {
        "id": "926",
        "en": "second",
        "tr_display": "ikinci",
        "tr_correct_meanings": [
            "ikinci"
        ]
    },
    {
        "id": "927",
        "en": "tooth",
        "tr_display": "diş",
        "tr_correct_meanings": [
            "diş"
        ]
    },
    {
        "id": "928",
        "en": "toothache",
        "tr_display": "diş ağrısı",
        "tr_correct_meanings": [
            "diş ağrısı"
        ]
    },
    {
        "id": "929",
        "en": "toothbrush",
        "tr_display": "diş fırçası",
        "tr_correct_meanings": [
            "diş fırçası"
        ]
    },
    {
        "id": "930",
        "en": "toothpaste",
        "tr_display": "diş macunu",
        "tr_correct_meanings": [
            "diş macunu"
        ]
    },
    {
        "id": "931",
        "en": "sometimes",
        "tr_display": "bazen",
        "tr_correct_meanings": [
            "bazen"
        ]
    },
    {
        "id": "932",
        "en": "sunset",
        "tr_display": "gün batımı",
        "tr_correct_meanings": [
            "gün batımı"
        ]
    },
    {
        "id": "933",
        "en": "tornado",
        "tr_display": "kasırga",
        "tr_correct_meanings": [
            "kasırga"
        ]
    },
    {
        "id": "934",
        "en": "vegetable",
        "tr_display": "sebze",
        "tr_correct_meanings": [
            "sebze"
        ]
    },
    {
        "id": "935",
        "en": "tomb",
        "tr_display": "mezar",
        "tr_correct_meanings": [
            "mezar"
        ]
    },
    {
        "id": "936",
        "en": "cemetery",
        "tr_display": "mezarlık",
        "tr_correct_meanings": [
            "mezarlık"
        ]
    },
    {
        "id": "937",
        "en": "personal",
        "tr_display": "kişiye özel",
        "tr_correct_meanings": [
            "kişiye özel"
        ]
    },
    {
        "id": "938",
        "en": "petition",
        "tr_display": "dilekçe, talep, rica",
        "tr_correct_meanings": [
            "dilekçe",
            "talep",
            "rica"
        ]
    },
    {
        "id": "939",
        "en": "admit",
        "tr_display": "kabul etmek",
        "tr_correct_meanings": [
            "kabul etmek"
        ]
    },
    {
        "id": "940",
        "en": "permit",
        "tr_display": "izin vermek",
        "tr_correct_meanings": [
            "izin vermek"
        ]
    },
    {
        "id": "941",
        "en": "population",
        "tr_display": "nüfus",
        "tr_correct_meanings": [
            "nüfus"
        ]
    },
    {
        "id": "942",
        "en": "press",
        "tr_display": "basın",
        "tr_correct_meanings": [
            "basın"
        ]
    },
    {
        "id": "943",
        "en": "prison",
        "tr_display": "hapisane",
        "tr_correct_meanings": [
            "hapisane"
        ]
    },
    {
        "id": "944",
        "en": "prisoner",
        "tr_display": "tutuklu",
        "tr_correct_meanings": [
            "tutuklu"
        ]
    },
    {
        "id": "945",
        "en": "insignificant",
        "tr_display": "önemsiz",
        "tr_correct_meanings": [
            "önemsiz"
        ]
    },
    {
        "id": "946",
        "en": "lighter",
        "tr_display": "çakmak",
        "tr_correct_meanings": [
            "çakmak"
        ]
    },
    {
        "id": "947",
        "en": "madman",
        "tr_display": "deli",
        "tr_correct_meanings": [
            "deli"
        ]
    },
    {
        "id": "948",
        "en": "madhouse",
        "tr_display": "tımarhane",
        "tr_correct_meanings": [
            "tımarhane"
        ]
    },
    {
        "id": "949",
        "en": "excited",
        "tr_display": "heyecanlı",
        "tr_correct_meanings": [
            "heyecanlı"
        ]
    },
    {
        "id": "950",
        "en": "median",
        "tr_display": "orta",
        "tr_correct_meanings": [
            "orta"
        ]
    },
    {
        "id": "951",
        "en": "medium",
        "tr_display": "orta",
        "tr_correct_meanings": [
            "orta"
        ]
    },
    {
        "id": "952",
        "en": "average",
        "tr_display": "ortalama",
        "tr_correct_meanings": [
            "ortalama"
        ]
    },
    {
        "id": "953",
        "en": "member",
        "tr_display": "üye",
        "tr_correct_meanings": [
            "üye"
        ]
    },
    {
        "id": "954",
        "en": "law",
        "tr_display": "yasa",
        "tr_correct_meanings": [
            "yasa"
        ]
    },
    {
        "id": "955",
        "en": "law school",
        "tr_display": "hukuk fakültesi",
        "tr_correct_meanings": [
            "hukuk fakültesi"
        ]
    },
    {
        "id": "956",
        "en": "lawful",
        "tr_display": "yasal",
        "tr_correct_meanings": [
            "yasal"
        ]
    },
    {
        "id": "957",
        "en": "lawless",
        "tr_display": "kanunsuz",
        "tr_correct_meanings": [
            "kanunsuz"
        ]
    },
    {
        "id": "958",
        "en": "lawlessness",
        "tr_display": "kanunsuzluk",
        "tr_correct_meanings": [
            "kanunsuzluk"
        ]
    },
    {
        "id": "959",
        "en": "crime",
        "tr_display": "suç",
        "tr_correct_meanings": [
            "suç"
        ]
    },
    {
        "id": "960",
        "en": "leader",
        "tr_display": "lider, rehber",
        "tr_correct_meanings": [
            "lider",
            "rehber"
        ]
    },
    {
        "id": "961",
        "en": "hostel",
        "tr_display": "pansiyon, öğrenci yurdu",
        "tr_correct_meanings": [
            "pansiyon",
            "öğrenci yurdu"
        ]
    },
    {
        "id": "962",
        "en": "hip",
        "tr_display": "kalça",
        "tr_correct_meanings": [
            "kalça"
        ]
    },
    {
        "id": "963",
        "en": "possible",
        "tr_display": "mümkün",
        "tr_correct_meanings": [
            "mümkün"
        ]
    },
    {
        "id": "964",
        "en": "decision",
        "tr_display": "karar",
        "tr_correct_meanings": [
            "karar"
        ]
    },
    {
        "id": "965",
        "en": "include",
        "tr_display": "içermek, kapsamak",
        "tr_correct_meanings": [
            "içermek",
            "kapsamak"
        ]
    },
    {
        "id": "966",
        "en": "attitude",
        "tr_display": "tavır, tutum, davranış",
        "tr_correct_meanings": [
            "tavır",
            "tutum",
            "davranış"
        ]
    },
    {
        "id": "967",
        "en": "common",
        "tr_display": "ortak",
        "tr_correct_meanings": [
            "ortak"
        ]
    },
    {
        "id": "968",
        "en": "weight",
        "tr_display": "ağırlık, yük",
        "tr_correct_meanings": [
            "ağırlık",
            "yük"
        ]
    },
    {
        "id": "969",
        "en": "balance",
        "tr_display": "denge",
        "tr_correct_meanings": [
            "denge"
        ]
    },
    {
        "id": "970",
        "en": "meet",
        "tr_display": "tanışmak, buluşmak",
        "tr_correct_meanings": [
            "tanışmak",
            "buluşmak"
        ]
    },
    {
        "id": "971",
        "en": "meeting",
        "tr_display": "toplantı",
        "tr_correct_meanings": [
            "toplantı"
        ]
    },
    {
        "id": "972",
        "en": "busy",
        "tr_display": "meşgül",
        "tr_correct_meanings": [
            "meşgül"
        ]
    },
    {
        "id": "973",
        "en": "available",
        "tr_display": "uygun",
        "tr_correct_meanings": [
            "uygun"
        ]
    },
    {
        "id": "974",
        "en": "calculator",
        "tr_display": "hesap makinesi",
        "tr_correct_meanings": [
            "hesap makinesi"
        ]
    },
    {
        "id": "975",
        "en": "discuss",
        "tr_display": "tartışmak",
        "tr_correct_meanings": [
            "tartışmak"
        ]
    },
    {
        "id": "976",
        "en": "argue",
        "tr_display": "tartışmak",
        "tr_correct_meanings": [
            "tartışmak"
        ]
    },
    {
        "id": "977",
        "en": "join",
        "tr_display": "katılmak",
        "tr_correct_meanings": [
            "katılmak"
        ]
    },
    {
        "id": "978",
        "en": "habit",
        "tr_display": "alışkanlık",
        "tr_correct_meanings": [
            "alışkanlık"
        ]
    },
    {
        "id": "979",
        "en": "dirt",
        "tr_display": "kir",
        "tr_correct_meanings": [
            "kir"
        ]
    },
    {
        "id": "980",
        "en": "clean",
        "tr_display": "temiz",
        "tr_correct_meanings": [
            "temiz"
        ]
    },
    {
        "id": "981",
        "en": "clear",
        "tr_display": "temizlikçi",
        "tr_correct_meanings": [
            "temizlikçi"
        ]
    },
    {
        "id": "982",
        "en": "ship",
        "tr_display": "gemi",
        "tr_correct_meanings": [
            "gemi"
        ]
    },
    {
        "id": "983",
        "en": "boat",
        "tr_display": "kayık",
        "tr_correct_meanings": [
            "kayık"
        ]
    },
    {
        "id": "984",
        "en": "deep",
        "tr_display": "derin",
        "tr_correct_meanings": [
            "derin"
        ]
    },
    {
        "id": "985",
        "en": "distance",
        "tr_display": "uzaklık, mesafe",
        "tr_correct_meanings": [
            "uzaklık",
            "mesafe"
        ]
    },
    {
        "id": "986",
        "en": "education",
        "tr_display": "eğitim",
        "tr_correct_meanings": [
            "eğitim"
        ]
    },
    {
        "id": "987",
        "en": "sibling",
        "tr_display": "kardeş",
        "tr_correct_meanings": [
            "kardeş"
        ]
    },
    {
        "id": "988",
        "en": "loser",
        "tr_display": "ezik, mağlup, kaybeden",
        "tr_correct_meanings": [
            "ezik",
            "mağlup",
            "kaybeden"
        ]
    },
    {
        "id": "989",
        "en": "amazing",
        "tr_display": "inanılmaz, şaşırtıcı, hayret verici",
        "tr_correct_meanings": [
            "inanılmaz",
            "şaşırtıcı",
            "hayret verici"
        ]
    },
    {
        "id": "990",
        "en": "awesome",
        "tr_display": "müthiş, dehşet verici",
        "tr_correct_meanings": [
            "müthiş",
            "dehşet verici"
        ]
    },
    {
        "id": "991",
        "en": "text",
        "tr_display": "metin, konu",
        "tr_correct_meanings": [
            "metin",
            "konu"
        ]
    },
    {
        "id": "992",
        "en": "divorce",
        "tr_display": "boşanma",
        "tr_correct_meanings": [
            "boşanma"
        ]
    },
    {
        "id": "993",
        "en": "fiance",
        "tr_display": "nişanlı",
        "tr_correct_meanings": [
            "nişanlı"
        ]
    },
    {
        "id": "994",
        "en": "widow",
        "tr_display": "dul, dul kadın",
        "tr_correct_meanings": [
            "dul",
            "dul kadın"
        ]
    },
    {
        "id": "995",
        "en": "salary",
        "tr_display": "maaş",
        "tr_correct_meanings": [
            "maaş"
        ]
    },
    {
        "id": "996",
        "en": "retired",
        "tr_display": "emekli",
        "tr_correct_meanings": [
            "emekli"
        ]
    },
    {
        "id": "997",
        "en": "great",
        "tr_display": "harika, mükemmel, büyük",
        "tr_correct_meanings": [
            "harika",
            "mükemmel",
            "büyük"
        ]
    },
    {
        "id": "998",
        "en": "forever",
        "tr_display": "ebediyen, daima",
        "tr_correct_meanings": [
            "ebediyen",
            "daima"
        ]
    },
    {
        "id": "999",
        "en": "last",
        "tr_display": "son",
        "tr_correct_meanings": [
            "son"
        ]
    },
    {
        "id": "1000",
        "en": "subway",
        "tr_display": "metro",
        "tr_correct_meanings": [
            "metro"
        ]
    }
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
        let loadedState;
        try {
            loadedState = JSON.parse(savedState);
        } catch (e) {
            // Eğer kayıt bozuksa (bir ihtimal), sil ve sıfırla.
            localStorage.removeItem('quizState');
            startNewRound(quizState.allWords);
            return;
        }
        
        // KONTROL: Kayıtlı kelime sayısı, mevcut ALL_WORDS_DATA listesinin 
        // kelime sayısıyla EŞİT DEĞİLSE, kaydı geçersiz say ve sıfırla.
        // Bu, 5 kelimeden 1000 kelimeye geçerkenki çakışmayı önler.
        if (!loadedState.quizWords || loadedState.quizWords.length !== quizState.allWords.length) {
            console.warn("Eski quiz verisi, yeni kelime listesiyle uyuşmuyor veya bozuk. Sıfırlanıyor.");
            localStorage.removeItem('quizState');
            startNewRound(quizState.allWords);
            return;
        }
        
        // Veri tutarlıysa, kaldığımız yerden devam et
        quizState = loadedState;
        
        // wordMap'i yeniden oluştur (Local Storage sadece veriyi kaydeder)
        quizState.wordMap = quizState.allWords.reduce((map, word) => {
            map[word.id] = word;
            return map;
        }, {});
        
    } else {
        // Kayıt yoksa, yeni bir tur başlat
        startNewRound(quizState.allWords);
    }
    
    // Uygulama başladıktan sonra ilk soruyu render et
    renderQuestion();
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



