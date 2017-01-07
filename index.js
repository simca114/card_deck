$(document).ready(function () {
    var deck;
    $('#new').click(function () {
        var deckDiv = $('#deck_display');
        if (deck) {
            deckDiv.empty();
        }
        deck = new Deck();

        deck.getCards().forEach(function (card) {
            var imgSource = card.imgName();

            var img = $(document.createElement('img'));
            img.attr('src', "img/cards/" + imgSource);
            img.appendTo(deckDiv);
        });
    });
});
