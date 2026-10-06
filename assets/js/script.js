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

function updateAuthUI(user) {
  const authContainer = document.getElementById('auth-button-container');
  
  if (user && user.profilePic) {
    authContainer.innerHTML = `
      <div class="user-profile-menu">
        <img src="${user.profilePic}" alt="Profile" class="rounded-full w-10 h-10 border-2 border-green-500 cursor-pointer" id="profile-img">
        <span class="text-sm font-semibold">${user.name}</span>
      </div>
    `;
  } else {
    authContainer.innerHTML = `<a href="/login" class="bg-green-600 color-white px-4 py-2 rounded">লগইন করুন</a>`;
  }
}


function loadVisitorCount() {
  const countElement = document.getElementById('visitorCount');
  if (!countElement) return;
  fetch('https://api.counterapi.dev/v1/ispahanidm_site/visits/up')
    .then(res => {
      if (!res.ok) throw new Error('Network error');
      return res.json();
    })
    .then(data => {
      countElement.innerText = data.count.toLocaleString('bn-BD');
    })
    .catch(err => {
      console.error('Counter Error:', err);
      countElement.innerText = '১+'; 
    });
}

document.addEventListener('DOMContentLoaded', loadVisitorCount);

