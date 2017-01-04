var configs = new CardDefinition();

/* TODO: explain what is being tested here and why
 *
 */
QUnit.test( "New card with given suit and value (All valid cards)", function (assert) {
    for (val = 1; val <= 13; val++) {
        var suit = "clubs";
        var value = val.toString();
        var newCard = new Card(suit, val);
        assert.ok(
            $.inArray(newCard.getSuit(), configs.getSuits()) != -1,
            suit + " is a valid suit!"
        );
        assert.ok(
            $.inArray(newCard.getValue(), configs.getValues()) != -1,
            value + " is a valid value!"
        );
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
                new Card(suit, val);
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
        var val = 0;
        var value = val.toString();

        assert.throws(
            function () {
                new Card(suit, val);
            },
            CardException,
            value.concat(" is not a valid value (suit ", suit, "), CardException thrown")
        );
    });
    configs.getSuits().forEach(function (suit) {
        var val = 14;
        var value = val.toString();

        assert.throws(
            function () {
                new Card(suit, val);
            },
            CardException,
            value.concat(" is not a valid value (suit ", suit, "), CardException thrown")
        );
    });
    configs.getSuits().forEach(function (suit) {
        var val = -1;
        var value = val.toString();

        assert.throws(
            function () {
                new Card(suit, val);
            },
            CardException,
            value.concat(" is not a valid value (suit ", suit, "), CardException thrown")
        );
    });
    configs.getSuits().forEach(function (suit) {
        var val = 100;
        var value = val.toString();

        assert.throws(
            function () {
                new Card(suit, val);
            },
            CardException,
            value.concat(" is not a valid value (suit ", suit, "), CardException thrown")
        );
    });
});

/* TODO: explain what is being tested here and why
 *
 */
QUnit.test( "New card with given suit and value (invalid types)", function (assert) {
    var validSuit = "hearts";
    var validValue = 1;
    var invalidSuitTypes = [null, true, 1, function () {}];
    var invalidValueTypes = [null, true, "string", function () {}];

    invalidSuitTypes.forEach(function (badSuitType) {
        assert.throws(
            function () {
                new Card(badSuitType, validValue);
            },
            CardException,
            "invalid suit type passed (" + typeof badSuitType + ", should be string), CardException thrown"
        );
    });
    invalidValueTypes.forEach(function (badValueType) {
        assert.throws(
            function () {
                new Card(validSuit, badValueType);
            },
            CardException,
            "invalid value type passed (" + typeof badValueType + ", should be number), CardException thrown"
        );
    });
});
