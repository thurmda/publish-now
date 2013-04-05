(function(){
function lookForIt(){
    var posts = $('div[id^="outbox-post-"]');
    if(posts && posts.length > 0){
        posts.each(addPublishNow);
    }else{
        setTimeout(lookForIt, 300);
    }
}
lookForIt();

function addPublishNow(){
    var href = '/ublisher_importer/push/' + this.id.substr(12);
    var link = $('<a href="'+href+'" target="_blank" class="action-publish">Publish</a>');
    link.click(publishConfirm);
    $(this).find('.stream-item-actions').append(link);
}
function publishConfirm(e){
    if (!confirm("Are you sure you want to publish this?")) {
        e.preventDefault();
    }
}

 }())
