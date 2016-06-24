/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    // Test suite for the RSS feeds definitions and the allFeeds variable in the application.
    describe('RSS Feeds', function() {
        // Test to make sure that the allFeeds variable has been defined and that it is not empty.
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        // Test that each feed in the allFeeds object has a URL defined and that the URL is not empty.
        it('urls are defined', function() {
            allFeeds.forEach(function(feed) {
                var url = feed.url;
                expect(url).toBeDefined();
                expect(url.length).not.toBe(0);
            });
        });
        // Test that each feed has a name defined and that the name is not empty.
        it('names are defined', function() {
            allFeeds.forEach(function(feed) {
                var name = feed.name;
                expect(name).toBeDefined();
                expect(name.length).not.toBe(0);
            });
        });
    });

    // Slide-out menu element tests.
    describe('The menu', function() {
    // Test that the menu element is hidden by default.
        it('is hidden by default', function() {
            var body = document.body.classList.contains('menu-hidden');
            expect(body).toBeTruthy();
        });
        // Test that the menu changes visibility when the menu icon is clicked.
        it('toggles visibility', function() {
            var icon = $('.menu-icon-link');
            var body = document.body;
            icon.click();
            expect(body.classList.contains('menu-hidden')).toBeFalsy();
            icon.click();
            expect(body.classList.contains('menu-hidden')).toBeTruthy();
        });
    });

    // When loadFeed funtion finishes, check that there is at least a single .entry element within the .feed container.
    describe('Initial Entries', function() {
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });
        it('has at least one .entry element after loadFeed()', function(done) {
            expect($('.feed').find('.entry')).toBeTruthy();
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();
        });
    });

    // Ensure when a new feed is loaded by the loadFeed function that the content actually changes.
    describe('New Feed Selection', function() {
        var header;
        var content;
        beforeEach(function(done) {
            loadFeed(0, function() {
                header = $('.header-title').html();
                content = $('.feed').html();
                done();
            });
        });
        it('content changes when new feed loaded', function(done) {
            loadFeed(1, function() {
                expect($('.header-title').html()).not.toBe(header);
                expect($('.feed').html()).not.toBe(content);
                done();
            });
        });
    });
}());
