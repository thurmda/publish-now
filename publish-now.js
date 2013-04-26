(function(){

console.log('Publish Now extension active for this page');    

(
 function lookForThem(){
    var posts = $('div:not(.pubbed)[id^="outbox-post-"]');
    if(posts && posts.length > 0){
        posts.each(addPublishNow);
    }
    setTimeout(lookForThem, 300);
 }()
)

function addPublishNow(){
    var href = '/publisher_importer/push/' + this.id.substr(12);
    var link = $('<a href="'+href+'" target="_blank" class="action-publish">Publish</a>');
    link.click(publishConfirm);
    $(this).find('.stream-item-actions').append(link);
    $(this).addClass('pubbed');
}
function publishConfirm(e){
    if (!confirm("Are you sure you want to publish this?")) {
        e.preventDefault();
    }
}

 }())
