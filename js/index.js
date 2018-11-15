function watchAboutMeModal() {
    $('.about-me').click(function(e) {
        e.preventDefault()
        $('.overlay').show()
        $('.about-me-modal').show()
    });
}

function watchProjectsModal() {
    $('.projects').click(function(e) {
        e.preventDefault()
        $('.overlay').show()
        $('.projects-modal').show()
    });
}

function watchContactMeModal() {
    $('.contact-me').click(function(e) {
        e.preventDefault()
        $('.overlay').show()
        $('.contact-me-modal').show()
    });
}

function watchAboutMeClose() {
    $('.about-me-modal').on('click', '.close', function(e) {
        e.preventDefault();
        $('.overlay').hide();
        $('.about-me-modal').hide();
    });
}

function watchProjectsClose() {
    $('.projects-modal').on('click', '.close', function(e) {
        e.preventDefault();
        $('.overlay').hide();
        $('.projects-modal').hide();
    });
}

function watchContactMeClose() {
    $('.contact-me-modal').on('click', '.close', function(e) {
        e.preventDefault();
        $('.overlay').hide();
        $('.contact-me-modal').hide();
    });
}


function loadPage() {
    $('.overlay').hide();
    $('.about-me-modal').hide();
    $('.projects-modal').hide();
    $('.contact-me-modal').hide();
    watchAboutMeModal();
    watchProjectsModal();
    watchContactMeModal();
    watchAboutMeClose();
    watchProjectsClose();
    watchContactMeClose();
    $('.overlay').click(function(){
        $('.modal').hide();
        $('.overlay').hide();
    });
    $('.box').on('click', '.close', function(){
        $('.modal').hide();
        $('.overlay').hide();
    });
    $('.box').click(function(){
        $(this).children('.modal').addClass('complete');

    });
}

$(loadPage);