var configs = new CardDefinition();

/* TODO: explain what is being tested here and why
 *
 */
QUnit.test( "New card with given suit and value (All valid cards)", function (assert) {
    for (val = 1; val <= 13; val++) {
        var suit = "clubs";
        var value = val.toString();
        var newCard = new Card(suit, val);
        assert.ok( $.inArray(newCard.getSuit(), configs.getSuits()) != -1, suit.concat(" is a valid suit!") );
        assert.ok( $.inArray(newCard.getValue(), configs.getValues()) != -1, value.concat(" is a valid value!") );
    }
    for (val = 1; val <= 13; val++) {
        var suit = "diamonds";
        var value = val.toString();
        var newCard = new Card(suit, val);
        assert.ok( $.inArray(newCard.getSuit(), configs.getSuits()) != -1, suit.concat(" is a valid suit!") );
        assert.ok( $.inArray(newCard.getValue(), configs.getValues()) != -1, value.concat(" is a valid value!") );
    }
    for (val = 1; val <= 13; val++) {
        var suit = "hearts";
        var value = val.toString();
        var newCard = new Card(suit, val);
        assert.ok( $.inArray(newCard.getSuit(), configs.getSuits()) != -1, suit.concat(" is a valid suit!") );
        assert.ok( $.inArray(newCard.getValue(), configs.getValues()) != -1, value.concat(" is a valid value!") );
    }
    for (val = 1; val <= 13; val++) {
        var suit = "spades";
        var value = val.toString();
        var newCard = new Card(suit, val);
        assert.ok( $.inArray(newCard.getSuit(), configs.getSuits()) != -1, suit.concat(" is a valid suit!") );
        assert.ok( $.inArray(newCard.getValue(), configs.getValues()) != -1, value.concat(" is a valid value!") );
    }
});



/* TODO: explain what is being tested here and why
 *
 */
QUnit.test( "New card with given suit and value (valid value, invalid suit)", function (assert) {
    for (val = 1; val <= 13; val++) {
        var suit = "clovers";
        var value = val.toString();
        assert.throws(
            function () {
                new Card(suit, val)
            },
            CardException,
            suit.concat(" is not a valid suit (value ", value, "), CardException thrown")
        );
    }
    for (val = 1; val <= 13; val++) {
        var suit = "kites";
        var value = val.toString();
        assert.throws(
            function () {
                new Card(suit, val)
            },
            CardException,
            suit.concat(" is not a valid suit (value ", value, "), CardException thrown")
        );
    }
    for (val = 1; val <= 13; val++) {
        var suit = "pinenuts";
        var value = val.toString();
        assert.throws(
            function () {
                new Card(suit, val)
            },
            CardException,
            suit.concat(" is not a valid suit (value ", value, "), CardException thrown")
        );
    }
});

/* TODO: explain what is being tested here and why
 *
 */
QUnit.test( "New card with given suit and value (invalid value, valid suit)", function (assert) {
    configs.getSuits().forEach(function (suit) {
        console.log(suit);
        var val = 0;
        var value = val.toString();

        assert.ok(
            /*
            function () {
                try {
                    console.log("running test");
                    new Card(suit, 1);
                } catch (e) {
                    console.log("Exception");
                    return true;
                } finally {
                    console.log("NO Exception");
                    return false;
                }
            },
            */
            false,
            value.concat(" is not a valid value (suit ", suit, "), card creation failed")
        );
    });
});
