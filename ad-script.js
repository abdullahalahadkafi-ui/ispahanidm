const booksList = [
  {
    tag: "স্পেশাল অফার",
    title: "প্যারাডক্সিক্যাল সাজিদ",
    desc: "আরিফ আজাদের জনপ্রিয় বইটির ওপর বিশেষ ছাড় চলছে। এখনই অর্ডার করুন।",
    image: "ad_book(ps).webp",
    link: "https://rkmri.co/Se5RNyEeIM0S"
  },
  {
    tag: "জনপ্রিয় বই",
    title: "বেলা ফুরোবার আগে",
    desc: "জীবনকে নতুনভাবে সাজানোর সেরা বই। সংগ্রহ করতে নিচের বাটনে চাপুন।",
    image: "https://img.drz.lazcdn.com/static/bd/p/1831f90d142be1534dce16c3b79e9955.jpg_720x720q80.jpg_.webp",
    link: "https://rkmri.co/eAmN5m0520Ae/"
  },
  {
    tag: "বেস্ট সেলার",
    title: "একনজরে কুরআন",
    desc: "আকর্ষণীয় চাবির রিং ফ্রি! এক নজরে কুরআন নিলেই চাবির রিং পাচ্ছেন KEYRING কোড ব্যবহারে!",
    image: "https://wafilife-media-v2.wafilife.com/uploads/2025/02/%E0%A6%8F%E0%A6%95-%E0%A6%A8%E0%A6%9C%E0%A6%B0%E0%A7%87-%E0%A6%95%E0%A6%AD%E0%A6%BE%E0%A6%B0-250x361.jpg",
    link: "https://rkmri.co/lMpNeNoM2yyA"
  },
  {
    tag: "২০% ছাড়ে",
    title: "হাউ টু টক টু এনিওয়ান",
    desc: "সফলতার ৯২টি ট্রিকস (ইসলামে কথা বলা ও শোনার আদব কায়দা বইটি ফ্রি)",
    image: "https://rokbucket.rokomari.io/ProductNew20190903/260X372/How_to_talk_to_Anyone-Leil_Lowndes-092f0-217607.jpg",
    link: "https://rkmri.co/M5T303MAeIpe/"
  }
];

function closeAllAds() {
  document.getElementById('dynamic-slide-ad').classList.remove('show');
  document.getElementById('dynamic-popup-ad').classList.remove('show');
}

function showRandomAd() {
  closeAllAds();

  const randomIndex = Math.floor(Math.random() * booksList.length);
  const selectedBook = booksList[randomIndex];
  const adType = Math.random() < 0.5 ? 'slide' : 'popup';

  setTimeout(() => {
    if (adType === 'slide') {
      document.getElementById('slide-ad-tag').innerText = selectedBook.tag || "স্পেশাল অফার";
      document.getElementById('slide-ad-img').src = selectedBook.image;
      document.getElementById('slide-ad-title').innerText = selectedBook.title;
      document.getElementById('slide-ad-desc').innerText = selectedBook.desc;
      document.getElementById('slide-ad-link').href = selectedBook.link;
      document.getElementById('dynamic-slide-ad').classList.add('show');
    } else {
      document.getElementById('popup-ad-tag').innerText = selectedBook.tag || "জনপ্রিয় বই";
      document.getElementById('popup-ad-img').src = selectedBook.image;
      document.getElementById('popup-ad-title').innerText = selectedBook.title;
      document.getElementById('popup-ad-desc').innerText = selectedBook.desc;
      document.getElementById('popup-ad-link').href = selectedBook.link;
      document.getElementById('dynamic-popup-ad').classList.add('show');
    }
  }, 300);
}

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    showRandomAd();
  }, 2000);

  setInterval(() => {
    showRandomAd();
  }, 60000); 
});