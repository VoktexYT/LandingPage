function handleBetaAccess() {
    setTimeout(() => {
        const page1 = document.querySelector('#page1');
        const page2 = document.querySelector('#page2');
        page1.style.transition = '500ms';
        page1.style.opacity = '0';

        setTimeout(() => {
            page1.style.display = "none";
            page2.style.display = "block";
        }, 600)

    }, 400);

    // Google Tag
    gtag('event', 'beta_click', {
        'event_category': 'CTA',
        'event_label': 'Access Beta Button',
        'value': 1
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // Add text contents
    document.querySelector("#saasName").innerHTML = saasData.name;
    document.querySelector("#saasDesc").innerHTML = saasData.desc;
    document.querySelector("#saasAuthor").innerHTML = saasData.author;
    document.querySelector("#saasYear").innerHTML = saasData.year;
    
    // Add animations
    const container = document.querySelector('.container');
    container.style.opacity = '0';
    container.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        container.style.transition = 'all 0.8s ease';
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
    }, 100);
});

function disableForm() {
    document.querySelector('#sendFormBtn').disabled = true;
}