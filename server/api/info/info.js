'use strict';

module.exports = function (oApp, oAppEnv) {

    oApp.get('/api/info', function (req, res) {
        var infoData = [];

        if(oAppEnv.isLocal === true){
            infoData = [{
                "object": "VCAP_SERVICES env",
                "value": 'local not available'
            },{
                "object": "VCAP_APPLICATION env",
                "value": 'local not available'
            }];
        }else{
            infoData = [{
                "object": "VCAP_SERVICES env",
                "value": JSON.stringify(oAppEnv.services["user-provided"][0])
            },{
                "object": "VCAP_APPLICATION env",
                "value": JSON.stringify(oAppEnv.app)
            }];
        }

        infoData.push({
            "object": "Name of Application",
            "value": oAppEnv.name
        });

        infoData.push({
            "object": "Port",
            "value": oAppEnv.port
        });

        infoData.push({
            "object": "URL",
            "value": oAppEnv.url
        });

        infoData.push({
            "object": "oAppEnv",
            "value": JSON.stringify(oAppEnv)
        });

        infoData.push({
            "object": "oApp",
            "value": JSON.stringify(oApp)
        });

        res.json(infoData);
    });

};