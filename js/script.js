const speaker = [
  {
    id: 1,
    speakerName: 'Yochai Benkler',
    speakerImage: 'user1.png',
    speakerJob: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    spekaerSpeach: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    id: 3,
    speakerName: 'SohYeong Noh',
    speakerImage: 'user3.png',
    speakerJob: 'Director of Art Centre Nabi and a board member of CC Korea',
    spekaerSpeach: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
  },
  {
    id: 5,
    speakerName: 'Lila tretikov',
    speakerImage: 'user5.png',
    speakerJob: 'Executive Director of the Wikimedia Foundation',
    spekaerSpeach: 'Lila Tretikov is the Executive of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languag-es and used by nearly half a billion people around the world every month.',
  },
  {
    id: 2,
    speakerName: 'Kilnam Chon',
    speakerImage: 'user2.png',
    speakerJob: '',
    spekaerSpeach: 'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012. he was inducted into the inaugural class of the Internet Society’s (ISOC) Internet Hall of Fame',
  },
  {
    id: 4,
    speakerName: 'Julia Leda',
    speakerImage: 'user4.png',
    speakerJob: 'President of Young Pirates of Europe',
    spekaerSpeach: 'European ingetration, political democracy and participation of youth through online as her major condern, Reda’s report outlining potential changes to EU copyright law was approved by the Parliament in July',
  },
  {
    id: 6,
    speakerName: 'Ryan Merkley',
    speakerImage: 'user6.png',
    speakerJob: 'CEO of Creativve Commons, ex COO of the Mozilla Foundation',
    spekaerSpeach: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open-source move-ment',
  },
];

const speakerContainer = document.querySelector('.speaker_grp1');
let speakerHTML = '';

speaker.forEach((data) => {
  speakerHTML += `
            
              <div class="speaker">
                <img src="./image/${data.speakerImage}" alt="">
                <div class="speaker_intro">
                  <div class="user_title">
                    <h1>${data.speakerName}</h1>
                    <p>
                      ${data.speakerJob}
                    </p>
                    <span></span>
                  </div>
                  <p>
                    ${data.spekaerSpeach}
                  </p>
                </div>
              </div>
            
  `;
});

speakerContainer.innerHTML = speakerHTML;

const showbtn = document.querySelector('.activeNav');
const hidebtn = document.querySelector('.nav');

const x = document.getElementById('menubar');
const show = () => {
  x.classList = 'activeNav';
};

const hide = () => {
  x.classList = 'nav';
};

showbtn.addEventListener('click', show);
hidebtn.addEventListener('click', hide);