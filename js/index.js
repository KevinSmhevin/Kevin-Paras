function watchAboutMeModal() {
    $('.about-me').click(function() {
        $('.overlay').show()
        $('.about-me-modal').show()
    });
}

function watchProjectsModal() {
    $('.projects').click(function() {
        $('.overlay').show()
        $('.projects-modal').show()
    });
}

function watchContactMeModal() {
    $('.contact-me').click(function() {
        $('.overlay').show()
        $('.contact-me-modal').show()
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
    $('.overlay').click(function(){
        $('.modal').hide();
        $('.overlay').hide();
        $('.modal.complete').removeClass('complete').removeClass('completed');
    });
    $('.box').click(function(){
        let self = this;
        $(this).children('.modal').addClass('complete');
        setTimeout(function(){
            $(self).children('.modal').addClass('completed');
        },1000);

    });
    $('.main-container').on('click', '.close', function(){
        $('.modal').hide();
        $('.overlay').hide();
        $('.modal.complete').removeClass('complete').removeClass('completed');
    });
}

$(loadPage);