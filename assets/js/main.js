$(function () {
    // Lets's start!!を押してスタート
    $('#btn_gamestart').on('click', function () {
        typingGame();
        $('#header').hide();
        $('#gamescreen').show();
    });

    // サイレント
    $('#btn_gamestart_silent').on('click', function () {
        document.cookie = 'BGM=0';
        document.cookie = 'SE=0';
        document.cookie = 'type=0';
        document.cookie = 'typeMiss=0';
        typingGame();
        $('#header').hide();
        $('#gamescreen').show();
    });
}); 