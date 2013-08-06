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
                runs:{ 'indy':'http://www.active.com/running-membership/austin-tx/city-running-tours---austin-personalized-running-tours-2017'}
            },
            {
                city:'Boston',
                runs:{ 'indy':'http://www.active.com/cycling-membership/boston-ma/city-running-tours---boston-personalized-running-tours-2017'}
            },
            {
                city:'Chicago',
                runs:{ 'indy':'http://www.active.com/cycling-membership/chicago-il/city-running-tours---chicago-personalized-running-tours-2017'}
            },
            {
                city:'Denver',
                runs:{'indy':'http://www.active.com/running-membership/denver-co/city-running-tours---denver-personalized-running-tours-2018'}
            },
            {
                city:'Minneapolis',
                runs:{'indy':'http://www.active.com/running-membership/minneapolis-mn/city-running-tours---minneapolis-personalized-running-tours-2017'}
            },
            {
                city:'New York',
                runs:{'indy':'http://www.active.com/running-membership/new-york-ny/city-running-tours---new-york-city-personalized-running-tours-2017'}
            },
            {
                city:'Philadelphia',
                runs:{'indy':'http://www.active.com/cycling-membership/philadelphia-pa/city-running-tours---philadelphia-personalized-running-tours-2017'}
            },
            {
                city:'Portland',
                runs:{'indy':'http://www.active.com/running-membership/portland-or/city-running-tours---portland-personalized-running-tours-2017'}
            },
            {

                city:'San Francisco',
                runs:{'indy':'http://www.active.com/cycling-membership/san-francisco-ca/city-running-tours---san-francisco-personalized-running-tours-2017'}
            },
            {
                city:'Seattle',
                runs:{'indy':'http://www.active.com/cycling-membership/seattle-wa/city-running-tours---seattle-personalized-running-tours-2017'}
            },
            {
                city:'Washington DC',
                runs:{'indy':'http://www.active.com/running-membership/washington-dc/city-running-tours---washington-dc-personalized-running-tours-2017'}
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
                        url:'https://register.racevine.com/events/austin-tx-tx/downtown-austin-k'
                    },
                    {
                        name:'Austin Music 5K Run',
                        url:'https://register.racevine.com/events/austin-tx/austin-music-k'
                    },
                    {
                        name:'UT 5K Run',
                        url:'https://register.racevine.com/events/austin-tx/ut--k'
                    },
                    {
                        name:'Texas Beer 5K Run',
                        url:'https://register.racevine.com/events/austin-tx-tx/texas-beer-k'
                    },
                    {
                        name:'Downtown Austin 5K Run',
                        url:'http://www.active.com/running-membership/austin-tx/city-running-tours---austin-personalized-running-tours-2017'
                    },
                    {
                        name:'Black Star 10K Beer Run',
                        url:'https://register.racevine.com/events/austin-tx/black-star-k'
                    },
                    {
                        name:'Scenic Parks 10K Run',
                        url:'https://register.racevine.com/events/austin-k-tx/scenic-parks-k'
                    },
                    {
                        name:'City Running Tours/PubCrawler Duathalon',
                        url:'https://register.racevine.com/events/austin-tx/austin-s-drinking-duathlon-tour-'
                    }
                ]
            },
            {
                city:'Boston',
                runs:[
                    {
                        name:'Cambridge/MIT 5K Run - 6 PM',
                        url:'https://register.racevine.com/events/boston-ma/city-running-tours---cambridge-mit-k-running-tour'
                    },
                    {
                        name:'Beacon Hill/Back Bay 5K Run - 6 PM',
                        url:'https://register.racevine.com/events/boston--ma/city-running-tours---beacon-hill-back-bay-k-running-tour'
                    },
                    {
                        name:'Seaport Beer Run - 10 AM',
                        url:'https://register.racevine.com/events/boston-ma/city-running-tours---boston-seaport-beer-running-tour'
                    },
                    {
                        name:'North End 10K Run - 10 AM',
                        url:'https://register.racevine.com/events/boston-ma/city-running-tours---north-end-group-run'
                    },
                    {
                        name:'Fenway to Copley 10K Run - 10 AM',
                        url:'https://register.racevine.com/events/boston--ma/city-running-tours---fenway-to-copley-running-tour'
                    },
                    {
                        name:'Back Bay/Beacon Hill 10K Run - 10 AM',
                        url:'https://register.racevine.com/events/boston-ma/city-running-tours---back-bay-beacon-hill-running-tour'
                    },
                    {
                        name:'Scenic Parks 10K Run',
                        url:'https://register.racevine.com/events/austin-k-tx/scenic-parks-k'
                    },
                    {
                        name:'Cambridge 10K Run - 10 AM',
                        url:'https://register.racevine.com/events/boston-ma/city-running-tours---cambridge-running-tour'
                    }
                ]
            },
            {
                city:'Chicago',
                runs:[
                    {
                        name:'Chicago River Navy Pier 5k - $25',
                        url:'https://register.racevine.com/events/chicago-il/chicago-river-navy-pier-k'
                    },
                    {
                        name:'Chicago Tragic Events 5k - $30',
                        url:'https://register.racevine.com/events/chicago-il/chicago-tragic-events'
                    }
                ]
            },
            {
                city:'Denver',
                runs:[
                    {
                        name:'Downtown Denver Highlights Run - $30',
                        url:'https://register.racevine.com/events/denver-co/city-running-tours---downtown-denver-highlights'
                    },
                    {
                        name:'Downtown Sports Stadium Run - $40',
                        url:'https://register.racevine.com/events/denver-co/city-running-tours---denver-sports-stadiums'
                    }
                ]
            },
            {
                city:'Minneapolis',
                runs:[
                    {
                        name:'5K Cherry & Spoon Run – 8 AM',
                        url:'https://register.racevine.com/events/minneapolis-mn/city-running-tours-minneapolis-k-cherry-spoon'
                    },
                    {
                        name:'5K Uptown & Lakes Run - 11 AM',
                        url:'https://register.racevine.com/events/minneapolis-mn/city-running-tours-minneapolis-k-uptown-run'
                    },
                    {
                        name:'5K Beer Run! – 2 PM',
                        url:'https://register.racevine.com/events/minneapolis-mn/city-running-tours-minneapolis-k-beer-run-'
                    }
                ]
            },
            {
                city:'New York',
                runs:[
                    {
                        name:'East Village Run - 7 AM',
                        url:'http://register.racevine.com/events/new-york-ny/east-village-running-tour'
                    },
                    {
                        name:'West Village Run - 7 AM',
                        url:'http://register.racevine.com/events/new-york-ny/west-village-running-tour'
                    },
                    {
                        name:'SOHO Run - 7 AM',
                        url:'http://register.racevine.com/events/new-york-ny/soho-running-tour'
                    },
                    {
                        name:'Lower East Side Run - 7 AM',
                        url:'http://register.racevine.com/events/new-york-ny/lower-east-side-running-tour'
                    },
                    {
                        name:'Upper Central Park Run - 7 AM',
                        url:'http://register.racevine.com/events/new-york-ny/upper-central-park-running-tour'
                    },
                    {
                        name:'Lower Central Park Run - 7 AM',
                        url:'http://register.racevine.com/events/new-york-ny/lower-central-park-running-tour'
                    },
                    {
                        name:'Bridge Run - 7 AM',
                        url:'http://register.racevine.com/events/new-york-ny/bridge-running-tour'
                    },
                    {
                        name:'Downtown Run - 7 AM',
                        url:'http://register.racevine.com/events/new-york-ny/downtown-running-tour'
                    },
                    {
                        name:'_',
                        url:'_'
                    },
                    {
                        name:'_',
                        url:'_'
                    },
                    {
                        name:'_',
                        url:'_'
                    },
                    {
                        name:'_',
                        url:'_'
                    },
                    {
                        name:'_',
                        url:'_'
                    },
                    {
                        name:'_',
                        url:'_'
                    },
                    {
                        name:'_',
                        url:'_'
                    },
                    {
                        name:'_',
                        url:'_'
                    },
                    {
                        name:'_',
                        url:'_'
                    },
                    {
                        name:'_',
                        url:'_'
                    },
                    {
                        name:'_',
                        url:'_'
                    },
                    {
                        name:'_',
                        url:'_'
                    },
                    {
                        name:'_',
                        url:'_'
                    }
                ]
            },
            {
                city:'Philadelphia',
                runs:[
                    {
                        name:'Downtown Austin 5K Run',
                        url:'https://register.racevine.com/events/austin-tx-tx/downtown-austin-k'
                    },
                    {
                        name:'Austin Music 5K Run',
                        url:'https://register.racevine.com/events/austin-tx/austin-music-k'
                    },
                    {
                        name:'UT 5K Run',
                        url:'https://register.racevine.com/events/austin-tx/ut--k'
                    },
                    {
                        name:'Texas Beer 5K Run',
                        url:'https://register.racevine.com/events/austin-tx-tx/texas-beer-k'
                    },
                    {
                        name:'Downtown Austin 5K Run',
                        url:'http://www.active.com/running-membership/austin-tx/city-running-tours---austin-personalized-running-tours-2017'
                    },
                    {
                        name:'Black Star 10K Beer Run',
                        url:'https://register.racevine.com/events/austin-tx/black-star-k'
                    },
                    {
                        name:'Scenic Parks 10K Run',
                        url:'https://register.racevine.com/events/austin-k-tx/scenic-parks-k'
                    },
                    {
                        name:'City Running Tours/PubCrawler Duathalon',
                        url:'https://register.racevine.com/events/austin-tx/austin-s-drinking-duathlon-tour-'
                    }
                ]
            },
            {
                city:'Portland',
                runs:[
                    {
                        name:'Downtown Austin 5K Run',
                        url:'https://register.racevine.com/events/austin-tx-tx/downtown-austin-k'
                    },
                    {
                        name:'Austin Music 5K Run',
                        url:'https://register.racevine.com/events/austin-tx/austin-music-k'
                    },
                    {
                        name:'UT 5K Run',
                        url:'https://register.racevine.com/events/austin-tx/ut--k'
                    },
                    {
                        name:'Texas Beer 5K Run',
                        url:'https://register.racevine.com/events/austin-tx-tx/texas-beer-k'
                    },
                    {
                        name:'Downtown Austin 5K Run',
                        url:'http://www.active.com/running-membership/austin-tx/city-running-tours---austin-personalized-running-tours-2017'
                    },
                    {
                        name:'Black Star 10K Beer Run',
                        url:'https://register.racevine.com/events/austin-tx/black-star-k'
                    },
                    {
                        name:'Scenic Parks 10K Run',
                        url:'https://register.racevine.com/events/austin-k-tx/scenic-parks-k'
                    },
                    {
                        name:'City Running Tours/PubCrawler Duathalon',
                        url:'https://register.racevine.com/events/austin-tx/austin-s-drinking-duathlon-tour-'
                    }
                ]
            },
            {

                city:'San Francisco',
                runs:[
                    {
                        name:'Downtown Austin 5K Run',
                        url:'https://register.racevine.com/events/austin-tx-tx/downtown-austin-k'
                    },
                    {
                        name:'Austin Music 5K Run',
                        url:'https://register.racevine.com/events/austin-tx/austin-music-k'
                    },
                    {
                        name:'UT 5K Run',
                        url:'https://register.racevine.com/events/austin-tx/ut--k'
                    },
                    {
                        name:'Texas Beer 5K Run',
                        url:'https://register.racevine.com/events/austin-tx-tx/texas-beer-k'
                    },
                    {
                        name:'Downtown Austin 5K Run',
                        url:'http://www.active.com/running-membership/austin-tx/city-running-tours---austin-personalized-running-tours-2017'
                    },
                    {
                        name:'Black Star 10K Beer Run',
                        url:'https://register.racevine.com/events/austin-tx/black-star-k'
                    },
                    {
                        name:'Scenic Parks 10K Run',
                        url:'https://register.racevine.com/events/austin-k-tx/scenic-parks-k'
                    },
                    {
                        name:'City Running Tours/PubCrawler Duathalon',
                        url:'https://register.racevine.com/events/austin-tx/austin-s-drinking-duathlon-tour-'
                    }
                ]
            },
            {
                city:'Seattle',
                runs:[
                    {
                        name:'Downtown Austin 5K Run',
                        url:'https://register.racevine.com/events/austin-tx-tx/downtown-austin-k'
                    },
                    {
                        name:'Austin Music 5K Run',
                        url:'https://register.racevine.com/events/austin-tx/austin-music-k'
                    },
                    {
                        name:'UT 5K Run',
                        url:'https://register.racevine.com/events/austin-tx/ut--k'
                    },
                    {
                        name:'Texas Beer 5K Run',
                        url:'https://register.racevine.com/events/austin-tx-tx/texas-beer-k'
                    },
                    {
                        name:'Downtown Austin 5K Run',
                        url:'http://www.active.com/running-membership/austin-tx/city-running-tours---austin-personalized-running-tours-2017'
                    },
                    {
                        name:'Black Star 10K Beer Run',
                        url:'https://register.racevine.com/events/austin-tx/black-star-k'
                    },
                    {
                        name:'Scenic Parks 10K Run',
                        url:'https://register.racevine.com/events/austin-k-tx/scenic-parks-k'
                    },
                    {
                        name:'City Running Tours/PubCrawler Duathalon',
                        url:'https://register.racevine.com/events/austin-tx/austin-s-drinking-duathlon-tour-'
                    }
                ]
            },
            {
                city:'Washington DC',
                runs:[
                    {
                        name:'Downtown Austin 5K Run',
                        url:'https://register.racevine.com/events/austin-tx-tx/downtown-austin-k'
                    },
                    {
                        name:'Austin Music 5K Run',
                        url:'https://register.racevine.com/events/austin-tx/austin-music-k'
                    },
                    {
                        name:'UT 5K Run',
                        url:'https://register.racevine.com/events/austin-tx/ut--k'
                    },
                    {
                        name:'Texas Beer 5K Run',
                        url:'https://register.racevine.com/events/austin-tx-tx/texas-beer-k'
                    },
                    {
                        name:'Downtown Austin 5K Run',
                        url:'http://www.active.com/running-membership/austin-tx/city-running-tours---austin-personalized-running-tours-2017'
                    },
                    {
                        name:'Black Star 10K Beer Run',
                        url:'https://register.racevine.com/events/austin-tx/black-star-k'
                    },
                    {
                        name:'Scenic Parks 10K Run',
                        url:'https://register.racevine.com/events/austin-k-tx/scenic-parks-k'
                    },
                    {
                        name:'City Running Tours/PubCrawler Duathalon',
                        url:'https://register.racevine.com/events/austin-tx/austin-s-drinking-duathlon-tour-'
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