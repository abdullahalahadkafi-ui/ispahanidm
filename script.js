       function openSidebar() {
    document.getElementById('mobileSidebar').classList.add('active');
    document.getElementById('sideOverlay').classList.add('active');
}

function closeSidebar() {
    document.getElementById('mobileSidebar').classList.remove('active');
    document.getElementById('sideOverlay').classList.remove('active');
}

function toggleMSub(id, element) {
    const sub = document.getElementById(id);
    element.classList.toggle('active');
    sub.classList.toggle('open'); 
}




// Front-end Login Button Switch Logic
function updateAuthUI(user) {
  const authContainer = document.getElementById('auth-button-container');
  
  if (user && user.profilePic) {
    // Replace Login Button with Profile Image
    authContainer.innerHTML = `
      <div class="user-profile-menu">
        <img src="${user.profilePic}" alt="Profile" class="rounded-full w-10 h-10 border-2 border-green-500 cursor-pointer" id="profile-img">
        <span class="text-sm font-semibold">${user.name}</span>
      </div>
    `;
  } else {
    // Show Normal Login Button
    authContainer.innerHTML = `<a href="/login" class="bg-green-600 color-white px-4 py-2 rounded">লগইন করুন</a>`;
  }
}


// ভিজিটর গণনা করার আধুনিক API
function loadVisitorCount() {
  const countElement = document.getElementById('visitorCount');
  if (!countElement) return;

  // আপনার ওয়েবসাইটের নাম দিয়ে কাউন্ট কল করা
  fetch('https://api.counterapi.dev/v1/idmbookshop/visits/up')
    .then(response => response.json())
    .then(data => {
      // ভিজিটর সংখ্যা বাংলায় সুন্দর করে দেখানো
      countElement.innerText = data.count.toLocaleString('bn-BD');
    })
    .catch(() => {
      countElement.innerText = '১,২০০+'; // ব্যাকআপ ডাটা
    });
}

document.addEventListener('DOMContentLoaded', loadVisitorCount);