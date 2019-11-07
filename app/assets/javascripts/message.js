$(function() {
  function buildHTML(message) {
      var insertImage = '';
      if (message.image.url) {
          insertImage = `<img src="${message.image.url}">`;
      }
      var html =
          `<div class="message" data-id="${message.id}">
            <div class="upper-message">
              <div class="upper-message__user-name">
                ${ message.user_name}
              </div>
              <div class="upper-message__date">
                ${ message.created_at}
              </div>
            </div>
            <div class="lower-meesage">
              <p class="lower-message__content">
                ${ message.content}
              </p>
              ${insertImage}
            </div>
          </div>`;
      return html;
  }
  function scroll_view() {
      $('.messages').animate({ scrollTop: $(".messages")[0].scrollHeight }, 800);
  }

  $('#new_message').on('submit', function (e) {
      e.preventDefault();
      var formData = new FormData(this);
      var url = $(this).attr("action");
      $.ajax({
          url: url,
          type: "POST",
          data: formData,
          dataType: 'json',
          processData: false,
          contentType: false
      })
      .done(function (data) {
          var html = buildHTML(data);
          $('.messages').append(html);
          scroll_view()
          $('#message_content').val("");
          $('.form__textfield').val('');
          $('.form__submit').prop('disabled', false);
      })
      .fail(function () {
          alert('メッセージ送信に失敗しました');
      });
  })
  
  var reloadMessages = function() {
       var last_message_id = $('.message:last').data('id');
       var href = 'api/messages'
        $.ajax({
        url: href,
        type: 'get',
        data: {id: last_message_id},
        dataType: 'json'
        })

    .done(function(messages) {
      var insertHTML = '';
      messages.forEach(function(message){
      insertHTML = buildHTML(message)                      
      $('.messages').append(insertHTML); 
      scroll_view();
      });                   
      
     })
       
      .fail(function(){
        alert('自動更新に失敗しました');
    });
  };
  setInterval(reloadMessages, 5000);
})