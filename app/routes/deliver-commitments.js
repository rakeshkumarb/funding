import Ember from 'ember';

export default Ember.Route.extend({
     model() {
        var data=[ {
            "campaignId": "125", "campaigndetails": "xyz", "fundername": "Rahul", "donation": "300", "eligible": "T-shirt"
        }
        , {
            "campaignId": "126", "campaigndetails": "abc", "fundername": "Rajesh", "donation": "400", "eligible": "T-shirt"
        }
        , {
            "campaignId": "127", "campaigndetails": "rtu", "fundername": "Rakesh", "donation": "500",  "eligible": "T-shirt"
        }
        ];
        return data;
    }
});
