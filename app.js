(function(){
    const customerImage = document.querySelector('#customer-img')
    const customerName = document.querySelector('#customer-name')
    const customerText = document.querySelector('#customer-text')

    const btn = document.querySelectorAll('.btn')
    let index = 0
    const customers = []

    function Customer(img, name, text){
        this.img = img
        this.name = name
        this.text = text
    }

    function createCustomer(img, name, text){
        let Img = `./img/${img}.jpg`
        let customer = new Customer(Img, name, text)

        customers.push(customer)
    }

    createCustomer(0,'Elon Musk', 'Elon Reeve Musk EE-lon; born June 28, 1971) is a business magnate and investor. He is the founder, CEO and chief engineer of SpaceX; angel investor, CEO and product architect of Tesla, Inc.; owner and CEO of Twitter, Inc.; founder of the Boring Company; co-founder of Neuralink and OpenAI; and president of the philanthropic Musk Foundation. Musk is the second-wealthiest person in the world, according to both the Bloomberg Billionaires Index and Forbes s Real Time Billionaires list as of May 2023 primarily from his ownership stakes in Tesla and SpaceX, with an estimated net worth of around $167 billion according to the Bloomberg and $176.2 billion according to Forbes.')
    
    createCustomer(1,'Dwayne Johnson', 'Dwayne Douglas Johnson (born May 2, 1972), is an American actor, film producer, and former professional wrestler known by ring name The Rock.[3] Widely regarded as one of the greatest professional wrestlers of all time,[6][7] he was integral to the development and success of the World Wrestling Federation (WWF, now WWE) during the Attitude Era, an industry boom period in the late 1990s and early 2000s. Johnson wrestled for the WWF for eight years prior to pursuing an acting career. His films have grossed over $3.5 billion in North America and over $10.5 billion worldwide,[8] making him one of the world"s highest-grossing and highest-paid actors')
    
    createCustomer(2,'Bill Gates',' William Henry Gates III (born October 28, 1955) is an American business magnate, investor, and philanthropist. He is best known for co-founding software giant Microsoft, along with his late childhood friend Paul Allen.[2][3] During his career at Microsoft, Gates held the positions of chairman, chief executive officer (CEO), president and chief software architect, while also being its largest individual shareholder until May 2014.[4] He was a major entrepreneur of the microcomputer revolution of the 1970s and 1980s. Gates was born and raised in Seattle. In 1975, he and Allen founded Microsoft in Albuquerque, New Mexico. It became the worlds largest personal computer software company.[5][a] Gates led the company as chairman and CEO until stepping down as CEO in January 2000, succeeded by Steve Ballmer, but he remained chairman of the board of directors and became chief software architect.[8] During the late 1990s, he was criticized for his business tactics, which have been considered anti-competitive' )
    
    createCustomer(3,'Cristiano Ronaldo', 'Cristiano Ronaldo dos Santos Aveiro GOIH ComM (Portuguese pronunciation: [kɾiʃˈtjɐnu ʁɔˈnaldu]; born 5 February 1985) is a Portuguese professional footballer who plays as a forward for and captains both Saudi Professional League club Al Nassr and the Portugal national team. Widely regarded as one of the greatest players of all time, Ronaldo has won five Ballon dOr awards[note 3] and four European Golden Shoes, the most by a European player. He has won 32 trophies in his career, including seven league titles, five UEFA Champions Leagues, the UEFA European Championship and the UEFA Nations League. Ronaldo holds the records for most appearances (183), goals (140), and assists (42) in the Champions League, goals in the European Championship (14), international goals (122), and international appearances (198). He is one of the few players to have made over 1,100 professional career appearances, and has scored over 800 official senior career goals for club and country. He is the only player to score in five different FIFA World Cup tournaments')
    
    createCustomer(4,'Lionel Andrés Messi', 'Lionel Andrés Messi[note 1] (Spanish pronunciation: [ljoˈnel anˈdɾes ˈmesi] (listen); born 24 June 1987), also known as Leo Messi, is an Argentine professional footballer who plays as a forward for Ligue 1 club Paris Saint-Germain and captains the Argentina national team. Widely regarded as one of the greatest players of all time, Messi has won a record seven Ballon dOr awards[note 2] and a record six European Golden Shoes, and in 2020 he was named to the Ballon dOr Dream Team. Until leaving the club in 2021, he had spent his entire professional career with Barcelona, where he won a club-record 34 trophies, including ten La Liga titles, seven Copa del Rey titles and the UEFA Champions League four times.[note 3] With his country, he won the 2021 Copa América and the 2022 FIFA World Cup. A prolific goalscorer and creative playmaker, Messi holds the records for most goals in La Liga (474), most hat-tricks in La Liga (36) and the UEFA Champions League (eight), and most assists in La Liga (192) and the Copa América (17). He also has the most international goals by a South American male (102). Messi has scored over 800 senior career goals for club and country, and has the most goals by a player for a single club (672).')
    
    btn.forEach(function(button){
        button.addEventListener('click', function(e){
            if(e.target.parentElement.classList.contains('prevBtn')){
                if(index === 0){
                    index = customers.length
                }
                index --
                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text
            }

            if(e.target.parentElement.classList.contains('nextBtn')){
                index++
                if(index === customers.length){
                    index = 0
                }
                
                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text
            }
        })
    })
    
})(); 