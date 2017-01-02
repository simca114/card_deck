var configs = new CardDefinition();

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

QUnit.test( "New card with given suit and value (invalid suit)", function (assert) {
    for (val = 1; val <= 13; val++) {
        var suit = "clovers";
        var value = val.toString();
        assert.ok(
            function () {
                try {
                    new Card(suit, val)
                } catch (e) {
                    return true;
                } finally {
                    return false;
                }
            },
            suit.concat(" is not a valid suit (value ", value, "), card creation failed")
        );
    }
    for (val = 1; val <= 13; val++) {
        var suit = "kites";
        var value = val.toString();
        assert.ok(
            function () {
                try {
                    new Card(suit, val)
                } catch (e) {
                    return true;
                } finally {
                    return false;
                }
            },
            suit.concat(" is not a valid suit (value ", value, "), card creation failed")
        );
    }
    for (val = 1; val <= 13; val++) {
        var suit = "pinenuts";
        var value = val.toString();
        assert.ok(
            function () {
                try {
                    new Card(suit, val)
                } catch (e) {
                    return true;
                } finally {
                    return false;
                }
            },
            suit.concat(" is not a valid suit (value ", value, "), card creation failed")
        );
    }
});
