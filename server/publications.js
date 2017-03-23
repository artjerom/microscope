/**
 * Created by fred on 23.03.17.
 */
Meteor.publish('posts', () => Posts.find());
