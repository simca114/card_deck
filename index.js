$(document).ready(function () {
    var deck;

    // refreshes the card images on the page with the current order of the deck
    var renderDeck = function (newDeck) {
        var deckDiv = $('#deck_display');
        deckDiv.empty();

        if (deck) {
            deck.getCards().forEach(function (card) {
                var imgSource = card.imgName();

                var img = $(document.createElement('img'));
                img.attr('src', "img/cards/" + imgSource);
                img.attr('height', 100);
                img.attr('width', 60);
                img.appendTo(deckDiv);
            });
        }
    }

    $('#new').click(function () {
        deck = new Deck();
        renderDeck(deck);
    });

    $('#sort').click(function () {
        deck.sort();
        renderDeck(deck);
    });

    $('#shuffle').click(function () {
        deck.shuffle();
        renderDeck(deck);
    });

    $('#delete').click(function () {
        deck = undefined;
        renderDeck(deck);
    });
});
