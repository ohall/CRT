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

            type:'Individual',
            cities:[
            {
                city:'Austin',
                runs:{ 'indy':'https://www.active.com/running-membership/austin-tx/city-running-tours---austin-personalized-running-tours-2017'}
            },
            {
                city:'Boston',
                runs:{ 'indy':'https://www.active.com/cycling-membership/boston-ma/city-running-tours---boston-personalized-running-tours-2017'}
            },
            {
                city:'Chicago',
                runs:{ 'indy':'https://www.active.com/cycling-membership/chicago-il/city-running-tours---chicago-personalized-running-tours-2017'}
            },
            {
                city:'Denver',
                runs:{'indy':'https://www.active.com/running-membership/denver-co/city-running-tours---denver-personalized-running-tours-2018'}
            },
            {
                city:'Minneapolis',
                runs:{'indy':'https://www.active.com/running-membership/minneapolis-mn/city-running-tours---minneapolis-personalized-running-tours-2017'}
            },
            {
                city:'New York',
                runs:{'indy':'https://www.active.com/running-membership/new-york-ny/city-running-tours---new-york-city-personalized-running-tours-2017'}
            },
            {
                city:'Philadelphia',
                runs:{'indy':'https://www.active.com/cycling-membership/philadelphia-pa/city-running-tours---philadelphia-personalized-running-tours-2017'}
            },
            {
                city:'Portland',
                runs:{'indy':'https://www.active.com/running-membership/portland-or/city-running-tours---portland-personalized-running-tours-2017'}
            },
            {

                city:'San Francisco',
                runs:{'indy':'https://www.active.com/cycling-membership/san-francisco-ca/city-running-tours---san-francisco-personalized-running-tours-2017'}
            },
            {
                city:'Seattle',
                runs:{'indy':'https://www.active.com/cycling-membership/seattle-wa/city-running-tours---seattle-personalized-running-tours-2017'}
            },
            {
                city:'Washington DC',
                runs:{'indy':'https://www.active.com/running-membership/washington-dc/city-running-tours---washington-dc-personalized-running-tours-2017'}
            }
            ]
    },
    {

        type:'Group',
        cities:[
            {
                city:'Austin',
                runs:[
                    {
                        name:'Downtown Austin 5K Run',
                        url:'https://register.racevine.com/events/austin-tx-tx/downtown-austin-k',
                        description:""

                    },
                    {
                        name:'Austin Music 5K Run',
                        url:'https://register.racevine.com/events/austin-tx/austin-music-k',
                        description:""
                    },
                    {
                        name:'UT 5K Run',
                        url:'https://register.racevine.com/events/austin-tx/ut--k',
                        description:""
                    },
                    {
                        name:'Texas Beer 5K Run',
                        url:'https://register.racevine.com/events/austin-tx-tx/texas-beer-k',
                        description:""
                    },
                    {
                        name:'Downtown Austin 5K Run',
                        url:'https://www.active.com/running-membership/austin-tx/city-running-tours---austin-personalized-running-tours-2017',
                        description:""
                    },
                    {
                        name:'Black Star 10K Beer Run',
                        url:'https://register.racevine.com/events/austin-tx/black-star-k',
                        description:""
                    },
                    {
                        name:'Scenic Parks 10K Run',
                        url:'https://register.racevine.com/events/austin-k-tx/scenic-parks-k',
                        description:""
                    },
                    {
                        name:'City Running Tours/PubCrawler Duathalon',
                        url:'https://register.racevine.com/events/austin-tx/austin-s-drinking-duathlon-tour-',
                        description:""
                    }
                ]
            },
            {
                city:'Boston',
                runs:[
                    {
                        name:'Cambridge/MIT 5K Run',
                        url:'https://register.racevine.com/events/boston-ma/city-running-tours---cambridge-mit-k-running-tour',
                        description:""
                    },
                    {
                        name:'Beacon Hill/Back Bay 5K Run',
                        url:'https://register.racevine.com/events/boston--ma/city-running-tours---beacon-hill-back-bay-k-running-tour',
                        description:""
                    },
                    {
                        name:'Seaport Beer Run',
                        url:'https://register.racevine.com/events/boston-ma/city-running-tours---boston-seaport-beer-running-tour',
                        description:""
                    },
                    {
                        name:'North End 10K Run',
                        url:'https://register.racevine.com/events/boston-ma/city-running-tours---north-end-group-run',
                        description:""
                    },
                    {
                        name:'Fenway to Copley 10K Run',
                        url:'https://register.racevine.com/events/boston--ma/city-running-tours---fenway-to-copley-running-tour',
                        description:""
                    },
                    {
                        name:'Back Bay/Beacon Hill 10K Run',
                        url:'https://register.racevine.com/events/boston-ma/city-running-tours---back-bay-beacon-hill-running-tour',
                        description:""
                    },
                    {
                        name:'Scenic Parks 10K Run',
                        url:'https://register.racevine.com/events/austin-k-tx/scenic-parks-k',
                        description:""
                    },
                    {
                        name:'Cambridge 10K Run',
                        url:'https://register.racevine.com/events/boston-ma/city-running-tours---cambridge-running-tour',
                        description:""
                    }
                ]
            },
            {
                city:'Chicago',
                runs:[
                    {
                        name:'Chicago River Navy Pier 5k',
                        url:'https://register.racevine.com/events/chicago-il/chicago-river-navy-pier-k',
                        description:""
                    },
                    {
                        name:'Chicago Tragic Events 5k',
                        url:'https://register.racevine.com/events/chicago-il/chicago-tragic-events',
                        description:""
                    }
                ]
            },
            {
                city:'Denver',
                runs:[
                    {
                        name:'Downtown Denver Highlights Run',
                        url:'https://register.racevine.com/events/denver-co/city-running-tours---downtown-denver-highlights',
                        description:""
                    },
                    {
                        name:'Downtown Sports Stadium Run',
                        url:'https://register.racevine.com/events/denver-co/city-running-tours---denver-sports-stadiums',
                        description:""
                    }
                ]
            },
            {
                city:'Minneapolis',
                runs:[
                    {
                        name:'5K Cherry & Spoon Run',
                        url:'https://register.racevine.com/events/minneapolis-mn/city-running-tours-minneapolis-k-cherry-spoon',
                        description:""
                    },
                    {
                        name:'5K Uptown & Lakes Run',
                        url:'https://register.racevine.com/events/minneapolis-mn/city-running-tours-minneapolis-k-uptown-run',
                        description:""
                    },
                    {
                        name:'5K Beer Run!',
                        url:'https://register.racevine.com/events/minneapolis-mn/city-running-tours-minneapolis-k-beer-run-',
                        description:""
                    }
                ]
            },
            {
                city:'New York',
                runs:[
                    {
                        name:'East Village Run',
                        url:'https://register.racevine.com/events/new-york-ny/east-village-running-tour',
                        description:"Trace the Rock N Roll roots of NYC through the East Village as we run by CBGBs, The Fillmore East and Tompkins Square Park. We'll also pass NYU and Cooper Union - two of Manhattan's oldest educational institutions - and McSorley's, the oldest ale house in the city."


                    },
                    {
                        name:'West Village Run',
                        url:'https://register.racevine.com/events/new-york-ny/west-village-running-tour',
                        description:"What do Bob Dylan, Ernest Hemingway, The Cosby Show and Carrie Bradshaw all have in common? They all have ties to Manhattan's West Village. Run down quiet, tree-lined streets and see theaters, comedy clubs, fine dining and possibly a celebrity sighting."

                    },
                    {
                        name:'SOHO Run',
                        url:'https://register.racevine.com/events/new-york-ny/soho-running-tour',
                        description:"Go beyond the shopping of SOHO to learn more about how the cast iron historic district got its start. Little Italy, Chinatown and Tribeca are on display here, as are the original American Express warehouse, the Western Union Building and the Ghostbusters HQ Firehouse."
                    },
                    {
                        name:'Lower East Side Run',
                        url:'https://register.racevine.com/events/new-york-ny/lower-east-side-running-tour',
                        description:""
                    },
                    {
                        name:'Upper Central Park Run',
                        url:'https://register.racevine.com/events/new-york-ny/upper-central-park-running-tour',
                        description:""
                    },
                    {
                        name:'Lower Central Park Run',
                        url:'https://register.racevine.com/events/new-york-ny/lower-central-park-running-tour',
                        description:""
                    },
                    {
                        name:'Bridge Run',
                        url:'https://register.racevine.com/events/new-york-ny/bridge-running-tour',
                        description:""
                    },
                    {
                        name:'Downtown Run',
                        url:'https://register.racevine.com/events/new-york-ny/downtown-running-tour',
                        description:""
                    },
                    {
                        name:'Morningside Heights Run',
                        url:'https://register.racevine.com/events/new-york-ny/morningside-heights-mount-morris-park-running-tour',
                        description:""
                    },
                    {
                        name:'Park Slope Run',
                        url:'https://register.racevine.com/events/brooklyn-ny/park-slope-running-tour',
                        description:""
                    },
                    {
                        name:'Brooklyn Brewery Run',
                        url:'https://register.racevine.com/events/brooklyn-ny/brooklyn-brewery-running-tour',
                        description:""
                    },
                    {
                        name:'Hamilton Heights Run',
                        url:'http://register.racevine.com/events/new-york-ny/hamilton-heights-running-tour',
                        description:""
                    },
                    {
                        name:'Upper East Side Run',
                        url:'http://register.racevine.com/events/new-york-ny/upper-east-side-running-tour',
                        description:""
                    },
                    {
                        name:'Washington Heights Run',
                        url:'http://register.racevine.com/events/new-york-ny/washington-heights-running-tour',
                        description:""
                    },
                    {
                        name:'Chelsea/Gramercy Run',
                        url:'http://register.racevine.com/events/new-york-ny/chelsea-gramercy-running-tour/',
                        description:""
                    },
                    {
                        name:'Bohemian Beer Hall Run',
                        url:'http://register.racevine.com/events/astoria-ny/bohemian-beer-hall-running-tour',
                        description:""
                    },
                    {
                        name:'Cloisters Run',
                        url:'https://register.racevine.com/events/new-york-city-ny/cloisters-running-tour',
                        description:""
                    },
                    {
                        name:'Upper West Side Run',
                        url:'http://register.racevine.com/events/new-york-ny/upper-west-side-running-tour',
                        description:""
                    },
                    {
                        name:'Times Square Run',
                        url:'http://register.racevine.com/events/new-york-ny/times-square-running-tour',
                        description:""
                    },
                    {
                        name:'Roosevelt Island Run',
                        url:'http://register.racevine.com/events/new-york-ny/roosevelt-island-running-tour',
                        description:""
                    },
                    {
                        name:'Brooklyn Heights Run',
                        url:'http://register.racevine.com/events/brooklyn-ny/brooklyn-heights-running-tour',
                        description:""
                    }
                ]
            },
            {
                city:'Philadelphia',
                runs:[
                    {
                        name:'Downtown Austin 5K Run',
                        url:'https://register.racevine.com/events/austin-tx-tx/downtown-austin-k',
                        description:""
                    },
                    {
                        name:'Austin Music 5K Run',
                        url:'https://register.racevine.com/events/austin-tx/austin-music-k',
                        description:""
                    },
                    {
                        name:'UT 5K Run',
                        url:'https://register.racevine.com/events/austin-tx/ut--k',
                        description:""
                    },
                    {
                        name:'Texas Beer 5K Run',
                        url:'https://register.racevine.com/events/austin-tx-tx/texas-beer-k',
                        description:""
                    },
                    {
                        name:'Downtown Austin 5K Run',
                        url:'https://www.active.com/running-membership/austin-tx/city-running-tours---austin-personalized-running-tours-2017',
                        description:""
                    },
                    {
                        name:'Black Star 10K Beer Run',
                        url:'https://register.racevine.com/events/austin-tx/black-star-k',
                        description:""
                    },
                    {
                        name:'Scenic Parks 10K Run',
                        url:'https://register.racevine.com/events/austin-k-tx/scenic-parks-k',
                        description:""
                    },
                    {
                        name:'City Running Tours/PubCrawler Duathalon',
                        url:'https://register.racevine.com/events/austin-tx/austin-s-drinking-duathlon-tour-',
                        description:""
                    }
                ]
            },
            {
                city:'Portland',
                runs:[
                    {
                        name:'Downtown Austin 5K Run',
                        url:'https://register.racevine.com/events/austin-tx-tx/downtown-austin-k',
                        description:""
                    },
                    {
                        name:'Austin Music 5K Run',
                        url:'https://register.racevine.com/events/austin-tx/austin-music-k',
                        description:""
                    },
                    {
                        name:'UT 5K Run',
                        url:'https://register.racevine.com/events/austin-tx/ut--k',
                        description:""
                    },
                    {
                        name:'Texas Beer 5K Run',
                        url:'https://register.racevine.com/events/austin-tx-tx/texas-beer-k',
                        description:""
                    },
                    {
                        name:'Downtown Austin 5K Run',
                        url:'https://www.active.com/running-membership/austin-tx/city-running-tours---austin-personalized-running-tours-2017',
                        description:""
                    },
                    {
                        name:'Black Star 10K Beer Run',
                        url:'https://register.racevine.com/events/austin-tx/black-star-k',
                        description:""
                    },
                    {
                        name:'Scenic Parks 10K Run',
                        url:'https://register.racevine.com/events/austin-k-tx/scenic-parks-k',
                        description:""
                    },
                    {
                        name:'City Running Tours/PubCrawler Duathalon',
                        url:'https://register.racevine.com/events/austin-tx/austin-s-drinking-duathlon-tour-',
                        description:""
                    }
                ]
            },
            {

                city:'San Francisco',
                runs:[
                    {
                        name:'Downtown Austin 5K Run',
                        url:'https://register.racevine.com/events/austin-tx-tx/downtown-austin-k',
                        description:""
                    },
                    {
                        name:'Austin Music 5K Run',
                        url:'https://register.racevine.com/events/austin-tx/austin-music-k',
                        description:""
                    },
                    {
                        name:'UT 5K Run',
                        url:'https://register.racevine.com/events/austin-tx/ut--k',
                        description:""
                    },
                    {
                        name:'Texas Beer 5K Run',
                        url:'https://register.racevine.com/events/austin-tx-tx/texas-beer-k',
                        description:""
                    },
                    {
                        name:'Downtown Austin 5K Run',
                        url:'https://www.active.com/running-membership/austin-tx/city-running-tours---austin-personalized-running-tours-2017',
                        description:""
                    },
                    {
                        name:'Black Star 10K Beer Run',
                        url:'https://register.racevine.com/events/austin-tx/black-star-k',
                        description:""
                    },
                    {
                        name:'Scenic Parks 10K Run',
                        url:'https://register.racevine.com/events/austin-k-tx/scenic-parks-k',
                        description:""
                    },
                    {
                        name:'City Running Tours/PubCrawler Duathalon',
                        url:'https://register.racevine.com/events/austin-tx/austin-s-drinking-duathlon-tour-',
                        description:""
                    }
                ]
            },
            {
                city:'Seattle',
                runs:[
                    {
                        name:'Downtown Austin 5K Run',
                        url:'https://register.racevine.com/events/austin-tx-tx/downtown-austin-k',
                        description:""
                    },
                    {
                        name:'Austin Music 5K Run',
                        url:'https://register.racevine.com/events/austin-tx/austin-music-k',
                        description:""
                    },
                    {
                        name:'UT 5K Run',
                        url:'https://register.racevine.com/events/austin-tx/ut--k',
                        description:""
                    },
                    {
                        name:'Texas Beer 5K Run',
                        url:'https://register.racevine.com/events/austin-tx-tx/texas-beer-k',
                        description:""
                    },
                    {
                        name:'Downtown Austin 5K Run',
                        url:'https://www.active.com/running-membership/austin-tx/city-running-tours---austin-personalized-running-tours-2017',
                        description:""
                    },
                    {
                        name:'Black Star 10K Beer Run',
                        url:'https://register.racevine.com/events/austin-tx/black-star-k',
                        description:""
                    },
                    {
                        name:'Scenic Parks 10K Run',
                        url:'https://register.racevine.com/events/austin-k-tx/scenic-parks-k',
                        description:""
                    },
                    {
                        name:'City Running Tours/PubCrawler Duathalon',
                        url:'https://register.racevine.com/events/austin-tx/austin-s-drinking-duathlon-tour-',
                        description:""
                    }
                ]
            },
            {
                city:'Washington DC',
                runs:[
                    {
                        name:'Downtown Austin 5K Run',
                        url:'https://register.racevine.com/events/austin-tx-tx/downtown-austin-k',
                        description:""
                    },
                    {
                        name:'Austin Music 5K Run',
                        url:'https://register.racevine.com/events/austin-tx/austin-music-k',
                        description:""
                    },
                    {
                        name:'UT 5K Run',
                        url:'https://register.racevine.com/events/austin-tx/ut--k',
                        description:""
                    },
                    {
                        name:'Texas Beer 5K Run',
                        url:'https://register.racevine.com/events/austin-tx-tx/texas-beer-k',
                        description:""
                    },
                    {
                        name:'Downtown Austin 5K Run',
                        url:'https://www.active.com/running-membership/austin-tx/city-running-tours---austin-personalized-running-tours-2017',
                        description:""
                    },
                    {
                        name:'Black Star 10K Beer Run',
                        url:'https://register.racevine.com/events/austin-tx/black-star-k',
                        description:""
                    },
                    {
                        name:'Scenic Parks 10K Run',
                        url:'https://register.racevine.com/events/austin-k-tx/scenic-parks-k',
                        description:""
                    },
                    {
                        name:'City Running Tours/PubCrawler Duathalon',
                        url:'https://register.racevine.com/events/austin-tx/austin-s-drinking-duathlon-tour-',
                        description:""
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