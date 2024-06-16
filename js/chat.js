$(document).ready(function(){
    $('#openChat').click(function(){
        $('#chatPopup').toggle(); // Toggle the visibility of the chat pop-up
    });

    $('#closeChat').click(function(){
        $('#chatPopup').hide(); // Hide the chat pop-up when close button is clicked
    });

    $('#chat-form').submit(function(e){
        e.preventDefault();
        var message = $('#message').val();
        $('#message').val('');
        $.post('process.php', { message: message }, function(response){
            $('#chat-container').append('<p>' + response + '</p>');
            $('#chat-container').scrollTop($('#chat-container')[0].scrollHeight);
        });
    });

    function fetchMessages() {
        $.get('fetch.php', function(data){
            $('#chat-container').html(data);
        });
    }

    setInterval(fetchMessages, 1000); // Fetch messages every 1 second
});