/**
 * Created by fred on 23.03.17.
 */
Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    waitOn: function() { return Meteor.subscribe('posts'); }
});

Router.map(function() {
    this.route('postsList', {path: '/'});

    this.route('postPage', {
        path: '/posts/:id',
        data: function () {return Posts.findOne(this.params._id);}
    });
});

Router.onBeforeAction('loading');