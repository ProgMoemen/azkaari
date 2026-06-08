function showSection(sectionId) {
    document.querySelectorAll('.azkar').forEach(sec => {
        sec.style.display = 'none';
    });

    const target = document.getElementById(sectionId);
    if (target) target.style.display = 'block';
}

// منع refresh + التنقل بين الأقسام

document.getElementById('morn').onclick = (e) => {
    e.preventDefault();
    showSection('mor');
};
document.getElementById('work').onclick = (e) => {
    e.preventDefault();
    showSection('workSec');
};

document.getElementById('nig').onclick = (e) => {
    e.preventDefault();
    showSection('night');
};

document.getElementById('pray').onclick = (e) => {
    e.preventDefault();
    showSection('aPray');
};

document.getElementById('slp').onclick = (e) => {
    e.preventDefault();
    showSection('sleep');
};

document.getElementById('wkup').onclick = (e) => {
    e.preventDefault();
    showSection('wkupA');
};

document.getElementById('choosed').onclick = (e) => {
    e.preventDefault();
    showSection('choose');
};
document.getElementById('doaaC').onclick = (e) => {
    e.preventDefault();
    showSection('chooseDoaa');
};

// (اختياري) أول ما الصفحة تفتح يظهر الصبح
window.onload = () => {
    showSection('mor');
};
document.querySelectorAll('.btn').forEach(btn => {
    let count = parseInt(btn.innerText);

    btn.onclick = () => {
        if (count > 0) {
            count--;
            btn.innerText = count;
        }

        // لو وصل 0
        if (count === 0) {
            btn.disabled = true;
            btn.style.opacity = "0.5";
        }
    };
});