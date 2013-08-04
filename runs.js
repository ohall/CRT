/**
 * Created with JetBrains WebStorm.
 * User: oakley
 * Date: 8/4/13
 * Time: 4:13 PM
 * To change this template use File | Settings | File Templates.
 */

app.service('getRunPaths', getRunPaths);

function getRunPaths(){

    var runPaths = [{

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
    }];

    return{
        paths: function() {
            return runPaths;
        }
    };

}