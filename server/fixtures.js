/**
 * Created by fred on 23.03.17.
 */
if (Posts.find().count() === 0) {
    Posts.insert({
        title: 'Posts not found',
        url: 'sorry ...'
    });
}
