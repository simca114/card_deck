var configs = new CardDefinition();

// Checking if we are able to create a new card with every valid suit and value
QUnit.test( "Create a new card with given suit and value (All valid cards), testing if card is created", function (assert) {
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
        var suit = "hearts";
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
        var suit = "spades";
        var value = val.toString();
        var newCard = new Card(suit, val);
        assert.ok( $.inArray(newCard.getSuit(), configs.getSuits()) != -1, suit.concat(" is a valid suit!") );
        assert.ok( $.inArray(newCard.getValue(), configs.getValues()) != -1, value.concat(" is a valid value!") );
    }
});

// Checking if trying to create a new card with a invalid suit throws an exception as expected
QUnit.test( "Create a new card with given suit and value (valid value, invalid suit), testing if exception is thrown", function (assert) {
    for (val = 1; val <= 13; val++) {
        var suit = "clovers";
        var value = val.toString();
        assert.throws(
            function () {
                new Card(suit, val)
            },
            CardInvalidArgException,
            suit + " is not a valid suit (value " + value + "), CardInvalidArgException thrown"
        );
    }
    for (val = 1; val <= 13; val++) {
        var suit = "kites";
        var value = val.toString();
        assert.throws(
            function () {
                new Card(suit, val)
            },
            CardInvalidArgException,
            suit + " is not a valid suit (value " + value + "), CardInvalidArgException thrown"
        );
    }
    for (val = 1; val <= 13; val++) {
        var suit = "pinenuts";
        var value = val.toString();
        assert.throws(
            function () {
                new Card(suit, val);
            },
            CardInvalidArgException,
            suit + " is not a valid suit (value " + value + "), CardInvalidArgException thrown"
        );
    }
});

// Checking if trying to create a new card with an invalid value throws an exception as expected
QUnit.test( "Create a new card with given suit and value (invalid value, valid suit), testing if exception is thrown", function (assert) {
    configs.getSuits().forEach(function (suit) {
        var val = 0;
        var value = val.toString();

        assert.throws(
            function () {
                new Card(suit, val);
            },
            CardInvalidArgException,
            value + " is not a valid value (suit " + suit + "), CardInvalidArgException thrown"
        );
    });
    configs.getSuits().forEach(function (suit) {
        var val = 14;
        var value = val.toString();

        assert.throws(
            function () {
                new Card(suit, val);
            },
            CardInvalidArgException,
            value + " is not a valid value (suit " + suit + "), CardInvalidArgException thrown"
        );
    });
    configs.getSuits().forEach(function (suit) {
        var val = -1;
        var value = val.toString();

        assert.throws(
            function () {
                new Card(suit, val);
            },
            CardInvalidArgException,
            value + " is not a valid value (suit " + suit + "), CardInvalidArgException thrown"
        );
    });
    configs.getSuits().forEach(function (suit) {
        var val = 100;
        var value = val.toString();

        assert.throws(
            function () {
                new Card(suit, val);
            },
            CardInvalidArgException,
            value + " is not a valid value (suit " + suit + "), CardInvalidArgException thrown"
        );
    });
});

// Checking if trying to create a new card with both a invalid suit and an invalid value throws an exception as expected
QUnit.test( "Create a new card with given suit and value (invalid types), testing if exception is thrown", function (assert) {
    var validSuit = "hearts";
    var validValue = 1;
    var invalidSuitTypes = [null, true, 1, function () {}];
    var invalidValueTypes = [null, true, "string", function () {}];

    invalidSuitTypes.forEach(function (badSuitType) {
        assert.throws(
            function () {
                new Card(badSuitType, validValue);
            },
            CardInvalidArgException,
            "invalid suit type passed (" + typeof badSuitType + ", should be string), CardInvalidArgException thrown"
        );
    });
    invalidValueTypes.forEach(function (badValueType) {
        assert.throws(
            function () {
                new Card(validSuit, badValueType);
            },
            CardInvalidArgException,
            "invalid value type passed (" + typeof badValueType + ", should be number), CardInvalidArgException thrown"
        );
    });
});

// Checking if trying to create a new card with the wrong number of arguements throws an exception as expected
QUnit.test( "Create a new card with missing/extra arguments, testing if exception is thrown", function (assert) {
    var validSuit = "hearts";
    var validValue = 1;

    assert.throws(
        function () {
            new Card(validSuit);
        },
        CardInvalidArgAmountException,
        "missing one or more arguments for creating a card, CardInvalidArgAmountException thrown"
    );
    assert.throws(
        function () {
            new Card(validValue);
        },
        CardInvalidArgAmountException,
        "missing one or more arguments for creating a card, CardInvalidArgAmountException thrown"
    );
    assert.throws(
        function () {
            new Card();
        },
        CardInvalidArgAmountException,
        "missing one or more arguments for creating a card, CardInvalidArgAmountException thrown"
    );
    assert.throws(
        function () {
            new Card(validSuit, validValue, "EXTRA");
        },
        CardInvalidArgAmountException,
        "one or more extra arguments for creating a card, CardInvalidArgAmountException thrown"
    );
});

// Checking if the Card.toString() works as expected for each valid card
QUnit.test( "Card.toString(), testing that expected name is returned for each valid card", function (assert) {
    configs.getSuits().forEach(function (suit) {
        for (val = 2; val < 11; val++) {
            var value = val.toString()
            var card = new Card(suit, val);
            assert.ok(
                card.toString() === value + " of " + suit,
                "Correct string for Card(" + suit + ", " + value + ")"
            );
        }

        var val = 1;
        var value = val.toString();
        var card = new Card(suit, val);
        assert.ok(
            card.toString() === "ace of " + suit,
            "Correct string for Card(" + suit + ", " + value + ")"
        );

        var val = 11;
        var value = val.toString();
        var card = new Card(suit, val);
        assert.ok(
            card.toString() === "jack of " + suit,
            "Correct string for Card(" + suit + ", " + value + ")"
        );

        var val = 12;
        var value = val.toString();
        var card = new Card(suit, val);
        assert.ok(
            card.toString() === "queen of " + suit,
            "Correct string for Card(" + suit + ", " + value + ")"
        );

        var val = 13;
        var value = val.toString();
        var card = new Card(suit, val);
        assert.ok(
            card.toString() === "king of " + suit,
            "Correct string for Card(" + suit + ", " + value + ")"
        );
    });
});

// Checking if Card.relativeValue() returns the excpected value for each valid card
QUnit.test( "Card.relativeValue(), testing all cards for accurate relative value", function (assert) {
    var counter = 1;
    configs.getSuits().forEach(function (suit) {
        for (val = 1; val <= 13; val++) {
            var card = new Card(suit, val);
            var value = val.toString();

            var result = card.relativeValue();
            assert.ok(
                result == counter,
                counter.toString() + " is the expected relative value for (" + suit + ", " + value + "), " + result.toString() + " returned"
            );
            counter++;
        }
    });
});
