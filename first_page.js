window.onload = function (e) {

    const sections = [
        {
            title: "Linkedin",
            image: ["assets/img/main-banner11.jpg", "assets/img/main-banner22.jpg", "assets/img/main-banner33.jpg", "assets/img/man.png", "assets/img/main-banner1.jpg", "assets/img/main-banner2.jpg"],
            description: "Want to see my profile, Visit my Linkedin page.",
            url: "https://www.linkedin.com/in/amit-timalsina-0699401aa/",
            button: "enter",
            class: "",
            target: "_blank"
        },
        {
            title: "Incubate-Nepal",
            image: ["assets/showreel1.jpg", "assets/showreel2.jpg", "assets/showreel3.jpg", "assets/showreel4.jpg", "assets/showreel5.jpg", "assets/showreel6.jpg"],
            description: "A quick one min Introduction about myself for Incubate-Nepal. <br> Incase if you don't understand. Hello and Namaste, my name is Amit timalsina. I am currently seeking for admission in grade 12. Apart from academics, I am currently learning Deep learning from Andrew Ng and Cyber security from experts of IBM in coursera.  

I have been in love with computer since my freshman year. Using it regularly for researching and learning new skills related to computer helped me find my passion in AI which I want to use in Cybersecurity. Thanks to my habit of sustained learning, which not only made me learn Front-end web development, Graphics Designing, C++ with OOP, Python, and now Deep Learning and Cybersecurity but also do lot of projects. Utilizing these skills, I am currently employed as an Information technology specialist in a company. 

Andrew Ng often says, “AI is the new electricity.” He believes that AI has the potential to bring the industrial revolution in the near future that electricity brought 100 years back and I believe that “Cybersecurity is the field that requires most use of AI in order to use AI in other fields as every machine is getting computerized and I assure all have certain vulnerabilities”. 

I wish to nourish myself at Incubate-Nepal with your renowned mentors and research and innovate in the field of AI and Cybersecurity. ",
            url: "#",
            button: "watch",
            class: "video",
            target: "_self"
        },
    ];

    const social = [{
            name: "Linkedin",
            icon: "https://www.rafaelalucas.com/assets/linkedin.svg",
            url: "https://www.linkedin.com/in/amit-timalsina-0699401aa/",
        },
        {
            name: "Github",
            icon: "github.svg",
            url: "https://github.com/amit076/",
        },

    ];

    const documents = [
        {
            name: "send email",
            icon: "mail.svg",
            url: "mailto: amittimalsina14@gmail.com",
        },
    ];
    const intro = document.querySelector('.intro'),
        socialItems = document.querySelector('.social');


    // Add the Intro Sections
    sections.forEach(function (el) {
        const randomImage = Math.floor(Math.random() * el.image.length);
        const template = `
        <a class="introItem ${el.class}" href="${el.url}" target="${el.target}" >
            <figure class="introItem__image">
                    <img src="${el.image[randomImage]}" alt="">
            </figure>
            <div class="introItem__content">
                <h2 class="introItem__title">${el.title}</h2>
                <p class="introItem__text">${el.description}</p>
                <div class="introItem__button"><p>${el.button}</p><span></span></div>
            </div>
        </a>
        `;

        intro.insertAdjacentHTML("beforeend", template);

    })

    //Animate Intro Section on Hover
    const introItem = document.querySelectorAll('.introItem');
    introItem.forEach(function (el) {
        el.addEventListener("mouseover", animeIn);
        el.addEventListener("mouseleave", animeOut);
    })

    function animeIn(e) {
        introItem.forEach(function (el) {
            el.style.opacity = "0.5";
            el.style.transform = "scale(0.95)";
        });
        e.currentTarget.style.opacity = "1";
        e.currentTarget.style.transform = "scale(1)";
    };

    function animeOut() {
        introItem.forEach(function (el) {
            el.style.opacity = "1";
            el.style.transform = "scale(1)";
        });

    };


    // Add Social Media on footer

    social.forEach(function (el) {
        const template = ` 
        <a class="social__item" href="${el.url}" target="_blank" rel="noopener">
        <img class="social__icon icon" src="${el.icon}" alt="${el.name}">
        </a>
        `;

        socialItems.insertAdjacentHTML("beforeend", template);
    })

    documents.forEach(function (el) {
        const template = ` 
        <a class="documents__item" href="${el.url}" target="_blank" rel="noopener">
        <p class="documents__name">${el.name}</p>
        <img class="documents__icon icon" src="${el.icon}" alt="${el.name}">
        </a>
        `;

        document.querySelector('.documents').insertAdjacentHTML("beforeend", template);
    })

    // Make the wrapper 100vh on mobile
    if (window.innerWidth <= 899) {
        document.querySelector('#wrapper').style.height = window.innerHeight + "px";
    }


    //open Modal

    const btnVideo = document.querySelector('.video'),
        modalVideo = document.querySelector('.modal'),
        iconCloseVideo = document.querySelector('.modal__icon');

    btnVideo.addEventListener("click", openVideo);

    iconCloseVideo.addEventListener("click", closeVideo);


    function openVideo() {
        setTimeout(() => {
            modalVideo.classList.add('open');

        }, 300);

        body.style.overflow = "hidden";
    }

    function closeVideo() {
        modalVideo.classList.remove('open');
        body.style.overflow = "visible";
    };
    document.querySelector('.modal').style.height = window.innerHeight + "px";

};
