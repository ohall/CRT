/**
 * Created with JetBrains WebStorm.
 * User: oakley
 * Date: 8/4/13
 * Time: 4:13 PM
 * To change this template use File | Settings | File Templates.
 */

app.service('getRunPaths', getRunPaths);

function getRunPaths(){

    var runPaths = [
        {

            type: 'Individual',
            cities: [
                {
                    city: 'Austin',
                    runs: { 'indy': 'http://www.active.com/running-membership/austin-tx/city-running-tours---austin-personalized-running-tours-2017'}
                },
                {
                    city: 'Boston',
                    runs: { 'indy': 'http://www.active.com/cycling-membership/boston-ma/city-running-tours---boston-personalized-running-tours-2017'}
                },
                {
                    city: 'Chicago',
                    runs: { 'indy': 'http://www.active.com/cycling-membership/chicago-il/city-running-tours---chicago-personalized-running-tours-2017'}
                },
                {
                    city: 'Denver',
                    runs: {'indy': 'http://www.active.com/running-membership/denver-co/city-running-tours---denver-personalized-running-tours-2018'}
                },
                {
                    city: 'Minneapolis',
                    runs: {'indy': 'http://www.active.com/running-membership/minneapolis-mn/city-running-tours---minneapolis-personalized-running-tours-2017'}
                },
                {
                    city: 'New York',
                    runs: {'indy': 'http://www.active.com/running-membership/new-york-ny/city-running-tours---new-york-city-personalized-running-tours-2017'}
                },
                {
                    city: 'Philadelphia',
                    runs: {'indy': 'http://www.active.com/cycling-membership/philadelphia-pa/city-running-tours---philadelphia-personalized-running-tours-2017'}
                },
                {
                    city: 'Portland',
                    runs: {'indy': 'http://www.active.com/running-membership/portland-or/city-running-tours---portland-personalized-running-tours-2017'}
                },
                {

                    city: 'San Francisco',
                    runs: {'indy': 'http://www.active.com/cycling-membership/san-francisco-ca/city-running-tours---san-francisco-personalized-running-tours-2017'}
                },
                {
                    city: 'Seattle',
                    runs: {'indy': 'http://www.active.com/cycling-membership/seattle-wa/city-running-tours---seattle-personalized-running-tours-2017'}
                },
                {
                    city: 'Washington DC',
                    runs: {'indy': 'http://www.active.com/running-membership/washington-dc/city-running-tours---washington-dc-personalized-running-tours-2017'}
                }
            ]
        },
        {

            type: 'Group',
            cities: [
                {
                    city: 'Austin',
                    runs: [
                        {
                            name: 'Downtown Austin 5K Run',
                            url: 'https://register.racevine.com/events/austin-tx-tx/downtown-austin-k',
                            description: "Come run with us as we explore the landmarks and historical markers that make up Texas's Capital City. Austin is a relic of the Old West but the city has grown by leaps and bounds to become a beacon of technology and progressiveness in the South. We'll visit Lady Bird Lake, Austin's Capitol building, the Driskill Hotel and various other historical sites, while investigating Austin's new tech industry, green initiatives, and cutting edge architecture."
                        },
                        {
                            name: 'Austin Music 5K Run',
                            url: 'https://register.racevine.com/events/austin-tx/austin-music-k',
                            description: "Austin is The Music Capitol of the world so come explore the groove of the city's rich music history than with City Running Tours. We'll explore old haunts frequented by artists such as Stevie Ray Vaughn, Janis Joplin, Billie Holiday and cruise through an eclectic mix of old Country Honky Tonks, Chittlin' Circuit blues bars, grungy punk clubs, and expansive festival venues. Learn about the evolution of Austin music by 'rocking out' with City Running Tours."
                        },
                        {
                            name: 'UT 5K Run',
                            url: 'https://register.racevine.com/events/austin-tx/ut--k',
                            description: "As one of the largest and most prestigious public universities in the nation, UT-Austin campus boasts an extensive and diverse history dating back to 1883. Come along as we explore the historical roots of the campus while also illuminating some if its newest developments and achievements, all located deep in the heart of Austin, Texas. We will tour the original Forty Acres of the UT-Austin campus highlighting the UT Tower and Main Building, the prestigious McCombs School of Business, the famous Darrell K. Royal Stadium (home of the 2005 BCS National Champion UT Longhorns), the LBJ Presidential Library and School Public Affairs, and the hauntingly, beautiful Victorian-era Littlefield property."
                        },
                        {
                            name: 'Texas Beer 5K Run',
                            url: 'https://register.racevine.com/events/austin-tx-tx/texas-beer-k',
                            description: "Join us on a 3-mile run and learn about some of Austin's best bars, restaurants, and historical markers! PLUS, sample Austin's finest brews at the end of the route. A great time for a casual group of runners that want to participate in a fun social run!"
                        },
                        {
                            name: 'Black Star 10K Beer Run',
                            url: 'https://register.racevine.com/events/austin-tx/black-star-k',
                            description: "Join us on a 10K guided running tour through some of Austin's most historic and interesting neighborhoods. We begin in the vibrant downtown area, make our way into the '40 Acres' of the UT campus, carouse through historic Hyde Park and, end at the Black Star Co-op for complimentary beers and appetizers"
                        },
                        {
                            name: 'Scenic Parks 10K Run',
                            url: 'https://register.racevine.com/events/austin-k-tx/scenic-parks-k',
                            description: "Come explore the scenic side of South Austin on our Scenic Parks & Lake Tour. This running tour shows off the beautiful landscape around Lady Bird Lake that is merely minutes from Austin's downtown. We'll traverse Zilker and Disch parks, Barton Springs Pool, the Botanical Gardens, Stevie Ray Vaughn statue and the famous South Congress Bridge which is home to 1.5 million Mexican Free-tailed bats."
                        },
                        {
                            name: 'City Running Tours/PubCrawler Duathalon',
                            url: 'https://register.racevine.com/events/austin-tx/austin-s-drinking-duathlon-tour-',
                            description: "City Running Tours and PubCrawler have joined forces to provide Austin's first Drinking Duathlon! Explore Austin's downtown by taking a 5k tour through the heart of the downtown, and then jump on the famous PubCrawler to enjoy a refreshing full keg for your journey back."
                        }
                    ]
                },
                {
                    city: 'Boston',
                    runs: [
                        {
                            name: 'Cambridge/MIT 5K Run',
                            url: 'https://register.racevine.com/events/boston-ma/city-running-tours---cambridge-mit-k-running-tour',
                            description: "Along this run your City Running Tours guide will bring you through Boston's Public Garden, up Charles Street and over the Longfellow Bridge. Enjoy a run along Memorial Drive on the Charles River taking in the Boston Skyline and parts of the MIT Campus. (offered alternating Wednesdays and Thursdays)"
                        },
                        {
                            name: 'Beacon Hill/Back Bay 5K Run',
                            url: 'https://register.racevine.com/events/boston--ma/city-running-tours---beacon-hill-back-bay-k-running-tour',
                            description: "This 3.2 mile route shows a side of Boston ranging from pop culture, American history, and the beautiful gas lit streets of Beacon Hill. A bottle of water will be provided for each participant.  (offered alternating Wednesdays and Thursdays)"
                        },
                        {
                            name: 'Seaport Beer Run',
                            url: 'https://register.racevine.com/events/boston-ma/city-running-tours---boston-seaport-beer-running-tour',
                            description: "Starting and finishing at the Boston Fish Pier near the Seaport Trade Center. Enjoy a 6.2 mile guided running tour at an easy pace through the historic sights in Boston including the Old North Church and the final resting place of beer Brewer and Patriot Samuel Adams. We will run to the TD Bank North Garden (home of the Bruins and Celtics) then back along the Boston Harbor to were we started. After the run, we will head down to the Harpoon Brewery for a tour and a beer! (offered every Saturday)"
                        },
                        {
                            name: 'North End 10K Run',
                            url: 'https://register.racevine.com/events/boston-ma/city-running-tours---north-end-group-run',
                            description: "This 6.2 mile route of Boston gives a unique look at the city from the site of the Boston Tea Part to the North End site of the Boston Molasses Disaster.  (offered alternating Sundays)"
                        },
                        {
                            name: 'Fenway to Copley 10K Run',
                            url: 'https://register.racevine.com/events/boston--ma/city-running-tours---fenway-to-copley-running-tour',
                            description: "This 6.2 mile route takes you through the Boston Common, Public Garden, The Commonwealth Ave Mall, and Fenway Park. (offered alternating Sundays)"
                        },
                        {
                            name: 'Back Bay/Beacon Hill 10K Run',
                            url: 'https://register.racevine.com/events/boston-ma/city-running-tours---back-bay-beacon-hill-running-tour',
                            description: "This 6.2 mile route shows a side of Boston ranging from pop culture, American history, and home runs.  (offered alternating Sundays)"
                        },
                        {
                            name: 'Scenic Parks 10K Run',
                            url: 'https://register.racevine.com/events/austin-k-tx/scenic-parks-k',
                            description: "This route gives a scenic overview of Boston an it's most well-known suburb, Cambridge MA. Starting off in the Back Bay and running over the Charles we go through the campus of MIT, one of the world's most famous research universities. We will then cross the Mass Ave bridge and head toward Fenway Park home of the Boston Red Sox. The run will conclude with a Run down Boylston St to the Boston Marathon finish line.  (offered alternating Sundays)"
                        },
                        {
                            name: 'Cambridge 10K Run',
                            url: 'https://register.racevine.com/events/boston-ma/city-running-tours---cambridge-running-tour',
                            description: ""
                        }
                    ]
                },
                {
                    city: 'Chicago',
                    runs: [
                        {
                            name: 'Grant Park 5k',
                            url: 'https://register.racevine.com/events/chicago-il/chicago-river-navy-pier-k',
                            description: "Grant Park has popular, well visited, landmarks such as Buckingham Fountain. It also has 'hidden gems' right out in the open. We'll take you past both the popular sights as well as those 'off the path.' All the while we'll share the surprising and unexpected history of how Grant Park came to be. The best part is running through Agora, (It's a trip), and taking in the skyline view from the John Logan statue.  (offered Sunday's and Thursday's)"
                        },
                        {
                            name: 'Chicago River Navy Pier 5k',
                            url: 'https://register.racevine.com/events/chicago-il/chicago-river-navy-pier-k',
                            description: "Your running tour includes very surprising, and unexpected, historical facts of the river you will be running alongside. We'll follow it to Chicago's # 1 tourist attraction, Navy Pier. We'll snap a few photos of you at famous landmarks along the way. You will experience a rural feel in an urban setting all while viewing the city from different vantage points.  (offered Tuesday's and Friday's)"
                        },
                        {
                            name: 'Chicago Tragic Events 5k',
                            url: 'https://register.racevine.com/events/chicago-il/chicago-tragic-events',
                            description: "Your tour includes surprising facts about 5 of Chicago's most tragic events. You will pass famous landmarks and incredible architecture as we point out the locations and share the history of these disasters. We'll take several photos of you including one with the iconic CHICAGO theater sign in the background.  (offered Wednesday's and Saturday's)"
                        }
                    ]
                },
                {
                    city: 'Denver',
                    runs: [
                        {
                            name: 'Downtown Denver Highlights Run',
                            url: 'https://register.racevine.com/events/denver-co/city-running-tours---downtown-denver-highlights',
                            description: " Our 4-mile Downtown Denver Highlights starts where Denver began: the site of the first settlements at the foot of the Rocky Mountains. This exciting run features key landmarks, hidden gems and art installations, and a photo stop on Denver's official Mile High elevation marker."
                        },
                        {
                            name: 'Downtown Sports Stadium Run',
                            url: 'https://register.racevine.com/events/denver-co/city-running-tours---denver-sports-stadiums',
                            description: "The 10k Denver Stadium Run circles all 3 professional sports stadiums in Downtown Denver. If a door happens to be unlocked, we'll run through until we get kicked out..."
                        }
                    ]
                },
                {
                    city: 'Minneapolis',
                    runs: [
                        {
                            name: '5K Cherry & Spoon Run',
                            url: 'https://register.racevine.com/events/minneapolis-mn/city-running-tours-minneapolis-k-cherry-spoon',
                            description: "Join us for a 3 mile guided running tour to the famous Cherry & Spoon sculpture in the Minneapolis Sculpture Garden. You will experience downtown Minneapolis, Nicollet Mall, a few of the many beautiful parks, the Downtown theatre district, and of course the Minneapolis Sculpture Gardens - home of the Cherry & Spoon! "
                        },
                        {
                            name: '5K Uptown & Lakes Run',
                            url: 'https://register.racevine.com/events/minneapolis-mn/city-running-tours-minneapolis-k-uptown-run',
                            description: "Join us for a 3 mile guided running tour around the famous Lakes of Minneapolis: Lake of the Isles and Lake Calhoun. You will also experience the heart of trendy Uptown and the beautiful park system & trails! A great scenic & urban run! "
                        },
                        {
                            name: '5K Beer Run!',
                            url: 'https://register.racevine.com/events/minneapolis-mn/city-running-tours-minneapolis-k-beer-run-',
                            description: "Join us for a 3 mile run and learn about Minneapolis’ best restaurants, pubs, and bars! PLUS, finish with samples and a Pint of local beer! A great time for a casual group of runners that want to participate in a fun run! "
                        }
                    ]
                },
                {
                    city: 'New York',
                    runs: [
                        {
                            name: "East Village Run",
                            url: "https://register.racevine.com/events/new-york-ny/east-village-running-tour",
                            description: "Trace the Rock N Roll roots of NYC through the East Village as we run by CBGBs, The Fillmore East and Tompkins Square Park. We'll also pass NYU and Cooper Union - two of Manhattan's oldest educational institutions - and McSorley's, the oldest ale house in the city."
                        },
                        {
                            name: 'West Village Run',
                            url: 'https://register.racevine.com/events/new-york-ny/west-village-running-tour',
                            description: "What do Bob Dylan, Ernest Hemingway, The Cosby Show and Carrie Bradshaw all have in common? They all have ties to Manhattan's West Village. Run down quiet, tree-lined streets and see theaters, comedy clubs, fine dining and possibly a celebrity sighting."
                        },
                        {
                            name: 'SOHO Run',
                            url: 'https://register.racevine.com/events/new-york-ny/soho-running-tour',
                            description: "Go beyond the shopping of SOHO to learn more about how the cast iron historic district got its start. Little Italy, Chinatown and Tribeca are on display here, as are the original American Express warehouse, the Western Union Building and the Ghostbusters HQ Firehouse."
                        },
                        {
                            name: 'Lower East Side Run',
                            url: 'https://register.racevine.com/events/new-york-ny/lower-east-side-running-tour',
                            description: "One of New York's most dynamic neighborhoods, and the first home to many of immigrants in NYC, the Lower East Side is still teeming with culture and history. This run covers SOHO, Little Italy, Chinatown, The Bowery and the small streets of the Lower East Side, some of which will have you feeling transported to a European town."
                        },
                        {
                            name: 'Upper Central Park Run',
                            url: 'https://register.racevine.com/events/new-york-ny/upper-central-park-running-tour',
                            description: "If you thought Manhattan was a flat island, think again. Make your way through the bulging bedrock that’s pushed its way up through the park ground where you’ll see the oldest building in Central Park, the regal Conservatory Gardens and the majestic Jacqueline Kennedy Onassis Reservoir. This is our 'off the beaten path' tour of Central Park."
                        },
                        {
                            name: 'Lower Central Park Run',
                            url: 'https://register.racevine.com/events/new-york-ny/lower-central-park-running-tour',
                            description: "Nature first, second, and third -- architecture after a while, was the motto of the Central Park architects. You’ll see all of Central Park’s beauty on display as you go through Strawberry Fields, The Mall, Bethesda Terrace, Belvedere Castle, The Great Lawn and The Central Park Zoo."
                        },
                        {
                            name: 'Bridge Run',
                            url: 'https://register.racevine.com/events/new-york-ny/bridge-running-tour',
                            description: "Our most popular group run, the Bridge Run takes you over two of Manhattans most majestic bridges: The Manhattan Bridge and the iconic Brooklyn Bridge. Along the way you’ll get a street view of Chinatown and one of the best views of lower Manhattan from the Brooklyn shore. Don’t forget your camera!"
                        },
                        {
                            name: 'Downtown Run',
                            url: 'https://register.racevine.com/events/new-york-ny/downtown-running-tour',
                            description: "Some of Manhattan’s most iconic landmarks are found on this tour, including the Charging Bull statue, Wall Street, The World Trade Center Memorial and The Brooklyn Bridge. Picking your way through the small streets of Downtown Manhattan, you'll see where the 'Sons of the Revolution' first met and the oldest City Hall building in the U.S."
                        },
                        {
                            name: 'Morningside Heights Run',
                            url: 'https://register.racevine.com/events/new-york-ny/morningside-heights-mount-morris-park-running-tour',
                            description: "From The Apollo Theater to Columbia University, Morningside Heights has sights and sounds that have to be experienced on foot. This tour covers the hustle and bustle of the city, the quiet escape of Grant's Tomb in Riverside Park, and the legendary diner used in the popular TV show, Seinfeld."
                        },
                        {
                            name: 'Park Slope Run',
                            url: 'https://register.racevine.com/events/brooklyn-ny/park-slope-running-tour',
                            description: "Park Slope is a beautiful neighborhood nestled in the heart of Brooklyn that offers tree-lined streets, top notch restaurants and Prospect Park, the surprisingly intricate park from the same engineers that designed Central Park. This run takes you from the Revolutionary War forward in history, past the original home of the Brooklyn Dodgers, and into modern day Brooklyn."

                        },
                        {
                            name: 'Brooklyn Brewery Run',
                            url: 'https://register.racevine.com/events/brooklyn-ny/brooklyn-brewery-running-tour',
                            description: "Running + Beer. What more needs to be said. Our longest running group run, this four mile course takes you through Williamsburg, Brooklyn’s ever-changing ‘hood, before dropping you off at the storied Brooklyn Brewery for an afternoon pint (included in your registration), and a free brewery tour provided by the BK Brewery staff."
                        },
                        {
                            name: 'Hamilton Heights Run',
                            url: 'http://register.racevine.com/events/new-york-ny/hamilton-heights-running-tour',
                            description: "Named after Alexander Hamilton, the neighborhood now known as Hamilton Heights once was sprawling farmland used as country estates for New York's well-to-do. Through its growth, Hamilton Heights became an epicenter for music and arts in New York, where Duke Ellington was the bandleader at the Cotton Club, and the Dance Theater of Harlem perfected its style."
                        },
                        {
                            name: 'Upper East Side Run',
                            url: 'http://register.racevine.com/events/new-york-ny/upper-east-side-running-tour',
                            description: "A neighborhood so nice, even the Mayor calls it home. The Upper East Side might not have the high profile of some of its counterparts, but a quick run up and down the East River (which isn't actually a river) and it's easy to see why so many Manhattanites love it. This run takes you by the Mayor's Mansion before running you by the magnificent museums of 5th Avenue."
                        },
                        {
                            name: 'Washington Heights Run',
                            url: 'http://register.racevine.com/events/new-york-ny/washington-heights-running-tour',
                            description: "Take the time to tour the Heights and you won't be disappointed. From the highest point in the city, to the banks of the Hudson River, you'll travel back through time to the Revolutionary War and forward again to modern day marvels such as the George Washington Bridge. You'll even get to see the site where Yankee Stadium first stood, and the location of Malcom X's last speech."
                        },
                        {
                            name: 'Chelsea/Gramercy Run',
                            url: 'http://register.racevine.com/events/new-york-ny/chelsea-gramercy-running-tour/',
                            description: "The secluded streets of Gramercy Park and Chelsea might have you feeling as though you've left Manhattan altogether. Surrounded by tree-lined streets and picturesque brownstones, you’ll eventually come up on one of Manhattan's newest parks, the Highline Park, an elevated walking park built on an historic elevated rail line."
                        },
                        {
                            name: 'Bohemian Beer Hall Run',
                            url: 'http://register.racevine.com/events/astoria-ny/bohemian-beer-hall-running-tour',
                            description: "Did you know that Queens is home to the largest Beer Hall in New York City? After going on this running tour, you'll know and experience all this and more. See Manhattan from a different view, explore the streets of Astoria, see the home of Steinway pianos and finish the running tour by enjoying the Beer Hall's finest pints on us!"
                        },
                        {
                            name: 'Cloisters Run',
                            url: 'https://register.racevine.com/events/new-york-city-ny/cloisters-running-tour',
                            description: "High above the Hudson, runners will find the most secluded section of Manhattan tucked away at the top of the island. A very intimate run through The Cloisters and Fort Tryon Park affords runners beautiful views of the city and of the Hudson River, no matter the time of day. The run then continues on through Inwood Hill Park to the top of Manhattan, before looping back around and visiting the oldest farmhouse in Manhattan."
                        },
                        {
                            name: 'Upper West Side Run',
                            url: 'http://register.racevine.com/events/new-york-ny/upper-west-side-running-tour',
                            description: "The Upper West Side is as much a state of mind as a place to live. A neighborhood in its truest sense, the Upper West Side running tour takes you through Riverside Park, rising above the waters of the Hudson, on a quiet run that is unlike any other part of the city. With a look in on The Dakota, the famous residence where John Lennon once lived, and grandness of Lincoln Center, experience the Manhattan suburb within the metropolis."
                        },
                        {
                            name: 'Times Square Run',
                            url: 'http://register.racevine.com/events/new-york-ny/times-square-running-tour',
                            description: "Perhaps no part of New York City is as well known as the legendary Times Square. Once home to the first newspapers of NYC, this small 10 block district is now home to the legendary New Year's Eve celebration and the most popular Broadway hits. On this run you'll also get treated to a trip through Grand Central Station and Rockefeller Center, before returning to the 'Great White Way' to learn more about the theaters and secrets of Times Square."
                        },
                        {
                            name: 'Roosevelt Island Run',
                            url: 'http://register.racevine.com/events/new-york-ny/roosevelt-island-running-tour',
                            description: "Some of the most intriguing history of New York City can be found on a small, two mile island floating in the strong currents of the East River. From its days under British occupation, Roosevelt Island has flourished and is now home to the beautiful new FDR Four Freedoms Park. A quick ride on the Roosevelt Island Tramway - the only in the city - takes you high about the city of Manhattan before touching down for the start of this four mile run."
                        },
                        {
                            name: 'Brooklyn Heights Run',
                            url: 'http://register.racevine.com/events/brooklyn-ny/brooklyn-heights-running-tour',
                            description: "Manhattan's first 'suburb' was Brooklyn Heights. The majestic mansions still standing today give a glimpse of the exorbitant wealth of its first residents. Moving from the residential to the commercial, runners will make their way through the brand new Brooklyn Bridge State Park and DUMBO, with striking views of lower Manhattan. This run also makes a stop in the nearly hidden Vinegar Hill neighborhood, a true throwback to the early days of Brooklyn."
                        }
                    ]
                },
                {
                    city: 'Philadelphia',
                    runs: [
                        {
                            name: 'Liberty Bell 5K',
                            url: 'https://register.racevine.com/events/philadelphia-pa/city-running-tours---liberty-bell-k-',
                            description: "This quick and fun 5K group run through Philadelphia's historic Old City will have runners streaming past the Liberty Bell, through Washington Square, and on the cobblestones of Headhouse Square and historic Pine Street. We will run along the Delaware River front, pass America's oldest residential street and visit the new Race Street pier. The tour finishes by passing Christ Church burial ground and Benjamin Franklin's grave."
                        },
                        {
                            name: 'Historic Philly 10K',
                            url: 'http://register.racevine.com/events/philadelphia-pa/city-running-tours---historic-philadelphia-k',
                            description: "See the City of Brotherly Love with a 5.5 mile run through some of America's most historic neighborhoods. Our fun and knowledgeable guides will lead you past the Liberty Bell, Independence Park and through the streets of colonial Philadelphia. Visit America's oldest residential street, follow Ben Franklin's footsteps and pause a moment at several war memorials honoring Philadelphia's many veterans."
                        },
                        {
                            name: 'Run the Yards Beer 5K',
                            url: 'http://register.racevine.com/events/philadelphia-pa/city-running-tours---running-the-yards-k',
                            description: "Join City Running Tours and Yards Brewery for a 3 mile guided running tour plus a guided tour of Yards Brewery. Our fun and knowledgeable guides will lead you past Philly's founder's home site, a Continental Congress hangout and through the streets of colonial Philadelphia. We will run along the Delaware River front, pass America's oldest residential street and visit the new Race Street pier."
                        },
                        {
                            name: 'Rocky Steps/Art Museum 10K',
                            url: 'http://register.racevine.com/events/philadelphia-pa/city-running-tours---rocky-steps-art-museum-k',
                            description: "Our fun and knowledgeable guides will lead you on a 6 mile run through Philadelphia's Fairmount neighborhood as you pass the Rodin Museum, the future Barnes collection and the famed Philadelphia Museum of Art. Run to the top of the Rocky steps and get a spectacular view of the city. Catch a glimpse of rowers gliding down the Schuylkill River and enjoy one of Philadelphia's most popular running trails. You'll also have a chance to run through downtown Philadelphia's most popular restaurant and shopping neighborhood."
                        },
                        {
                            name: 'River to River 10K',
                            url: 'http://register.racevine.com/events/philadelphia-pa/city-running-tours---philadelphia-river-to-river-k',
                            description: "This casual-paced, 6 mile group run will take you along the shores of the Schuylkill River, through Center City and downtown, past the Chinese Friendship Gate in Chinatown, through Old City and Independence Park to the Delaware River and back. This is a great route to see the main sites of Philadelphia in one run."
                        },
                        {
                            name: 'South Philly/Italian Market 10K',
                            url: 'http://register.racevine.com/events/philadelphia-pa/city-running-tours---south-philly-italian-market-k-',
                            description: "Our fun and knowledgeable guides will take you on a 6 mile run through the streets of Philadelphia's financial district and downtown, past Philadelphia's most popular park and through the eclectic South Philadelphia neighborhood. You won't want to miss the active blocks of South Street. Hear more about Philadelphia's BYOB culture and learn about Philadelphia's cheese steak fame (and the rivalry) and visit the well-known Italian Market where Rocky trained."
                        }
                    ]
                },
                {
                    city: 'Portland',
                    runs: [
                        {
                            name: "Brew Pub Run",
                            url: "https://register.racevine.com/events/portland-or/city-running-tours---brew-pub-tour-",
                            description: "This run will highlight the abundance of breweries / brewpubs in the downtown area and pass other famous Portland attractions. We will start in the Pearl District, and run past 7 breweries and finish with a cold one courtesy of City Running Tours! Distance is about 5.5 miles."

                        },
                        {
                            name: "Coffee Roaster Run",
                            url: "https://register.racevine.com/events/portland-or/city-running-tours---coffee-roaster-tour-",
                            description: "Portland is an artisanal heaven, and home to over two dozen Third Wave Coffee Roasters within the city limits. Join City Running Tours and explore these local coffee aficionados who take their craft to a whole new level. We'll meet at a downtown coffee shop and run past seven micro-roasters, learning about who they are and what they do. We'll even stop mid-run for a tasting at the home of the Northwest Regional Brewer's Cup Champion. Your guide will point out Portland highlights along the way, and we will finish the run with a nice hot cuppa joe two blocks from where we started."
                        }
                    ]
                },
                {
                    city: 'San Francisco',
                    runs: [
                        {
                            name: 'Sea Lions of Pier 39 5K Run',
                            url: 'https://register.racevine.com/events/san-francisco-ca/-k-everyday-sea-lions-of-pier-',
                            description: "7 AM  every Monday"
                        },
                        {
                            name: 'Ballpark/Waterfront 5K Run',
                            url: 'https://register.racevine.com/events/san-francisco-ca/-k-everyday-ballpark-waterfront-',
                            description: "7 AM every Tuesday"
                        },
                        {
                            name: 'Union Square/Chinatown 5K Run',
                            url: 'https://register.racevine.com/events/san-francisco-ca/-k-everyday-union-square-and-chinatown-run',
                            description: "7 AM every Thursday"
                        },
                        {
                            name: 'Sourdough Bakery and Fishermans Wharf 5K Run',
                            url: 'https://register.racevine.com/events/san-francisco-ca/lands-end-trail-run-tour',
                            description: "7 AM every Friday"
                        },
                        {
                            name: 'Lands End Trail 5K Run ',
                            url: 'https://register.racevine.com/events/san-francisco-ca/lands-end-trail-run-tour',
                            description: "Weekends Only 9 AM"
                        },
                        {
                            name: 'Embarcadero 10K Run',
                            url: 'https://register.racevine.com/events/san-francisco-ca/san-francisco-embarcadero-run-tour',
                            description: "9 AM Weekends"
                        },
                        {
                            name: 'Alamo Square/Haight/Castro 10K',
                            url: 'https://register.racevine.com/events/san-francisco-ca/alamo-square-haight-castro-k-running-tour',
                            description: "9 AM Weekends"
                        },
                        {
                            name: 'Golden Gate Park 10K',
                            url: 'https://register.racevine.com/events/san-francisco-ca/golden-gate-park-k-run-tour',
                            description: "9 AM Weekends"
                        },
                        {
                            name: 'Golden Gate Bridge 10K Run',
                            url: 'https://register.racevine.com/events/san-francisco-ca/golden-gate-park-k-run-tour',
                            description: "9 AM Weekends"
                        },
                        {
                            name: 'Presidio Run',
                            url: 'https://register.racevine.com/events/san-francisco-ca/presidio-of-san-francisco-run-tour',
                            description: "9 AM Weekends"
                        },
                        {
                            name: 'Beer Run to Speakeasy 4 Mile Run',
                            url: 'https://register.racevine.com/events/san-francisco-ca/city-running-tours-san-francisco-beer-run-to-speakeasy',
                            description: "12 PM Weekends"
                        }

                    ]
                },
                {
                    city: 'Seattle',
                    runs: [
                        {
                            name: 'Seattle Beer 5K Run',
                            url: 'https://register.racevine.com/events/seattle--wa/seattle-k-beer-run',
                            description: "Journey to the Center of the Universe! Come experience the weird and wonderful and finish it off with a beer! This run begins at Fremont Brewery and along this route you'll see the 'Statue of Lenin', a magical chocolate factory, the sign post at the Center of the Universe, the Fremont Troll and MUCH more! Best of all we will end at the local Fremont Brewing Company where you are welcome to enjoy a delicious BEER. Leashed pets welcome."
                        },
                        {
                            name: 'Waterfront/Pioneer Square 5K Run',
                            url: 'https://register.racevine.com/events/seattle-wa/waterfront-pioneer-square-k',
                            description: "This 5 kilometer loop starts at the locally owned running store, Sound Sports, and hits up the greatest of downtown. See what makes the Central Library so special, crane your neck up to check out the tallest building in the Northwest, admire the giant statue outside the Seattle Art Museum, feel the history of Pioneer Square, see the original 'Skid Row' and stick some gum of your own on the gum wall."
                        },
                        {
                            name: 'Southlake Union/Space Needle 5K Run',
                            url: 'https://register.racevine.com/events/seattle-wa/southlake-union-space-needle-k-running-tour',
                            description: "This running tour begins and ends at the Southlake Union Starbucks. Along the way, we'll check out the scenic Southlake Union Park, Center for Wooden Boats, the Space Needle, the Bill and Melinda Gates Foundation and much more!"
                        },
                        {
                            name: 'Volunteer/Washington Park Urban Trail 10K Run',
                            url: 'https://register.racevine.com/events/seattle-wa/volunteer-and-washington-park-urban-trail-run-k-running-tour',
                            description: "This urban trail run is a loop that showcases some of the best of Seattle's amazing park systems. The route includes trails, paths and floating walkways highlighting the beauty of our diverse cityscape. We'll begin at the Seattle Asian Art Museum and finish at the Volunteer Park water tower with amazing 360 degree views of the city"
                        },
                        {
                            name: 'Space Needle to Pike Place Market 10K Run',
                            url: 'https://register.racevine.com/events/seattle-wa/space-needle-to-pike-place-market-k-running-tour',
                            description: "Coffee, parks, music and fish throwing- the scenes that make Seattle. This route will take us by the Space Needle and EMP, the sight where 'Grey's Anatomy' was shot and the surprisingly serene park built over the busy I-5 corridor. We'll loop up through Pike Place Market before returning to Tully's."
                        },
                        {
                            name: 'Pioneer Square 10K Run',
                            url: 'https://register.racevine.com/events/seattle-wa/pioneer-square-k-running-tour',
                            description: "This running tour departs from Sound Sports and explores the International District, Safeco and Century Link Stadiums, and the art, architecture and gardens that sprinkle Pioneer Square and the Central Business District. The run ends at Sound Sports"
                        }

                    ]
                },
                {
                    city: 'Washington DC',
                    runs: [
                        {
                            name: 'Eastern Market/Capitol Hill 5K Run',
                            url: 'https://register.racevine.com/events/washington-dc/city-running-tours---eastern-market-capitol-hill-k',
                            description: "Join City Running Tours on a 5K guided running tour of the largest historical neighborhood of Washington DC. Beginning at the Eastern Market Metro Station, your experience will take you to the Library of Congress, the U.S. Supreme Court, U.S. Capitol Building, Marine Barracks, and more. Enjoy this unique journey with us and get a history lesson of our great city from the perspective of a local runner."
                        },
                        {
                            name: 'Chinatown/DC Riots 5K Run',
                            url: 'https://register.racevine.com/events/washington-dc/city-running-tours---chinatown-dc-riots-k',
                            description: "Join City Running Tours on a 5K guided running tour through Chinatown, Shaw, and the U Street corridor, and learn the history of the 1968 DC Riots. The run begins and ends at the Chinatown Metro Station. Enjoy this unique journey with us and get a history lesson about our great city from the perspective of a local runner."
                        },
                        {
                            name: 'DC Southwest Beer Run',
                            url: 'https://register.racevine.com/events/washington-dc/city-running-tours---dc-southwest-beer-run',
                            description: "This 3.75-mile tour takes runners through the exciting area of the Southwest waterfront, past the marina and fish market. You'll skirt along the famous National Mall for a glimpse of some of DC's best-known sights before finishing at a wonderful brewery serving German-style beers. To reward you for your efforts, your tour concludes with a cool, refreshing pint!"
                        },
                        {
                            name: 'Embassy Row/Foggy Bottom 10K Run',
                            url: 'https://register.racevine.com/events/washington-dc/city-running-tours---embassy-row-foggy-bottom-k',
                            description: "Join City Running Tours on a 10K running tour to experience some of the more unfamiliar sights of our Nation's capital. Beginning and ending at the Dupont Circle Fountain, this route will take runners past Embassy Row, Georgetown, the National Cathedral, the United Stated Naval Observatory, and much more. Take this unique journey with us and get a history lesson about our great city from the perspective of a local runner."
                        },
                        {
                            name: 'White House 10K Run',
                            url: 'https://register.racevine.com/events/washington-dc/city-running-tours---white-house-k',
                            description: "Join City Running Tours on a 10K running tour to experience some of DC's most historic sites. Receive an overview of the White House while streaming down Pennsylvania Avenue to reach the US Capitol, the Library of Congress, and the unique buildings of the Smithsonian. Visit the stirring war memorials. Stop for photo opps at the MLK Memorial, or take one with the Washington Monument soaring above you. You won't want to miss this must-see DC tour!"
                        },
                        {
                            name: 'U Street 10K Run',
                            url: 'https://register.racevine.com/events/washington-dc/city-running-tours---u-st-k',
                            description: "This group run takes runners through Dupont Circle and the U Street Corridor and explains the unique history of the Adams Morgan and Columbia Heights neighborhoods. Take yourself back to the Victorian age and swing past the French Ambassador's residence. Round out the tour with a stop at the site of the Reagan assassination attempt and head back to the famed Dupont Circle fountain."
                        }
                    ]
                }
            ]
        }
    ];

    return{
        paths: function() {
            return runPaths;
        }
    };

}