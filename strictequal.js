function strictEquals(a, b) {
    if (a == b && typeof(a) == typeof(b)){
        return true
    }
    else { return false
    }

}

module.exports = strictEquals