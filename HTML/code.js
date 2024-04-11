const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  let searchQuery = document.querySelector('#search-query').value;
  
  searchQuery = searchQuery.toLowerCase();
  switch (searchQuery) {
    case 'jujutsu kaisen':
    case 'jujutsu':
    case 'sukuna':
    case 'gojo':
    case 'itadori':
    case 'yuji':
    case 'fushiguro':
    case 'megumi':
    case 'nanami':
    case 'kugisaki':
    case 'nobara':
    case 'jjk':
      window.location.href = 'Pages/jujutsukaisen.html';
    break;

    case 'one piece':
    case 'luffy':
      window.location.href = 'Pages/onepiece.html';
    break;

    case 'mha':
    case 'my hero academia':
    case 'deku':
    case 'bakugo':
    case 'shoto':
    case 'all might':
    case 'hawks':
    case 'overhaul':
    case 'boku no hero academia':
      window.location.href = 'Pages/mha.html';
    break;

    case 'demon slayer':
    case 'tanjiro':
    case 'inosuke':
    case 'nesuko':
    case 'zenitsu':
    case 'slayer':
      window.location.href = 'Pages/demonslayer.html';
    break;

    case 'snk':
    case 'l\'attaque des titans':
    case 'attaque des titans':
    case 'attaque titans':
    case 'eren':
    case 'mikasa':
    case 'levi':
    case 'armin':
    case 'titans':
      window.location.href = 'Pages/snk.html';
    break;

    case 'hunter x hunter':
    case 'hunterxhunter':
    case 'gon':
    case 'hunter':
      window.location.href = 'Pages/hunterxhunter.html';
    break;

    case 'naruto':
    case 'sasuke':
      window.location.href = 'Pages/naruto.html';
    break;

    case 'dragon ball super':
    case 'dragon ball':
    case 'dragon':
    case 'son goku':
    case 'goku':
    case 'vegeta':
      window.location.href = 'Pages/dragonballsuper.html';
    break;

    case 'death note':
    case 'L':
    case 'light':
    case 'ryuk':
      window.location.href = 'Pages/deathnote.html';
    break;

    case 'berserk':
      window.location.href = 'Pages/berserk.html';
    break;

    case 'bleach':
    case 'ichigo':
    case 'rukia':
      window.location.href = 'Pages/bleach.html';
    break;

    case 'gintama':
    case 'gintoki':
      window.location.href = 'Pages/gintama.html';
    break;

    case 'spy x family':
    case 'spy':
    case 'spyxfamily':
    case 'loid':
    case 'anya':
    case 'yor':
      window.location.href = 'Pages/spyxfamily.html';
    break;

    case 'jojo\'s bizarre adventure':
    case 'jojo':
      window.location.href = 'Pages/jojo.html';
    break;

    case 'boku no hero academia':
      window.location.href = 'Pages/kurokosbasket.html';
    break;

    case 'dr stone':
    case 'senku':
      window.location.href = 'Pages/drstone.html';
    break;

    case 'tokyo ghoul':
    case 'ghoul':
    case 'kaneki':
      window.location.href = 'Pages/tokyoghoul.html';
    break;

    case 'assassination classroom':
    case 'assassination':
    case 'nagisa':
    case 'karma':
    case 'koro sensei':
    case 'karasuma':
      window.location.href = 'Pages/assassinationclassroom.html';
    break;

    case 'seven deadly sins':
    case 'seven deadly':
    case 'seven':
    case 'ban':
    case 'meliodas':
      window.location.href = 'Pages/sevendeadlysins.html';
    break;

    case 'yu gi oh':
    case 'yu-gi-oh!':
    case 'yugi':
      window.location.href = 'Pages/yugioh.html';
    break;


    default:
      window.open('https://animenewsnetwork.com');
  }
  window.location.href = targetUrl;
});