define(
    [
        'backbone',
        'proactive/model/CatalogRestWorkflow'
    ],

    function (Backbone, RestWorkflow) {

        "use strict";

        return Backbone.Collection.extend({
            model: RestWorkflow,
            initialize: function(options) {
                this.bucketid = options.bucketid;
                this.workflowid = options.workflowid;
                this.callback = options.callback;
            },
            url: function() {
                return '/catalog/buckets/' + this.bucketid + '/resources/' + this.workflowid + '/revisions';
            },
            parse: function(data) {
                if (data.object) {
                	this.callback(data.object);
                    return data.object;
                }
                else {
                    return [];
                }

            }
        });
    })
